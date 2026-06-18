'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import OSWindow from '../ui/OSWindow';
import { funFacts } from '@/data/funFacts';
import { useScrollReveal } from '@/hooks/useScrollReveal';

export const AboutSection: React.FC = () => {
  const [displayedFact, setDisplayedFact] = useState<string | null>(null);
  const [fadeIn, setFadeIn] = useState(false);
  const { ref, isVisible } = useScrollReveal();

  const handleFunFactClick = () => {
    const randomIndex = Math.floor(Math.random() * funFacts.length);
    setFadeIn(false);
    setTimeout(() => {
      setDisplayedFact(funFacts[randomIndex]);
      setFadeIn(true);
    }, 150);
  };

  return (
    <section
      id="about"
      ref={ref}
      className={`relative py-20 px-4 md:px-8 max-w-4xl mx-auto w-full transition-all duration-1000 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2'
      }`}
    >
      <h2 className="font-mono text-4xl md:text-5xl font-bold text-retro-dark mb-10">
        about<span className="text-pink-500">•</span>
      </h2>

        {/* Two-Panel Layout */}
        <div className="grid grid-cols-1 md:grid-cols-5 gap-12 items-start">
          {/* Left Panel - Text Window */}
          <div
            className={`md:col-span-3 transform transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2'
              }`}
          >
            <OSWindow title="about.txt">
              <div className="p-6 space-y-5">
                {/* Bio Text */}
                <p className="text-gray-700 leading-relaxed text-sm md:text-base">
                  Hi, I'm{' '}
                  <span className="font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-red-500 via-yellow-500 via-green-500 via-blue-500 to-purple-500 dark:from-pink-400 dark:via-red-400 dark:via-yellow-400 dark:via-green-400 dark:via-blue-400 dark:to-purple-400">
                    Isabel Sofia V. Abonitalla
                  </span>
                  . I'm a software engineer turned product manager with a founder's instinct. I've shipped products at Microsoft and Roblox, coached 1,000+ hackers at Major League Hacking, and built an AI journaling SaaS from zero to paying customers.
                  <br />
                  I'm one of MLH's Top 50 most influential hackathon community members out of 135,000+ globally, and an 18× winner — including First Place at the Maternal Mortality & Morbidity Code-a-thon.
                  <br />
                  Currently finishing a cloud computing degree at Purdue (3.98 GPA) and actively looking for PM or SWE roles starting in September.
                  <br />
                  The rest of me? Hit the button. ↓
                </p>

                {/* Fun Fact Button */}
                <button
                  onClick={handleFunFactClick}
                  className="inline-flex items-center gap-2 px-4 py-2 bg-pink-400 hover:bg-pink-500 text-white rounded-lg font-medium transition-colors duration-200 text-sm"
                >
                  <span className="text-lg">✦</span>
                  Want to learn more? Click here to see a random fun fact about me!
                </button>

                {/* Fun Fact Display */}
                {displayedFact && (
                  <div
                    className={`p-4 bg-gradient-to-r from-pink-50 to-purple-50 border border-pink-200 rounded-lg transition-all duration-300 ${fadeIn ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-1'
                      }`}
                  >
                    <p className="text-gray-700 text-sm md:text-base italic">
                      "{displayedFact}"
                    </p>
                  </div>
                )}
              </div>
            </OSWindow>
          </div>

          {/* Right Panel - Image Window */}
          <div
            className={`md:col-span-2 flex justify-center items-start transition-all duration-1000 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2'
              }`}
          >
            <div className="polaroid hover:rotate-0 transition-transform duration-300 cursor-pointer">
              <Image
                src="/images/isa.png"
                alt="Isabel Abonitalla"
                width={280}
                height={360}
                className="rounded-sm"
                style={{ filter: 'brightness(1.08) saturate(0.9)' }}
                priority
              />
              <p className="polaroid-caption">isabel. ✿</p>
            </div>
          </div>
      </div>
    </section>
  );
};
