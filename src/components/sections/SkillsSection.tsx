'use client';

import React, { useState } from 'react';
import SectionHeading from '@/components/ui/SectionHeading';
import { skillFolders } from '@/data/skills';
import { useScrollReveal } from '@/hooks/useScrollReveal';
import { cn } from '@/lib/utils';

// Flatten the folders into numbered "elements"
const tiles = skillFolders.flatMap((folder) =>
  folder.elements.map((element) => ({ ...element, folder: folder.id, tint: folder.tint }))
).map((tile, i) => ({ ...tile, num: String(i + 1).padStart(2, '0') }));

export default function SkillsSection() {
  const [activeFolderId, setActiveFolderId] = useState('all');
  const [inspected, setInspected] = useState(0);
  const { ref, isVisible } = useScrollReveal();

  const chips = [{ id: 'all', label: 'all/', tint: null }, ...skillFolders];
  const current = tiles[inspected];

  return (
    <section
      id="skills"
      ref={ref}
      className={`mx-auto w-full max-w-[1200px] px-4 py-14 transition-all duration-700 sm:px-6 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2'
      }`}
    >
      <div className="flex flex-wrap items-end justify-between gap-x-6 gap-y-2">
        <SectionHeading
          eyebrow="SKILLS.EXE"
          title="the periodic table"
          accent="of my stack"
          size="sm"
          className="min-w-0 flex-[1_1_520px]"
        />
        <p className="m-0 flex-[0_1_340px] text-[15px] leading-[1.55] text-ink-soft">
          {tiles.length} elements in {skillFolders.length} folders. Hover or tap a tile to inspect it, or open a
          folder to light it up.
        </p>
      </div>

      <div role="group" aria-label="Skill folders" className="mt-[22px] mb-4 flex flex-wrap gap-2">
        {chips.map((chip) => {
          const on = activeFolderId === chip.id;
          return (
            <button
              key={chip.id}
              onClick={() => setActiveFolderId(chip.id)}
              aria-pressed={on}
              className={cn(
                'inline-flex min-h-10 items-center gap-[7px] rounded-full border-2 px-3.5 text-[13px] font-extrabold text-ink transition-all duration-200',
                on ? 'border-edge shadow-hard' : 'border-edge-soft bg-window shadow-[0_2px_0_hsla(240,30%,20%,0.12)]'
              )}
              style={on && chip.tint ? { background: `var(--tint-${chip.tint})` } : on ? { background: 'var(--window)' } : undefined}
            >
              <span
                className="block size-[11px] rounded-[3px] border border-[hsla(240,30%,20%,0.3)]"
                style={{ background: chip.tint ? `var(--tint-${chip.tint})` : '#ffffff' }}
              />
              {chip.label}
            </button>
          );
        })}
      </div>

      <div className="flex flex-wrap items-start gap-5">
        <div className="grid min-w-0 flex-[999_1_480px] grid-cols-[repeat(auto-fill,minmax(50px,1fr))] gap-1.5">
          {tiles.map((tile, i) => {
            const lit = activeFolderId === 'all' || activeFolderId === tile.folder;
            const hovered = inspected === i;
            return (
              <button
                key={tile.sym}
                onMouseEnter={() => setInspected(i)}
                onFocus={() => setInspected(i)}
                onClick={() => setInspected(i)}
                aria-label={`${tile.name}, ${tile.folder}`}
                title={tile.name}
                className={cn(
                  'flex aspect-square min-w-0 flex-col justify-between rounded-[9px] border-2 px-[5px] py-1 text-left text-ink',
                  'transition-[opacity,filter,transform,box-shadow] duration-200 ease-[cubic-bezier(.2,.8,.2,1)]',
                  hovered ? '-translate-y-[3px] -rotate-3 border-edge shadow-hard' : 'border-[hsla(240,30%,20%,0.14)] shadow-[0_2px_0_hsla(240,30%,20%,0.22)]',
                  lit ? 'opacity-100' : 'opacity-20 grayscale-[0.7]'
                )}
                style={{ background: `var(--tint-${tile.tint})` }}
              >
                <span className="font-mono text-[8px] leading-none opacity-75">{tile.num}</span>
                <span className="font-mono text-lg leading-none">{tile.sym}</span>
              </button>
            );
          })}
        </div>

        <div className="w-full overflow-hidden rounded-xl border-2 border-edge bg-window shadow-hard sm:max-w-[300px] sm:flex-[1_1_260px] lg:sticky lg:top-6">
          <div className="titlebar-blue flex h-[30px] items-center justify-between px-2.5 font-mono text-xs">
            <span>inspector.exe</span>
            <span>#{current.num}</span>
          </div>
          <div className="dot-grid flex items-center gap-3.5 p-3.5" aria-live="polite">
            <div
              key={current.num}
              className="flex h-[76px] flex-[0_0_76px] animate-pop flex-col justify-between rounded-[13px] border-2 border-edge px-[9px] py-[7px] shadow-hard"
              style={{ background: `var(--tint-${current.tint})` }}
            >
              <span className="font-mono text-[10px]">{current.num}</span>
              <span className="font-mono text-[30px] leading-none">{current.sym}</span>
            </div>
            <div className="min-w-0">
              <p className="m-0 text-[17px] leading-tight font-black">{current.name}</p>
              <p className="mt-1.5 mb-0 font-mono text-xs text-muted">C:/skills/{current.folder}/</p>
              <p className="mt-1.5 mb-0 font-hand text-[19px] font-bold text-ink-soft">hover any element ✦</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
