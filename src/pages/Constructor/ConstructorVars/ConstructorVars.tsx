import { useAtom } from '@reatom/npm-react';
import React from 'react';

import { varsTypeAtom } from '##/modules/app';
import { currentPresetAtom } from '##/modules/presets';

import { ConstructorVarsColor } from './ConstructorVarsColor';
import { ConstructorVarsFont } from './ConstructorVarsFont';
import { ConstructorVarsRadius } from './ConstructorVarsRadius';
import { ConstructorVarsShadow } from './ConstructorVarsShadow';
import { ConstructorVarsSpace } from './ConstructorVarsSpace';

export const ConstructorVars = () => {
  const [activeVar] = useAtom(varsTypeAtom);
  const [currentPreset] = useAtom(currentPresetAtom);

  if (activeVar === 'color') {
    return <ConstructorVarsColor key={currentPreset?.name} />;
  }
  if (activeVar === 'space') {
    return <ConstructorVarsSpace key={currentPreset?.name} />;
  }
  if (activeVar === 'radius') {
    return <ConstructorVarsRadius key={currentPreset?.name} />;
  }
  if (activeVar === 'shadow') {
    return <ConstructorVarsShadow key={currentPreset?.name} />;
  }
  return <ConstructorVarsFont key={currentPreset?.name} />;
};
