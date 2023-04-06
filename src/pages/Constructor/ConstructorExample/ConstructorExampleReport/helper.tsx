import { IconEdit } from '@consta/icons/IconEdit';
import { IconTrash } from '@consta/icons/IconTrash';
import { Button } from '@consta/uikit/Button';
import { TableColumn } from '@consta/uikit/Table';
import { Text } from '@consta/uikit/Text';
import React from 'react';

import { cn } from '##/utils/bem';

type RowItem = {
  status: 'success' | 'alert' | 'caution' | 'system';
  format: string;
  size: number;
  id: string;
  disabled?: boolean;
  loading?: boolean;
};

export const cnConstructorExampleReport = cn('ConstructorExampleReport');

const statusMap = {
  success: 'Загружен',
  alert: 'Ошибка',
  caution: 'Обработка',
  system: 'Удалён',
};

export const rows: RowItem[] = [
  {
    id: '1',
    status: 'success',
    format: 'PDF',
    size: 1.2,
  },
  {
    id: '2',
    status: 'success',
    format: 'XLS',
    size: 100,
  },
  {
    id: '3',
    status: 'success',
    format: 'DOC',
    size: 32.1,
  },
  {
    id: '4',
    status: 'alert',
    format: 'XLS',
    size: 10,
    disabled: true,
  },
  {
    id: '5',
    status: 'alert',
    format: 'DOC',
    size: 15.4,
    disabled: true,
    loading: true,
  },
  {
    id: '6',
    status: 'caution',
    format: 'DOC',
    size: 7,
    disabled: true,
  },
  {
    id: '7',
    status: 'system',
    format: 'PDF',
    size: 0.4,
    disabled: true,
  },
];

export const columns: TableColumn<RowItem>[] = [
  {
    title: 'Статус',
    align: 'left',
    accessor: 'status',
    renderCell: (row) => (
      <Text
        size="s"
        lineHeight="s"
        weight="medium"
        className={cnConstructorExampleReport('TableStatus', {
          view: row.status,
        })}
      >
        {statusMap[row.status]}
      </Text>
    ),
  },
  {
    title: 'Формат файла',
    align: 'left',
    accessor: 'format',
  },
  {
    title: 'вес файла',
    align: 'center',
    accessor: 'size',
    renderCell: (row) => `${row.size} Мб`,
  },
  {
    title: 'Действия',
    align: 'right',
    accessor: 'disabled',
    renderCell: (row) => (
      <div className={cnConstructorExampleReport('TableButtons')}>
        {row.loading ? (
          <Button loading size="xs" view="ghost" width="full" />
        ) : (
          <>
            <Button
              disabled={row.disabled}
              size="xs"
              view="ghost"
              label="Редактировать"
              iconLeft={IconEdit}
            />
            <Button
              disabled={row.disabled}
              size="xs"
              view="ghost"
              onlyIcon
              iconLeft={IconTrash}
            />
          </>
        )}
      </div>
    ),
  },
];
