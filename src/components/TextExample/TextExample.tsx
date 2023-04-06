import './TextExample.css';

import React from 'react';

import { cn } from '##/utils/bem';

const cnTextExample = cn('TextExample');

export const TextExample: React.FC<{
  size?: string;
  lineHeight?: string;
  font?: string;
}> = ({ size, lineHeight, font }) => {
  return (
    <div
      className={cnTextExample()}
      style={{
        ['--text-example-font' as string]: font,
        ['--text-example-size' as string]: size,
        ['--text-example-line-height' as string]: lineHeight,
      }}
    >
      Aa
    </div>
  );
};
