import './ConstructorHeader.css';

import { IconDownload } from '@consta/icons/IconDownload';
import { IconHamburger } from '@consta/icons/IconHamburger';
import { Button } from '@consta/uikit/Button';
import { ChoiceGroup } from '@consta/uikit/ChoiceGroup';
import { cnMixSpace } from '@consta/uikit/MixSpace';
import { useFlag } from '@consta/uikit/useFlag';
import { useAtom } from '@reatom/npm-react';
import React from 'react';

import { DownloadModal } from '##/components/DownloadModal';
import { Menu } from '##/components/Menu';
import { SaveModal } from '##/components/SaveModal';
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
  const [showDownloadModal, setShowDownloadModal] = useFlag();
  const [showMenu, setShowMenu] = useFlag();

  const [theme, setTheme] = useAtom(themeAtom);

  return (
    <div
      className={cnConstructorHeader(null, [
        cnMixSpace({ pT: '2xl', pH: 'm', pB: 'l' }),
        className,
      ])}
    >
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
            onClick={setShowSaveModal.on}
            size="s"
            view="ghost"
            label="Сохранить"
          />
          <Button
            size="s"
            iconLeft={IconDownload}
            onlyIcon
            onClick={setShowDownloadModal.on}
          />
        </div>
      </div>
      <SaveModal isOpen={showSaveModal} onClose={setShowSaveModal.off} />
      <DownloadModal
        isOpen={showDownloadModal}
        onClose={setShowDownloadModal.off}
      />
      <Menu isOpen={showMenu} onClose={setShowMenu.off} />
    </div>
  );
};
