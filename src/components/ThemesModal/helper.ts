import { prependZeros } from '##/utils/sizes';

const months = [
  'января',
  'февраля',
  'марта',
  'апреля',
  'мая',
  'июня',
  'июля',
  'августа',
  'сентября',
  'октября',
  'ноября',
  'декабря',
];

export const dateFormatter = (val: string) => {
  const date = new Date(val);
  return `${prependZeros(date.getDate(), 2)} ${
    months[date.getMonth()]
  } ${date.getFullYear()}, ${prependZeros(date.getHours(), 2)}:${prependZeros(
    date.getMinutes(),
    2,
  )}`;
};
