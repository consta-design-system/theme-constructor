import './Constructor.css';

import React from 'react';

import { App } from '##/containers/App';
import { cn } from '##/utils/bem';

import { ConstructorExample } from './ConstructorExample';
import { ConstructorFooter } from './ConstructorFooter';
import { ConstructorLeftSide } from './ConstructorLeftSide';

const cnConstructor = cn('Constructor');

export const Constructor = () => {
  return (
    <App>
      <div className={cnConstructor()}>
        <ConstructorLeftSide />
        <div className={cnConstructor('RightSide')}>
          <div className={cnConstructor('Bg', { type: 'color' })} />
          <div className={cnConstructor('Bg', { type: 'image' })} />
          <ConstructorExample />
          <ConstructorFooter className={cnConstructor('Footer')} />
        </div>
      </div>
    </App>
  );
};
