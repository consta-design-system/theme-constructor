import './BannerButton.css';

import { IconComponent } from '@consta/icons/Icon';
import { cnMixSpace } from '@consta/uikit/MixSpace';
import { Text } from '@consta/uikit/Text';
import { useTheme } from '@consta/uikit/Theme';
import React from 'react';

import { cn } from '##/utils/bem';
import { forwardRefWithAs } from '##/utils/types/PropsWithAsAttributes';

import image from './BannerButtonBg.jpg';

export type Props = {
  label?: string;
  icon?: IconComponent;
  description?: string;
  onlyIcon?: boolean;
};

const cnBannerButton = cn('BannerButton');

export const BannerButton = forwardRefWithAs<Props, 'button'>((props, ref) => {
  const {
    label,
    icon,
    description,
    onlyIcon,
    className,
    as,
    style,
    ...otherProps
  } = props;

  const Tag = as as string;
  const Icon = icon;

  const theme = useTheme();

  return (
    <Tag
      title={onlyIcon ? label : undefined}
      {...otherProps}
      className={cnBannerButton({ onlyIcon }, [
        theme.themeClassNames.color.accent,
        cnMixSpace({ p: 'm' }),
        className,
      ])}
      style={{ ...style, backgroundImage: `url(${image})` }}
    >
      {onlyIcon ? (
        // eslint-disable-next-line react/jsx-no-useless-fragment
        <>{Icon && <Icon className={cnBannerButton('Icon')} />}</>
      ) : (
        <>
          <div
            className={cnBannerButton('Top', [
              description ? cnMixSpace({ mB: 'l' }) : undefined,
            ])}
          >
            {Icon && <Icon className={cnBannerButton('Icon')} />}
            <Text size="xs" lineHeight="m" className={cnBannerButton('Label')}>
              {label}
            </Text>
          </div>
          {description && (
            <Text
              size="xs"
              lineHeight="m"
              className={cnBannerButton('Description')}
            >
              {description}
            </Text>
          )}
        </>
      )}
    </Tag>
  );
});
