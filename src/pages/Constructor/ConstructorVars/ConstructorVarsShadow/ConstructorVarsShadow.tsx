import { useAtom } from '@reatom/npm-react';
import Color from 'color';
import React, { useMemo } from 'react';

import {
  shadowDarkColorFabricAtoms,
  shadowLightColorFabricAtoms,
  shadowParamsFabricAtoms,
} from '##/modules/shadow';
import { ShadowParamsFabricResponse } from '##/modules/shadow/helper';
import { themeAtom } from '##/modules/theme';
import { ShadowColors } from '##/types/theme';
import {
  defaultShadowDarkColors,
  defaultShadowLightColors,
} from '##/utils/theme/defaultValues';

import { ConstructorVarsShadowOption } from './ConstructorVarsShadowOption';

const descriptionMap: Record<keyof ShadowColors, string> = {
  '--shadow-group':
    'Тень для выделения группы объектов на странице.\nИспользуется для карточек.',
  '--shadow-layer':
    'Тень для выделения объектов на отдельный слой.\nИспользуется для летающих кнопок, боковых панелей, выпадающих списков и временно появляющихся элементов интерфейса.',
  '--shadow-modal':
    'Тень для выделения отдельных режимов. Используется в модальных окнах и поповерах.',
};

export const ConstructorVarsShadow = () => {
  const [shadowOptions] = useAtom(shadowParamsFabricAtoms);

  const [theme] = useAtom(themeAtom);

  const type = theme.color.primary === 'gpnDefault' ? 'default' : 'dark';

  const colors =
    type === 'default'
      ? shadowLightColorFabricAtoms
      : shadowDarkColorFabricAtoms;

  const options = useMemo(() => {
    return colors.map(({ name, atoms: colorAtoms }) => {
      const color = Color(
        (type === 'default'
          ? defaultShadowLightColors
          : defaultShadowDarkColors)[name][0],
      ).hex();
      return {
        name,
        colorAtoms,
        defaultHexColor: color,
        paramsAtoms: (
          shadowOptions.find((el) => el.name === name) as {
            name: keyof ShadowColors;
            atoms: ShadowParamsFabricResponse;
          }
        ).atoms,
      };
    });
  }, [colors, shadowOptions]);

  return (
    <>
      {options.map(({ name, colorAtoms, paramsAtoms, defaultHexColor }) => (
        <ConstructorVarsShadowOption
          title={name}
          key={`${name}-${type}`}
          colorAtoms={colorAtoms}
          description={descriptionMap[name]}
          paramsAtoms={paramsAtoms}
          defaultHexColor={defaultHexColor}
        />
      ))}
    </>
  );
};
