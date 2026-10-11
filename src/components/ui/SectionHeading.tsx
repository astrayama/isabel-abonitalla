import React, { ReactNode } from 'react';
import { cn } from '@/lib/utils';

interface SectionHeadingProps {
  eyebrow: string;        // e.g. "ABOUT.TXT"
  title: ReactNode;       // pixel-font part of the heading
  accent: string;         // handwritten pink word that follows it
  size?: 'sm' | 'md' | 'lg';
  className?: string;
}

const titleSizes = {
  sm: 'text-[clamp(30px,3.8vw,48px)]',
  md: 'text-[clamp(34px,4.6vw,60px)]',
  lg: 'text-[clamp(38px,5vw,66px)]',
};

export function Eyebrow({ children, className }: { children: ReactNode; className?: string }) {
  return (
    <p className={cn('mb-3.5 flex items-center gap-2.5 font-mono text-[13px] tracking-[0.3em] text-muted', className)}>
      <span className="block h-0.5 w-[34px] bg-current" aria-hidden="true" />
      {children}
    </p>
  );
}

export function HandAccent({ children, className }: { children: ReactNode; className?: string }) {
  return (
    <span className={cn('font-hand text-[1.2em] font-bold text-accent', className)}>{children}</span>
  );
}

export default function SectionHeading({ eyebrow, title, accent, size = 'md', className }: SectionHeadingProps) {
  return (
    <div className={className}>
      <Eyebrow>{eyebrow}</Eyebrow>
      <h2 className={cn('m-0 font-mono leading-[1.02] font-normal text-ink', titleSizes[size])}>
        {title} <HandAccent>{accent}</HandAccent>
      </h2>
    </div>
  );
}
