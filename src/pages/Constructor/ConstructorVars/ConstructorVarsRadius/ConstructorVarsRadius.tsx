import './ConstructorVarsRadius.css';

import { TextField } from '@consta/uikit/TextField';
import { useAtom } from '@reatom/npm-react';
import React from 'react';
import { ReactMaskOpts, useIMask } from 'react-imask';

import { VarField } from '##/components/VarField';
import { radiusAtom } from '##/modules/radius';
import { cn } from '##/utils/bem';
import { convertSizeToNumber } from '##/utils/sizes';

const cnConstructorVarsRadius = cn('ConstructorVarsRadius');

export const ConstructorVarsRadius = () => {
  const [radius, setRadius] = useAtom(radiusAtom);

  const { ref, setValue } = useIMask<HTMLInputElement, ReactMaskOpts>({
    mask: 'NUMpx',
    blocks: {
      NUM: {
        mask: Number,
        min: 0,
        radix: '.',
        mapToRadix: ['.', ','],
      },
    },
  });

  const handleChange = (value: string | null) => {
    setRadius(value ? convertSizeToNumber(value, 'px') : 4);
    setValue(value || '');
  };

  return (
    <VarField
      title="--control-radius"
      description="Основной радиус скругления контролов"
      onReset={() => handleChange('4px')}
      controls={
        <div className={cnConstructorVarsRadius('Controls')}>
          <TextField
            size="s"
            defaultValue={`${radius}px`}
            inputRef={ref}
            onChange={handleChange}
          />
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
