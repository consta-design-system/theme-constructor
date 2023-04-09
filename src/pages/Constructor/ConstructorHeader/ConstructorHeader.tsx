import './ConstructorHeader.css';

import { IconDownload } from '@consta/icons/IconDownload';
import { IconHamburger } from '@consta/icons/IconHamburger';
import { Button } from '@consta/uikit/Button';
import { ChoiceGroup } from '@consta/uikit/ChoiceGroup';
import { cnMixSpace } from '@consta/uikit/MixSpace';
import { ThemePreset } from '@consta/uikit/Theme';
import { useFlag } from '@consta/uikit/useFlag';
import { useAction, useAtom } from '@reatom/npm-react';
import React, { useRef } from 'react';

import { DownloadModal } from '##/components/DownloadModal';
import { Menu } from '##/components/Menu';
import { useConstructorPresets } from '##/hooks/useConstructorPresets';
import Logo from '##/images/Logo.image.svg';
import {
  getThemeIcon,
  getThemeLabel,
  themeAtom,
  themes,
} from '##/modules/theme';
import { cn } from '##/utils/bem';

const cnConstructorHeader = cn('ConstructorHeader');

export const ConstructorHeader: React.FC<{ className?: string }> = ({
  className,
}) => {
  const [showSaveModal, setShowSaveModal] = useFlag();
  const [showMenu, setShowMenu] = useFlag();

  const [theme] = useAtom(themeAtom);

  const inputRef = useRef<HTMLInputElement>(null);

  const { onUploadPresetFile } = useConstructorPresets();

  const setTheme = useAction((ctx, value: ThemePreset) =>
    themeAtom(ctx, value),
  );

  return (
    <div
      className={cnConstructorHeader(null, [
        cnMixSpace({ pT: '2xl', pH: 'm', pB: 'l' }),
        className,
      ])}
    >
      <input
        ref={inputRef}
        type="file"
        onChange={onUploadPresetFile}
        className={cnConstructorHeader('Input')}
        accept="application/JSON"
      />
      <div className={cnConstructorHeader('Top')}>
        <Button
          iconLeft={IconHamburger}
          onlyIcon
          form="round"
          size="s"
          onClick={setShowMenu.on}
          view="ghost"
        />
        <Logo className={cnConstructorHeader('Logo')} />
      </div>
      <div className={cnConstructorHeader('Controls')}>
        <ChoiceGroup
          items={themes}
          getItemLabel={getThemeLabel}
          getItemIcon={getThemeIcon}
          value={theme}
          onlyIcon
          onChange={({ value }) => setTheme(value)}
          size="s"
          name="theme-type"
        />
        <div className={cnConstructorHeader('Buttons')}>
          <Button
            onClick={() => inputRef.current?.click()}
            size="s"
            view="ghost"
            label="Импорт"
          />
          <Button
            size="s"
            iconLeft={IconDownload}
            onlyIcon
            onClick={setShowSaveModal.on}
          />
        </div>
      </div>
      <DownloadModal isOpen={showSaveModal} onClose={setShowSaveModal.off} />
      <Menu isOpen={showMenu} onClose={setShowMenu.off} />
    </div>
  );
};
