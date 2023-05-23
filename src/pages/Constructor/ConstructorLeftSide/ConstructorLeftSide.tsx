import './ConstructorLeftSide.css';

import { useAtom } from '@reatom/npm-react';
import React from 'react';

import { ScenarioModal } from '##/components/ScenarioModal';
import { scenarioModalAtom } from '##/modules/app';
import { cn } from '##/utils/bem';

import { ConstructorHeader } from '../ConstructorHeader';
import { ConstructorVars } from '../ConstructorVars';
import { ConstructorVarsSelector } from '../ConstructorVarsSelector';

const cnConstructorLeftSide = cn('ConstructorLeftSide');

export const ConstructorLeftSide = () => {
  const [isOpen, setIsOpen] = useAtom(scenarioModalAtom);

  return (
    <div className={cnConstructorLeftSide()}>
      <ConstructorHeader className={cnConstructorLeftSide('Header')} />
      <div className={cnConstructorLeftSide('Content')}>
        <ConstructorVarsSelector />
        <ConstructorVars />
      </div>
      <ScenarioModal isOpen={isOpen} onClose={() => setIsOpen(false)} />
    </div>
  );
};
