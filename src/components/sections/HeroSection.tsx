"use client";

import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import { useTypewriter } from '@/hooks/useTypewriter';
import { useScrollMoment } from '@/hooks/useScrollMoment';
import OSWindow from '@/components/ui/OSWindow';
import DesktopIcons from './hero/DesktopIcons';
import IntroAvatar from './hero/IntroAvatar';
import { heroChips, links, typewriterRoles } from '@/data/profile';
import { cn } from '@/lib/utils';

const clamp01 = (t: number) => Math.min(1, Math.max(0, t));

export default function HeroSection() {
  const { displayText } = useTypewriter(typewriterRoles);
  const sceneRef = useRef<HTMLElement>(null);
  const scrollMoment = useScrollMoment();

  // The section is 135vh tall with a sticky inner, so the hero stays pinned for roughly the
  // first quarter of this progress. Meanwhile the ID badge (rendered by AboutSection) leaves
  // the avatar's hand at #badge-anchor and the avatar drifts up and fades out.
  const { scrollYProgress } = useScroll({ target: sceneRef, offset: ['start start', 'end start'] });
  // Computed from the progress value (rather than mapped with ranges) so framer never hands the
  // fade to a native scroll timeline, which maps offsets differently and rebounds past its keyframes
  const avatarY = useTransform(() => `${-10 * clamp01((scrollYProgress.get() - 0.05) / 0.21)}%`);
  const avatarOpacity = useTransform(() => 1 - clamp01((scrollYProgress.get() - 0.08) / 0.18));

  return (
    <section id="hero" ref={sceneRef} className={cn('relative', scrollMoment && 'h-[135vh]')}>
      <div id="hero-pin" className={cn('relative', scrollMoment && 'sticky top-0')}>
        <div className="mx-auto flex max-w-[1280px] flex-wrap items-start gap-5 px-4 pt-6 pb-14 sm:gap-7 sm:px-6 lg:pt-11 lg:pb-12">
          <DesktopIcons />

          <div className="min-w-0 flex-[999_1_640px]">
            <OSWindow title="welcome.exe" size="lg">
              <div className="dot-grid relative flex flex-wrap items-end gap-6 overflow-hidden px-5 pt-7 sm:px-9 sm:pt-9 lg:min-h-[600px]">
                <div
                  aria-hidden="true"
                  className="pointer-events-none absolute inset-x-0 top-[18px] text-center font-mono text-[clamp(72px,17vw,250px)] leading-none tracking-[0.05em] whitespace-nowrap text-[var(--ghost)]"
                >
                  ISABEL
                </div>

                {/* Intro text */}
                <div className="relative min-w-0 flex-[1_1_300px] sm:pb-10">
                  <p className="mb-3 font-mono text-[13px] tracking-[0.3em] text-muted">ISABEL · PRODUCT BUILDER</p>
                  <h1 className="m-0 font-mono text-[clamp(40px,5.6vw,80px)] leading-[0.98] font-normal">
                    Hi! I&apos;m Isabel,
                  </h1>
                  <p className="mt-3 min-h-[44px] font-mono text-[clamp(22px,2.5vw,32px)] text-accent">
                    {displayText}
                    <span className="animate-blink text-ink">|</span>
                  </p>
                  <div className="mt-[18px] flex flex-wrap gap-2">
                    {heroChips.map((chip) => (
                      <span
                        key={chip.label}
                        className="rounded-full border-2 bg-window px-3 py-[5px] text-[13px] font-extrabold"
                        style={{ borderColor: `var(--tint-${chip.tint})` }}
                      >
                        {chip.label}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Intro avatar with its speech bubble; #badge-anchor marks the hand the ID badge hangs from */}
                <div className="relative order-last mx-auto h-[360px] w-[200px] flex-none self-end sm:h-[533px] sm:w-[296px] lg:order-none">
                  <div aria-hidden="true" className="absolute inset-x-[22%] bottom-5 h-[22px] rounded-[50%] bg-[hsla(270,40%,45%,0.18)]" />
                  {scrollMoment && <div id="badge-anchor" aria-hidden="true" className="absolute top-[49%] left-[72%] size-0" />}
                  <motion.div
                    className="absolute inset-0"
                    style={scrollMoment ? { y: avatarY, opacity: avatarOpacity } : undefined}
                  >
                    <IntroAvatar className="absolute inset-0" />
                    <div className="absolute top-0 left-[64%] rounded-[16px_16px_16px_4px] border-2 border-edge bg-window px-3 py-1.5 font-hand text-lg font-bold whitespace-nowrap shadow-[0_4px_0_hsla(240,30%,20%,0.25)] sm:top-1.5 sm:left-[206px] sm:px-3.5 sm:py-2 sm:text-2xl">
                      hi! I&apos;m Isabel ✿
                    </div>
                    <span aria-hidden="true" className="absolute top-[140px] left-0.5 text-lg text-[#fcd34d]">✦</span>
                    <span aria-hidden="true" className="absolute top-[260px] right-0 text-base text-[#f9a8d4]">♥</span>
                  </motion.div>
                </div>

                {/* CTAs */}
                <div className="relative flex basis-full flex-col gap-3 pb-6 sm:ml-auto sm:min-w-[220px] sm:flex-[0_1_240px] sm:pb-10">
                  <a
                    href="#projects"
                    className="flex min-h-12 items-center justify-center rounded-full bg-ink px-5 text-[15px] font-extrabold text-on-ink no-underline shadow-accent"
                  >
                    explore my work →
                  </a>
                  <div className="flex gap-2.5">
                    <a
                      href="#contact"
                      className="flex min-h-11 flex-1 items-center justify-center rounded-full border-2 border-edge bg-window text-sm font-extrabold text-ink no-underline"
                    >
                      let&apos;s talk
                    </a>
                    <a
                      href={links.resume}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex min-h-11 flex-1 items-center justify-center rounded-full border-2 border-edge bg-window text-sm font-extrabold text-ink no-underline"
                    >
                      résumé ↓
                    </a>
                  </div>
                </div>
              </div>
            </OSWindow>
          </div>
        </div>

        <div className="absolute inset-x-0 bottom-1 flex justify-center">
          <a
            href="#about"
            className="animate-bounce p-2 text-muted transition-colors hover:text-ink"
            aria-label="Scroll to about section"
          >
            <ChevronDown size={28} />
          </a>
        </div>
      </div>
    </section>
  );
}
