import './Constructor.css';

import React, { useRef } from 'react';

import { App } from '##/containers/App';
import { cn } from '##/utils/bem';

import { ConstructorExample } from './ConstructorExample';
import { ConstructorFooter } from './ConstructorFooter';
import { ConstructorLeftSide } from './ConstructorLeftSide';

const cnConstructor = cn('Constructor');

export const Constructor = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  return (
    <App>
      <div className={cnConstructor()}>
        <ConstructorLeftSide />
        <div ref={containerRef} className={cnConstructor('RightSide')}>
          <div className={cnConstructor('Bg', { type: 'color' })} />
          <div className={cnConstructor('Bg', { type: 'image' })} />
          <ConstructorExample
            containerRef={containerRef}
            className={cnConstructor('Example')}
          />
          <ConstructorFooter className={cnConstructor('Footer')} />
        </div>
      </div>
    </App>
  );
};
