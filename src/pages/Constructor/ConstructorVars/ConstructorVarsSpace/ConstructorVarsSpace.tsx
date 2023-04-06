import { TextField, useIMask } from '@consta/uikit/TextField';
import { useAction, useAtom } from '@reatom/npm-react';
import React, { useMemo, useState } from 'react';

import { SpaceExample } from '##/components/SpaceExample';
import { VarField } from '##/components/VarField';
import { VarFieldList } from '##/components/VarField/VarFieldList';
import { spaceFactorAtom } from '##/modules/space';
import { Space } from '##/types/theme';
import { convertSizeToNumber } from '##/utils/sizes';
import { calculateSpaces } from '##/utils/theme/calculators';

export const ConstructorVarsSpace = () => {
  const [space] = useAtom(spaceFactorAtom);

  const [value, setValue] = useState<string | null>(
    space ? `${space}px` : '2px',
  );

  const setSpaces = useAction((ctx, value: number) =>
    spaceFactorAtom(ctx, value),
  );

  const spaceItems = useMemo(() => {
    const spaces = calculateSpaces(space);
    return Object.keys(spaces).map((key) => {
      return {
        label: key,
        value: spaces[key as keyof Space],
      };
    });
  }, [space]);

  const handleChange = (value: string | null) => {
    setSpaces(convertSizeToNumber(value ?? 2, 'px'));
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
        },
      },
    },
  });

  return (
    <VarField
      title=".Theme_space_gpnDefault"
      controls={
        <TextField
          width="full"
          size="s"
          label="Отступы"
          leftSide="Умножить на"
          caption="Настройте множитель шага, чтобы увеличить или уменьшить отступы"
          placeholder="2px"
          value={value}
          inputRef={inputRef}
        />
      }
      onReset={() => handleChange('2px')}
      listComponent={
        <VarFieldList
          items={spaceItems}
          getItemRightSide={(item) => <SpaceExample gap={item.value ?? '0'} />}
        />
      }
    />
  );
};
