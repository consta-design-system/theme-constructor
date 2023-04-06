import './App.css';
import './wtpr.css';

import { reatomContext } from '@reatom/npm-react';
import React from 'react';

import { ctx } from '##/modules/api';
import { cn } from '##/utils/bem';

import { SnackBarContainer } from '../SnackBarContainer';
import { ThemeWrapper } from '../ThemeWrapper';

const cnApp = cn('App');

export const App: React.FC<{
  children?: React.ReactNode;
  className?: string;
}> = ({ children, className }) => {
  return (
    <reatomContext.Provider value={ctx}>
      <ThemeWrapper className={cnApp(null, ['theme_gap_large', className])}>
        <SnackBarContainer>{children}</SnackBarContainer>
      </ThemeWrapper>
    </reatomContext.Provider>
  );
};
