'use client';

import React from 'react';
import { Eyebrow, HandAccent } from '@/components/ui/SectionHeading';
import IdBadge from './about/IdBadge';
import QuickFacts from './about/QuickFacts';
import { links } from '@/data/profile';
import { useScrollReveal } from '@/hooks/useScrollReveal';
import { cn } from '@/lib/utils';

const pillLink = 'inline-flex min-h-[46px] items-center rounded-full px-5 font-extrabold no-underline';

export const AboutSection: React.FC = () => {
  const { ref: bioRef, isVisible: bioVisible } = useScrollReveal();
  const { ref: factsRef, isVisible: factsVisible } = useScrollReveal();

  return (
    <section
      id="about"
      className="relative z-20 mx-auto flex max-w-[1200px] flex-wrap items-start gap-10 px-4 pt-2 pb-24 sm:px-6"
    >
      <div
        ref={bioRef}
        className={cn(
          'min-w-0 flex-[1_1_360px] transition-all duration-1000 lg:pt-[72px]',
          bioVisible ? 'translate-y-0 opacity-100' : 'translate-y-2 opacity-0'
        )}
      >
        <Eyebrow>ABOUT.TXT</Eyebrow>
        <h2 className="m-0 font-mono text-[clamp(38px,5vw,66px)] leading-none font-normal">
          Hi, I&apos;m <HandAccent>Isabel.</HandAccent>
        </h2>
        <p className="mt-[22px] text-lg leading-[1.65] text-ink-soft">
          I&apos;m a software engineer turned product manager with a founder&apos;s instinct. I&apos;ve shipped products
          at Microsoft and Roblox, coached 1,000+ hackers at Major League Hacking, and built an AI journaling SaaS
          from zero to paying customers.
        </p>
        <p className="mt-3.5 text-lg leading-[1.65] text-ink-soft">
          Currently finishing a cloud computing degree at Purdue and looking for PM or product engineer roles.
        </p>
        <div className="mt-[26px] flex flex-wrap gap-2.5">
          <a href={links.resume} target="_blank" rel="noopener noreferrer" className={cn(pillLink, 'bg-ink px-[22px] text-on-ink')}>
            résumé ↓
          </a>
          <a href={links.github} target="_blank" rel="noopener noreferrer" className={cn(pillLink, 'border-2 border-edge-soft bg-window text-ink')}>
            github ↗
          </a>
          <a href={links.linkedin} target="_blank" rel="noopener noreferrer" className={cn(pillLink, 'border-2 border-edge-soft bg-window text-ink')}>
            linkedin ↗
          </a>
        </div>
      </div>

      <div className="relative z-10 mx-auto flex-[0_1_300px] lg:-mt-11">
        <IdBadge />
      </div>

      <div
        ref={factsRef}
        className={cn(
          'min-w-0 flex-[1_1_280px] transition-all delay-200 duration-1000 lg:pt-[72px]',
          factsVisible ? 'translate-y-0 opacity-100' : 'translate-y-2 opacity-0'
        )}
      >
        <QuickFacts />
      </div>
    </section>
  );
};
