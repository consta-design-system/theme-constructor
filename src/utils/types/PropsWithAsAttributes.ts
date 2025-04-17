import {
  AsTagAttribute,
  AsTags,
} from '@consta/uikit/__internal__/src/utils/types/AsTags';
import { forwardRefWithAs as forwardRefWithAsConsta } from '@consta/uikit/__internal__/src/utils/types/PropsWithAsAttributes';
import React from 'react';

export type PropsWithAsAttributes<Props, As extends AsTags> = Props & {
  as?: As;
} & Omit<AsTagAttribute<As>, keyof Props>;

export type ComponentWithAs<Props, DefaultTag extends AsTags = 'div'> = <
  As extends AsTags = DefaultTag,
>(
  props: PropsWithAsAttributes<Props, As> & React.RefAttributes<Element>,
) => React.ReactElement | null;

export const forwardRefWithAs = forwardRefWithAsConsta;
