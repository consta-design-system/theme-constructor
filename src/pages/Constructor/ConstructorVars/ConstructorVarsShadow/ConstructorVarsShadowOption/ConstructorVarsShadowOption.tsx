import './ConstructorVarsShadowOption.css';

import { TextField, useIMask } from '@consta/uikit/TextField';
import IMask from 'imask';
import React, { useMemo, useState } from 'react';

import { ShadowExample } from '##/components/ShadowExample';
import { VarField } from '##/components/VarField';
import { ShadowParams } from '##/types/theme';
import { cn } from '##/utils/bem';
import {
  convertSizeToNumber,
  getHexString,
  getRgbString,
  hexToRgb,
  rgbaToHex,
  rgbaToRgb,
} from '##/utils/sizes';

import { ConstructorVarsShadowParametrs } from '../ConstructorVarsShadowParametrs';
import {
  createColor,
  createShadow,
  getColorOpacity,
  percentToFloat,
} from './helper';

type Props = {
  title: string;
  description?: string;
  colors: [string, string];
  params: ShadowParams;
  onChangeParams: (value: ShadowParams) => void;
  onChangeColor: (value: [string, string]) => void;
};

const cnConstructorVarsShadowOption = cn('ConstructorVarsShadowOption');

const hexToRgbString = (color: string) => {
  const [r, g, b] = hexToRgb(color);
  return getRgbString(r, g, b);
};

export const ConstructorVarsShadowOption = (props: Props) => {
  const { title, description, colors, params, onChangeColor, onChangeParams } =
    props;

  const maskPx = {
    mask: 'NUMpx',
    blocks: {
      NUM: {
        mask: Number,
        min: 0,
      },
    },
  };

  const maskPercent = {
    mask: 'NUM%',
    blocks: {
      NUM: {
        mask: Number,
        min: 0,
      },
    },
  };

  const [c1, c2, o1, o2] = useMemo(() => {
    const rgb = rgbaToRgb(colors[0]);
    const hex = rgbaToHex(colors[0]);
    return [
      getRgbString(rgb[0], rgb[1], rgb[2]),
      getHexString(hex[0], hex[1], hex[2]),
      getColorOpacity(colors[0]),
      getColorOpacity(colors[1]),
    ];
  }, [colors[0], colors[1]]);

  const [rgb, setRgb] = useState<string | null>(c1);
  const [hex, setHex] = useState<string | null>(c2);

  const handleColorChange = (value: string | null, type: 'rgb' | 'hex') => {
    const color =
      type === 'hex'
        ? hexToRgbString(value ?? '#000000')
        : value ?? 'rgb(0, 0, 0)';
    (type === 'hex' ? setHex : setRgb)(value);
    if (type === 'rgb') {
      const [a, b, c] = rgbaToHex(value ?? 'rgb(0, 0, 0)');
      setHex(getHexString(a, b, c));
    } else {
      setRgb(color);
    }
    onChangeColor(createColor(color, [o1, o2]));
  };

  const { inputRef: hexRef } = useIMask({
    value: hex,
    onChange: (value) => handleColorChange(value, 'hex'),
    maskOptions: {
      mask: '{#}HEXHEXHEXHEXHEXHEX',
      blocks: {
        HEX: {
          mask: IMask.MaskedEnum,
          enum: [
            '0',
            '1',
            '2',
            '3',
            '4',
            '5',
            '6',
            '7',
            '8',
            '9',
            'A',
            'B',
            'C',
            'D',
            'E',
            'F',
          ],
        },
      },
    },
  });

  const { inputRef: rgbRef } = useIMask({
    value: rgb,
    onChange: (value) => handleColorChange(value, 'rgb'),
    maskOptions: {
      mask: 'rgb(RGB, RGB, RGB)',
      blocks: {
        RGB: {
          mask: Number,
          min: 0,
          max: 255,
        },
      },
    },
  });

  const handleChangeOpacity = (opacity: [string | null, string | null]) => {
    onChangeColor(
      createColor(c1, [
        percentToFloat(opacity[0] ?? ''),
        percentToFloat(opacity[1] ?? ''),
      ]),
    );
  };

  const values: {
    blur: [string, string];
    x: [string, string];
    y: [string, string];
  } = useMemo(() => {
    return {
      blur: [`${params.blur[0]}px`, `${params.blur[1]}px`],
      x: [`${params.x[0]}px`, `${params.x[1]}px`],
      y: [`${params.y[0]}px`, `${params.y[1]}px`],
    };
  }, [params]);

  const boxShadow = useMemo(
    () =>
      createShadow({
        ...params,
        color: colors,
      }),
    [colors[0], colors[1], params],
  );

  return (
    <VarField
      title={title}
      description={description}
      controls={
        <div className={cnConstructorVarsShadowOption('Controls')}>
          <div className={cnConstructorVarsShadowOption('Inputs')}>
            <TextField
              value={hex}
              size="s"
              placeholder="#000000"
              inputRef={hexRef}
              width="full"
            />
            <TextField
              value={rgb}
              size="s"
              placeholder="rgb(0, 0, 0)"
              inputRef={rgbRef}
              width="full"
            />
          </div>
          <ShadowExample boxShadow={boxShadow} />
        </div>
      }
      listTitle="Дополнительные настройки"
      listComponent={
        <div className={cnConstructorVarsShadowOption('List')}>
          <ConstructorVarsShadowParametrs
            title="Прозрачность"
            value={[`${o1 * 100}%`, `${o2 * 100}%`]}
            onChange={(opacity) => handleChangeOpacity(opacity)}
            additional={<ShadowExample boxShadow={boxShadow} />}
            maskOptions={maskPercent}
            names={['Слой 1', 'Слой 2']}
          />
          <ConstructorVarsShadowParametrs
            title="Радиус размытия"
            value={values.blur}
            onChange={([b1, b2]) =>
              onChangeParams({
                ...params,
                blur: [
                  convertSizeToNumber(b1 ?? '0', 'px'),
                  convertSizeToNumber(b2 ?? '0', 'px'),
                ],
              })
            }
            maskOptions={maskPx}
            additional={<ShadowExample boxShadow={boxShadow} />}
            names={['Слой 1', 'Слой 2']}
          />
          <ConstructorVarsShadowParametrs
            title="Сдвиг по оси X"
            value={values.x}
            onChange={([x1, x2]) =>
              onChangeParams({
                ...params,
                x: [
                  convertSizeToNumber(x1 ?? '0', 'px'),
                  convertSizeToNumber(x2 ?? '0', 'px'),
                ],
              })
            }
            maskOptions={maskPx}
            additional={<ShadowExample boxShadow={boxShadow} />}
            names={['Слой 1', 'Слой 2']}
          />
          <ConstructorVarsShadowParametrs
            title="Сдвиг по оси Y"
            value={values.y}
            onChange={([y1, y2]) =>
              onChangeParams({
                ...params,
                y: [
                  convertSizeToNumber(y1 ?? '0', 'px'),
                  convertSizeToNumber(y2 ?? '0', 'px'),
                ],
              })
            }
            maskOptions={maskPx}
            additional={<ShadowExample boxShadow={boxShadow} />}
            names={['Слой 1', 'Слой 2']}
          />
        </div>
      }
    />
  );
};
