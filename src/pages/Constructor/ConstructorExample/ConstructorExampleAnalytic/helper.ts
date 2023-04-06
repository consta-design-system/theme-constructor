import { Props as TagItem } from '@consta/uikit/TagBase';

import { ConstructorExampleAnalyticCardProps } from './ConstructorExampleAnalyticCard';

export const types: TagItem[] = [
  {
    label: 'Все петунии',
    group: 1,
    view: 'filled',
    onCancel: () => {},
  },
  {
    label: 'Каскадная петуния',
    group: 2,
    view: 'stroked',
  },
  {
    label: 'Бахромчатая петуния',
    group: 3,
    view: 'stroked',
  },
  {
    label: 'Махровая петуния',
    group: 4,
    view: 'stroked',
  },
  {
    label: 'Кустовая петуния',
    group: 5,
    view: 'stroked',
  },
  {
    label: 'Крупноцветковая петуния',
    group: 6,
    view: 'stroked',
  },
];

export const cardsData: ConstructorExampleAnalyticCardProps[] = [
  {
    status: 'success',
    title: 'Каскадная',
    description: 'Сногсшибательный успех',
    installations: 1000,
    attempts: 1000,
  },
  {
    status: 'normal',
    title: 'Бахромчатая',
    description: 'Нужно немного подождать',
    installations: 85,
    attempts: 120,
  },
  {
    status: 'system',
    title: 'Махровая',
    description: 'Тестовый заход на установку',
    installations: 1,
    attempts: 5,
  },
  {
    status: 'error',
    title: 'Кустовая',
    description: 'Очень слабый результат',
    installations: 2,
    attempts: 100,
  },
  {
    status: 'warning',
    title: 'Крупноцветковая',
    description: 'Где-то здесь обман',
    installations: 1000000,
    attempts: 6,
  },
];
