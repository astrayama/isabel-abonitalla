'use client';

import React, { useState } from 'react';
import SectionHeading from '@/components/ui/SectionHeading';
import ProjectAccordion from './projects/ProjectAccordion';
import ProjectGrid from './projects/ProjectGrid';
import { projects } from '@/data/projects';
import { useScrollReveal } from '@/hooks/useScrollReveal';

export default function ProjectsSection() {
  const [folderOpen, setFolderOpen] = useState(false);
  const { ref, isVisible } = useScrollReveal();

  return (
    <section
      id="projects"
      ref={ref}
      className={`mx-auto w-full max-w-[1200px] px-4 py-[72px] transition-[opacity,translate] duration-700 sm:px-6 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2'
      }`}
    >
      <div className="flex flex-wrap items-end justify-between gap-5">
        <SectionHeading eyebrow="PROJECTS/" title="things I've" accent="built" className="min-w-0 flex-[1_1_480px]" />
        <div className="flex-[0_1_320px] text-base leading-[1.55] text-ink-soft">
          <p className="m-0">{projects.length} files in projects/. Hover or tap a window to open it.</p>
          <button
            onClick={() => setFolderOpen(!folderOpen)}
            aria-expanded={folderOpen}
            aria-controls="project-folder"
            className="mt-1.5 inline-block font-extrabold text-[hsl(270,45%,40%)] underline underline-offset-4 hover:text-accent dark:text-[hsl(270,60%,82%)]"
          >
            {folderOpen ? 'close the folder ↑' : 'open the whole folder →'}
          </button>
        </div>
      </div>

      <ProjectAccordion />

      <div id="project-folder">{folderOpen && <ProjectGrid />}</div>
    </section>
  );
}
