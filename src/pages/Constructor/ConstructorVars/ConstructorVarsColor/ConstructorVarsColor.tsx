import { useAction, useAtom } from '@reatom/npm-react';
import React, { useCallback } from 'react';

import { colorDarkAtom, colorLightAtom } from '##/modules/colors';
import { themeAtom } from '##/modules/theme';
import { ColorBase } from '##/types/theme';
import { colorBaseNames } from '##/utils/theme/colors';

import { ConstructorVarsColorOption } from './ConstructorVarsColorOption';
import { colorGroups, getColorsArray } from './helper';
import { ColorOption } from './types';

const getGroup = (key: string) => {
  if (key.includes('control')) {
    return 'control';
  }
  if (key.includes('typo')) {
    return 'font';
  }
  return 'bg';
};

export const ConstructorVarsColor = () => {
  const [lightColor] = useAtom(colorLightAtom);
  const [darkColor] = useAtom(colorDarkAtom);

  const [theme] = useAtom(themeAtom);

  const type = theme.color.primary === 'gpnDefault' ? 'default' : 'dark';

  const setLightColor = useAction((ctx, value: ColorBase) =>
    colorLightAtom(ctx, value),
  );
  const setDarkColor = useAction((ctx, value: ColorBase) =>
    colorDarkAtom(ctx, value),
  );

  const setColor = useCallback(
    (value: ColorBase) => {
      (type === 'default' ? setLightColor : setDarkColor)(value);
    },
    [type],
  );

  const colors = type === 'default' ? lightColor : darkColor;

  const getItems = (key: keyof ColorBase): ColorOption[] => {
    return getColorsArray(type)[key].map(({ label, description, color }) => {
      const [h, s, l, a] = color(colors[key])
        .split('(')[1]
        .split(')')[0]
        .split(',')
        .map((el) => Number(el.split('%')[0]));
      return {
        label,
        color: color(colors[key]),
        groupId: getGroup(label),
        value: `H ${h}  S ${Math.ceil(s)}%  L ${Math.ceil(l)}%  A ${a * 100}%`,
        description,
      };
    });
  };

  return (
    <>
      {Object.keys(lightColor).map((key) => (
        <ConstructorVarsColorOption
          title={key}
          key={`${key}-${type}`}
          value={colors[key as keyof ColorBase]}
          description={colorBaseNames[key as keyof ColorBase]}
          items={getItems(key as keyof ColorBase)}
          onChange={(value) => {
            setColor({ ...colors, [key as keyof ColorBase]: value });
          }}
          groups={colorGroups}
        />
      ))}
    </>
  );
};
