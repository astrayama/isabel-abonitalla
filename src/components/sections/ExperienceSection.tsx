'use client';
import React, { useState } from 'react';
import Image from 'next/image';
import { ChevronRight, ChevronDown } from 'lucide-react';
import OSWindow from '@/components/ui/OSWindow';
import { experiences, Experience } from '@/data/experiences';
import { useScrollReveal } from '@/hooks/useScrollReveal';

const INITIAL_SHOW = 4;

function slugify(text: string) {
  return text.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');
}

function ExperienceRow({ exp }: { exp: Experience }) {
  const [isOpen, setIsOpen] = useState(false);
  const [imgError, setImgError] = useState(false);

  const dateRange = `${exp.startDate} – ${exp.endDate}`;
  const filename = `${slugify(exp.company)}.exp`;

  return (
    <div className="border-b border-gray-100 last:border-0">
      {/* Row — always visible */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full grid grid-cols-[auto_1fr_auto_auto_auto]
          md:grid-cols-[auto_1fr_auto_auto_auto]
          gap-4 md:gap-6 px-4 py-3 hover:bg-gray-50 items-center
          text-left transition-colors group"
        aria-expanded={isOpen}
      >
        {/* Logo */}
        <div className="w-6 h-6 relative flex-shrink-0 flex items-center justify-center
          bg-retro-bg rounded border border-gray-200 overflow-hidden">
          {!imgError ? (
            <Image src={exp.logoUrl} alt={exp.company} fill
              className="object-contain" onError={() => setImgError(true)} />
          ) : (
            <span className="font-mono text-[10px] text-brand-purple font-bold">
              {exp.company.charAt(0)}
            </span>
          )}
        </div>

        {/* Filename */}
        <span className="font-mono text-sm truncate
          group-hover:text-brand-purple group-hover:font-bold transition-all">
          {filename}
        </span>

        {/* Role — hidden on mobile */}
        <span className="hidden md:block text-xs text-gray-500 font-sans md:w-80 truncate text-right">
          {exp.role}
        </span>

        {/* Date */}
        <span className="text-xs text-gray-400 font-mono w-32 md:w-36 text-right flex-shrink-0">
          {dateRange}
        </span>

        {/* Expand chevron */}
        <div className="w-5 text-gray-400 group-hover:text-brand-purple transition-colors flex-shrink-0">
          {isOpen
            ? <ChevronDown className="w-4 h-4" />
            : <ChevronRight className="w-4 h-4" />}
        </div>
      </button>

      {/* Expanded bullets */}
      {isOpen && (
        <div className="px-4 pb-4 pl-14 bg-gray-50 border-t border-gray-100">
          <p className="text-xs font-mono text-gray-400 mt-3 mb-2">{exp.location}</p>
          <ul className="space-y-1.5">
            {exp.bullets.map((b, i) => (
              <li key={i} className="flex gap-2 text-sm text-gray-600 font-sans leading-relaxed">
                <span className="text-brand-pink mt-0.5 flex-shrink-0">·</span>
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

  const visible = showAll ? experiences : experiences.slice(0, INITIAL_SHOW);
  const remaining = experiences.length - INITIAL_SHOW;

  return (
    <section
      id="experience"
      ref={ref}
      className={`py-20 px-4 md:px-8 max-w-4xl mx-auto w-full
        transition-all duration-700
        ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2'}`}
    >
      <h2 className="font-mono text-4xl md:text-5xl font-bold text-retro-dark mb-10">
        experiences<span className="text-brand-pink">.</span>
      </h2>

      <OSWindow title="experiences/" className="w-full">
        <div className="bg-white rounded-b-lg overflow-hidden">

          {/* Column headers */}
          <div className="grid grid-cols-[auto_1fr_auto_auto_auto]
            md:grid-cols-[auto_1fr_auto_auto_auto]
            gap-4 md:gap-6 px-4 py-2 border-b border-gray-200 bg-gray-50
            font-mono text-[10px] text-gray-400 uppercase tracking-wide">
            <div className="w-6" />
            <div>File</div>
            <div className="hidden md:block md:w-80 text-right">Role</div>
            <div className="w-32 md:w-36 text-right">Date</div>
            <div className="w-5" />
          </div>

          {/* Rows */}
          {visible.map((exp, i) => (
            <ExperienceRow key={i} exp={exp} />
          ))}

          {/* Show more / collapse */}
          {!showAll && remaining > 0 && (
            <button
              onClick={() => setShowAll(true)}
              className="flex items-center gap-3 px-4 py-3 w-full text-left
                hover:bg-gray-50 text-gray-500 hover:text-brand-purple
                transition-colors border-t border-gray-100"
            >
              <ChevronRight className="w-4 h-4" />
              <span className="font-mono text-sm">▾ Show {remaining} more files</span>
            </button>
          )}
          {showAll && remaining > 0 && (
            <button
              onClick={() => setShowAll(false)}
              className="flex items-center gap-3 px-4 py-3 w-full text-left
                hover:bg-gray-50 text-gray-500 hover:text-brand-purple
                transition-colors border-t border-gray-100"
            >
              <ChevronDown className="w-4 h-4" />
              <span className="font-mono text-sm">▴ Collapse folder</span>
            </button>
          )}
        </div>
      </OSWindow>
    </section>
  );
}
