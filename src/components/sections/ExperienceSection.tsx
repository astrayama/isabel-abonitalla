'use client';
import React from 'react';
import SectionHeading from '@/components/ui/SectionHeading';
import CalendarWindow from './experience/CalendarWindow';
import { experiences } from '@/data/experiences';
import { useScrollReveal } from '@/hooks/useScrollReveal';

export default function ExperienceSection() {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section
      id="experience"
      ref={ref}
      className={`mx-auto w-full max-w-[1100px] px-4 py-[72px] transition-[opacity,translate] duration-700 sm:px-6 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2'
      }`}
    >
      <SectionHeading eyebrow="EXPERIENCE.LOG" title="education &" accent="experience" />
      <p className="mt-3.5 text-[17px] text-ink-soft">
        {experiences.length} entries on the calendar, newest on top. click one to open it.
      </p>

      <CalendarWindow />
    </section>
  );
}
