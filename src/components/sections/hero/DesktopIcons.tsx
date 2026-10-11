import React, { ReactNode } from 'react';
import { FileText, Mail } from 'lucide-react';
import { DevpostIcon, GithubIcon, LinkedinIcon } from '@/components/ui/BrandIcons';
import { links } from '@/data/profile';

const icons: { label: string; href: string; ring: string; color: string; icon: ReactNode }[] = [
  { label: 'résumé.pdf', href: links.resume, ring: 'border-tint-lilac', color: 'text-[hsl(270,45%,40%)] dark:text-[hsl(270,60%,82%)]', icon: <FileText className="size-6" /> },
  { label: 'email', href: links.email, ring: 'border-tint-pink', color: 'text-[hsl(330,60%,45%)] dark:text-[hsl(330,80%,80%)]', icon: <Mail className="size-6" /> },
  { label: 'linkedin', href: links.linkedin, ring: 'border-tint-blue', color: 'text-[hsl(214,60%,40%)] dark:text-[hsl(210,80%,80%)]', icon: <LinkedinIcon className="size-[22px]" /> },
  { label: 'github', href: links.github, ring: 'border-tint-teal', color: 'text-ink', icon: <GithubIcon className="size-[22px]" /> },
  { label: 'devpost', href: links.devpost, ring: 'border-tint-yellow', color: 'text-ink', icon: <DevpostIcon className="size-[22px]" /> },
];

export default function DesktopIcons() {
  return (
    <nav
      aria-label="Desktop shortcuts"
      className="flex w-full justify-between gap-1 sm:justify-start sm:gap-3.5 lg:w-24 lg:flex-none lg:flex-col"
    >
      {icons.map(({ label, href, ring, color, icon }) => {
        const external = href.startsWith('http') || href.endsWith('.pdf');
        return (
          <a
            key={label}
            href={href}
            {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
            className="group flex w-16 flex-col items-center gap-1.5 px-0.5 py-1.5 text-ink no-underline sm:w-[88px]"
          >
            <span
              className={`flex size-12 items-center justify-center rounded-2xl border-2 bg-window shadow-[0_4px_0_hsla(240,30%,20%,0.22)] transition-transform group-hover:-translate-y-0.5 sm:size-14 ${ring} ${color}`}
            >
              {icon}
            </span>
            <span className="rounded bg-window/80 px-1.5 py-px text-[11px] font-extrabold whitespace-nowrap sm:text-xs">
              {label}
            </span>
          </a>
        );
      })}
    </nav>
  );
}
