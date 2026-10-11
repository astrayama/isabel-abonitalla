'use client';

import React, { useState } from 'react';
import { FileText } from 'lucide-react';
import OSWindow from '@/components/ui/OSWindow';
import SectionHeading from '@/components/ui/SectionHeading';
import { news } from '@/data/news';
import { useScrollReveal } from '@/hooks/useScrollReveal';

// Icon | name | source (hidden on phones) | date
const columns = 'grid grid-cols-[24px_minmax(0,1fr)_56px] gap-3.5 sm:grid-cols-[24px_minmax(0,1fr)_170px_76px]';

export default function NewsSection() {
  const [isExpanded, setIsExpanded] = useState(false);
  const { ref, isVisible } = useScrollReveal();

  // Collapsed: pinned items only. Expanded: everything in chronological order.
  const pinnedNews = news
    .filter((item) => item.pinnedOrder !== undefined)
    .sort((a, b) => a.pinnedOrder! - b.pinnedOrder!);

  const displayedNews = isExpanded ? news : pinnedNews;

  return (
    <section
      id="press"
      ref={ref}
      className={`mx-auto w-full max-w-[1100px] px-4 py-[72px] transition-all duration-700 sm:px-6 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2'
      }`}
    >
      <SectionHeading eyebrow="PRESS/" title="in the" accent="press" className="mb-[30px]" />

      <OSWindow title="C:/isabel/press/" size="md">
        <div className={`${columns} items-center bg-window-alt px-5 py-2.5 font-mono text-[11px] tracking-[0.12em] text-muted`}>
          <span />
          <span>NAME</span>
          <span className="hidden sm:block">SOURCE</span>
          <span>DATE</span>
        </div>

        {displayedNews.map((item) => (
          <a
            key={item.title}
            href={item.url}
            target="_blank"
            rel="noopener noreferrer"
            title={item.description}
            className={`group ${columns} items-center border-t border-window-line px-5 py-3.5 text-ink no-underline transition-colors duration-150 hover:bg-ink hover:text-on-ink focus-visible:bg-ink focus-visible:text-on-ink`}
          >
            <FileText className="size-5" aria-hidden="true" />
            <span className="min-w-0 text-base font-extrabold">{item.title}</span>
            <span className="hidden text-sm text-ink-soft group-hover:text-on-ink/80 group-focus-visible:text-on-ink/80 sm:block">
              {item.source || 'press'}
            </span>
            <span className="font-mono text-[13px] text-ink-soft group-hover:text-on-ink/80 group-focus-visible:text-on-ink/80">
              {item.date}
            </span>
          </a>
        ))}

        {news.length > pinnedNews.length && (
          <div className="flex justify-center border-t border-window-line px-5 py-3.5">
            <button
              onClick={() => setIsExpanded(!isExpanded)}
              aria-expanded={isExpanded}
              className="min-h-11 rounded-full border-2 border-edge-soft bg-window px-[18px] font-mono text-[13px] text-ink"
            >
              {isExpanded ? 'show fewer files ↑' : 'show more files ↓'}
            </button>
          </div>
        )}
      </OSWindow>
    </section>
  );
}
