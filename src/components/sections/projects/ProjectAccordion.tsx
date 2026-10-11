'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { Plus } from 'lucide-react';
import { WindowDots } from '@/components/ui/OSWindow';
import { projects, type Project } from '@/data/projects';
import type { Tint } from '@/data/profile';
import { useMediaQuery } from '@/hooks/useMediaQuery';
import { cn } from '@/lib/utils';
import { ProjectLinks, slugify } from './ProjectLinks';

const featured = projects
  .filter((p) => p.featuredOrder !== undefined)
  .sort((a, b) => a.featuredOrder! - b.featuredOrder!);

const closedTints: Tint[] = ['lilac', 'pink', 'blue', 'teal', 'yellow'];

const openShadow = '0 6px 0 var(--hard), 0 30px 60px -24px var(--soft-shadow)';
const closedShadow = '0 3px 0 hsla(240,30%,20%,0.25)';

function Preview({ project, className }: { project: Project; className?: string }) {
  const fit = project.previewFit === 'contain' ? 'object-contain' : 'object-cover';
  return (
    <div
      className={cn('relative min-w-0 overflow-hidden rounded-xl border-2 border-[hsla(240,30%,20%,0.18)]', className)}
      style={{ background: project.previewBg ?? 'var(--wash-lilac)' }}
    >
      {project.videoUrl ? (
        <video
          src={project.videoUrl}
          poster={project.imageUrl}
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          aria-label={`${project.title} demo video`}
          className={cn('absolute inset-0 size-full', fit)}
        />
      ) : (
        <Image
          src={project.imageUrl}
          alt={`${project.title} preview`}
          fill
          sizes="(min-width: 1024px) 40vw, 100vw"
          className={fit}
        />
      )}
    </div>
  );
}

function OpenBody({ project, num, stacked }: { project: Project; num: string; stacked: boolean }) {
  const cats = project.categories.filter((c) => c !== 'Featured').join(' · ').toUpperCase();
  return (
    <div
      className={cn(
        'flex min-h-0 flex-auto animate-pop gap-6 overflow-hidden',
        stacked ? 'flex-col p-5' : 'flex-wrap p-[26px]'
      )}
    >
      <div className="flex min-w-0 flex-[1_1_250px] flex-col gap-3">
        <p className="m-0 font-mono text-xs tracking-[0.18em] text-muted">
          {num} / {cats}
        </p>
        <h3 className="m-0 font-mono text-[clamp(30px,3vw,38px)] leading-none font-normal">{project.title}</h3>
        <p className="m-0 text-[17px] leading-[1.55] text-ink-soft">{project.description}</p>
        <div className="flex flex-wrap gap-1.5">
          {project.stack.map((tech) => (
            <span key={tech} className="rounded-full border border-tint-lilac bg-wash-lilac px-2.5 py-1 text-xs font-extrabold">
              {tech}
            </span>
          ))}
        </div>
        <div className="mt-auto flex flex-wrap gap-2 pt-1">
          <ProjectLinks project={project} label="open project ↗" icons={false} className="min-h-[46px] px-5" />
        </div>
      </div>
      <Preview
        project={project}
        className={stacked ? 'h-[240px] flex-none sm:h-[300px]' : 'min-h-[220px] flex-[1_1_240px] self-stretch'}
      />
    </div>
  );
}

function TitleBar({ project, num, open }: { project: Project; num: string; open: boolean }) {
  return (
    <div
      className={cn(
        'flex h-[34px] flex-none items-center justify-between overflow-hidden px-3 font-mono text-xs whitespace-nowrap text-white',
        open ? 'titlebar-blue' : 'bg-[hsl(240,30%,20%)]'
      )}
    >
      <span className="truncate">{open ? `${num}  ${slugify(project.title)}.proj` : num}</span>
      {open && <WindowDots />}
    </div>
  );
}

export default function ProjectAccordion() {
  const [openIndex, setOpenIndex] = useState(1);
  // Side-by-side windows need room; narrower screens get a stacked accordion
  const wide = useMediaQuery('(min-width: 1024px)');

  return (
    <div className={cn('mt-[34px] flex gap-3.5', wide ? 'flex-row' : 'flex-col')}>
      {featured.map((project, i) => {
        const open = openIndex === i;
        const num = String(i + 1).padStart(2, '0');
        const tint = closedTints[i % closedTints.length];
        return (
          <div
            key={project.title}
            onMouseEnter={wide ? () => setOpenIndex(i) : undefined}
            className={cn(
              'flex min-w-0 flex-col overflow-hidden rounded-[14px] border-2 bg-window text-ink',
              wide && 'h-[480px] transition-[flex,box-shadow] duration-[650ms] ease-[cubic-bezier(.2,.8,.2,1)]'
            )}
            style={{
              flex: wide ? (open ? '1 1 560px' : '0 0 78px') : undefined,
              borderColor: open ? 'var(--edge)' : 'var(--edge-soft)',
              boxShadow: open ? openShadow : closedShadow,
            }}
          >
            <TitleBar project={project} num={num} open={open} />
            {open ? (
              <OpenBody project={project} num={num} stacked={!wide} />
            ) : (
              <button
                onClick={() => setOpenIndex(i)}
                aria-label={`Open ${project.title}`}
                className={cn(
                  'flex w-full flex-auto items-center justify-between border-0 text-ink',
                  wide ? 'flex-col px-0 pt-[18px] pb-4' : 'h-14 px-4'
                )}
                style={{ background: `var(--wash-${tint})` }}
              >
                <span
                  className={cn(
                    'font-mono whitespace-nowrap',
                    wide ? 'rotate-180 text-[22px] tracking-[0.06em] [writing-mode:vertical-rl]' : 'text-xl'
                  )}
                >
                  {project.title}
                </span>
                <span className="flex size-[30px] flex-none items-center justify-center rounded-full border-2 border-edge bg-window">
                  <Plus className="size-3.5" strokeWidth={3} aria-hidden="true" />
                </span>
              </button>
            )}
          </div>
        );
      })}
    </div>
  );
}
