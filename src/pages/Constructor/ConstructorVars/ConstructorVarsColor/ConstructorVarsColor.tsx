import { useAtom } from '@reatom/npm-react';
import Color from 'color';
import React from 'react';

import { darkColorFabricAtoms, lightColorFabricAtoms } from '##/modules/colors';
import { themeAtom } from '##/modules/theme';
import { ColorBase } from '##/types/theme';
import { colorBaseNames } from '##/utils/theme/colors';
import {
  defaultDarkColors,
  defaultLightColors,
} from '##/utils/theme/defaultValues';

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
  const [theme] = useAtom(themeAtom);

  const type = theme.color.primary === 'gpnDefault' ? 'default' : 'dark';

  const colors =
    type === 'default' ? lightColorFabricAtoms : darkColorFabricAtoms;

  const getItems = (
    key: keyof ColorBase,
    targetColor: string,
  ): ColorOption[] => {
    return getColorsArray(type)[key].map(({ label, description, color }) => {
      const currentColor = Color(color(targetColor));
      return {
        label,
        color: color(targetColor),
        groupId: getGroup(label),
        value: `H ${currentColor.hue()}  S ${Math.ceil(
          currentColor.saturationl(),
        )}%  L ${Math.ceil(currentColor.lightness())}%  A ${
          currentColor.alpha() * 100
        }%`,
        description,
      };
    });
  };

  return (
    <>
      {colors.map(({ name, atoms }) => (
        <ConstructorVarsColorOption
          title={name}
          key={`${name}-${type}`}
          atoms={atoms}
          description={colorBaseNames[name as keyof ColorBase]}
          getItems={(color) => getItems(name as keyof ColorBase, color)}
          defaultColor={
            (type === 'default' ? defaultLightColors : defaultDarkColors)[
              name as keyof ColorBase
            ]
          }
          groups={colorGroups}
        />
      ))}
    </>
  );
};

