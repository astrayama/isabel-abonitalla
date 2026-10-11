'use client';

import { useReducedMotion } from 'framer-motion';
import { useMediaQuery } from './useMediaQuery';

// The hero → badge scroll choreography only runs on roomy screens with motion allowed;
// everywhere else the badge just swings and can be dragged.
export function useScrollMoment() {
  const roomy = useMediaQuery('(min-width: 1024px) and (min-height: 760px)');
  const reduceMotion = useReducedMotion();
  return roomy && !reduceMotion;
}
