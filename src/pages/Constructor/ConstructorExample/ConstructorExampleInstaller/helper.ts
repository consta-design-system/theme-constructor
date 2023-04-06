import image from '##/images/User.png';

export type UserType = {
  id: number;
  url?: string;
  name: string;
};

export const users: UserType[] = [
  {
    id: 1,
    name: 'Олег',
    url: image,
  },
  {
    id: 2,
    name: 'Александр Теплый',
  },
  {
    id: 3,
    name: 'Алина Полевая',
  },
  {
    id: 4,
    name: 'Сергей Лукьянов',
  },
  {
    id: 5,
    name: 'Майк Вазовски',
  },
  {
    id: 6,
    name: 'Артемий Ичварин',
  },
  {
    id: 7,
    name: 'Анна Большакова',
  },
  {
    id: 8,
    name: 'Тимур Марковин',
  },
  {
    id: 9,
    name: 'Арсений Мулатов',
  },
  {
    id: 10,
    name: 'Никита Кочерев',
  },
  {
    id: 11,
    name: 'Светлана Можайская',
  },
  {
    id: 12,
    name: 'Александр Аверьянов',
  },
];

export const variables = [
  'Все петунии',
  'Каскадная петуния',
  'Бахромчатая петуния',
  'Махровая петуния',
  'Кустовая петуния',
  'Крупноцветковая петуния',
];
