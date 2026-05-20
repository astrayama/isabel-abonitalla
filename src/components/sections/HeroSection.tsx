"use client";

import React from 'react';
import { useTypewriter } from '@/hooks/useTypewriter';
import OSWindow from '@/components/ui/OSWindow';
import { Mail, ChevronDown, FileText } from 'lucide-react';

const GithubIcon = ({ className }: { className?: string }) => (
  <svg className={className} role="img" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
    <title>GitHub</title>
    <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
  </svg>
);

const LinkedinIcon = ({ className }: { className?: string }) => (
  <svg className={className} role="img" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
    <title>LinkedIn</title>
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
  </svg>
);

const DevpostIcon = ({ className }: { className?: string }) => (
  <svg className={className} role="img" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
    <title>Devpost</title>
    <path d="M6.002 1.61L0 12.004 6.002 22.39h11.996L24 12.004 17.998 1.61zm1.593 4.084h3.947c3.605 0 6.276 2.695 6.276 6.31 0 3.614-2.671 6.31-6.276 6.31H7.595zM10.77 8.5v7.008h.741c1.942 0 3.411-1.393 3.411-3.504 0-2.11-1.469-3.504-3.411-3.504z" />
  </svg>
);

export default function HeroSection() {
  const { displayText } = useTypewriter([
    'a product builder',
    'a CS undergrad',
    'an accessibility advocate'
  ]);

  return (
    <section className="relative min-h-screen flex items-center justify-center p-4">
      <div className="w-full max-w-3xl flex flex-col items-center">
        <OSWindow title="welcome.exe" className="w-full">
          <div className="p-8 md:p-12 flex flex-col items-center text-center">
            <h1 className="text-7xl md:text-8xl lg:text-[9.5rem] xl:text-[10.5rem] font-mono font-bold text-retro-dark mb-1 leading-none">
              Hi!
            </h1>
            <h2 className="text-4xl md:text-6xl lg:text-7xl xl:text-[6rem] font-mono text-retro-dark mb-1 leading-none">
              I'm Isabel,
            </h2>

            <div className="flex items-center justify-center h-12 md:h-16 lg:h-20 mb-2">
              <span className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-mono font-bold bg-gradient-to-r from-brand-pink to-brand-purple text-transparent bg-clip-text">
                {displayText}
              </span>
              <span className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-mono text-retro-dark animate-pulse">
                |
              </span>
            </div>

            <p className="text-sm text-gray-500 font-sans font-medium mb-8">
              Purdue 🌐, GPA 3.98 | 18x hackathon winner 🏆, MLH Top 50
            </p>

            <div className="flex flex-wrap items-center justify-center gap-3">
              {[
                { icon: Mail, label: 'email', href: 'mailto:isabelabonitalla@gmail.com', ariaLabel: 'Send email' },
                { icon: LinkedinIcon, label: 'linkedin', href: 'https://www.linkedin.com/in/isabel-abonitalla', ariaLabel: 'LinkedIn profile' },
                { icon: GithubIcon, label: 'github', href: 'https://github.com/astrayama', ariaLabel: 'GitHub profile' },
                {
                  icon: null, label: 'devpost', href: 'https://devpost.com/isabiiil', ariaLabel: 'Devpost profile',
                  customIcon: <DevpostIcon className="w-5 h-5 text-gray-500 group-hover:text-brand-purple transition-colors" />
                },
              ].map((link) => {
                const Icon = link.icon;
                return (
                  <a
                    key={link.label}
                    href={link.href}
                    target="_blank" rel="noopener noreferrer"
                    aria-label={link.ariaLabel}
                    className="flex flex-col items-center gap-1 border border-gray-200
                      rounded-xl px-4 py-3 hover:bg-gray-50 hover:border-brand-purple/30
                      transition-all group"
                  >
                    {link.customIcon ? link.customIcon : (Icon && <Icon className="w-5 h-5 text-gray-500 group-hover:text-brand-purple transition-colors" />)}
                    <span className="font-sans text-[11px] font-bold text-gray-400 group-hover:text-brand-purple transition-colors">
                      {link.label}
                    </span>
                  </a>
                );
              })}

              {/* Resume Button */}
              <a href="/resume.pdf" target="_blank" rel="noopener noreferrer"
                className="flex flex-col items-center gap-1 bg-brand-purple/10
                  border border-brand-purple/30 rounded-xl px-4 py-3
                  hover:bg-brand-purple/20 transition-all group">
                <FileText className="w-5 h-5 text-brand-purple" />
                <span className="font-sans text-[11px] font-bold text-brand-purple">resume</span>
              </a>
            </div>
          </div>
        </OSWindow>
      </div>

      <a
        href="#about"
        className="absolute bottom-12 animate-bounce p-2 text-gray-600 hover:text-retro-dark transition-colors"
        aria-label="Scroll to about section"
      >
        <ChevronDown size={32} />
      </a>
    </section>
  );
}
