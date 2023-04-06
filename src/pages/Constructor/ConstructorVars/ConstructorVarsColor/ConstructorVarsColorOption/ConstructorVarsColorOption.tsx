import './ConstructorVarsColorOption.css';

import { IconSettings } from '@consta/icons/IconSettings';
import { TextField, useIMask } from '@consta/uikit/TextField';
import { useTheme } from '@consta/uikit/Theme';
import { useDebounce } from '@consta/uikit/useDebounce';
import IMask from 'imask';
import React, { useEffect, useRef, useState } from 'react';

import { ColorExample } from '##/components/ColorExample';
import { VarField } from '##/components/VarField';
import { VarFieldList } from '##/components/VarField/VarFieldList';
import { cn } from '##/utils/bem';
import {
  getHexString,
  getHslaString,
  getRgbaString,
  hexToHSLA,
  hexToRgb,
  hexToRgba,
  hslaToRgba,
  rgbaToHex,
  rgbaToHSLA,
} from '##/utils/sizes';

import { ColorOption } from '../types';

const cnConstructtorVarsColorOption = cn('ConstructorVarsColorOption');

type Props = {
  value?: string;
  onChange?: (value: string) => void;
  items?: ColorOption[];
  title: string;
  description?: string;
  groups?: Array<{ id: string; label: string }>;
};

const convertColor = (color: string) => {
  const [h, s, l, a] = color.includes('#')
    ? hexToHSLA(color)
    : rgbaToHSLA(color);
  const rgb = hexToRgba(color);
  const hex = rgbaToHex(color);
  return {
    hsla: `hsla(${h}, ${s}%, ${l}%, ${a / 100})`,
    rgba: color.includes('#')
      ? getRgbaString(rgb[0], rgb[1], rgb[2], a)
      : color,
    hex: color.includes('#') ? color : getHexString(hex[0], hex[1], hex[2]),
  };
};

export const ConstructorVarsColorOption = (props: Props) => {
  const { title, description, value, onChange, items, groups } = props;

  const { themeClassNames } = useTheme();

  const vals = convertColor(value ?? '#000000');

  const [hex, setHex] = useState<string | null>(value ? vals.hex : null);
  const [rgba, setRgba] = useState<string | null>(value ? vals.rgba : null);
  const [hsla, setHsla] = useState<string | null>(value ? vals.hsla : null);
  const [defaultColor, setDefaultColor] = useState<string | undefined>();

  const [pickerValue, setPickerValue] = useState(value ? vals.hex : null);

  const colorPickerRef = useRef<HTMLInputElement>(null);

  const handleHexChange = (value: string | null) => {
    setHex(value);
    if (value) {
      const [r = 0, g = 0, b = 0] = hexToRgb(value);
      const alpha = Number(rgba?.split(')')[0].split(',')[3]);
      const val = getRgbaString(r, g, b, alpha);
      const [h = 0, s = 0, l = 0, a = 1] = rgbaToHSLA(val);
      setHsla(getHslaString(h, s, l, a));
      setRgba(val);
      onChange?.(getRgbaString(r, g, b, alpha));
      return;
    }
    onChange?.(defaultColor ?? '#000');
  };

  const handleRgbaChange = (value: string | null) => {
    setRgba(value);
    if (value) {
      const hex = rgbaToHex(value);
      const [h = 0, s = 0, l = 0, a = 1] = rgbaToHSLA(value);
      setHex(getHexString(hex[0] ?? 0, hex[1] ?? 0, hex[2] ?? 0));
      setHsla(getHslaString(h, s, l, a));
      onChange?.(value);
      return;
    }
    onChange?.(defaultColor ?? '#000');
  };

  const handleHslaChange = (value: string | null) => {
    setHsla(value);
    if (value) {
      const [r = 0, g = 0, b = 0, a = 1] = hslaToRgba(value);
      const val = getRgbaString(r, g, b, a);
      const hex = rgbaToHex(value);
      setRgba(val);
      setHex(getHexString(hex[0] ?? 0, hex[1] ?? 0, hex[2] ?? 0));
      onChange?.(val);
      return;
    }
    onChange?.(defaultColor ?? '#000');
  };

  const debounceSetPickerValue = useDebounce(handleHexChange, 500);

  useEffect(() => {
    debounceSetPickerValue(pickerValue);
  }, [pickerValue]);

  useEffect(() => {
    if (pickerValue) {
      debounceSetPickerValue(pickerValue);
    }
  }, [pickerValue]);

  const { inputRef: hexRef } = useIMask({
    value: hex,
    onChange: handleHexChange,
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

  const { inputRef: rgbaRef } = useIMask({
    value: rgba,
    onChange: handleRgbaChange,
    maskOptions: {
      mask: 'rgba(RGB, RGB, RGB, ALPHA)',
      blocks: {
        RGB: {
          mask: Number,
          min: 0,
          max: 255,
        },
        ALPHA: {
          mask: Number,
          min: 0,
          max: 1,
          radix: '.',
          mapToRadix: ['.'],
        },
      },
    },
  });

  const { inputRef: hslaRef } = useIMask({
    value: hsla,
    onChange: handleHslaChange,
    maskOptions: {
      mask: 'hsla(RAD, PERC%,PERC%, ALPHA)',
      blocks: {
        RAD: {
          mask: Number,
          min: 0,
          max: 360,
          radix: '.',
          mapToRadix: ['.'],
        },
        PERC: {
          mask: Number,
          min: 0,
          max: 100,
          radix: '.',
          mapToRadix: ['.'],
        },
        ALPHA: {
          mask: Number,
          min: 0,
          max: 1,
          radix: '.',
          mapToRadix: ['.'],
        },
      },
    },
  });

  const onReset = () => {
    onChange?.(defaultColor ?? '#000000');
  };

  useEffect(() => {
    if (value && !defaultColor) {
      setDefaultColor(value);
    }
  }, [value]);

  return (
    <VarField
      onReset={onReset}
      title={title}
      description={description}
      controls={
        <div className={cnConstructtorVarsColorOption('Controls')}>
          <div className={cnConstructtorVarsColorOption('Inputs')}>
            <TextField
              value={hex}
              size="s"
              placeholder="#000000"
              inputRef={hexRef}
            />
            <TextField
              value={rgba}
              size="s"
              placeholder="rgba(0, 0, 0, 0)"
              inputRef={rgbaRef}
            />
            <TextField
              value={hsla}
              size="s"
              placeholder="hsla(0, 0%, 0%, 0)"
              inputRef={hslaRef}
            />
          </div>
          <div
            style={{
              ['--constructor-example-color' as string]: value,
            }}
            className={cnConstructtorVarsColorOption('Example')}
          >
            <button
              type="button"
              onClick={() => colorPickerRef.current?.click()}
              className={cnConstructtorVarsColorOption('Button', [
                themeClassNames.color.invert,
              ])}
            >
              <IconSettings size="xs" view="ghost" />
            </button>
            <input
              type="color"
              value={pickerValue ?? undefined}
              ref={colorPickerRef}
              onChange={(e) => setPickerValue(e.target.value.toUpperCase())}
              className={cnConstructtorVarsColorOption('ColorPicker')}
            />
          </div>
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
