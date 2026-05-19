'use client';

import { useEffect } from 'react';
import Background from '@/components/layout/Background';
import FloatingDecor from '@/components/layout/FloatingDecor';
import HeroSection from '@/components/sections/HeroSection';
import { AboutSection } from '@/components/sections/AboutSection';
import SkillsSection from '@/components/sections/SkillsSection';
import ExperienceSection from '@/components/sections/ExperienceSection';
import ProjectsSection from '@/components/sections/ProjectsSection';
import NewsSection from '@/components/sections/NewsSection';
import ContactSection from '@/components/sections/ContactSection';
import Taskbar from '@/components/layout/Taskbar';

export default function Home() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('opacity-100', 'translate-y-0');
            entry.target.classList.remove('opacity-0', 'translate-y-8');
          }
        });
      },
      {
        threshold: 0.6,
      }
    );

    const sections = document.querySelectorAll('section');
    sections.forEach((section) => {
      // Initialize with hidden state
      section.classList.add('opacity-0', 'translate-y-8', 'transition-all', 'duration-700');
      observer.observe(section);
    });

    return () => {
      sections.forEach((section) => observer.unobserve(section));
    };
  }, []);

  return (
    <>
      <div className="fixed inset-0 z-0 pointer-events-none">
        <Background />
      </div>
      
      <div className="fixed inset-0 z-1 pointer-events-none">
        <FloatingDecor />
      </div>

      <main className="relative z-10 w-full min-h-screen pb-24">
        <HeroSection />
        <AboutSection />
        <SkillsSection />
        <ExperienceSection />
        <ProjectsSection />
        <NewsSection />
        <ContactSection />
      </main>

      <div className="fixed bottom-0 left-0 right-0 z-50">
        <Taskbar />
      </div>
    </>
  );
}
