import { Theme } from '@consta/uikit/Theme';
import { useAtom } from '@reatom/npm-react';
import React from 'react';

import { themeAtom } from '##/modules/theme';

type Props = {
  className?: string;
  children?: React.ReactNode;
};
export const ThemeWrapper = (props: Props) => {
  const { className, children } = props;
  const [theme] = useAtom(themeAtom);

  return (
    <Theme className={className} preset={theme}>
      {children}
    </Theme>
  );
};
