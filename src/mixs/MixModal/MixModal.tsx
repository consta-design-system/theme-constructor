import './MixModal.css';

import { cn } from '##/utils/bem';

type MixModalParams = {
  iconStatus?: 'default' | 'alert' | 'primary';
  buttonsAlign?: 'vertical' | 'horizontal';
};

type CnMixModal = (
  className: string | null,
  params?: MixModalParams | undefined,
  classNames?: string[],
) => string;
const cnModal = cn('MixModal');

export const cnMixModal: CnMixModal = (className = '', params, classNames) => {
  const iconStatus = params?.iconStatus ?? 'default';
  const buttonsAlign = params?.buttonsAlign ?? 'horizontal';
  const options: MixModalParams = {};
  if (className === 'Icon') {
    options.iconStatus = iconStatus;
  }
  if (className === 'Buttons') {
    options.buttonsAlign = buttonsAlign;
  }
  return cnModal(className ?? '', options, classNames);
};
