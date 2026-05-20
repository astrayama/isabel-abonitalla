'use client';

import React, { useState } from 'react';
import OSWindow from '@/components/ui/OSWindow';
import { skillFolders } from '@/data/skills';
import { useScrollReveal } from '@/hooks/useScrollReveal';

export default function SkillsSection() {
  const [activeFolderId, setActiveFolderId] = useState('languages');
  const { ref, isVisible } = useScrollReveal();

  const activeFolder = skillFolders.find((f) => f.id === activeFolderId) || skillFolders[0];

  return (
    <section
      id="skills"
      ref={ref}
      className={`py-20 px-4 md:px-8 max-w-4xl mx-auto w-full transition-all duration-700 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2'
      }`}
    >
      <h2 className="font-mono text-4xl md:text-5xl font-bold text-retro-dark mb-10">
        skills<span className="text-purple-600">.</span>
      </h2>

      <div className="w-full">
        <OSWindow title="skills.exe" className="w-full">
          <div className="bg-slate-100 px-4 pt-2 pb-4 flex flex-col">
            {/* Folder Tabs Row */}
            <div className="flex flex-wrap gap-1 mb-0 border-b border-gray-300 px-2 pt-2 relative z-10">
              {skillFolders.map((folder) => {
                const isActive = folder.id === activeFolderId;
                return (
                  <button
                    key={folder.id}
                    onClick={() => setActiveFolderId(folder.id)}
                    className="rounded-t-lg px-4 py-2 font-sans text-[13px] transition-all focus:outline-none"
                    style={{
                      backgroundColor: folder.color,
                      opacity: isActive ? 1 : 0.6,
                      borderBottom: isActive ? `2px solid ${folder.color}` : '2px solid transparent',
                      marginBottom: isActive ? '-1px' : '0',
                      zIndex: isActive ? 10 : 1,
                      transform: isActive ? 'scale(1.02)' : 'scale(1)',
                      transformOrigin: 'bottom',
                      color: '#000',
                      fontWeight: isActive ? 600 : 400
                    }}
                  >
                    {folder.label}
                  </button>
                );
              })}
            </div>

            {/* Folder Content */}
            <div 
              className="bg-white rounded-b-lg p-5 shadow-sm flex-1 border border-gray-200 relative z-0 min-h-[100px]" 
              style={{ borderTop: 'none', borderTopLeftRadius: 0 }}
            >
              {/* <h3 className="font-mono text-lg mb-6 flex items-center gap-2" style={{ color: activeFolder.color }}>
                {activeFolder.label}
              </h3> */}
              <div className="flex flex-wrap gap-2">
                {activeFolder.skills.map((skill) => (
                  <span
                    key={skill}
                    className="skill-pill font-sans text-[11px] rounded-full px-3 py-1 border transition-colors cursor-default"
                    style={{
                      backgroundColor: '#ffffff',
                      borderColor: activeFolder.color,
                      color: activeFolder.color,
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.backgroundColor = activeFolder.color;
                      e.currentTarget.style.color = '#ffffff';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.backgroundColor = '#ffffff';
                      e.currentTarget.style.color = activeFolder.color;
                    }}
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </OSWindow>
      </div>
    </section>
  );
}
