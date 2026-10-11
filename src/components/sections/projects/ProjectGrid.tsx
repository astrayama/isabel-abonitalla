'use client';

import React, { useMemo, useState } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import OSWindow from '@/components/ui/OSWindow';
import { projects, type Category, type Project } from '@/data/projects';
import { cn } from '@/lib/utils';
import { ProjectLinks, slugify } from './ProjectLinks';

export default function ProjectGrid() {
  const [activeCategory, setActiveCategory] = useState<Category | 'All'>('All');

  const categories = useMemo(() => {
    const cats = new Set<Category>();
    projects.forEach((p) => p.categories.forEach((c) => cats.add(c)));
    return ['All', ...Array.from(cats)] as (Category | 'All')[];
  }, []);

  const filteredProjects = useMemo(() => {
    if (activeCategory === 'All') return projects;
    return projects.filter((p) => p.categories.includes(activeCategory));
  }, [activeCategory]);

  const initialProjects = filteredProjects.slice(0, 6);
  const moreProjects = filteredProjects.slice(6);

  return (
    <div className="mt-8 flex animate-pop flex-col gap-6">
      {/* Filters */}
      <div role="group" aria-label="Project categories" className="flex flex-wrap gap-2">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setActiveCategory(cat)}
            aria-pressed={activeCategory === cat}
            className={cn(
              'min-h-10 rounded-full border-2 px-3.5 text-[13px] font-extrabold transition-all duration-200',
              activeCategory === cat
                ? 'border-edge bg-tint-lilac text-ink shadow-hard'
                : 'border-edge-soft bg-window text-ink shadow-[0_2px_0_hsla(240,30%,20%,0.12)]'
            )}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Project grid */}
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
        <AnimatePresence mode="popLayout">
          {initialProjects.map((project) => (
            <ProjectCard key={project.title} project={project} />
          ))}
        </AnimatePresence>
      </div>

      {/* Accordion for more projects */}
      {moreProjects.length > 0 && (
        <Accordion type="single" collapsible className="w-full">
          <AccordionItem value="more-projects" className="border-none">
            <AccordionTrigger className="w-full justify-center gap-2 rounded-full border-2 border-edge bg-window py-3 text-sm text-ink shadow-hard hover:no-underline">
              show {moreProjects.length} more files
            </AccordionTrigger>
            <AccordionContent className="pt-6">
              <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
                {moreProjects.map((project) => (
                  <ProjectCard key={project.title} project={project} />
                ))}
              </div>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      )}
    </div>
  );
}

function ProjectCard({ project, ref }: { project: Project; ref?: React.Ref<HTMLDivElement> }) {
  return (
    <motion.div
      ref={ref}
      layout
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.9 }}
      transition={{ duration: 0.2 }}
      className="flex h-full"
    >
      <OSWindow title={`${slugify(project.title)}.proj`} size="sm" className="w-full" bodyClassName="flex flex-col">
        <div className="relative aspect-video shrink-0 overflow-hidden border-b border-window-line bg-window-alt">
          {project.videoUrl ? (
            // Silent demo clip, so it can autoplay; letterboxed since it may be vertical
            <video
              src={project.videoUrl}
              poster={project.imageUrl}
              autoPlay
              muted
              loop
              playsInline
              preload="metadata"
              aria-label={`${project.title} demo video`}
              className="size-full bg-slate-950 object-contain"
            />
          ) : (
            <Image
              src={project.imageUrl}
              alt={project.title}
              fill
              sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
              className="object-contain p-2"
            />
          )}
        </div>
        <div className="flex flex-grow flex-col gap-3.5 p-4">
          <h3 className="m-0 font-mono text-lg leading-tight font-normal">{project.title}</h3>
          <div className="flex flex-wrap gap-1.5">
            {project.categories.map((cat) => (
              <span key={cat} className="rounded-full bg-wash-pink px-2 py-0.5 text-[11px] font-extrabold">
                {cat}
              </span>
            ))}
          </div>

          <p className="m-0 flex-grow text-sm leading-relaxed text-ink-soft">{project.description}</p>

          {/* Stack pills — only render if stack has items */}
          {project.stack.length > 0 && (
            <div className="flex flex-wrap gap-1.5">
              {project.stack.map((tech) => (
                <span key={tech} className="rounded-full border border-tint-lilac bg-wash-lilac px-2.5 py-0.5 font-mono text-[10px]">
                  {tech}
                </span>
              ))}
            </div>
          )}

          <div className="mt-auto flex flex-wrap gap-2">
            <ProjectLinks project={project} className="min-h-10 flex-1 text-sm" />
          </div>
        </div>
      </OSWindow>
    </motion.div>
  );
}
