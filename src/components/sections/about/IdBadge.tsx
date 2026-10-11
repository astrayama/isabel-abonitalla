'use client';

import React, { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import {
  motion,
  useMotionValue,
  useScroll,
  useSpring,
  useTransform,
  useVelocity,
} from 'framer-motion';
import { RotateCw } from 'lucide-react';
import { WindowDots } from '@/components/ui/OSWindow';
import { funFacts } from '@/data/funFacts';
import { OPEN_TO_WORK } from '@/config/site';
import { useMediaQuery } from '@/hooks/useMediaQuery';
import { useScrollMoment } from '@/hooks/useScrollMoment';
import { cn } from '@/lib/utils';

// The first flip shows the fact from the design; every flip after that is random
const FIRST_FACT = Math.max(0, funFacts.findIndex((fact) => fact.includes('tarot')));

function pickAnotherFact(current: number) {
  const next = Math.floor(Math.random() * (funFacts.length - 1));
  return next >= current ? next + 1 : next;
}

function factSize(fact: string) {
  if (fact.length > 150) return 'text-[21px]';
  if (fact.length > 100) return 'text-[24px]';
  return 'text-[30px]';
}

const stats = [
  { value: '18×', label: 'WINS', bg: 'bg-wash-lilac' },
  { value: 'TOP 50', label: 'MLH', bg: 'bg-wash-pink' },
  { value: '3.99', label: 'GPA', bg: 'bg-wash-blue' },
];

// Where things sit in the page, measured from the live layout (document coordinates)
type Geometry = {
  heroTop: number;     // top of #hero
  pinLength: number;   // how long the hero stays pinned
  handInPin: number;   // badge anchor's offset from the top of the pinned hero
  handX: number;       // badge anchor's x
  badgeTop: number;    // badge column's resting top
  badgeX: number;      // badge column's centre x
  vh: number;
};

const progress = (value: number, from: number, to: number) =>
  Math.min(1, Math.max(0, (value - from) / (to - from)));
const ease = (t: number) => t * t * (3 - 2 * t);

export default function IdBadge() {
  const [flipped, setFlipped] = useState(false);
  const [factIndex, setFactIndex] = useState(FIRST_FACT);
  const [hasFlipped, setHasFlipped] = useState(false);
  const [dragging, setDragging] = useState(false);
  const scrollMoment = useScrollMoment();
  // On touch screens the badge only flings sideways, so vertical swipes still scroll the page
  const coarsePointer = useMediaQuery('(pointer: coarse)');
  const columnRef = useRef<HTMLDivElement>(null);

  // Scroll moment: one badge makes the whole trip. It starts small, hanging from the avatar's
  // hand in the pinned hero, drops while the hero is pinned, then settles into about.txt.
  const { scrollY } = useScroll();
  const geometry = useMotionValue<Geometry | null>(null);
  const handoff = useTransform(() => {
    const g = geometry.get();
    if (!g) return 1;
    const s = scrollY.get();
    const pinEnd = g.heroTop + g.pinLength;
    const settled = g.badgeTop - g.vh * 0.06;
    // Most of the drop happens while the hero is pinned; the rest as about.txt scrolls up to meet it
    return 0.55 * ease(progress(s, g.heroTop + g.pinLength * 0.1, pinEnd)) + 0.45 * ease(progress(s, pinEnd, settled));
  });
  const dropX = useTransform(() => {
    const g = geometry.get();
    return g ? (1 - handoff.get()) * (g.handX - g.badgeX) : 0;
  });
  const dropY = useTransform(() => {
    const g = geometry.get();
    if (!g) return 0;
    const s = scrollY.get();
    const pinEnd = g.heroTop + g.pinLength;
    // Where the sticky hero (and so the hand) is on screen right now
    const pinTop = s < g.heroTop ? g.heroTop - s : s <= pinEnd ? 0 : pinEnd - s;
    return (1 - handoff.get()) * (pinTop + g.handInPin - (g.badgeTop - s));
  });
  const dropScale = useTransform(handoff, [0, 1], [0.45, 1]);
  const dropRotate = useTransform(handoff, [0, 0.35, 0.75, 1], [0, 7, -3, 0]);
  // Hidden at the very top of the page, then it appears in the avatar's hand as you start scrolling
  const dropOpacity = useTransform(() => {
    const g = geometry.get();
    return g ? progress(scrollY.get(), 0, g.heroTop + g.pinLength * 0.08) : 1;
  });
  const captionOpacity = useTransform(handoff, [0.8, 1], [0, 1]);

  // Drag & fling: the badge tilts against its sideways speed, then springs home
  const x = useMotionValue(0);
  const tilt = useSpring(useTransform(useVelocity(x), [-2000, 0, 2000], [-24, 0, 24]), {
    stiffness: 300,
    damping: 18,
  });

  useEffect(() => {
    if (!scrollMoment) {
      geometry.set(null);
      return;
    }
    const measure = () => {
      const hero = document.getElementById('hero');
      const pin = document.getElementById('hero-pin');
      const anchor = document.getElementById('badge-anchor');
      const column = columnRef.current;
      if (!hero || !pin || !anchor || !column) return;
      const sy = window.scrollY;
      const a = anchor.getBoundingClientRect();
      const c = column.getBoundingClientRect();
      geometry.set({
        heroTop: hero.getBoundingClientRect().top + sy,
        pinLength: hero.offsetHeight - pin.offsetHeight,
        handInPin: a.top - pin.getBoundingClientRect().top,
        handX: a.left,
        badgeTop: c.top + sy,
        badgeX: c.left + c.width / 2,
        vh: window.innerHeight,
      });
    };
    measure();
    document.fonts?.ready.then(measure);
    // Re-measure whenever the page reflows (fonts, images, resizes)
    const observer = new ResizeObserver(measure);
    observer.observe(document.body);
    return () => observer.disconnect();
  }, [scrollMoment, geometry]);

  const flip = () => {
    if (!flipped && hasFlipped) setFactIndex(pickAnotherFact);
    if (!flipped) setHasFlipped(true);
    setFlipped(!flipped);
  };

  const fact = funFacts[factIndex];

  return (
    <div ref={columnRef} className="flex flex-col items-center">
      <motion.div
        className="origin-top will-change-transform"
        style={scrollMoment ? { x: dropX, y: dropY, scale: dropScale, rotate: dropRotate, opacity: dropOpacity } : undefined}
      >
        <div className={cn('origin-top', !dragging && 'animate-swing')}>
          <motion.div
            drag={coarsePointer ? 'x' : true}
            dragSnapToOrigin
            dragTransition={{ bounceStiffness: 220, bounceDamping: 9 }}
            onDragStart={() => setDragging(true)}
            onDragEnd={() => setDragging(false)}
            whileDrag={{ scale: 1.03 }}
            style={{ x, rotate: tilt }}
            className="relative flex origin-top cursor-grab flex-col items-center active:cursor-grabbing"
          >
            {/* Lanyard */}
            <div className="flex h-[170px] w-7 justify-center overflow-hidden border-x-2 border-[hsla(240,30%,20%,0.18)] bg-tint-pink">
              <span
                className="font-mono text-[11px] tracking-[0.25em] whitespace-nowrap text-ink"
                style={{ writingMode: 'vertical-rl' }}
              >
                ISABEL ♥ ISABEL ♥ ISABEL ♥ ISABEL
              </span>
            </div>
            <div className="h-[22px] w-[46px] rounded-[6px_6px_12px_12px] border-2 border-[hsl(240,30%,20%)] bg-gradient-to-b from-[#f3f4f6] to-[#a1a1aa]" />

            {/* Badge card */}
            <div className="-mt-[3px] w-[280px] overflow-hidden rounded-2xl border-2 border-edge bg-window shadow-[0_6px_0_var(--hard),0_30px_50px_-20px_var(--soft-shadow)]">
              {!flipped ? (
                <div key="front" className="animate-pop">
                  <div className="titlebar-blue flex h-[34px] items-center justify-between px-3 font-mono text-[13px]">
                    <span>user.profile</span>
                    <WindowDots />
                  </div>
                  <div
                    className="relative flex flex-col items-center px-[18px] pt-[18px] pb-4"
                    style={{
                      backgroundImage: 'radial-gradient(hsla(330,70%,80%,0.45) 1px, transparent 1.5px)',
                      backgroundSize: '14px 14px',
                    }}
                  >
                    <div className="relative -rotate-3 bg-white px-2 pt-2 pb-[30px] shadow-[0_8px_20px_hsla(240,30%,20%,0.18)]">
                      <Image
                        src="/images/isa.png"
                        alt="Portrait of Isabel"
                        width={150}
                        height={168}
                        loading="eager"
                        draggable={false}
                        className="block h-[168px] w-[150px] object-cover object-[50%_18%]"
                      />
                      <span className="absolute inset-x-0 bottom-[3px] text-center font-hand text-[22px] font-bold text-[hsl(240,30%,30%)]">
                        isabel. ✿
                      </span>
                    </div>
                    <span aria-hidden="true" className="absolute top-3 right-[22px] rotate-[14deg] text-[30px] text-[#fcd34d]">★</span>
                    <span aria-hidden="true" className="absolute top-[120px] left-[18px] -rotate-12 text-xl text-[hsl(330,70%,72%)]">♥</span>
                    <p className="mt-4 font-mono text-[28px] leading-none tracking-[0.1em]">ISABEL</p>
                    <p className="mt-1.5 text-[13px] font-bold text-muted">PM · product engineer</p>
                    <div className="mt-3.5 grid w-full grid-cols-3 gap-1.5 text-center">
                      {stats.map((stat) => (
                        <div key={stat.label} className={cn('rounded-lg px-0.5 py-1.5', stat.bg)}>
                          <div className="font-mono text-[17px]">{stat.value}</div>
                          <div className="text-[10px] font-extrabold tracking-[0.08em] text-muted">{stat.label}</div>
                        </div>
                      ))}
                    </div>
                    <div className="mt-3.5 flex w-full items-center gap-2.5">
                      <div aria-hidden="true" className="barcode h-[30px] flex-auto" />
                      <span className="font-mono text-[10px] text-muted">ISA·2026</span>
                    </div>
                  </div>
                </div>
              ) : (
                <div key={`back-${factIndex}`} className="animate-pop">
                  <div className="titlebar-pink flex h-[34px] items-center justify-between px-3 font-mono text-[13px]">
                    <span>fun_fact.txt</span>
                    <WindowDots />
                  </div>
                  <div
                    className="flex min-h-[418px] flex-col gap-[18px] px-[22px] py-6"
                    style={{
                      backgroundImage: 'repeating-linear-gradient(0deg, transparent 0 31px, hsla(210,70%,75%,0.4) 31px 32px)',
                    }}
                  >
                    <p className={cn('m-0 font-hand leading-[1.1] font-bold', factSize(fact))}>{fact}</p>
                    {OPEN_TO_WORK && (
                      <div className="mt-auto inline-flex items-center gap-2 self-start rounded-full border border-green-200 bg-green-50 px-3 py-1.5 text-[13px] font-extrabold text-green-700 dark:border-green-400/30 dark:bg-green-500/15 dark:text-green-300">
                        <span className="block size-2 rounded-full bg-green-500" />
                        open to work
                      </div>
                    )}
                  </div>
                </div>
              )}
            </div>
          </motion.div>
        </div>
      </motion.div>

      <motion.div
        className="flex flex-col items-center"
        style={scrollMoment ? { opacity: captionOpacity } : undefined}
      >
        <p className="mt-[22px] mb-2 text-center font-hand text-2xl font-bold text-ink-soft">the rest of me? flip the card.</p>
        <button
          onClick={flip}
          className="inline-flex min-h-11 items-center gap-2 rounded-full border-2 border-edge bg-window px-[18px] font-extrabold text-ink shadow-hard"
        >
          <RotateCw className="size-[18px]" aria-hidden="true" />
          {flipped ? 'flip back' : 'flip card'}
        </button>
      </motion.div>
    </div>
  );
}
