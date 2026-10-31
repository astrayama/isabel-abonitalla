'use client';
import React, { useEffect, useId, useRef } from 'react';
import { X } from 'lucide-react';
import OSWindow from '@/components/ui/OSWindow';
import CompanyLogo from './CompanyLogo';
import { lengthLabel, type Placed } from './calendarLayout';
import { tagWash } from './tags';

function slugify(text: string) {
  return text.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');
}

const chip = 'rounded-full border border-edge-soft bg-window px-2.5 py-[3px] font-mono text-[11px] text-ink-soft';

// Details for one calendar entry, popped open as a modal OS window
export default function ExperienceWindow({ item, onClose }: { item: Placed | null; onClose: () => void }) {
  const ref = useRef<HTMLDialogElement>(null);
  const titleId = useId();

  useEffect(() => {
    const dialog = ref.current;
    if (item && dialog && !dialog.open) dialog.showModal();
  }, [item]);

  const exp = item?.exp;

  return (
    <dialog
      ref={ref}
      aria-labelledby={titleId}
      onClose={onClose}
      // The window fills the dialog box, so a click on the dialog itself landed on the backdrop
      onClick={(e) => e.target === e.currentTarget && e.currentTarget.close()}
      className="m-auto w-[min(560px,calc(100vw-32px))] overflow-visible border-0 bg-transparent p-0 text-ink backdrop:bg-[hsla(240,30%,10%,0.45)] backdrop:backdrop-blur-[2px]"
    >
      {item && exp && (
        <OSWindow
          title={exp.fileName ?? `${slugify(exp.company)}.exp`}
          chrome="hard"
          size="lg"
          className="max-h-[calc(100dvh-48px)] animate-pop"
          bodyClassName="min-h-0 overflow-y-auto"
          titleRight={
            <button
              type="button"
              onClick={() => ref.current?.close()}
              aria-label="Close window"
              className="flex size-6 flex-none items-center justify-center rounded-md border border-white/50 bg-white/15 transition-colors hover:bg-white/30"
            >
              <X className="size-3.5" aria-hidden="true" />
            </button>
          }
        >
          <div className="flex items-start gap-3.5 p-5">
            <CompanyLogo exp={exp} size="lg" />
            <div className="min-w-0">
              <h3 id={titleId} className="m-0 text-[22px] leading-tight font-black">
                {exp.role}
              </h3>
              <p className="m-0 mt-1 text-[15px] text-ink-soft">
                {exp.company}
                {exp.note && ` · ${exp.note}`}
              </p>
            </div>
          </div>

          <div className="flex flex-wrap gap-1.5 border-y border-window-line bg-window-alt px-5 py-3">
            <span className="rounded-full px-2.5 py-[3px] text-[11px] font-extrabold" style={{ background: tagWash(exp.tag) }}>
              {exp.tag}
            </span>
            <span className={chip}>
              {exp.startDate === exp.endDate ? exp.startDate : `${exp.startDate} – ${exp.endDate}`}
            </span>
            <span className={chip}>{lengthLabel(item)}</span>
            {exp.location && <span className={chip}>{exp.location}</span>}
          </div>

          {exp.bullets.length > 0 && (
            <ul className="m-0 list-none space-y-1.5 px-5 pt-4 pb-5">
              {exp.bullets.map((b, i) => (
                <li key={i} className="flex gap-2 text-sm leading-relaxed text-ink-soft">
                  <span className="mt-0.5 flex-shrink-0 text-accent">·</span>
                  <span>{b}</span>
                </li>
              ))}
            </ul>
          )}

          {exp.detailUrl && (
            <div className="px-5 pb-5">
              <a href={exp.detailUrl} className="font-mono text-sm text-accent underline underline-offset-4">
                read more →
              </a>
            </div>
          )}
        </OSWindow>
      )}
    </dialog>
  );
}
