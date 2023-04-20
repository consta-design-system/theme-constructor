import { Props as TagItem } from '@consta/uikit/TagBase';

import { ConstructorExampleAnalyticCardProps } from './ConstructorExampleAnalyticCard';

export const types: TagItem[] = [
  {
    label: 'Все команды',
    group: 1,
    view: 'filled',
    onCancel: () => {},
  },
  {
    label: 'Команда Альфа',
    group: 2,
    view: 'stroked',
  },
  {
    label: 'Команда Бета',
    group: 3,
    view: 'stroked',
  },
  {
    label: 'Команда Гамма',
    group: 4,
    view: 'stroked',
  },
  {
    label: 'Команда Дельта',
    group: 5,
    view: 'stroked',
  },
  {
    label: 'Команда Эпсилон',
    group: 6,
    view: 'stroked',
  },
];

export const cardsData: ConstructorExampleAnalyticCardProps[] = [
  {
    status: 'success',
    title: 'Альфа',
    description: 'Сногсшибательный успех',
    closedTasks: 1000,
    tasks: 1000,
  },
  {
    status: 'normal',
    title: 'Бета',
    description: 'Нужно немного подождать',
    closedTasks: 85,
    tasks: 120,
  },
  {
    status: 'system',
    title: 'Гамма',
    description: 'Тестовый виджет',
    closedTasks: 1,
    tasks: 5,
  },
  {
    status: 'error',
    title: 'Дельта',
    description: 'Очень слабый результат',
    closedTasks: 2,
    tasks: 100,
  },
  {
    status: 'warning',
    title: 'Эпсилон',
    description: 'Где-то здесь обман',
    closedTasks: 1000000,
    tasks: 6,
  },
];
