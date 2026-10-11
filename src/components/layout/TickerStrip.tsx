import React from 'react';
import { tickerText } from '@/data/profile';

export default function TickerStrip() {
  return (
    <div className="flex h-[30px] items-center overflow-hidden whitespace-nowrap bg-[hsl(220,50%,25%)] font-mono text-xs tracking-[0.06em] text-white/90">
      {/* Two copies so the -50% loop is seamless */}
      <div className="inline-flex flex-none animate-ticker">
        <span className="pr-12">{tickerText}</span>
        <span className="pr-12" aria-hidden="true">{tickerText}</span>
      </div>
    </div>
  );
}
