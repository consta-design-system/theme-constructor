import './ConstructorVarsShadowParametrs.css';

import { IconRevert } from '@consta/icons/IconRevert';
import { Button } from '@consta/uikit/Button';
import { cnMixSpace } from '@consta/uikit/MixSpace';
import { Text } from '@consta/uikit/Text';
import { TextField, useIMask } from '@consta/uikit/TextField';
import React from 'react';

import { cn } from '##/utils/bem';

const cnConstructorVarsShadowParametrs = cn('ConstructorVarsShadowParametrs');

type Props = {
  title: string;
  names: [string, string];
  value: [string | null, string | null];
  onChange: (val: [string | null, string | null]) => void;
  onReset?: () => void;
  additional?: React.ReactNode;
  maskOptions: Parameters<typeof useIMask>[0]['maskOptions'];
};
export const ConstructorVarsShadowParametrs = (props: Props) => {
  const { title, names, value, onChange, onReset, additional, maskOptions } =
    props;

  const { inputRef: firstRef } = useIMask({
    value: value[0],
    onChange: (val) => onChange([val, value[1]]),
    maskOptions,
  });

  const { inputRef: secondRef } = useIMask({
    value: value[1],
    onChange: (val) => onChange([value[0], val]),
    maskOptions,
  });

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
            <TextField inputRef={firstRef} value={value[0]} size="s" />
          </div>
          <div className={cnConstructorVarsShadowParametrs('Block')}>
            <Text size="s" lineHeight="m" view="ghost">
              {names[1]}
            </Text>
            <TextField inputRef={secondRef} value={value[1]} size="s" />
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
