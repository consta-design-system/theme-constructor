import './ConstructorFooter.css';

import { cnMixSpace } from '@consta/uikit/MixSpace';
import { Text } from '@consta/uikit/Text';
import React from 'react';

import IconConsta from '##/icons/Consta.colorIcon.svg';
import { cn } from '##/utils/bem';

const cnConstructorFooter = cn('ConstructorFooter');

export const ConstructorFooter: React.FC<{ className?: string }> = ({
  className,
}) => {
  return (
    <div
      className={cnConstructorFooter(null, [
        className,
        cnMixSpace({ pV: 's', pH: '2xl' }),
      ])}
    >
      <Text className={cnConstructorFooter('Label')} size="s" lineHeight="xs">
        <IconConsta />
        Открытая дизайн-система
      </Text>
      <Text
        view="link"
        as="a"
        size="s"
        target="_blank"
        href="https://github.com/consta-design-system/uikit/tree/dev/src/components/Theme"
        lineHeight="m"
      >
        Темы Consta на GitHub
      </Text>
    </div>
  );
};
