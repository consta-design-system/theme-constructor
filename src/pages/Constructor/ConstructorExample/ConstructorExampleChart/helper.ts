type Item = {
  command: string;
  date: string;
  value: number;
};
export const colorMapLine: { [key: string]: string } = {
  Альфа: 'var(--color-bg-warning)',
  Бета: 'var(--color-bg-caution)',
  Дельта: 'var(--color-bg-normal)',
};

export const data: Item[] = [
  { command: 'Альфа', date: '20 мая', value: 12 },
  { command: 'Альфа', date: '21 мая', value: 10 },
  { command: 'Альфа', date: '22 мая', value: 13 },
  { command: 'Альфа', date: '23 мая', value: 11 },
  { command: 'Альфа', date: '24 мая', value: 16 },
  { command: 'Альфа', date: '25 мая', value: 17 },
  { command: 'Бета', date: '20 мая', value: 7 },
  { command: 'Бета', date: '21 мая', value: 6 },
  { command: 'Бета', date: '22 мая', value: 10 },
  { command: 'Бета', date: '23 мая', value: 9 },
  { command: 'Бета', date: '24 мая', value: 15 },
  { command: 'Бета', date: '25 мая', value: 16 },
  { command: 'Дельта', date: '20 мая', value: 5 },
  { command: 'Дельта', date: '21 мая', value: 6 },
  { command: 'Дельта', date: '22 мая', value: 8 },
  { command: 'Дельта', date: '23 мая', value: 6 },
  { command: 'Дельта', date: '24 мая', value: 13 },
  { command: 'Дельта', date: '25 мая', value: 15 },
];
