import { TextField } from '@consta/uikit/TextField';
import { useAtom } from '@reatom/npm-react';
import React, { useMemo } from 'react';
import { ReactMaskOpts, useIMask } from 'react-imask';

import { SpaceExample } from '##/components/SpaceExample';
import { VarField } from '##/components/VarField';
import { VarFieldList } from '##/components/VarField/VarFieldList';
import { spaceFactorAtom } from '##/modules/space';
import { Space } from '##/types/theme';
import { convertSizeToNumber } from '##/utils/sizes';
import { calculateSpaces } from '##/utils/theme/calculators';

export const ConstructorVarsSpace = () => {
  const [space, setSpace] = useAtom(spaceFactorAtom);

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
    setSpace(convertSizeToNumber(value ?? 2, 'px'));
    setValue(value || '');
  };

  return (
    <VarField
      title=".Theme_space_gpnDefault"
      controls={
        <TextField
          size="s"
          label="Отступы"
          leftSide="Умножить на"
          caption="Настройте множитель шага, чтобы увеличить или уменьшить отступы"
          placeholder="2px"
          inputRef={ref}
          defaultValue={space ? `${space}px` : '2px'}
          onChange={handleChange}
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
