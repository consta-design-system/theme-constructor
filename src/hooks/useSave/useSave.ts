import FileSaver from 'file-saver';
import JSZip from 'jszip';

import { ConstructorThemePreset } from '##/types/theme';
import {
  calculateLineHeights,
  calculateSizes,
  calculateSpaces,
} from '##/utils/theme/calculators';

import { getThemeFileName, ThemeCss } from './helpers';
import { getColorCSS, getColorJson } from './helpers/color';
import { getControlCSS, getControlJson } from './helpers/controls';
import { getFontCSS, getFontJson, loadFontsFile } from './helpers/font';
import { getPresetTsCode } from './helpers/presets';
import { getShadowCSS, getShadowJson } from './helpers/shadow';
import { getSizeCSS, getSizeJson } from './helpers/size';
import { getSpaceCSS, getSpaceJson } from './helpers/space';
import { toCapitalize, toTranslit } from './helpers/transliter';

type Params = {
  onSuccess?: () => void;
  onError?: () => void;
};
export const useSave = (params: Params) => {
  const { onSuccess, onError } = params;

  const onSave = async (
    preset: ConstructorThemePreset,
    format: 'css' | 'json' | 'archive',
  ) => {
    const {
      name,
      theme: { colors, shadow, space, font, radius },
    } = preset;
    const presetName = toTranslit(name);
    try {
      const zip = new JSZip();
      zip.folder('_color');
      zip.folder('_control');
      zip.folder('_font');
      zip.folder('_shadow');
      zip.folder('_size');
      zip.folder('_space');
      zip.folder('presets');
      const fontsFiles = await loadFontsFile(font.font);
      fontsFiles.forEach((file, index) => {
        zip.file(`_font/${file.name}`, file.data);
      });
      if (format !== 'json') {
        zip.file(
          `_color/${getThemeFileName(presetName, 'color', 'default')}.css`,
          getColorCSS(presetName, 'default', colors.light, shadow.colors.light),
        );
        zip.file(
          `_color/${getThemeFileName(presetName, 'color', 'dark')}.css`,
          getColorCSS(presetName, 'dark', colors.dark, shadow.colors.dark),
        );
        zip.file(
          `_control/${getThemeFileName(presetName, 'control')}.css`,
          getControlCSS(presetName, radius),
        );
        zip.file(
          `_font/${getThemeFileName(presetName, 'font')}.css`,
          getFontCSS(presetName, font.font, 'save'),
        );
        zip.file(
          `_shadow/${getThemeFileName(presetName, 'shadow')}.css`,
          getShadowCSS(presetName, shadow.params),
        );
        zip.file(
          `_size/${getThemeFileName(presetName, 'size')}.css`,
          getSizeCSS(
            presetName,
            calculateSizes(font.size),
            calculateLineHeights(font.lineHeight),
          ),
        );
        zip.file(
          `_space/${getThemeFileName(presetName, 'space')}.css`,
          getSpaceCSS(presetName, calculateSpaces(space)),
        );
        zip.file(
          `presets/${getThemeFileName(presetName, 'preset', 'default')}.ts`,
          getPresetTsCode(presetName, 'css', 'default'),
        );
        zip.file(
          `presets/${getThemeFileName(presetName, 'preset', 'dark')}.ts`,
          getPresetTsCode(presetName, 'css', 'dark'),
        );
      }
      if (format !== 'css') {
        zip.file(
          `_color/${getThemeFileName(presetName, 'color', 'default')}.json`,
          getColorJson(colors.light, shadow.colors.light, 'default'),
        );
        zip.file(
          `_color/${getThemeFileName(presetName, 'color', 'dark')}.json`,
          getColorJson(colors.dark, shadow.colors.dark, 'dark'),
        );
        zip.file(
          `_control/${getThemeFileName(presetName, 'control')}.json`,
          getControlJson(radius),
        );
        zip.file(
          `_font/${getThemeFileName(presetName, 'font')}.json`,
          getFontJson(font.font),
        );
        zip.file(
          `_shadow/${getThemeFileName(presetName, 'shadow')}.json`,
          getShadowJson(shadow.params),
        );
        zip.file(
          `_size/${getThemeFileName(presetName, 'size')}.json`,
          getSizeJson(
            calculateSizes(font.size),
            calculateLineHeights(font.lineHeight),
          ),
        );
        zip.file(
          `_space/${getThemeFileName(presetName, 'space')}.json`,
          getSpaceJson(calculateSpaces(space)),
        );
        zip.file(
          `presets/${getThemeFileName(presetName, 'preset', 'default')}.ts`,
          getPresetTsCode(presetName, 'json', 'default'),
        );
        zip.file(
          `presets/${getThemeFileName(presetName, 'preset', 'dark')}.ts`,
          getPresetTsCode(presetName, 'json', 'dark'),
        );
      }
      zip.file(
        `${`ConstructorConfig${toCapitalize(presetName)}`}.json`,
        JSON.stringify(preset, null, 2),
      );
      zip.file('Theme.css', ThemeCss);

      await zip.generateAsync({ type: 'blob' }).then(function (content) {
        FileSaver.saveAs(content, `${presetName}.zip`);
      });
      onSuccess?.();
    } catch {
      onError?.();
    }
  };
  return {
    onSave,
  };
};
