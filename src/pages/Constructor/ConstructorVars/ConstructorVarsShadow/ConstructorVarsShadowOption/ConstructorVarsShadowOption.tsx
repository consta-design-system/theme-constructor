import './ConstructorVarsShadowOption.css';

import { TextField, useIMask } from '@consta/uikit/TextField';
import Color from 'color';
import IMask from 'imask';
import React, { useMemo, useState } from 'react';

import { ShadowExample } from '##/components/ShadowExample';
import { VarField } from '##/components/VarField';
import { ShadowParams } from '##/types/theme';
import { cn } from '##/utils/bem';
import { convertSizeToNumber } from '##/utils/sizes';

import { ConstructorVarsShadowParametrs } from '../ConstructorVarsShadowParametrs';
import { createColor, createShadow, percentToFloat } from './helper';

type Props = {
  title: string;
  description?: string;
  colors: [string, string];
  params: ShadowParams;
  onChangeParams: (value: ShadowParams) => void;
  onChangeColor: (value: [string, string]) => void;
};

const cnConstructorVarsShadowOption = cn('ConstructorVarsShadowOption');

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
    const color = Color(colors[0]);
    const rgb = color.rgb().string();
    const hex = color.hex();
    return [rgb, hex, color.alpha(), color.alpha()];
  }, [colors[0], colors[1]]);

  const [rgb, setRgb] = useState<string | null>(c1);
  const [hex, setHex] = useState<string | null>(c2);

  const handleColorChange = (value: string | null, type: 'rgb' | 'hex') => {
    const color = Color(value ?? '#000');
    (type === 'hex' ? setHex : setRgb)(value);
    if (type === 'rgb') {
      setRgb(value);
      setHex(color.hex());
    } else {
      setHex(value);
      setRgb(color.rgb().string());
    }
    onChangeColor(createColor(color.hex(), [o1, o2]));
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
