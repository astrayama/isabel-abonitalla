"use client";

import React, { useState, useEffect, useRef, useSyncExternalStore } from 'react';
import { OPEN_TO_WORK } from '@/config/site';
import { useTheme } from 'next-themes';
import { Sun, Moon } from 'lucide-react';
import { navSections } from '@/data/profile';
import { useActiveSection } from '@/hooks/useActiveSection';
import { useHasMounted } from '@/hooks/useMediaQuery';
import { cn } from '@/lib/utils';

const menuItems = [
  ...navSections.slice(0, 6),
  { id: 'achievements', label: 'achievements/' },
  ...navSections.slice(6),
];

const formatTime = () =>
  new Date().toLocaleTimeString('en-US', { hour: 'numeric', minute: '2-digit', hour12: true });
const subscribeClock = (tick: () => void) => {
  const id = setInterval(tick, 1000);
  return () => clearInterval(id);
};

const noopSubscribe = () => () => {};
const readStartClicked = () => !!sessionStorage.getItem('start-clicked');

export default function Taskbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [clickedNow, setClickedNow] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  const { theme, setTheme } = useTheme();
  const mounted = useHasMounted();
  const time = useSyncExternalStore(subscribeClock, formatTime, () => '');
  // The START button pulses until it's been clicked once this session
  const clickedBefore = useSyncExternalStore(noopSubscribe, readStartClicked, () => true);
  const hasBeenClicked = clickedNow || clickedBefore;

  const [active, setActive] = useActiveSection(navSections.map((s) => s.id));
  const isDark = mounted && theme === 'dark';

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setIsMenuOpen(false);
      }
    };

    if (isMenuOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isMenuOpen]);

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 flex h-12 items-center gap-2.5 bg-[hsla(220,50%,25%,0.97)] px-3 text-white">
      {/* START button & menu */}
      <div className="relative flex h-full flex-none items-center" ref={menuRef}>
        {isMenuOpen && (
          <div className="absolute bottom-full left-0 z-50 mb-1.5 flex w-52 overflow-hidden rounded-t-xl border-2 border-edge bg-window shadow-hard animate-pop">
            {/* Sidebar decoration */}
            <div className="flex w-8 flex-none items-end justify-center bg-gradient-to-b from-tint-pink to-tint-lilac pb-2">
              <span
                className="font-mono text-[11px] tracking-[0.25em] text-ink"
                style={{ writingMode: 'vertical-rl', transform: 'rotate(180deg)' }}
              >
                isaOS
              </span>
            </div>

            <nav aria-label="Start menu" className="flex min-w-0 flex-1 flex-col py-1">
              {menuItems.map((item) => (
                <a
                  key={item.id}
                  href={`#${item.id}`}
                  onClick={() => {
                    setIsMenuOpen(false);
                    setActive(item.id);
                  }}
                  className="px-4 py-2 font-mono text-xs text-ink transition-colors hover:bg-ink hover:text-on-ink"
                >
                  {item.label}
                </a>
              ))}

              <div className="mt-1 border-t border-window-line pt-1">
                <button
                  onClick={() => setTheme(isDark ? 'light' : 'dark')}
                  className="flex w-full items-center justify-between px-4 py-2 font-mono text-xs text-ink transition-colors hover:bg-ink hover:text-on-ink"
                  aria-label="Toggle dark mode"
                >
                  <span className="flex items-center gap-2">
                    {isDark ? <Sun className="size-4" /> : <Moon className="size-4" />}
                    {isDark ? 'light mode' : 'dark mode'}
                  </span>
                  <span className={cn('relative h-4 w-8 rounded-full transition-colors', isDark ? 'bg-tint-lilac' : 'bg-edge-soft')}>
                    <span
                      className={cn(
                        'absolute top-0.5 size-3 rounded-full bg-white shadow transition-transform',
                        isDark ? 'translate-x-4' : 'translate-x-0.5'
                      )}
                    />
                  </span>
                </button>
              </div>
            </nav>
          </div>
        )}
        <button
          onClick={() => {
            setIsMenuOpen(!isMenuOpen);
            if (!hasBeenClicked) {
              setClickedNow(true);
              sessionStorage.setItem('start-clicked', '1');
            }
          }}
          aria-expanded={isMenuOpen}
          className={cn(
            'min-h-[38px] rounded-md border-2 px-3 font-mono text-[13px] text-white transition-all',
            isMenuOpen
              ? 'border-white/60 bg-white/20'
              : hasBeenClicked
                ? 'border-tint-pink hover:bg-white/10'
                : 'animate-pulse border-tint-pink hover:bg-white/10'
          )}
        >
          ♥ START
        </button>
      </div>

      {/* Open to work indicator */}
      {OPEN_TO_WORK && (
        <span className="inline-flex flex-none items-center gap-1.5 rounded-full border border-green-200 bg-green-50 px-2.5 py-1 text-xs font-extrabold text-green-700">
          <span className="block size-[7px] animate-pulse rounded-full bg-green-500" />
          open to work
        </span>
      )}

      {/* Section tabs */}
      <nav aria-label="Open windows" className="hidden min-w-0 flex-1 gap-1.5 overflow-x-auto md:flex">
        {navSections.map((section) => {
          const on = active === section.id;
          return (
            <a
              key={section.id}
              href={`#${section.id}`}
              onClick={() => setActive(section.id)}
              aria-current={on ? 'true' : undefined}
              className={cn(
                'inline-flex h-9 flex-none items-center rounded-md border px-3 font-mono text-xs transition-all duration-200',
                on
                  ? 'border-[hsl(330,70%,90%)] bg-[hsl(330,70%,82%)] text-[hsl(240,30%,20%)] shadow-[inset_0_2px_0_hsla(240,30%,20%,0.25)]'
                  : 'border-white/20 bg-white/[0.08] text-white/90 hover:bg-white/15'
              )}
            >
              {section.label}
            </a>
          );
        })}
      </nav>
      <div className="flex-1 md:hidden" />

      {/* Clock */}
      <span className="min-w-[64px] flex-none text-right font-mono text-[13px]">{time}</span>
    </div>
  );
}
