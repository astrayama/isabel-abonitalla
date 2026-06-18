'use client';

import React, { useEffect, useState } from 'react';
import { Mail } from 'lucide-react';

const Github = ({ className }: { className?: string }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.02c3.18-.35 6.5-1.5 6.5-7a4.6 4.6 0 0 0-1.3-3.2 4.2 4.2 0 0 0-.1-3.2s-1.1-.3-3.5 1.3a12.3 12.3 0 0 0-6.2 0C6.5 2.8 5.4 3.1 5.4 3.1a4.2 4.2 0 0 0-.1 3.2A4.6 4.6 0 0 0 4 9.5c0 5.4 3.3 6.6 6.5 7a4.8 4.8 0 0 0-1 3.02V22" />
    <path d="M9 20.5 5 19.5 3 16" />
  </svg>
);

const Linkedin = ({ className }: { className?: string }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect width="4" height="12" x="2" y="9" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);
import OSWindow from '@/components/ui/OSWindow';
import { useScrollReveal } from '@/hooks/useScrollReveal';

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
      className={`pt-20 pb-6 px-4 md:px-8 max-w-4xl mx-auto w-full flex flex-col transition-all duration-700 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2'
      }`}
    >
      {/* Heading */}
      <h2 className="font-mono text-4xl md:text-5xl font-bold text-retro-dark mb-10">
        let's connect<span className="text-pink-500">.</span>
      </h2>

      {/* OSWindow */}
      <div className="w-full max-w-2xl mx-auto mb-10">
        <OSWindow title="contact.exe" className="w-full">
          <div className="p-8 bg-slate-50 flex flex-col gap-8">
            <p className="text-slate-700 text-center text-lg">
              Let's keep the conversation going! I'm always open to new
              opportunities, collaborations, and interesting conversations.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {/* Email */}
              <a
                href="mailto:isabelabonitalla@gmail.com"
                className="flex flex-col items-center justify-center gap-2 p-4 border border-gray-200 rounded-lg bg-white hover:bg-gray-50 transition-colors text-slate-700 hover:text-slate-900"
              >
                <Mail className="w-8 h-8" />
                <span className="font-medium">Email</span>
              </a>

              {/* LinkedIn */}
              <a
                href="https://linkedin.com/in/isabel-abonitalla"
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-col items-center justify-center gap-2 p-4 border border-gray-200 rounded-lg bg-white hover:bg-gray-50 transition-colors text-slate-700 hover:text-slate-900"
              >
                <Linkedin className="w-8 h-8" />
                <span className="font-medium">LinkedIn</span>
              </a>

              {/* GitHub */}
              <a
                href="https://github.com/astrayama"
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-col items-center justify-center gap-2 p-4 border border-gray-200 rounded-lg bg-white hover:bg-gray-50 transition-colors text-slate-700 hover:text-slate-900"
              >
                <Github className="w-8 h-8" />
                <span className="font-medium">GitHub</span>
              </a>
            </div>
          </div>
        </OSWindow>
      </div>

      {/* Footer */}
      <footer className="w-full max-w-4xl flex flex-col items-center gap-4 mt-4 pb-4">
        {/* Small Header */}
        <p className="text-[11px] font-mono text-slate-400 dark:text-slate-500 uppercase tracking-widest">
          Learn about my work
        </p>

        {/* Link row */}
        <div className="flex flex-wrap justify-center items-center gap-4 text-xs text-gray-500">
          <a href="https://isa23-links.vercel.app/" target="_blank" rel="noopener noreferrer" className="hover:text-gray-800 dark:hover:text-gray-200 transition-colors">
            Creative Works
          </a>
          <span>|</span>
          <a href="/resume.pdf" target="_blank" rel="noopener noreferrer" className="hover:text-gray-800 dark:hover:text-gray-200 transition-colors">
            Resume
          </a>
          <span>|</span>
          <a href="https://devpost.com/isabiiil" target="_blank" rel="noopener noreferrer" className="hover:text-gray-800 dark:hover:text-gray-200 transition-colors">
            DevPost
          </a>
          <span>|</span>
          <a href="https://www.upwork.com/freelancers/~01da5c274739c25969" target="_blank" rel="noopener noreferrer" className="hover:text-gray-800 dark:hover:text-gray-200 transition-colors">
            Upwork
          </a>
        </div>

        {/* Visitor counter & Credits */}
        <div className="flex flex-col items-center gap-2 mt-2">
          {/* Visitor counter matching Open to Work badge */}
          <div className="flex items-center gap-1.5 bg-purple-50 dark:bg-purple-500/15 border border-purple-200 dark:border-purple-400/30 rounded-full px-2.5 py-0.5 flex-shrink-0">
            <span className="w-1.5 h-1.5 rounded-full bg-purple-500 dark:bg-purple-400 animate-pulse flex-shrink-0" />
            <span className="font-sans text-[11px] font-semibold text-purple-600 dark:text-purple-400 whitespace-nowrap">
              visitors: {visitorCount !== null ? visitorCount : '...'}
            </span>
          </div>
          <p className="text-xs text-gray-400 text-center mt-1">
            Built with ❤️ using React, TypeScript, and Tailwind CSS
          </p>
        </div>
      </footer>
    </section>
  );
}
