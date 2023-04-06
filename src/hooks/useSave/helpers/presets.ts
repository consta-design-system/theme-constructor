import { getThemeFileName } from '.';
import { toCapitalize } from './transliter';

const getPresetPath = (
  presetName: string,
  format: 'css' | 'json',
  type: 'color' | 'control' | 'font' | 'size' | 'space' | 'shadow',
  mode?: 'default' | 'dark',
) =>
  `../_${type}/Theme_${type}_${presetName}${
    type === 'color' && mode ? mode.charAt(0).toUpperCase() + mode.slice(1) : ''
  }.${format}`;

export const getPresetTsCode = (
  presetName: string,
  format: 'css' | 'json',
  mode: 'default' | 'dark',
) => {
  const paths = [
    '../Theme.css',
    getPresetPath(presetName, format, 'color', 'default'),
    getPresetPath(presetName, format, 'color', 'dark'),
    getPresetPath(presetName, format, 'control'),
    getPresetPath(presetName, format, 'font'),
    getPresetPath(presetName, format, 'size'),
    getPresetPath(presetName, format, 'space'),
    getPresetPath(presetName, format, 'shadow'),
  ];
  const invertMode = mode === 'default' ? 'dark' : 'default';
  return `${paths
    .map((path) => `import '${path}';`)
    .join(
      '\n',
    )}\n\nimport { ThemePreset } from '@consta/uikit/Theme';\n\nexport const ${getThemeFileName(
    presetName,
    'preset',
    mode,
  )}: ThemePreset = {\n\tcolor: {\n\t\tprimary: '${presetName}${toCapitalize(
    mode,
  )}',\n\t\taccent: '${presetName}${toCapitalize(
    mode,
  )}',\n\t\tinvert: '${presetName}${toCapitalize(invertMode)}',
        },\n\tcontrol: '${presetName}',\n\tfont: '${presetName}',\n\tsize: '${presetName}',\n\tspace: '${presetName}',\n\tshadow: '${presetName}',
      \n};\n\n`;
};
