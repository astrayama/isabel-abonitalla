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

  const bioText = `Hi, I'm Isa. I build products and organize hackathons. I'm interested in user empathy, accessibility, and building with intention—especially in games, creator tools, and spaces where technology can serve people in meaningful ways. I'm a neurodiverse technologist from New York City, and I think differently about what products should do. Finishing my degree in cloud computing at Purdue University Global. I'm actively seeking an APM role starting September. Come say hi if you want to talk about products, spirituality, or why design matters.`;

  return (
    <section
      ref={ref}
      className={`relative py-20 px-4 md:px-8 transition-opacity duration-1000 ${isVisible ? 'opacity-100' : 'opacity-0'
        }`}
    >
      <div className="max-w-6xl mx-auto">
        {/* Section Heading */}
        <div className="mb-12 md:mb-16">
          <h2 className="font-mono text-4xl md:text-5xl font-bold text-gray-900">
            about<span className="text-pink-500">•</span>
          </h2>
        </div>

        {/* Two-Panel Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center relative">
          {/* Left Panel - Text Window */}
          <div
            className={`transform transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'
              }`}
          >
            <OSWindow title="about.txt">
              <div className="space-y-6">
                {/* Bio Text */}
                <p className="text-gray-700 leading-relaxed text-sm md:text-base">
                  {bioText}
                </p>

                {/* Fun Fact Button */}
                <div className="pt-4">
                  <button
                    onClick={handleFunFactClick}
                    className="inline-flex items-center gap-2 px-4 py-2 bg-pink-400 hover:bg-pink-500 text-white rounded-lg font-medium transition-colors duration-200 text-sm"
                  >
                    <span className="text-lg">✦</span>
                    Want to learn more? Click here to see a random fun fact about me!
                  </button>
                </div>

                {/* Fun Fact Display */}
                {displayedFact && (
                  <div
                    className={`mt-4 p-4 bg-gradient-to-r from-pink-50 to-purple-50 border border-pink-200 rounded-lg transition-all duration-300 ${fadeIn ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2'
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
            className={`transform transition-all duration-1000 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'
              }`}
          >
            <div className="polaroid hover:rotate-0 transition-transform duration-300 md:absolute md:top-0 md:-right-8 md:z-20 cursor-pointer">
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
      </div>
    </section>
  );
};
