// scoring.ts

import { scoreConfig } from './scoreConfig';

export const calculateXP = (category: string, actionPoints: number): number => {
  const weightage = scoreConfig[category]?.weightage || 0;
  return actionPoints * weightage;
};
