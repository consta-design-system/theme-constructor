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
    label: 'Предпросмотр темы',
    subMenu: [
      {
        label: 'Аналитика',
      },
      {
        label: 'Отчёты',
      },
      {
        label: 'График выполнения',
      },
      {
        label: 'Установщик',
      },
    ],
  },
];

export const choices = ['Все статусы', 'Успех', 'Провал'];
export const types = [
  'Все команды',
  'Команда Альфа',
  'Команда Бета',
  'Команда Гамма',
  'Команда Дельта',
  'Команда Эпсилон',
];
