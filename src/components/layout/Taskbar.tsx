"use client";

import React, { useState, useEffect, useRef } from 'react';
import { OPEN_TO_WORK } from '@/config/site';

const navItems = [
  { label: 'hero.exe', href: '#hero' },
  { label: 'about.txt', href: '#about' },
  { label: 'skills.exe', href: '#skills' },
  { label: 'experience.log', href: '#experience' },
  { label: 'projects/', href: '#projects' },
  { label: 'press/', href: '#press' },
  { label: 'contact.exe', href: '#contact' },
];

export default function Taskbar() {
  const [time, setTime] = useState<string>('');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const updateClock = () => {
      const now = new Date();
      setTime(now.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit', hour12: true }));
    };

    updateClock();
    const intervalId = setInterval(updateClock, 1000);
    return () => clearInterval(intervalId);
  }, []);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setIsMenuOpen(false);
      }
    };
    
    if (isMenuOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isMenuOpen]);

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 h-10 bg-[hsl(220,50%,25%)]/95 flex items-center justify-between px-4">
      {/* Left section: START button & Menu */}
      <div className="relative flex items-center h-full" ref={menuRef}>
        {isMenuOpen && (
          <div className="absolute bottom-full left-0 mb-1 w-48 bg-slate-100 border-2 border-slate-300 rounded-t-lg shadow-xl overflow-hidden flex flex-col p-1 z-50">
            {/* Sidebar decoration */}
            <div className="absolute left-0 top-0 bottom-0 w-8 bg-gradient-to-b from-brand-pink to-brand-purple flex items-end justify-center pb-2">
              <span className="text-white font-mono text-xs tracking-widest" style={{ writingMode: 'vertical-rl', transform: 'rotate(180deg)' }}>
                ISABEL
              </span>
            </div>
            
            <div className="ml-8 bg-white flex flex-col py-1 border border-slate-200 min-h-[200px]">
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={() => setIsMenuOpen(false)}
                  className="px-4 py-2 text-sm font-mono text-slate-800 hover:bg-brand-blue hover:text-white transition-colors"
                >
                  {item.label}
                </a>
              ))}
            </div>
          </div>
        )}
        <button 
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className={`flex items-center gap-1.5 border ${isMenuOpen ? 'border-white/40 bg-white/20' : 'border-white/20'} rounded px-2 py-0.5 text-white text-xs font-mono hover:bg-white/10 transition-colors`}
        >
          <span>❤️</span>
          <span>START</span>
        </button>
      </div>

      {/* Open to Work Indicator */}
      {OPEN_TO_WORK && (
        <div className="ml-3 flex items-center gap-1.5 bg-green-50 dark:bg-green-500/15 border border-green-200 dark:border-green-400/30 rounded-full px-2.5 py-0.5 flex-shrink-0">
          <span className="w-1.5 h-1.5 rounded-full bg-green-500 dark:bg-green-400 animate-pulse flex-shrink-0" />
          <span className="font-mono text-[10px] text-green-600 dark:text-green-400 whitespace-nowrap hidden sm:block">
            open to work
          </span>
        </div>
      )}

      {/* Center section (marquee) */}
      <div className="flex-1 mx-4 overflow-hidden whitespace-nowrap">
        <div
          className="inline-block animate-marquee"
          style={{ animationDuration: '30s' }}
        >
          <span className="font-mono text-xs text-white/80">
            ★ Isabel Abonitalla's Portfolio ★ CS Undergrad @ Purdue ★ 18x Hackathon Winner ★ Product Builder ★ Accessibility Advocate ★
          </span>
        </div>
      </div>

      {/* Right section (clock) */}
      <div className="font-mono text-xs text-white min-w-[70px] text-right">
        {time}
      </div>
    </div>
  );
}
