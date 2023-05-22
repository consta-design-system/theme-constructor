import Color from 'color';

export const prependZeros = (str: string | number, len: number) => {
  return String(str).padStart(len, '0');
};

export const convertSizeToNumber = (value: string | number, format: string) => {
  return typeof value === 'number' ? value : Number(value.split(format[0])[0]);
};

export const hslToHslaStr = (str: string, opacity?: number) => {
  if (str.includes('hsla')) {
    return str;
  }
  const color = Color(str).hsl().array();
  return `hsla(${color[0]}, ${color[1]}%, ${color[2]}%, ${opacity ?? 1})`;
};

export const rgbToRgbaStr = (str: string, opacity?: number) => {
  if (str.includes('rgba')) {
    return str;
  }
  const color = Color(str).rgb().array();

  return `rgba(${color[0]}, ${color[1]}, ${color[2]}, ${opacity ?? 1})`;

export const createFixedHsl = (color: Color) => {
  return color
    .hue(Number(color.hue().toFixed(0)))
    .lightness(Number(color.lightness().toFixed(0)))
    .saturationl(Number(color.saturationl().toFixed(0)));
};
