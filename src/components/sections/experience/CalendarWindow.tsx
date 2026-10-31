'use client';
import React, { useMemo, useState, useSyncExternalStore } from 'react';
import OSWindow from '@/components/ui/OSWindow';
import { experiences } from '@/data/experiences';
import { cn } from '@/lib/utils';
import CompanyLogo from './CompanyLogo';
import ExperienceWindow from './ExperienceWindow';
import { dateRange, isRailTag, latestDatedMonth, layoutCalendar, type Placed } from './calendarLayout';
import { tagStripes, tagTint, tagWash } from './tags';

const noopSubscribe = () => () => {};
const currentMonth = () => {
  const d = new Date();
  return d.getFullYear() * 12 + d.getMonth();
};
const lastDatedMonth = latestDatedMonth(experiences);

// Legend follows the data's order
const tags = Array.from(new Set(experiences.map((exp) => exp.tag)));

const sideways: React.CSSProperties = { writingMode: 'vertical-rl', transform: 'rotate(180deg)' };

const describe = ({ exp }: Placed) => `${exp.role}, ${exp.company}, ${exp.startDate} to ${exp.endDate}`;

type EntryProps = { item: Placed; onOpen: (item: Placed) => void };

function Rail({ item, onOpen }: EntryProps) {
  const { exp } = item;
  return (
    <button
      type="button"
      onClick={() => onOpen(item)}
      aria-haspopup="dialog"
      aria-label={describe(item)}
      className="flex size-full items-end justify-center overflow-hidden rounded-md border-2 border-edge py-1.5 shadow-hard-sm transition-[translate,box-shadow] hover:-translate-y-0.5 hover:shadow-hard"
      style={{ background: tagStripes(exp.tag) }}
    >
      <span
        className="max-h-full truncate rounded-sm px-px py-1 font-mono text-[11px] leading-none text-ink md:text-xs"
        style={{ ...sideways, background: tagWash(exp.tag) }}
      >
        {exp.company}
      </span>
    </button>
  );
}

function Card({ item, onOpen }: EntryProps) {
  const { exp } = item;
  // Short stints are a one-line pill, longer ones a tall card
  const compact = item.end - item.start + 1 <= 4;
  return (
    <button
      type="button"
      onClick={() => onOpen(item)}
      aria-haspopup="dialog"
      aria-label={describe(item)}
      className={cn(
        '@container flex size-full overflow-hidden rounded-lg border-2 border-edge text-left text-ink shadow-hard-sm transition-[translate,box-shadow] hover:-translate-y-0.5 hover:shadow-hard',
        compact ? 'items-center gap-2 px-2' : 'flex-col items-start justify-between p-2 md:p-2.5'
      )}
      style={{ background: tagTint(exp.tag) }}
    >
      <CompanyLogo exp={exp} />
      {compact ? (
        <>
          <span className="min-w-0 flex-1 truncate text-xs font-extrabold md:text-[13px] @max-[6rem]:hidden">
            {exp.role}
            <span className="font-semibold text-ink-soft"> • {exp.company}</span>
          </span>
          <span className="hidden flex-none font-mono text-[11px] text-ink-soft uppercase @min-[22rem]:inline">
            {dateRange(item)}
          </span>
        </>
      ) : (
        <span className="block w-full min-w-0">
          <span className="line-clamp-2 text-xs leading-snug font-extrabold break-words hyphens-auto md:text-sm">
            {exp.role}
            <span className="font-semibold text-ink-soft @max-[8rem]:hidden"> • {exp.company}</span>
          </span>
          <span className="mt-1 block truncate font-mono text-[10px] text-ink-soft uppercase md:text-[11px] @max-[7rem]:hidden">
            {dateRange(item)}
          </span>
        </span>
      )}
    </button>
  );
}

// Career calendar: years run up the left edge, newest on top, and every entry is as tall as it lasted
export default function CalendarWindow() {
  // "Present" means this month; before hydration it's the latest real date so server and client markup agree
  const now = useSyncExternalStore(noopSubscribe, currentMonth, () => lastDatedMonth);
  const { firstYear, topYear, railLanes, cardLanes, items } = useMemo(() => layoutCalendar(experiences, now), [now]);
  const [selected, setSelected] = useState<Placed | null>(null);

  const top = topYear * 12;
  const years = Array.from({ length: topYear - firstYear + 1 }, (_, i) => topYear - i);

  return (
    <>
      <OSWindow title="calendar.app — experience.log" size="lg" className="mt-9" bodyClassName="flex flex-col">
        <div className="max-h-[min(72vh,720px)] overflow-y-auto">
          <div className="sticky top-0 z-20 flex flex-wrap items-center gap-x-3.5 gap-y-1 border-b border-window-line bg-window/95 px-3.5 py-2 backdrop-blur-sm">
            {tags.map((tag) => (
              <span key={tag} className="flex items-center gap-1.5 text-xs font-extrabold text-ink-soft">
                <span
                  aria-hidden="true"
                  className="block size-3 rounded-[3px] border-[1.5px] border-edge"
                  style={{ background: isRailTag(tag) ? tagStripes(tag) : tagTint(tag) }}
                />
                {tag}
              </span>
            ))}
          </div>

          {/* Everything is placed in months: --month tall each, rails and card lanes side by side */}
          <div
            className="relative mx-2.5 my-5 [--gutter:32px] [--month:18px] [--rail:20px] md:mx-4 md:[--gutter:48px] md:[--month:22px] md:[--rail:30px]"
            style={
              {
                height: `calc(var(--month) * ${(topYear - firstYear) * 12})`,
                '--cards-x': `calc(var(--gutter) + ${railLanes} * var(--rail) + 4px)`,
                '--lane': `calc((100% - var(--cards-x)) / ${cardLanes})`,
              } as React.CSSProperties
            }
          >
            {years.map((year) => (
              <div
                key={year}
                aria-hidden="true"
                className="absolute inset-x-0 h-0"
                style={{ top: `calc(var(--month) * ${top - year * 12})` }}
              >
                <span className="absolute left-0 -translate-y-1/2 font-mono text-[10px] leading-none text-muted md:text-xs">
                  {year}
                </span>
                <span className="absolute right-0 left-[var(--gutter)] border-t border-dashed border-edge-soft" />
              </div>
            ))}

            <ol aria-label="Experience, newest first" className="m-0 list-none p-0">
              {items.map((item) => (
                <li
                  key={item.exp.company + item.exp.role}
                  className="absolute hover:z-10"
                  style={{
                    top: `calc(var(--month) * ${top - item.last - 1})`,
                    height: `calc(var(--month) * ${item.last - item.start + 1} - 4px)`,
                    ...(item.kind === 'rail'
                      ? { left: `calc(var(--gutter) + ${item.lane} * var(--rail))`, width: 'calc(var(--rail) - 4px)' }
                      : { left: `calc(var(--cards-x) + ${item.lane} * var(--lane))`, width: `calc(${item.span} * var(--lane) - 6px)` }),
                  }}
                >
                  {item.kind === 'rail' ? <Rail item={item} onOpen={setSelected} /> : <Card item={item} onOpen={setSelected} />}
                </li>
              ))}
            </ol>
          </div>
        </div>

        <div className="flex items-center justify-between gap-3 border-t border-window-line bg-window-alt px-3.5 py-1.5 font-mono text-[11px] text-muted">
          <span>
            {items.length} entries · {firstYear} → {topYear - 1}
          </span>
          <span className="hidden sm:inline">click an entry to open it</span>
        </div>
      </OSWindow>

      <ExperienceWindow item={selected} onClose={() => setSelected(null)} />
    </>
  );
}
