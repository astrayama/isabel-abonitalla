'use client';

import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink } from 'lucide-react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import OSWindow from '@/components/ui/OSWindow';
import { projects, Category } from '@/data/projects';

export default function ProjectsSection() {
  const [activeCategory, setActiveCategory] = useState<Category | 'All'>('All');

  const categories = useMemo(() => {
    const cats = new Set<Category>();
    projects.forEach(p => p.categories.forEach(c => cats.add(c)));
    return ['All', ...Array.from(cats)] as (Category | 'All')[];
  }, []);

  const filteredProjects = useMemo(() => {
    if (activeCategory === 'All') return projects;
    return projects.filter(p => p.categories.includes(activeCategory));
  }, [activeCategory]);

  const initialProjects = filteredProjects.slice(0, 5);
  const moreProjects = filteredProjects.slice(5);

  return (
    <section id="projects" className="py-20 px-4 md:px-8 max-w-6xl mx-auto">
      <div className="flex flex-col gap-8">
        <h2 className="text-3xl font-mono font-bold text-slate-800">
          projects<span className="text-purple-600">.</span>
        </h2>

        {/* Filters */}
        <div className="flex flex-wrap gap-3">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-1.5 rounded-full text-sm font-medium transition-colors ${
                activeCategory === cat
                  ? 'bg-purple-600 text-white'
                  : 'bg-purple-100 text-purple-800 hover:bg-purple-200'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Project Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatePresence mode="popLayout">
            {initialProjects.map((project) => (
              <ProjectCard key={project.title} project={project} />
            ))}
          </AnimatePresence>
        </div>

        {/* Accordion for more projects */}
        {moreProjects.length > 0 && (
          <Accordion type="single" collapsible className="w-full mt-4">
            <AccordionItem value="more-projects" className="border-none">
              <AccordionTrigger className="w-full flex justify-center py-4 text-purple-600 hover:text-purple-700 hover:no-underline bg-purple-50 rounded-lg">
                Show More Projects ({moreProjects.length})
              </AccordionTrigger>
              <AccordionContent className="pt-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                  {moreProjects.map((project) => (
                    <ProjectCard key={project.title} project={project} />
                  ))}
                </div>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        )}
      </div>
    </section>
  );
}

function ProjectCard({ project }: { project: typeof projects[0] }) {
  return (
    <motion.div
      layout
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.9 }}
      transition={{ duration: 0.2 }}
      className="h-full flex"
    >
      <OSWindow title={project.title} className="w-full flex flex-col">
        <div className="flex flex-col h-full bg-slate-50">
          <div className="aspect-video bg-slate-200 relative overflow-hidden shrink-0">
            {/* Using standard img with placehold fallback */}
            <img 
              src={project.imageUrl} 
              alt={project.title}
              className="w-full h-full object-cover"
              onError={(e) => {
                e.currentTarget.src = 'https://placehold.co/600x400/e2e8f0/475569?text=No+Image';
              }}
            />
          </div>
          <div className="p-5 flex flex-col flex-grow gap-4">
            <div className="flex flex-wrap gap-2">
              {project.categories.map((cat) => (
                <span
                  key={cat}
                  className="px-2 py-1 text-xs font-medium rounded-md bg-purple-100 text-purple-800"
                >
                  {cat}
                </span>
              ))}
            </div>
            
            <p className="text-sm text-slate-600 flex-grow">
              {project.description}
            </p>

            <a
              href={project.projectUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 w-full py-2 px-4 bg-slate-900 text-white rounded-md hover:bg-slate-800 transition-colors text-sm font-medium mt-auto"
            >
              <ExternalLink className="w-4 h-4" />
              View Project
            </a>
          </div>
        </div>
      </OSWindow>
    </motion.div>
  );
}
