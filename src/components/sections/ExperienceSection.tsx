'use client';
import React, { useState } from 'react';
import Image from 'next/image';
import { ChevronDown } from 'lucide-react';
import SectionHeading from '@/components/ui/SectionHeading';
import { experiences, Experience, ExperienceTag } from '@/data/experiences';
import { useScrollReveal } from '@/hooks/useScrollReveal';
import { cn } from '@/lib/utils';

// Collapsed, the log shows everything that started in this year or later
const SHOW_FROM_YEAR = 2021;

const tagWash: Record<ExperienceTag, string> = {
  school: 'bg-wash-lilac',
  internship: 'bg-wash-blue',
  work: 'bg-wash-sky',
  community: 'bg-wash-pink',
  teaching: 'bg-wash-teal',
  founder: 'bg-wash-yellow',
};

function slugify(text: string) {
  return text.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');
}

// "now" for things still in progress, otherwise the start year
function yearOf(exp: Experience) {
  return exp.startDate ? (exp.startDate.match(/\d{4}/)?.[0] ?? '') : 'now';
}

type Row =
  | { kind: 'year'; label: string }
  | { kind: 'entry'; exp: Experience; side: 'left' | 'right' };

function buildRows(list: Experience[]): Row[] {
  const rows: Row[] = [];
  let lastYear = '';
  list.forEach((exp, i) => {
    const year = yearOf(exp);
    if (year !== lastYear) {
      rows.push({ kind: 'year', label: year });
      lastYear = year;
    }
    rows.push({ kind: 'entry', exp, side: i % 2 === 0 ? 'left' : 'right' });
  });
  return rows;
}

const allRows = buildRows(experiences);
const recentRows = allRows.filter((row) => {
  const label = row.kind === 'year' ? row.label : yearOf(row.exp);
  return label === 'now' || Number(label) >= SHOW_FROM_YEAR;
});

function CompanyLogo({ exp }: { exp: Experience }) {
  const [imgError, setImgError] = useState(false);
  return (
    <span className="relative flex size-4 flex-none items-center justify-center overflow-hidden rounded-[4px] bg-white">
      {exp.logoUrl && !imgError ? (
        <Image src={exp.logoUrl} alt="" fill sizes="16px" className="object-contain" onError={() => setImgError(true)} />
      ) : (
        <span className="font-mono text-[9px] leading-none text-[hsl(240,30%,20%)]">{exp.company.charAt(0)}</span>
      )}
    </span>
  );
}

function TimelineCard({ exp, side }: { exp: Experience; side: 'left' | 'right' }) {
  const [isOpen, setIsOpen] = useState(false);
  const expandable = exp.bullets.length > 0;
  const fileName = exp.fileName ?? `${slugify(exp.company)}.exp`;
  const dates = exp.startDate ? `${exp.startDate} – ${exp.endDate}` : 'in progress';

  return (
    <div className="animate-pop overflow-hidden rounded-xl border border-white/90 bg-window text-ink shadow-window-sm dark:border-white/10">
      <div
        className={cn(
          'flex h-7 items-center justify-between gap-2 px-2.5 font-mono text-[11px]',
          side === 'left' ? 'titlebar-pink' : 'titlebar-blue'
        )}
      >
        <span className="flex min-w-0 items-center gap-1.5">
          <CompanyLogo exp={exp} />
          <span className="truncate">{fileName}</span>
        </span>
        <span className="flex-none">{dates}</span>
      </div>

      <button
        onClick={() => setIsOpen(!isOpen)}
        disabled={!expandable}
        aria-expanded={expandable ? isOpen : undefined}
        className="block w-full px-3.5 pt-3 pb-3.5 text-left disabled:cursor-default"
      >
        <span className="block text-[17px] leading-tight font-black">{exp.role}</span>
        <span className="mt-1 block text-sm text-ink-soft">
          {exp.company}
          {exp.note && ` · ${exp.note}`}
        </span>
        <span className="mt-2.5 flex items-center justify-between">
          <span className={cn('rounded-full px-2.5 py-[3px] text-[11px] font-extrabold', tagWash[exp.tag])}>{exp.tag}</span>
          {expandable && (
            <ChevronDown
              className={cn('size-4 text-muted transition-transform', isOpen && 'rotate-180')}
              aria-hidden="true"
            />
          )}
        </span>
      </button>

      {isOpen && (
        <div className="animate-pop border-t border-window-line bg-window-alt px-3.5 pt-3 pb-4">
          {exp.location && <p className="mb-2 font-mono text-xs text-muted">{exp.location}</p>}
          <ul className="space-y-1.5">
            {exp.bullets.map((b, i) => (
              <li key={i} className="flex gap-2 text-sm leading-relaxed text-ink-soft">
                <span className="mt-0.5 flex-shrink-0 text-accent">·</span>
                <span>{b}</span>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

export default function ExperienceSection() {
  const [showAll, setShowAll] = useState(false);
  const { ref, isVisible } = useScrollReveal();
  const rows = showAll ? allRows : recentRows;

  return (
    <section
      id="experience"
      ref={ref}
      className={`mx-auto w-full max-w-[1100px] px-4 py-[72px] transition-[opacity,translate] duration-700 sm:px-6 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2'
      }`}
    >
      <SectionHeading eyebrow="EXPERIENCE.LOG" title="education &" accent="experience" />
      <p className="mt-3.5 text-[17px] text-ink-soft">{experiences.length} files in experience.log, newest first.</p>

      <div className="relative mt-9">
        {/* Dashed spine: down the left on phones, down the middle from md */}
        <div
          aria-hidden="true"
          className="absolute top-0 bottom-0 left-[18px] -ml-[1.5px] w-[3px] opacity-35 md:left-1/2"
          style={{ background: 'repeating-linear-gradient(180deg, var(--ink) 0 8px, transparent 8px 14px)' }}
        />

        {rows.map((row) =>
          row.kind === 'year' ? (
            <div key={`year-${row.label}`} className="relative mt-[26px] mb-[18px] flex justify-start md:justify-center">
              <span className="rounded-xl border-2 border-edge bg-[hsl(300,60%,96%)] px-[18px] py-1 font-mono text-[clamp(26px,4vw,46px)] leading-[1.1] shadow-hard dark:bg-window">
                {row.label}
              </span>
            </div>
          ) : (
            <div
              key={row.exp.company + row.exp.role}
              className="relative mb-4 grid grid-cols-[36px_minmax(0,1fr)] items-center md:grid-cols-[minmax(0,1fr)_52px_minmax(0,1fr)]"
            >
              <div className="col-start-1 row-start-1 flex justify-center md:col-start-2">
                <span className="block size-4 rounded-full border-2 border-edge bg-tint-pink" />
              </div>
              <div
                className={cn(
                  'col-start-2 row-start-1 min-w-0',
                  row.side === 'left' ? 'md:col-start-1' : 'md:col-start-3'
                )}
              >
                <TimelineCard exp={row.exp} side={row.side} />
              </div>
            </div>
          )
        )}
      </div>

      {allRows.length > recentRows.length && (
        <div className="mt-[18px] flex justify-center">
          <button
            onClick={() => setShowAll(!showAll)}
            aria-expanded={showAll}
            className="min-h-11 rounded-full border-2 border-edge bg-window px-5 font-mono text-sm text-ink shadow-hard"
          >
            {showAll ? 'show fewer files ↑' : 'show more files ↓'}
          </button>
        </div>
      )}
    </section>
  );
}
