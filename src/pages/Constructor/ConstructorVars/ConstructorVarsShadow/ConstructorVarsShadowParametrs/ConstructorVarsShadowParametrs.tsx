import './ConstructorVarsShadowParametrs.css';

import { IconRevert } from '@consta/icons/IconRevert';
import { Button } from '@consta/uikit/Button';
import { cnMixSpace } from '@consta/uikit/MixSpace';
import { Text } from '@consta/uikit/Text';
import { TextField } from '@consta/uikit/TextField';
import React from 'react';
import { ReactMaskOpts, useIMask } from 'react-imask';

import { cn } from '##/utils/bem';

const cnConstructorVarsShadowParametrs = cn('ConstructorVarsShadowParametrs');

type Props = {
  title: string;
  names: [string, string];
  value: [string | null, string | null];
  onChange: (val: [string | null, string | null]) => void;
  onReset?: () => void;
  additional?: React.ReactNode;
  maskOptions: ReactMaskOpts;
};
export const ConstructorVarsShadowParametrs = (props: Props) => {
  const { title, names, value, onChange, onReset, additional, maskOptions } =
    props;

  const { ref: firstRef } = useIMask<HTMLInputElement, ReactMaskOpts>(
    maskOptions,
    { onAccept: (val) => onChange([val, value[1]]) },
  );

  const { ref: secondRef } = useIMask<HTMLInputElement, ReactMaskOpts>(
    maskOptions,
    { onAccept: (val) => onChange([value[0], val]) },
  );

  return (
    <div
      className={cnConstructorVarsShadowParametrs(null, [
        cnMixSpace({ pV: 'xl' }),
      ])}
    >
      <Text
        className={cnConstructorVarsShadowParametrs('Title', [
          cnMixSpace({ mB: 'm' }),
        ])}
        size="s"
        lineHeight="m"
        weight="semibold"
      >
        {title}
      </Text>
      <div className={cnConstructorVarsShadowParametrs('Content')}>
        <div className={cnConstructorVarsShadowParametrs('Controls')}>
          <div className={cnConstructorVarsShadowParametrs('Block')}>
            <Text size="s" lineHeight="m" view="ghost">
              {names[0]}
            </Text>
            <TextField inputRef={firstRef} defaultValue={value[0]} size="s" />
          </div>
          <div className={cnConstructorVarsShadowParametrs('Block')}>
            <Text size="s" lineHeight="m" view="ghost">
              {names[1]}
            </Text>
            <TextField inputRef={secondRef} defaultValue={value[1]} size="s" />
          </div>
        </div>
        {additional}
      </div>
      <button
        type="button"
        onClick={onReset}
        className={cnConstructorVarsShadowParametrs('Reset', [
          cnMixSpace({ mT: 'm' }),
        ])}
      >
        <Button
          onlyIcon
          as="div"
          iconLeft={IconRevert}
          form="round"
          view="ghost"
          size="s"
        />
        <Text size="s" lineHeight="m" view="secondary">
          Сбросить
        </Text>
      </button>
    </div>
  );
};
