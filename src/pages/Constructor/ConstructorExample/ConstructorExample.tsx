import './ConstructorExample.css';

import { IconArrowUp } from '@consta/icons/IconArrowUp';
import { Button } from '@consta/uikit/Button';
import { cnMixSpace } from '@consta/uikit/MixSpace';
import { Text } from '@consta/uikit/Text';
import { Theme } from '@consta/uikit/Theme';
import { useComponentSize } from '@consta/uikit/useComponentSize';
import { useFlag } from '@consta/uikit/useFlag';
import React, { useEffect, useRef } from 'react';

import IconExample from '##/icons/Example.icon.svg';
import { cn } from '##/utils/bem';

import { ConstructorExampleAnalytic } from './ConstructorExampleAnalytic';
import { ConstructorExampleHeader } from './ConstructorExampleHeader';
import { ConstructorExampleInstaller } from './ConstructorExampleInstaller';
import { ConstructorExampleReport } from './ConstructorExampleReport';
import { useExampleTheme } from './useExampleTheme';

const cnConstructorExample = cn('ConstructorExample');

export const ConstructorExample: React.FC<{ className?: string }> = ({
  className,
}) => {
  const [sticky, setSticky] = useFlag();
  const ref = useRef<HTMLDivElement>(null);

  const { height } = useComponentSize(ref);

  const { css, preset } = useExampleTheme();

  useEffect(() => {
    const onScroll = (_e: Event) => {
      if (window.scrollY + window.innerHeight >= height) {
        setSticky.on();
      } else {
        setSticky.off();
      }
    };
    window.addEventListener('scroll', onScroll);
    return () => {
      window.removeEventListener('scroll', onScroll);
    };
  }, [height]);

  return (
    <>
      <style>{css}</style>
      <Theme
        ref={ref}
        preset={preset}
        className={cnConstructorExample({ sticky }, [className])}
        style={{ ['--constructor-example-height' as string]: `${height}px` }}
      >
        <ConstructorExampleHeader
          className={cnConstructorExample('Header', [
            cnMixSpace({ pT: 'xl', pB: 'l', pH: '3xl' }),
          ])}
        />
        <div
          className={cnConstructorExample('Wrapper', [
            cnMixSpace({ pT: '3xl', pB: '6xl', pH: '3xl' }),
          ])}
        >
          <ConstructorExampleAnalytic />
          <ConstructorExampleReport className={cnMixSpace({ mT: '3xl' })} />
          <ConstructorExampleInstaller className={cnMixSpace({ mT: '5xl' })} />
        </div>
        <div
          className={cnConstructorExample('Footer', [
            cnMixSpace({ pV: 'm', pH: '3xl' }),
          ])}
        >
          <Text
            className={cnConstructorExample('Text')}
            size="s"
            lineHeight="m"
            weight="bold"
          >
            <IconExample className={cnMixSpace({ mR: 'xs' })} />
            Петуниизатор 1.0
          </Text>
          <Text className={cnConstructorExample('Text')}>
            Наверх
            <Button
              className={cnMixSpace({ mL: 's' })}
              onClick={() =>
                window.scrollTo({ top: 0, left: 0, behavior: 'smooth' })
              }
              size="s"
              view="ghost"
              onlyIcon
              form="round"
              iconLeft={IconArrowUp}
            />
          </Text>
        </div>
      </Theme>
    </>
  );
};
