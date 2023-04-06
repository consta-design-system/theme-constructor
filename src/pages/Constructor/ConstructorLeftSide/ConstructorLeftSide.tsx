import './ConstructorLeftSide.css';

import { useFlag } from '@consta/uikit/useFlag';
import React, { useEffect } from 'react';

import { ScenarioModal } from '##/components/ScenarioModal';
import { cn } from '##/utils/bem';

import { ConstructorHeader } from '../ConstructorHeader';
import { ConstructorVars } from '../ConstructorVars';
import { ConstructorVarsSelector } from '../ConstructorVarsSelector';

const cnConstructorLeftSide = cn('ConstructorLeftSide');

export const ConstructorLeftSide = () => {
  const [isOpen, setIsOpen] = useFlag();

  useEffect(setIsOpen.on, []);

  return (
    <div className={cnConstructorLeftSide()}>
      <ConstructorHeader className={cnConstructorLeftSide('Header')} />
      <ConstructorVarsSelector />
      <ConstructorVars />
      <ScenarioModal isOpen={isOpen} onClose={setIsOpen.off} />
    </div>
  );
};
