import { IconSettings } from '@consta/icons/IconSettings';
import { DefaultItem } from '@consta/uikit/Breadcrumbs';

export const crumbs: DefaultItem[] = [
  {
    label: 'Главная',
    icon: IconSettings,
  },
  {
    label: 'Растения',
  },
  {
    label: 'Цветы',
  },
  {
    label: 'Сервисы',
  },
  {
    label: 'Петуниизатор 1.0',
    subMenu: [
      {
        label: 'Аналитика',
      },
      {
        label: 'Отчёты',
      },
      {
        label: 'Установщик',
      },
    ],
  },
];

export const choices = ['Все статусы', 'Успех', 'Провал'];
export const types = [
  'Ампельная петуния',
  'Каскадная петуния',
  'Бахромчатая петуния',
  'Махровая петуния',
  'Супербиссима',
  'Кустовая петуния',
  'Крупноцветковая петуния',
  'Мелкоцветковая петуния',
  'Вегетативная петуния',
];
