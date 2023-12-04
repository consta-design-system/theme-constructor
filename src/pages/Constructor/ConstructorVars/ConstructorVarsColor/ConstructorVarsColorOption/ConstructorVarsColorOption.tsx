import './ConstructorVarsColorOption.css';

import { IconSettings } from '@consta/icons/IconSettings';
import { TextField } from '@consta/uikit/TextField';
import { useTheme } from '@consta/uikit/Theme';
import { useDebounce } from '@consta/uikit/useDebounce';
import { useAtom } from '@reatom/npm-react';
import Color from 'color';
import IMask from 'imask';
import React, { useEffect, useMemo, useRef, useState } from 'react';
import { ReactMaskOpts, useIMask } from 'react-imask';

import { ColorExample } from '##/components/ColorExample';
import { VarField } from '##/components/VarField';
import { VarFieldList } from '##/components/VarField/VarFieldList';
import { ColorFabricResponse } from '##/modules/colors/helpers';
import { cn } from '##/utils/bem';
import { createFixedHsl, hslToHslaStr, rgbToRgbaStr } from '##/utils/sizes';

import {
  hexMask,
  hexRegex,
  hslaMask,
  hslaRegex,
  rgbaMask,
  rgbaRegex,
} from '../helper';
import { ColorOption } from '../types';

const cnConstructtorVarsColorOption = cn('ConstructorVarsColorOption');

type Props = {
  getItems?: (color: string) => ColorOption[];
  title: string;
  description?: string;
  atoms: ColorFabricResponse;
  defaultColor: string;
  groups?: Array<{ id: string; label: string }>;
};

type ColorsVariants = {
  hsla: string;
  rgba: string;
  hex: string;
};

const convertColor = (str: string): ColorsVariants => {
  const color = Color(str).alpha(Color(str).object().alpha ?? 1);
  return {
    hsla: hslToHslaStr(createFixedHsl(color).hsl().string()),
    rgba: rgbToRgbaStr(color.rgb().string()),
    hex: color.hex(),
  };
};

export const ConstructorVarsColorOption = (props: Props) => {
  const { title, description, getItems, groups, atoms, defaultColor } = props;

  const [hexAtom, rgbaAtom, hslaAtom, baseAtom] = atoms;

  const { themeClassNames } = useTheme();

  const [hex, setHex] = useAtom(hexAtom);
  const [rgba, setRgba] = useAtom(rgbaAtom);
  const [hsla, setHsla] = useAtom(hslaAtom);
  const [baseColor, setBaseColor] = useAtom(baseAtom);

  const [pickerValue, setPickerValue] = useState(hex);

  const colorPickerRef = useRef<HTMLInputElement>(null);

  const handleHexChange = (value: string | null) => {
    setHex(value);
    if (value && hexRegex.test(value)) {
      setBaseColor(value);
    }
  };

  const handleRgbaChange = (value: string | null) => {
    setRgba(value);
    if (value && rgbaRegex.test(value)) {
      setBaseColor(IMask.pipe(value, rgbaMask));
    }
  };

  const handleHslaChange = (value: string | null) => {
    setHsla(value);
    if (value && hslaRegex.test(value)) {
      setBaseColor(value);
    }
  };

  const debounceSetPickerValue = useDebounce(handleHexChange, 500);

  useEffect(() => {
    if (pickerValue) {
      debounceSetPickerValue(pickerValue);
    }
  }, [pickerValue]);

  const {
    ref: hexRef,
    setValue: setInputHex,
    maskRef: maskRefHex,
  } = useIMask<HTMLInputElement, ReactMaskOpts>(hexMask);

  const {
    ref: rgbaRef,
    setValue: setInputRgba,
    maskRef: maskRefRgba,
  } = useIMask<HTMLInputElement, ReactMaskOpts>(rgbaMask);

  const {
    ref: hslaRef,
    setValue: setInputHsla,
    maskRef: maskRefHsla,
  } = useIMask<HTMLInputElement, ReactMaskOpts>(hslaMask);

  const onReset = () => {
    const colors = convertColor(defaultColor);
    setHex(colors.hex);
    setRgba(colors.rgba);
    setHsla(colors.hsla);
  };

  const items = useMemo(() => getItems?.(baseColor), [baseColor]);

  useEffect(() => {
    if (maskRefHex.current?.value !== hex) {
      setInputHex(hex || '');
    }
  }, [hex]);

  useEffect(() => {
    if (maskRefRgba.current?.value !== rgba) {
      setInputRgba(rgba || '');
    }
  }, [rgba]);

  useEffect(() => {
    if (maskRefHsla.current?.value !== hsla) {
      setInputHsla(hsla || '');
    }
  }, [hsla]);

  return (
    <VarField
      onReset={onReset}
      title={title}
      description={description}
      controls={
        <div className={cnConstructtorVarsColorOption('Controls')}>
          <div className={cnConstructtorVarsColorOption('Inputs')}>
            <TextField
              defaultValue={hex}
              size="s"
              placeholder="#000000"
              inputRef={hexRef}
              onChange={handleHexChange}
            />
            <TextField
              defaultValue={rgba}
              size="s"
              placeholder="rgba(0, 0, 0, 0)"
              inputRef={rgbaRef}
              onChange={handleRgbaChange}
            />
            <TextField
              defaultValue={hsla}
              size="s"
              placeholder="hsla(0, 0%, 0%, 0)"
              inputRef={hslaRef}
              onChange={handleHslaChange}
            />
          </div>
          <button
            type="button"
            style={{
              ['--constructor-example-color' as string]: baseColor,
            }}
            onClick={() => colorPickerRef.current?.click()}
            className={cnConstructtorVarsColorOption('Example')}
          >
            <div
              className={cnConstructtorVarsColorOption('Button', [
                themeClassNames.color.invert,
              ])}
            >
              <IconSettings size="xs" view="ghost" />
            </div>
            <input
              type="color"
              value={pickerValue ?? undefined}
              ref={colorPickerRef}
              onChange={(e) => setPickerValue(e.target.value.toUpperCase())}
              className={cnConstructtorVarsColorOption('ColorPicker')}
            />
          </button>
        </div>
      }
      listComponent={
        items ? (
          <VarFieldList
            getItemRightSide={(item) => <ColorExample color={item.color} />}
            items={items}
            groups={groups}
          />
        ) : null
      }
    />
  );
};
