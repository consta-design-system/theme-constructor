import { SnackBarItemStatus } from '@consta/uikit/SnackBar';
import { atom } from '@reatom/core';

export type Message = {
  view?: SnackBarItemStatus;
  title: string;
  description?: string;
  id: string;
};

export const messagesAtom = atom<Message[]>([]);
