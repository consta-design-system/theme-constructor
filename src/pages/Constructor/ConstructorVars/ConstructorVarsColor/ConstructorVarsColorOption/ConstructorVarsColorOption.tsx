import './ConstructorVarsColorOption.css';

import { IconSettings } from '@consta/icons/IconSettings';
import { TextField, useIMask } from '@consta/uikit/TextField';
import { useTheme } from '@consta/uikit/Theme';
import { useDebounce } from '@consta/uikit/useDebounce';
import Color from 'color';
import React, { useEffect, useRef, useState } from 'react';

import { ColorExample } from '##/components/ColorExample';
import { VarField } from '##/components/VarField';
import { VarFieldList } from '##/components/VarField/VarFieldList';
import { cn } from '##/utils/bem';
import { hslToHslaStr, rgbToRgbaStr } from '##/utils/sizes';

import { hexMask, hslaMask, rgbaMask } from '../helper';
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

type ColorsVariants = {
  hsla: string;
  rgba: string;
  hex: string;
};

const convertColor = (str: string): ColorsVariants => {
  const color = Color(str).alpha(Color(str).object().alpha ?? 1);
  return {
    hsla: hslToHslaStr(color.hsl().string()),
    rgba: rgbToRgbaStr(color.rgb().string()),
    hex: color.hex(),
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
      const color = Color(value ?? defaultColor);
      setHsla(hslToHslaStr(color.hsl().string(), color.alpha()));
      setRgba(rgbToRgbaStr(color.rgb().string(), color.alpha()));
      onChange?.(rgbToRgbaStr(color.rgb().string(), color.alpha()));
      return;
    }
    onChange?.(defaultColor ?? '#000');
  };

  const handleRgbaChange = (value: string | null) => {
    setRgba(value);
    if (value) {
      const color = Color(value ?? defaultColor);
      setHex(color.hex());
      setHsla(hslToHslaStr(color.hsl().string(), color.alpha()));
      onChange?.(rgbToRgbaStr(color.rgb().string(), color.alpha()));
      return;
    }
    onChange?.(defaultColor ?? '#000');
  };

  const handleHslaChange = (value: string | null) => {
    setHsla(value);
    if (value) {
      const color = Color(value ?? defaultColor);
      setRgba(rgbToRgbaStr(color.rgb().string(), color.alpha()));
      setHex(color.hex());
      onChange?.(rgbToRgbaStr(color.rgb().string(), color.alpha()));
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
    maskOptions: hexMask,
  });

  const { inputRef: rgbaRef } = useIMask({
    value: rgba,
    onChange: handleRgbaChange,
    maskOptions: rgbaMask,
  });

  const { inputRef: hslaRef } = useIMask({
    value: hsla,
    onChange: handleHslaChange,
    maskOptions: hslaMask,
  });

  const onReset = () => {
    onChange?.(defaultColor ?? '#000000');
    const colors = convertColor(defaultColor ?? '#000000');
    setHex(colors.hex);
    setRgba(colors.rgba);
    setHsla(colors.hsla);
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
          <button
            type="button"
            style={{
              ['--constructor-example-color' as string]: value,
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
