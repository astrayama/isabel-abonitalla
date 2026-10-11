'use client';

import { useEffect, useRef, useState } from 'react';

interface ScrollRevealOptions {
  threshold?: number | number[];
  root?: Element | Document | null;
  rootMargin?: string;
}

export const useScrollReveal = (options: ScrollRevealOptions = {}) => {
  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  const threshold = options.threshold ?? 0.05;
  const root = options.root;
  const rootMargin = options.rootMargin;

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setIsVisible(true);
        observer.unobserve(entry.target);
      }
    }, {
      threshold,
      root,
      rootMargin,
    });

    const node = ref.current;
    if (node) {
      observer.observe(node);
    }

    return () => {
      if (node) {
        observer.unobserve(node);
      }
    };
  }, [threshold, root, rootMargin]);

  return { ref, isVisible };
};

