'use client';

import React, { useState } from 'react';
import { ExternalLink, ChevronDown, ChevronRight } from 'lucide-react';
import OSWindow from '@/components/ui/OSWindow';
import { news, NewsItem } from '@/data/news';

export default function NewsSection() {
  const [isExpanded, setIsExpanded] = useState(false);
  
  const initialNews = news.slice(0, 3);
  const moreNews = news.slice(3);

  const displayedNews = isExpanded ? news : initialNews;

  // helper to slugify title
  const slugify = (text: string) => {
    return text.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)+/g, '') + '.url';
  };

  return (
    <section id="press" className="py-20 px-4 md:px-8 max-w-4xl mx-auto flex flex-col items-center">
      <h2 className="text-3xl font-mono font-bold text-slate-800 self-start mb-8">
        press/<span className="text-purple-600">.</span>
      </h2>

      <div className="w-full">
        <OSWindow title="press/" className="w-full">
          <div className="bg-white overflow-hidden text-sm rounded-b-lg">
            {/* Column Headers */}
            <div className="grid grid-cols-[1fr_auto_auto] md:grid-cols-[1fr_auto_auto_auto] gap-4 px-4 py-2 border-b border-gray-200 bg-gray-50 text-gray-500 font-mono text-xs uppercase">
              <div>Name</div>
              <div className="hidden md:block w-32">Source</div>
              <div className="w-20 text-right">Date</div>
              <div className="w-8 text-center">Open</div>
            </div>

            {/* List View */}
            <div className="flex flex-col">
              {displayedNews.map((item, idx) => (
                <a
                  key={idx}
                  href={item.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="grid grid-cols-[1fr_auto_auto] md:grid-cols-[1fr_auto_auto_auto] gap-4 px-4 py-3 border-b border-gray-100 hover:bg-gray-50 items-center group transition-colors"
                >
                  <div className="flex items-center gap-3 overflow-hidden">
                    <span className="text-xs">📰</span>
                    <span className="font-mono text-sm truncate group-hover:font-bold group-hover:text-brand-purple transition-all" title={item.title}>
                      {slugify(item.title)}
                    </span>
                  </div>
                  
                  <div className="hidden md:flex w-32 items-center">
                    <span className="bg-slate-100 text-slate-600 text-[10px] font-mono px-2 py-0.5 rounded-full truncate border border-slate-200">
                      {item.source || 'press'}
                    </span>
                  </div>

                  <div className="w-20 text-right text-xs text-gray-400 font-mono truncate">
                    {item.date || '2023'}
                  </div>

                  <div className="w-8 flex justify-center text-gray-400 group-hover:text-brand-purple transition-colors">
                    <ExternalLink className="w-4 h-4" />
                  </div>
                </a>
              ))}

              {/* Expand Row */}
              {!isExpanded && moreNews.length > 0 && (
                <button
                  onClick={() => setIsExpanded(true)}
                  className="flex items-center gap-3 px-4 py-3 hover:bg-gray-50 text-gray-500 hover:text-brand-purple transition-colors text-left"
                >
                  <ChevronRight className="w-4 h-4" />
                  <span className="font-mono text-sm">▾ Show {moreNews.length} more files</span>
                </button>
              )}
              {isExpanded && (
                <button
                  onClick={() => setIsExpanded(false)}
                  className="flex items-center gap-3 px-4 py-3 hover:bg-gray-50 text-gray-500 hover:text-brand-purple transition-colors text-left"
                >
                  <ChevronDown className="w-4 h-4" />
                  <span className="font-mono text-sm">▴ Collapse folder</span>
                </button>
              )}
            </div>
          </div>
        </OSWindow>
      </div>
    </section>
  );
}
