export const prependZeros = (str: string | number, len: number) => {
  return String(str).padStart(len, '0');
};

export const convertSizeToNumber = (value: string | number, format: string) => {
  return typeof value === 'number' ? value : Number(value.split(format[0])[0]);
};

export const getRgbString = (r: number, g: number, b: number) =>
  `rgb(${r}, ${g}, ${b})`;

export const getRgbaString = (r: number, g: number, b: number, a: number) =>
  `rgba(${r}, ${g}, ${b}, ${a > 100 ? a / 100 : a})`;

export const getHexString = (
  a: number | string,
  b: number | string,
  c: number | string,
) => {
  return `#${[a, b, c]
    .map((el) =>
      typeof el === 'string'
        ? el
        : prependZeros(Number(el).toString(16), 2).toUpperCase(),
    )
    .join('')}`;
};

export const getHslaString = (h: number, s: number, l: number, a: number) =>
  `hsla(${h}, ${s}%, ${l}%, ${a > 100 ? a / 100 : a})`;

export const rgbaToHex = (str: string) => {
  const vals = (str.includes('(') ? str.split('(')[1] : str).split(')')[0];
  const nums = vals
    .split(',')
    .map((el) => prependZeros(Number(el).toString(16), 2).toUpperCase());
  return [nums[0], nums[1], nums[2]];
};

export const rgbaToRgb = (str: string) => {
  const vals = (str.includes('(') ? str.split('(')[1] : str).split(')')[0];
  const nums = vals.split(',').map((el) => Number(el));
  return nums;
};

export const hexToRgb = (str: string) => {
  const splited = str.split('#')[1];
  if (!splited) return [0, 0, 0];
  const count = Math.ceil(splited.length / 3);
  return Array.from({ length: 3 }).map((_e, index) => {
    const val = splited.slice(index * count, index * count + count);
    return parseInt(val && val !== '' ? val : '0', 16);
  });
};

export const rgbToRgba = (rgb: string, opacity?: number) => {
  const vals = (rgb.includes('(') ? rgb.split('(')[1] : rgb).split(')')[0];
  const nums = vals.split(',');
  return [Number(nums[0]), Number(nums[1]), Number(nums[2]), opacity ?? 1];
};

export const hexToHSLA = (hex: string) => {
  const rgb = hexToRgb(hex);
  const [r = 0, g = 0, b = 0, a = 1] = rgbToRgba(
    getRgbString(rgb[0], rgb[1], rgb[2]),
    1,
  );
  return rgbaToHSLA(getRgbaString(r, g, b, a));
};

export const hexToRgba = (hex: string, opacity?: number) => {
  const [r = 0, g = 0, b = 0] = hexToRgb(hex);
  return [r, g, b, opacity ?? 1];
};

export const rgbaToHSLA = (rgba: string) => {
  const [rstr, gstr, bstr, astr] = rgba.split('(')[1].split(')')[0].split(',');
  const r = Number(rstr) / 255;
  const g = Number(gstr) / 255;
  const b = Number(bstr) / 255;
  const l = Math.max(r, g, b);
  const s = l - Math.min(r, g, b);

  const getHue = () => {
    if (s) {
      if (l === r) {
        return (g - b) / s;
      }
      if (l === g) {
        return 2 + (b - r) / s;
      }
      return 4 + (r - g) / s;
    }
    return 0;
  };

  const h = getHue();

  const getSaturation = () => {
    if (s) {
      if (l <= 0.5) {
        return s / (2 * l - s);
      }
      return s / (2 - (2 * l - s));
    }
    return 0;
  };

  return [
    60 * h < 0 ? 60 * h + 360 : 60 * h,
    100 * getSaturation(),
    (100 * (2 * l - s)) / 2,
    Number(astr) * 100,
  ];
};

export const hslaToRgba = (hsla: string) => {
  const [h = 0, s = 0, l = 0, a = 0] = hsla
    .split('(')[1]
    .split(')')[0]
    .split(',')
    .map((el) => Number(el.split('%')[0]));

  const saturation = s / 100;
  const lightness = l / 100;
  const alpha = saturation * Math.min(lightness, 1 - lightness);

  const getVar = (n: number) => (n + h / 30) % 12;

  const getNum = (n: number) => {
    return (
      lightness -
      alpha * Math.max(-1, Math.min(getVar(n) - 3, Math.min(9 - getVar(n), 1)))
    );
  };

  return [255 * getNum(0), 255 * getNum(8), 255 * getNum(4), a];
};
