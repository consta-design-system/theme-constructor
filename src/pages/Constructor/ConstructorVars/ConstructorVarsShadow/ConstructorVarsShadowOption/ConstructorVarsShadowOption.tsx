import './ConstructorVarsShadowOption.css';

import { TextField } from '@consta/uikit/TextField';
import { useAtom } from '@reatom/npm-react';
import React, { useEffect, useMemo } from 'react';
import { ReactMaskOpts, useIMask } from 'react-imask';

import { ShadowExample } from '##/components/ShadowExample';
import { VarField } from '##/components/VarField';
import {
  ShadowColorFabricResponse,
  ShadowParamsFabricResponse,
} from '##/modules/shadow/helper';
import { ShadowParams } from '##/types/theme';
import { cn } from '##/utils/bem';
import { convertSizeToNumber } from '##/utils/sizes';
import { createColor } from '##/utils/theme/colors';

import {
  hexMask,
  hexRegex,
  rgbMask,
  rgbRegex,
} from '../../ConstructorVarsColor/helper';
import { ConstructorVarsShadowParametrs } from '../ConstructorVarsShadowParametrs';
import { createShadow, percentToFloat } from './helper';

type Props = {
  title: string;
  description?: string;
  colorAtoms: ShadowColorFabricResponse;
  defaultHexColor: string;
  paramsAtoms: ShadowParamsFabricResponse;
};

const cnConstructorVarsShadowOption = cn('ConstructorVarsShadowOption');

export const ConstructorVarsShadowOption = (props: Props) => {
  const { title, description, colorAtoms, paramsAtoms, defaultHexColor } =
    props;

  // COLORS
  const [hexAtom, rgbAtom, alpha1Atom, alpha2Atom, baseAtom] = colorAtoms;

  const [hex, setHex] = useAtom(hexAtom);
  const [rgb, setRgb] = useAtom(rgbAtom);
  const [alpha1, setAlpha1] = useAtom(alpha1Atom);
  const [alpha2, setAlpha2] = useAtom(alpha2Atom);
  const [baseColor, setBaseColor] = useAtom(baseAtom);

  // PARAMS

  const [x1Atom, x2Atom, y1Atom, y2Atom, blur1Atom, blur2Atom, paramsAtom] =
    paramsAtoms;

  const [x1, setX1] = useAtom(x1Atom);
  const [x2, setX2] = useAtom(x2Atom);
  const [y1, setY1] = useAtom(y1Atom);
  const [y2, setY2] = useAtom(y2Atom);
  const [blur1, setBlur1] = useAtom(blur1Atom);
  const [blur2, setBlur2] = useAtom(blur2Atom);
  const [params, setParams] = useAtom(paramsAtom);

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

  const handleHexChange = (value: string | null) => {
    setHex(value);
    if (value && hexRegex.test(value)) {
      setBaseColor(
        createColor(value ?? defaultHexColor, [alpha1 ?? 1, alpha2 ?? 1]),
      );
    }
  };

  const handleRgbChange = (value: string | null) => {
    setRgb(value);
    if (value && rgbRegex.test(value)) {
      setBaseColor(
        createColor(value ?? defaultHexColor, [alpha1 ?? 1, alpha2 ?? 1]),
      );
    }
  };

  const {
    ref: hexRef,
    setValue: setInputHex,
    maskRef: maskRefHex,
  } = useIMask<HTMLInputElement, ReactMaskOpts>(hexMask);

  const {
    ref: rgbRef,
    setValue: setInputRgb,
    maskRef: maskRefRgb,
  } = useIMask<HTMLInputElement, ReactMaskOpts>(rgbMask);

  const handleChangeOpacity = (opacity: [string | null, string | null]) => {
    const [o1, o2] = [
      percentToFloat(opacity[0] ?? ''),
      percentToFloat(opacity[1] ?? ''),
    ];
    setAlpha1(o1);
    setAlpha2(o2);
    setBaseColor(createColor(hex ?? defaultHexColor, [o1, o2]));
  };

  const handleChangeParams =
    (key: keyof ShadowParams) => (value: [string | null, string | null]) => {
      const [val1, val2] = [
        convertSizeToNumber(value[0] ?? '', 'px'),
        convertSizeToNumber(value[1] ?? '', 'px'),
      ];
      if (key === 'x') {
        setX1(val1);
        setX2(val2);
      } else if (key === 'y') {
        setY1(val1);
        setY2(val2);
      } else {
        setBlur1(val1);
        setBlur2(val2);
      }
      setParams({
        ...params,
        [key]: [val1, val2],
      });
    };

  const values: {
    blur: [string | null, string | null];
    x: [string | null, string | null];
    y: [string | null, string | null];
  } = useMemo(() => {
    return {
      blur: [blur1 ? `${blur1}px` : null, blur2 ? `${blur2}px` : null],
      x: [x1 ? `${x1}px` : null, x2 ? `${x2}px` : null],
      y: [y1 ? `${y1}px` : null, y2 ? `${y2}px` : null],
    };
  }, [x1, x2, y1, y2, blur1, blur2]);

  const boxShadow = useMemo(
    () =>
      createShadow({
        ...params,
        color: baseColor,
      }),
    [baseColor, params],
  );

  const alpha: [string | null, string | null] = useMemo(
    () => [
      alpha1 ? `${alpha1 * 100}%` : null,
      alpha2 ? `${alpha2 * 100}%` : null,
    ],
    [alpha1, alpha2],
  );

  useEffect(() => {
    if (maskRefHex.current?.value !== hex) {
      setInputHex(hex || '');
    }
  }, [hex]);

  useEffect(() => {
    if (maskRefRgb.current?.value !== rgb) {
      setInputRgb(rgb || '');
    }
  }, [rgb]);

  return (
    <VarField
      title={title}
      description={description}
      controls={
        <div className={cnConstructorVarsShadowOption('Controls')}>
          <div className={cnConstructorVarsShadowOption('Inputs')}>
            <TextField
              defaultValue={hex}
              size="s"
              placeholder="#000000"
              inputRef={hexRef}
              onChange={handleHexChange}
            />
            <TextField
              defaultValue={rgb}
              size="s"
              placeholder="rgb(0, 0, 0)"
              inputRef={rgbRef}
              onChange={handleRgbChange}
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
            value={alpha}
            onChange={(opacity) => handleChangeOpacity(opacity)}
            additional={<ShadowExample boxShadow={boxShadow} />}
            maskOptions={maskPercent}
            names={['Слой 1', 'Слой 2']}
          />
          <ConstructorVarsShadowParametrs
            title="Радиус размытия"
            value={values.blur}
            onChange={handleChangeParams('blur')}
            maskOptions={maskPx}
            additional={<ShadowExample boxShadow={boxShadow} />}
            names={['Слой 1', 'Слой 2']}
          />
          <ConstructorVarsShadowParametrs
            title="Сдвиг по оси X"
            value={values.x}
            onChange={handleChangeParams('x')}
            maskOptions={maskPx}
            additional={<ShadowExample boxShadow={boxShadow} />}
            names={['Слой 1', 'Слой 2']}
          />
          <ConstructorVarsShadowParametrs
            title="Сдвиг по оси Y"
            value={values.y}
            onChange={handleChangeParams('y')}
            maskOptions={maskPx}
            additional={<ShadowExample boxShadow={boxShadow} />}
            names={['Слой 1', 'Слой 2']}
          />
        </div>
      }
    />
  );
};
