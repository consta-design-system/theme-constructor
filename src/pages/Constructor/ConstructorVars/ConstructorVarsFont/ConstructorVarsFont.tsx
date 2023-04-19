import './ConstructorVarsFont.css';

import { cnMixSpace } from '@consta/uikit/MixSpace';
import { Select } from '@consta/uikit/Select';
import { TextField, useIMask } from '@consta/uikit/TextField';
import { useAction, useAtom } from '@reatom/npm-react';
import React, { useMemo, useState } from 'react';

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
  const [textSize] = useAtom(textSizeTermAtom);
  const [lineHeight] = useAtom(lineHeightTermAtom);
  const [font] = useAtom(fontAtom);

  const [size, setSize] = useState<string | null>(
    textSize ? `${textSize}px` : '0px',
  );
  const [height, setHeight] = useState<string | null>(
    lineHeight ? `${lineHeight}em` : '0.0em',
  );

  const setFont = useAction((ctx, value: string) => fontAtom(ctx, value));
  const setTextSize = useAction((ctx, value: number) =>
    textSizeTermAtom(ctx, value),
  );
  const setLineHeight = useAction((ctx, value: number) =>
    lineHeightTermAtom(ctx, value),
  );

  const handleChangeSize = (value: string | null) => {
    setTextSize(convertSizeToNumber(value ?? 0, 'px'));
    setSize(value);
  };

  const handleChangeHeight = (value: string | null) => {
    setLineHeight(convertSizeToNumber(value ?? 0, 'em'));
    setHeight(value);
  };

  const { inputRef: sizeRef } = useIMask({
    value: size,
    onChange: handleChangeSize,
    maskOptions: {
      mask: 'NUMpx',
      blocks: {
        NUM: {
          mask: Number,
          min: 0,
        },
      },
    },
  });

  const { inputRef: heightRef } = useIMask({
    value: height,
    onChange: handleChangeHeight,
    maskOptions: {
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
          mapToRadix: ['.'],
        },
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
            onChange={({ value }) => setFont(value ?? 'Inter')}
          />
        }
      />
      <VarField
        title=".Theme_size_gpnDefault"
        controls={
          <div>
            <TextField
              width="full"
              size="s"
              value={size}
              leftSide="Добавить"
              placeholder="0px"
              caption="Настройте множитель шага, чтобы увеличить или уменьшить размер шрифта"
              label="Размер шрифта"
              className={cnMixSpace({ mB: 'xl' })}
              inputRef={sizeRef}
            />
            <TextField
              width="full"
              size="s"
              leftSide="Добавить"
              value={height}
              inputRef={heightRef}
              placeholder="0.0em"
              caption="Настройте множитель шага, чтобы увеличить или уменьшить межстрочный интервал"
              label="Межстрочный интервал"
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
