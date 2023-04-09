import './ConstructorVarsRadius.css';

import { TextField, useIMask } from '@consta/uikit/TextField';
import { useAction, useAtom } from '@reatom/npm-react';
import React, { useState } from 'react';

import { VarField } from '##/components/VarField';
import { radiusAtom } from '##/modules/radius';
import { cn } from '##/utils/bem';
import { convertSizeToNumber } from '##/utils/sizes';

const cnConstructorVarsRadius = cn('ConstructorVarsRadius');

export const ConstructorVarsRadius = () => {
  const [radius] = useAtom(radiusAtom);

  const [value, setValue] = useState<string | null>(`${radius}px`);

  const setRadius = useAction((ctx, value: number) => radiusAtom(ctx, value));

  const handleChange = (value: string | null) => {
    setRadius(value ? convertSizeToNumber(value, 'px') : 4);
    setValue(value);
  };

  const { inputRef } = useIMask({
    value,
    onChange: handleChange,
    maskOptions: {
      mask: 'NUMpx',
      blocks: {
        NUM: {
          mask: Number,
          min: 0,
          radix: '.',
          mapToRadix: ['.'],
        },
      },
    },
  });

  return (
    <VarField
      title="--control-radius"
      description="Основной радиус скругления контролов"
      onReset={() => handleChange('4px')}
      controls={
        <div className={cnConstructorVarsRadius('Controls')}>
          <TextField width="full" size="s" value={value} inputRef={inputRef} />
          <div className={cnConstructorVarsRadius('Example')}>
            <div
              className={cnConstructorVarsRadius('Block')}
              style={{
                ['--constructor-radius' as string]: `${radius}px`,
              }}
            />
          </div>
        </div>
      }
    />
  );
};
