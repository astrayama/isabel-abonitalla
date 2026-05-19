import React, { ReactNode } from 'react';

interface OSWindowProps {
  title: string;
  children: ReactNode;
  className?: string;
  variant?: 'default' | 'pink' | 'dark';
}

export default function OSWindow({
  title,
  children,
  className = '',
  variant = 'default',
}: OSWindowProps) {
  const getTitlebarClass = () => {
    switch (variant) {
      case 'pink':
        return 'bg-gradient-to-r from-pink-400 to-pink-300';
      case 'dark':
        return 'bg-slate-800';
      case 'default':
      default:
        return 'bg-[linear-gradient(90deg,hsl(220,60%,55%),hsl(210,70%,65%))]';
    }
  };

  return (
    <div className={`rounded-lg overflow-hidden border border-white/20 flex flex-col ${className}`}>
      {/* Titlebar */}
      <div className={`flex items-center justify-between px-4 py-2 ${getTitlebarClass()}`}>
        {/* Title text */}
        <div className="font-mono text-sm text-white font-medium select-none">
          {title}
        </div>

        {/* Traffic Light Circles */}
        <div className="flex items-center gap-1.5">
          <div className="w-3 h-3 rounded-full bg-[#9CA3AF]"></div>
          <div className="w-3 h-3 rounded-full bg-[#FCD34D]"></div>
          <div className="w-3 h-3 rounded-full bg-[#F87171]"></div>
        </div>
      </div>

      {/* Window Body */}
      <div className="bg-white rounded-b-lg shadow-xl flex-1">
        {children}
      </div>
    </div>
  );
}
