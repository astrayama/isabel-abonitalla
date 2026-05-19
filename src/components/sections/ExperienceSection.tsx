"use client";

import React, { useCallback, useState } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import { ChevronLeft, ChevronRight, Briefcase, ExternalLink } from 'lucide-react';
import Image from 'next/image';
import OSWindow from '@/components/ui/OSWindow';
import { experiences, Experience } from '@/data/experiences';
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from '@/components/ui/accordion';

function ExperienceCard({ exp }: { exp: Experience }) {
  const [imgError, setImgError] = useState(false);

  return (
    <OSWindow title={`${exp.company.toLowerCase()}.exe`} className="h-full flex flex-col">
      <div className="relative p-6 flex flex-col flex-1 items-center text-center bg-white rounded-b-lg">
        {/* Briefcase Icon top-centered */}
        <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-brand-pink to-brand-purple flex items-center justify-center shadow-md mb-4 mt-2 border border-retro-dark/10">
          <Briefcase className="text-white" size={24} />
        </div>

        {/* Company Logo or Placeholder */}
        <div className="w-16 h-16 mb-4 relative flex items-center justify-center bg-retro-bg rounded-lg overflow-hidden border border-retro-dark shadow-[2px_2px_0px_0px_rgba(61,56,70,0.2)]">
          {!imgError ? (
            <Image 
              src={exp.logoUrl} 
              alt={`${exp.company} logo`} 
              fill
              className="object-cover"
              onError={() => setImgError(true)}
            />
          ) : (
            <span className="font-mono font-bold text-xl text-brand-purple">
              {exp.company.charAt(0)}
            </span>
          )}
        </div>

        <h3 className="font-mono text-sm font-bold text-retro-dark mb-1">{exp.company}</h3>
        <p className="text-sm text-gray-600 mb-3">{exp.role}</p>

        <div className="inline-block px-3 py-1 rounded-full bg-brand-purple/20 border border-brand-purple text-brand-purple text-xs font-bold font-mono mb-2">
          {exp.date}
        </div>

        <p className="text-xs text-gray-400 mb-6 flex-1">{exp.location}</p>

        <button className="flex items-center gap-1 text-xs font-mono font-bold text-brand-blue hover:text-brand-purple transition-colors mt-auto group">
          More <ExternalLink size={14} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
        </button>
      </div>
    </OSWindow>
  );
}

export default function ExperienceSection() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ 
    align: 'start',
    slidesToScroll: 1,
    breakpoints: {
      '(min-width: 768px)': { slidesToScroll: 2 },
      '(min-width: 1024px)': { slidesToScroll: 4 }
    }
  });

  const scrollPrev = useCallback(() => emblaApi && emblaApi.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi && emblaApi.scrollNext(), [emblaApi]);

  // Generate 10 dummy experiences for the grid
  const moreExperiences: Experience[] = Array.from({ length: 10 }).map((_, i) => ({
    company: `Company ${i + 1}`,
    role: "Software Engineer",
    date: "2020 - 2021",
    location: "Remote",
    logoUrl: `/images/companies/dummy.png`
  }));

  return (
    <section id="experience" className="py-20 px-4 max-w-7xl mx-auto w-full">
      <div className="mb-12 text-center md:text-left">
        <h2 className="font-mono text-4xl md:text-5xl font-bold text-retro-dark inline-block relative">
          experiences<span className="text-brand-pink">.</span>
        </h2>
      </div>

      {/* Carousel Section */}
      <div className="relative mb-12 group px-0 md:px-12">
        <div className="overflow-hidden" ref={emblaRef}>
          <div className="flex -ml-4 py-4">
            {experiences.map((exp, index) => (
              <div 
                key={index} 
                className="flex-[0_0_100%] min-w-0 pl-4 md:flex-[0_0_50%] lg:flex-[0_0_25%]"
              >
                <ExperienceCard exp={exp} />
              </div>
            ))}
          </div>
        </div>

        {/* Navigation Buttons */}
        <button 
          onClick={scrollPrev}
          className="hidden md:flex absolute left-0 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/80 hover:bg-white border-2 border-retro-dark items-center justify-center text-retro-dark shadow-[2px_2px_0px_0px_rgba(61,56,70,1)] active:translate-x-[2px] active:translate-y-[2px] active:shadow-none transition-all z-10"
          aria-label="Previous slide"
        >
          <ChevronLeft size={24} />
        </button>
        <button 
          onClick={scrollNext}
          className="hidden md:flex absolute right-0 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/80 hover:bg-white border-2 border-retro-dark items-center justify-center text-retro-dark shadow-[2px_2px_0px_0px_rgba(61,56,70,1)] active:translate-x-[2px] active:translate-y-[2px] active:shadow-none transition-all z-10"
          aria-label="Next slide"
        >
          <ChevronRight size={24} />
        </button>
      </div>

      {/* Show More Accordion */}
      <div className="bg-white/95 rounded-xl border-2 border-retro-dark shadow-[6px_6px_0px_0px_rgba(61,56,70,1)] p-4 md:p-8">
        <Accordion type="single" collapsible className="w-full">
          <AccordionItem value="more-experiences" className="border-none">
            <AccordionTrigger className="hover:no-underline py-2 group">
              <span className="font-mono font-bold text-retro-dark text-lg md:text-xl flex items-center gap-2 group-hover:text-brand-purple transition-colors">
                Show More Experiences (10)
              </span>
            </AccordionTrigger>
            <AccordionContent>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-8 p-2">
                {moreExperiences.map((exp, i) => (
                  <ExperienceCard key={i} exp={exp} />
                ))}
              </div>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </section>
  );
}
