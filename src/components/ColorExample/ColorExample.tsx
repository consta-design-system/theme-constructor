import './ColorExample.css';

import React from 'react';

import { cn } from '##/utils/bem';

const cnColorExample = cn('ColorExample');

export const ColorExample: React.FC<{ color: string }> = ({ color }) => {
  return (
    <div
      style={{
        ['--color-example-color' as string]: color,
      }}
      className={cnColorExample()}
    />
  );
};
