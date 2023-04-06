import { useAction, useAtom } from '@reatom/npm-react';
import React, { useCallback } from 'react';

import {
  shadowDarkColorsAtom,
  shadowLightColorsAtom,
  shadowOptionsAtom,
} from '##/modules/shadow';
import { themeAtom } from '##/modules/theme';
import { ShadowColors, ShadowParams } from '##/types/theme';

import { ConstructorVarsShadowOption } from './ConstructorVarsShadowOption';

export const ConstructorVarsShadow = () => {
  const [shadowLightColors] = useAtom(shadowLightColorsAtom);
  const [shadowDarkColors] = useAtom(shadowDarkColorsAtom);
  const [shadowOptions] = useAtom(shadowOptionsAtom);

  const [theme] = useAtom(themeAtom);

  const type = theme.color.primary === 'gpnDefault' ? 'default' : 'dark';

  const setShadowLightColors = useAction((ctx, value: ShadowColors) =>
    shadowLightColorsAtom(ctx, value),
  );
  const setShadowDarkColors = useAction((ctx, value: ShadowColors) =>
    shadowDarkColorsAtom(ctx, value),
  );
  const setShadowColors = useCallback(
    (value: ShadowColors) => {
      (type === 'default' ? setShadowLightColors : setShadowDarkColors)(value);
    },
    [type],
  );

  const setShadowOptions = useAction(
    (ctx, value: Record<keyof ShadowColors, ShadowParams>) =>
      shadowOptionsAtom(ctx, value),
  );

  const colors = type === 'default' ? shadowLightColors : shadowDarkColors;

  const handleChangeColor = (
    value: [string, string],
    key: keyof ShadowColors,
  ) => {
    setShadowColors({
      ...colors,
      [key]: value,
    });
  };

  const handleChangeParams = (value: ShadowParams, key: keyof ShadowColors) => {
    setShadowOptions({
      ...shadowOptions,
      [key]: value,
    });
  };

  return (
    <>
      <ConstructorVarsShadowOption
        title="--shadow-group"
        colors={colors['--shadow-group']}
        description={`Тень для выделения группы объектов на странице.\nИспользуется для карточек.`}
        params={shadowOptions['--shadow-group']}
        onChangeParams={(val) => handleChangeParams(val, '--shadow-group')}
        onChangeColor={(val) => handleChangeColor(val, '--shadow-group')}
      />
      <ConstructorVarsShadowOption
        title="--shadow-layer"
        colors={colors['--shadow-layer']}
        params={shadowOptions['--shadow-layer']}
        onChangeColor={(val) => handleChangeColor(val, '--shadow-layer')}
        onChangeParams={(val) => handleChangeParams(val, '--shadow-layer')}
        description={`Тень для выделения объектов на отдельный слой.\nИспользуется для летающих кнопок, боковых панелей, выпадающих списков и временно появляющихся элементов интерфейса.`}
      />
      <ConstructorVarsShadowOption
        title="--shadow-modal"
        colors={colors['--shadow-modal']}
        params={shadowOptions['--shadow-modal']}
        onChangeColor={(val) => handleChangeColor(val, '--shadow-modal')}
        onChangeParams={(val) => handleChangeParams(val, '--shadow-modal')}
        description="Тень для выделения отдельных режимов. Используется в модальных окнах и поповерах."
      />
    </>
  );
};
