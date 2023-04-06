import './ShadowExample.css';

import React from 'react';

import { cn } from '##/utils/bem';

const cnShadowExample = cn('ShadowExample');

export const ShadowExample: React.FC<{ boxShadow: string }> = ({
  boxShadow,
}) => {
  return (
    <div className={cnShadowExample()}>
      <div className={cnShadowExample('Bg', { type: 'color' })} />
      <div className={cnShadowExample('Bg', { type: 'image' })} />
      <div
        style={{
          ['--shadow-example-shadow' as string]: boxShadow,
        }}
        className={cnShadowExample('Circle')}
      />
    </div>
  );
};
