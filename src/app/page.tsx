'use client';

import HeroSection from '@/components/sections/HeroSection';
import { AboutSection } from '@/components/sections/AboutSection';
import SkillsSection from '@/components/sections/SkillsSection';
import ProjectsSection from '@/components/sections/ProjectsSection';
import ExperienceSection from '@/components/sections/ExperienceSection';
import NewsSection from '@/components/sections/NewsSection';
import AchievementsSection from '@/components/sections/AchievementsSection';
import ContactSection from '@/components/sections/ContactSection';

export default function Home() {
  return (
    <main className="relative z-10 w-full min-h-screen pb-12">
      <HeroSection />
      <AboutSection />
      <SkillsSection />
      <ProjectsSection />
      <ExperienceSection />
      <NewsSection />
      <AchievementsSection />
      <ContactSection />
    </main>
  );
}
