import './SpaceExample.css';

import React from 'react';

import { cn } from '##/utils/bem';

const cnSpaceExample = cn('SpaceExample');

export const SpaceExample: React.FC<{ gap: string }> = ({ gap }) => {
  return (
    <div
      style={{
        ['--space-example-gap' as string]: gap,
      }}
      className={cnSpaceExample()}
    >
      <div className={cnSpaceExample('Content')}>
        <div className={cnSpaceExample('Circle')} />
        <div className={cnSpaceExample('Line')} />
        <div className={cnSpaceExample('Circle')} />
      </div>
    </div>
  );
};
