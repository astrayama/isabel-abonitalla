import React, { ReactNode } from 'react';
import Image from 'next/image';
import OSWindow from '@/components/ui/OSWindow';
import SectionHeading from '@/components/ui/SectionHeading';
import { cn } from '@/lib/utils';

// Building blocks for long-form case study pages, in the homepage's Kawaii OS style

export function CaseStudySection({
  id,
  eyebrow,
  title,
  accent,
  children,
}: {
  id: string;
  eyebrow: string;
  title: ReactNode;
  accent: string;
  children: ReactNode;
}) {
  return (
    <section id={id} className="flex scroll-mt-14 flex-col gap-7">
      <SectionHeading eyebrow={eyebrow} title={title} accent={accent} size="sm" />
      {children}
    </section>
  );
}

// Prose window: a fake file holding a chunk of the write-up
export function CaseStudyWindow({
  file,
  variant,
  children,
}: {
  file: string;
  variant?: 'blue' | 'pink';
  children: ReactNode;
}) {
  return (
    <OSWindow
      title={file}
      variant={variant}
      bodyClassName="flex flex-col gap-5 p-5 text-base leading-[1.65] text-ink-soft sm:p-8 sm:text-[17px]"
    >
      {children}
    </OSWindow>
  );
}

export function CaseStudySubheading({ children }: { children: ReactNode }) {
  return <h3 className="m-0 pt-2 font-mono text-[22px] leading-tight font-normal text-ink">{children}</h3>;
}

export function CaseStudyFigure({
  src,
  alt,
  caption,
  file,
  preload = false,
}: {
  src: string;
  alt: string;
  caption: string;
  file: string;
  preload?: boolean;
}) {
  return (
    <figure className="m-0 flex flex-col gap-3">
      <OSWindow title={file} variant="pink">
        <a href={src} target="_blank" rel="noopener noreferrer" className="block" aria-label={`${alt} (opens full size)`}>
          <Image
            src={src}
            alt={alt}
            width={2400}
            height={1500}
            sizes="(min-width: 1008px) 960px, 100vw"
            preload={preload}
            className="block h-auto w-full"
          />
        </a>
      </OSWindow>
      <figcaption className="px-1 text-sm leading-relaxed text-muted">{caption}</figcaption>
    </figure>
  );
}

export function CaseStudyTable({
  caption,
  headers,
  rows,
}: {
  caption: string;
  headers: string[];
  rows: ReactNode[][];
}) {
  return (
    <div className="overflow-x-auto rounded-xl border-2 border-window-line">
      <table className="w-full min-w-[560px] border-collapse text-left text-sm leading-relaxed">
        <caption className="sr-only">{caption}</caption>
        <thead className="bg-window-alt">
          <tr>
            {headers.map((header) => (
              <th
                key={header}
                scope="col"
                className="px-4 py-2.5 font-mono text-[11px] font-normal tracking-[0.12em] text-muted uppercase"
              >
                {header}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row, i) => (
            <tr key={i} className="border-t border-window-line align-top">
              {row.map((cell, j) =>
                j === 0 ? (
                  <th key={j} scope="row" className="px-4 py-3 font-extrabold text-ink">
                    {cell}
                  </th>
                ) : (
                  <td key={j} className="px-4 py-3 text-ink-soft">
                    {cell}
                  </td>
                )
              )}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

// Dashed key/value list, same look as the homepage's quick_facts.ini
export function FactList({ facts, className }: { facts: [label: string, value: ReactNode][]; className?: string }) {
  return (
    <dl className={cn('m-0', className)}>
      {facts.map(([label, value]) => (
        <div
          key={label}
          className="flex flex-col gap-1 border-b border-dashed border-tint-lilac py-[11px] last:border-b-0 sm:flex-row sm:gap-4"
        >
          <dt className="flex-none font-mono text-xs tracking-[0.1em] text-muted sm:w-28 sm:pt-0.5">{label}</dt>
          <dd className="m-0 text-sm font-extrabold text-ink">{value}</dd>
        </div>
      ))}
    </dl>
  );
}

export function Swatch({ color, label }: { color: string; label: string }) {
  return (
    <span className="inline-flex items-center gap-2 whitespace-nowrap">
      <span
        aria-hidden="true"
        className="block size-4 flex-none rounded-[5px] border-2 border-edge-soft"
        style={{ backgroundColor: color }}
      />
      <span className="text-ink">{label}</span>
      <span className="text-xs font-normal text-muted tabular-nums">{color}</span>
    </span>
  );
}
