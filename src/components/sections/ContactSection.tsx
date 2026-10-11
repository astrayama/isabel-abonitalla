'use client';

import React, { useEffect, useState } from 'react';
import { Mail } from 'lucide-react';
import OSWindow from '@/components/ui/OSWindow';
import { Eyebrow } from '@/components/ui/SectionHeading';
import { links } from '@/data/profile';
import { useScrollReveal } from '@/hooks/useScrollReveal';
import { cn } from '@/lib/utils';

const contactLinks = [
  { label: 'email', href: links.email },
  { label: 'linkedin', href: links.linkedin },
  { label: 'github', href: links.github },
  { label: 'devpost', href: links.devpost },
];

const footerLinks = [
  { label: 'Creative Works', href: links.creativeWorks },
  { label: 'Resume', href: links.resume },
  { label: 'DevPost', href: links.devpost },
  { label: 'Upwork', href: links.upwork },
];

export default function ContactSection() {
  const [visitorCount, setVisitorCount] = useState<number | null>(null);
  const { ref, isVisible } = useScrollReveal();

  useEffect(() => {
    // Increment visitor count on mount
    fetch('/api/visitors', { method: 'POST' })
      .then((res) => res.json())
      .then((data) => {
        if (typeof data.count === 'number') {
          setVisitorCount(data.count);
        }
      })
      .catch((err) => console.error('Failed to update visitor count:', err));
  }, []);

  return (
    <section
      id="contact"
      ref={ref}
      className={`mx-auto w-full max-w-[1200px] px-4 pt-24 pb-8 transition-[opacity,translate] duration-700 sm:px-6 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2'
      }`}
    >
      <div className="flex flex-wrap items-end gap-10">
        <div className="min-w-0 flex-[1_1_520px]">
          <Eyebrow>CONTACT.EXE</Eyebrow>
          <h2 className="m-0 font-mono text-[clamp(56px,11vw,170px)] leading-[0.9] font-normal tracking-[-0.01em]">
            let&apos;s build<span className="text-accent-glyph">♥</span>
            <span className="animate-blink">_</span>
          </h2>
          <p className="mt-[18px] font-hand text-[clamp(26px,3vw,32px)] font-bold text-ink-soft">
            open to PM + product engineer roles. come say hi.
          </p>
        </div>

        <OSWindow
          title="new_message.exe"
          variant="pink"
          chrome="hard"
          className="min-w-0 flex-[1_1_280px] sm:min-w-[280px] sm:flex-[0_1_380px]"
          bodyClassName="p-5"
        >
          <div className="flex items-center gap-3.5">
            <span className="flex size-12 flex-[0_0_48px] items-center justify-center rounded-[14px] bg-wash-pink text-[hsl(330,60%,40%)] dark:text-[hsl(330,80%,80%)]">
              <Mail className="size-6" aria-hidden="true" />
            </span>
            <p className="m-0 text-lg font-black">Send Isabel a message?</p>
          </div>
          <div className="mt-[18px] flex flex-wrap gap-2.5">
            {contactLinks.map((link, i) => (
              <a
                key={link.label}
                href={link.href}
                {...(link.href.startsWith('http') ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
                className={cn(
                  'inline-flex min-h-11 items-center rounded-[10px] px-4 font-extrabold no-underline',
                  i === 0 ? 'bg-ink px-[18px] text-on-ink' : 'border-2 border-edge-soft bg-window text-ink hover:border-edge'
                )}
              >
                {link.label}
              </a>
            ))}
          </div>
        </OSWindow>
      </div>

      {/* Footer */}
      <footer className="mt-24 flex flex-col items-center gap-3 border-t border-dashed border-edge-soft pt-8">
        <p className="m-0 font-mono text-[11px] tracking-[0.3em] text-muted">LEARN ABOUT MY WORK</p>
        <nav aria-label="More of my work" className="flex flex-wrap items-center justify-center gap-x-3 gap-y-1 text-sm font-bold text-ink-soft">
          {footerLinks.map((link, i) => (
            <React.Fragment key={link.label}>
              {i > 0 && <span aria-hidden="true">·</span>}
              <a href={link.href} target="_blank" rel="noopener noreferrer" className="text-ink-soft no-underline hover:text-accent">
                {link.label}
              </a>
            </React.Fragment>
          ))}
        </nav>
        <div className="mt-1 flex items-center gap-1.5 rounded-full border border-tint-lilac bg-wash-lilac px-3 py-1">
          <span className="block size-1.5 animate-pulse rounded-full bg-[hsl(270,50%,60%)]" />
          <span className="font-mono text-[11px] whitespace-nowrap">
            visitors: {visitorCount !== null ? visitorCount : '...'}
          </span>
        </div>
        <p className="m-0 text-center text-xs text-muted">
          built with <span className="text-accent-glyph">♥</span> using React, TypeScript, and Tailwind CSS
        </p>
      </footer>
    </section>
  );
}
