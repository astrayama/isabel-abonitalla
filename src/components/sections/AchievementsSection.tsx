'use client';

import React from 'react';
import SectionHeading from '@/components/ui/SectionHeading';
import { achievements, ACHIEVEMENT_SLOTS } from '@/data/achievements';
import { useScrollReveal } from '@/hooks/useScrollReveal';
import { cn } from '@/lib/utils';

export default function AchievementsSection() {
  const { ref, isVisible } = useScrollReveal();
  const unlocked = achievements.length;

  return (
    <section
      id="achievements"
      ref={ref}
      className={`mx-auto w-full max-w-[1200px] px-4 pt-[72px] pb-10 transition-all duration-700 sm:px-6 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2'
      }`}
    >
      <div className="mb-[30px] flex flex-wrap items-end justify-between gap-x-6 gap-y-3">
        <SectionHeading eyebrow="ACHIEVEMENTS/" title="achievements" accent="unlocked" />
        <div className="flex items-center gap-2.5 rounded-full border-2 border-edge bg-window px-3.5 py-2 font-mono text-[13px] shadow-hard">
          <span>
            {unlocked} / {ACHIEVEMENT_SLOTS} unlocked
          </span>
          <span
            aria-hidden="true"
            className="block h-2 w-[110px] overflow-hidden rounded-full border border-[hsla(240,30%,20%,0.25)] bg-wash-lilac"
          >
            <span
              className="block h-full rounded-full bg-gradient-to-r from-[hsl(330,70%,70%)] to-[hsl(270,50%,65%)]"
              style={{ width: `${((unlocked / ACHIEVEMENT_SLOTS) * 100).toFixed(1)}%` }}
            />
          </span>
        </div>
      </div>

      <div className="grid grid-cols-[repeat(auto-fill,minmax(230px,1fr))] items-start gap-[18px]">
        {achievements.map((a, i) => {
          const Icon = a.icon;
          return (
            <div
              key={a.title}
              className={cn(
                'min-w-0 rounded-[14px] border-2 border-edge bg-window px-[18px] pt-4 pb-[18px] text-ink shadow-[0_5px_0_var(--hard)]',
                i % 2 === 1 && 'sm:mt-[26px]'
              )}
            >
              <div className="flex items-center gap-2.5">
                <span
                  className="flex size-9 flex-[0_0_36px] items-center justify-center rounded-[11px]"
                  style={{ background: `var(--tint-${a.tint})` }}
                >
                  <Icon className="size-5" aria-hidden="true" />
                </span>
                <span className="font-mono text-[10px] tracking-[0.16em] text-muted">
                  ACHIEVEMENT {String(i + 1).padStart(2, '0')}
                </span>
              </div>
              <p className="mt-3.5 mb-0 font-mono text-[46px] leading-none whitespace-nowrap">{a.value}</p>
              <p className="mt-2 mb-0 text-base font-black">{a.title}</p>
              <p className="mt-1 mb-0 text-[13.5px] leading-[1.45] text-ink-soft">{a.detail}</p>
            </div>
          );
        })}
      </div>
    </section>
  );
}
