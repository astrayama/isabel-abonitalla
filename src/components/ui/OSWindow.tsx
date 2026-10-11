import React, { ReactNode } from 'react';
import { cn } from '@/lib/utils';

interface OSWindowProps {
  title: ReactNode;
  children: ReactNode;
  className?: string;
  bodyClassName?: string;
  variant?: 'blue' | 'pink';
  // soft: white edge + blurred purple shadow; hard: ink border + offset drop shadow
  chrome?: 'soft' | 'hard';
  size?: 'sm' | 'md' | 'lg';
  // Replaces the traffic-light dots on the right of the title bar
  titleRight?: ReactNode;
}

const barSizes = {
  sm: 'h-7 px-2.5 text-[11px]',
  md: 'h-[34px] px-3 text-[13px]',
  lg: 'h-[38px] px-3.5 text-sm',
};

const dotSizes = {
  sm: 'size-2.5',
  md: 'size-2.5',
  lg: 'size-3',
};

export function WindowDots({ size = 'md' }: { size?: 'sm' | 'md' | 'lg' }) {
  return (
    <span className="flex gap-1.5" aria-hidden="true">
      <span className={cn('block rounded-full bg-[#9CA3AF]', dotSizes[size])} />
      <span className={cn('block rounded-full bg-[#FCD34D]', dotSizes[size])} />
      <span className={cn('block rounded-full bg-[#F87171]', dotSizes[size])} />
    </span>
  );
}

export default function OSWindow({
  title,
  children,
  className,
  bodyClassName,
  variant = 'blue',
  chrome = 'soft',
  size = 'md',
  titleRight,
}: OSWindowProps) {
  return (
    <div
      className={cn(
        'flex flex-col overflow-hidden rounded-[14px] bg-window text-ink',
        chrome === 'soft'
          ? 'border border-white/85 shadow-window dark:border-white/10'
          : 'border-2 border-edge shadow-hard-lg',
        className
      )}
    >
      <div
        className={cn(
          'flex shrink-0 items-center justify-between gap-3 font-mono',
          variant === 'blue' ? 'titlebar-blue' : 'titlebar-pink',
          barSizes[size]
        )}
      >
        <span className="min-w-0 truncate select-none">{title}</span>
        {titleRight ?? <WindowDots size={size} />}
      </div>
      <div className={cn('flex-1', bodyClassName)}>{children}</div>
    </div>
  );
}
