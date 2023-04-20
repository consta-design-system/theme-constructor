import './ConstructorExampleReport.css';

import { DragNDropField } from '@consta/uikit/DragNDropField';
import { cnMixSpace } from '@consta/uikit/MixSpace';
import { Pagination } from '@consta/uikit/Pagination';
import { Table } from '@consta/uikit/Table';
import { Text } from '@consta/uikit/Text';
import React, { useState } from 'react';

import { cnConstructorExampleReport, columns, rows } from './helper';

type Props = {
  className?: string;
};

export const ConstructorExampleReport = (props: Props) => {
  const { className } = props;
  const [page, setPage] = useState(1);
  return (
    <>
      <Text
        size="xl"
        lineHeight="m"
        weight="semibold"
        className={cnConstructorExampleReport('Title', [
          cnMixSpace({ mB: 's' }),
          className,
        ])}
      >
        Отчёты
      </Text>
      <Text
        className={cnConstructorExampleReport('Description', [
          cnMixSpace({ mB: 'xl' }),
        ])}
        size="s"
        lineHeight="m"
        view="secondary"
      >
        Здесь вы можете добавить отчёт о работе команд за установленный период
      </Text>
      <DragNDropField
        onDropFiles={() => {}}
        className={cnMixSpace({ mB: 'xl' })}
      >
        <Text
          className={cnMixSpace({ mB: 'xs' })}
          size="s"
          lineHeight="s"
          view="secondary"
        >
          Перетащите файлы или{' '}
          <span className={cnConstructorExampleReport('Blue')}>загрузите</span>
        </Text>
        <Text size="xs" lineHeight="m" view="ghost">
          Поддерживаемые форматы: PNG, TIFF, JPG
        </Text>
      </DragNDropField>
      <Table
        className={cnConstructorExampleReport('Table', [
          cnMixSpace({ mB: '3xl' }),
        ])}
        columns={columns}
        rows={rows}
        zebraStriped="odd"
        borderBetweenColumns
        borderBetweenRows
      />
      <Pagination
        size="xs"
        currentPage={page}
        totalPages={100}
        onChange={(value) => setPage(value)}
        hotkeys={{
          nextPage: {
            label: 'Alt →',
            values: ['Alt', 'ArrowRight'],
          },
          prevPage: {
            label: '← Alt',
            values: ['Alt', 'ArrowLeft'],
          },
        }}
      />
    </>
  );
};
