import React from 'react';
import { Code, ExternalLink } from 'lucide-react';
import type { Project } from '@/data/projects';
import { cn } from '@/lib/utils';

export function slugify(text: string) {
  return text.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');
}

type LinkOptions = { label?: string; icons?: boolean; className?: string };

// GitHub links share one style and label; every other link (Devpost, live sites) shares another
export function ProjectLink({ url, label, icons = true, className }: LinkOptions & { url: string }) {
  const isGitHub = new URL(url).hostname === 'github.com';
  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className={cn(
        'inline-flex items-center justify-center gap-2 rounded-full px-4 font-extrabold whitespace-nowrap no-underline transition-colors',
        isGitHub
          ? 'border-2 border-edge-soft bg-window text-ink hover:border-edge'
          : 'bg-ink text-on-ink shadow-accent',
        className
      )}
    >
      {icons && (isGitHub ? <Code className="size-4" aria-hidden="true" /> : <ExternalLink className="size-4" aria-hidden="true" />)}
      {isGitHub ? (icons ? 'GitHub' : 'GitHub ↗') : (label ?? 'View Project')}
    </a>
  );
}

export function ProjectLinks({ project, ...options }: LinkOptions & { project: Project }) {
  return (
    <>
      {[project.projectUrl, project.repoUrl].filter(Boolean).map((url) => (
        <ProjectLink key={url} url={url!} {...options} />
      ))}
    </>
  );
}
