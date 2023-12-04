import './ConstructorVarsFont.css';

import { cnMixSpace } from '@consta/uikit/MixSpace';
import { Select } from '@consta/uikit/Select';
import { TextField } from '@consta/uikit/TextField';
import { useAtom } from '@reatom/npm-react';
import React, { useMemo } from 'react';
import { ReactMaskOpts, useIMask } from 'react-imask';

import { TextExample } from '##/components/TextExample';
import { VarField } from '##/components/VarField';
import { VarItem } from '##/components/VarField/types';
import { VarFieldList } from '##/components/VarField/VarFieldList';
import {
  fontAtom,
  lineHeightTermAtom,
  textSizeTermAtom,
} from '##/modules/font';
import { LineHeight, TextSize } from '##/types/theme';
import { cn } from '##/utils/bem';
import { convertSizeToNumber } from '##/utils/sizes';
import {
  calculateLineHeights,
  calculateSizes,
} from '##/utils/theme/calculators';

import { googleFonts } from './helper';

const groups = [
  {
    id: 'size',
    label: 'Размер Текста',
  },
  {
    id: 'lineheight',
    label: 'Межстрочный интервал',
  },
];

const cnConstructorVarsFont = cn('ConstructorVarsFont');

export const ConstructorVarsFont = () => {
  const [textSize, setTextSize] = useAtom(textSizeTermAtom);
  const [lineHeight, setLineHeight] = useAtom(lineHeightTermAtom);
  const [font, setFont] = useAtom(fontAtom);

  const handleChangeSize = (value: string | null) => {
    setTextSize(convertSizeToNumber(value ?? 0, 'px'));
  };

  const handleChangeHeight = (value: string | null) => {
    setLineHeight(convertSizeToNumber(value ?? 0, 'em'));
  };
  const { ref: sizeRef, setValue: setSize } = useIMask<
    HTMLInputElement,
    ReactMaskOpts
  >({
    mask: 'NUMpx',
    blocks: {
      NUM: {
        mask: Number,
        min: 0,
      },
    },
  });

  const { ref: heightRef, setValue: setHeight } = useIMask<
    HTMLInputElement,
    ReactMaskOpts
  >({
    mask: 'NUMem',
    blocks: {
      NUM: {
        mask: Number,
        min: 0,
        scale: 1,
        thousandsSeparator: ' ',
        radix: '.',
        padFractionalZeros: true,
        autofix: true,
        lazy: true,
        normalizeZeros: true,
        mapToRadix: ['.', ','],
      },
    },
  });

  const onReset = () => {
    setHeight('0.0em');
    setSize('0px');
    setTextSize(0);
    setLineHeight(0);
  };

  const items = useMemo(() => {
    const arr: VarItem[] = [];
    const textSizes = calculateSizes(textSize);
    const lineHeights = calculateLineHeights(lineHeight);
    Object.keys(textSizes).forEach((key) => {
      arr.push({
        label: key,
        value: textSizes[key as keyof TextSize],
        groupId: 'size',
      });
    });
    Object.keys(lineHeights).forEach((key) => {
      arr.push({
        label: key,
        value: lineHeights[key as keyof LineHeight],
        groupId: 'lineheight',
      });
    });
    return arr;
  }, [textSize, lineHeight]);

  return (
    <>
      <VarField
        title="Шрифт"
        titileView="primary"
        controls={
          <Select
            caption="Выберите шрифт из набора Google Fonts"
            value={font}
            items={googleFonts}
            getItemKey={(item) => item}
            size="s"
            dropdownClassName={cnConstructorVarsFont('Select')}
            getItemLabel={(item) => item}
            onChange={(value) => setFont(value ?? 'Inter')}
          />
        }
      />
      <VarField
        title=".Theme_size_gpnDefault"
        controls={
          <div>
            <TextField
              size="s"
              leftSide="Добавить"
              placeholder="0px"
              caption="Настройте множитель шага, чтобы увеличить или уменьшить размер шрифта"
              label="Размер шрифта"
              className={cnMixSpace({ mB: 'xl' })}
              inputRef={sizeRef}
              defaultValue={textSize ? `${textSize}px` : '0px'}
              onChange={handleChangeSize}
            />
            <TextField
              size="s"
              leftSide="Добавить"
              inputRef={heightRef}
              placeholder="0.0em"
              caption="Настройте множитель шага, чтобы увеличить или уменьшить межстрочный интервал"
              label="Межстрочный интервал"
              defaultValue={lineHeight ? `${lineHeight}em` : '0.0em'}
              onChange={handleChangeHeight}
            />
          </div>
        }
        onReset={onReset}
        listComponent={
          <VarFieldList
            items={items}
            groups={groups}
            getItemRightSide={(item) => (
              <TextExample
                font={font}
                size={
                  item.groupId === 'size' ? item.value : `${16 + textSize}px`
                }
                lineHeight={item.groupId === 'size' ? '1em' : item.value}
              />
            )}
          />
        }
      />
    </>
  );
};
