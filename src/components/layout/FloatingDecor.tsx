import React from 'react';

const STAR = 'text-[#fcd34d]';
const HEART = 'text-[#f9a8d4]';

// [glyph, colour, size, top, left|right, duration, delay]
const glyphs: [string, string, string, string, { left?: string; right?: string }, string, string][] = [
  ['★', STAR, 'text-lg', '15%', { left: '3%' }, '3s', '0s'],
  ['★', STAR, 'text-xs', '25%', { right: '20%' }, '4s', '1s'],
  ['✦', STAR, 'text-sm', '40%', { left: '2%' }, '5s', '0.5s'],
  ['★', STAR, 'text-sm', '10%', { left: '40%' }, '3.5s', '2s'],
  ['★', STAR, 'text-xl', '60%', { right: '4%' }, '4.5s', '0.2s'],
  ['✦', STAR, 'text-xs', '75%', { left: '15%' }, '3.2s', '1.5s'],
  ['★', STAR, 'text-sm', '85%', { right: '25%' }, '5.5s', '0.8s'],
  ['✦', STAR, 'text-xs', '50%', { left: '30%' }, '4.2s', '2.5s'],
  ['★', STAR, 'text-lg', '35%', { right: '3%' }, '3.8s', '1.2s'],
  ['✦', STAR, 'text-xs', '90%', { left: '45%' }, '4.8s', '0.7s'],
  ['♥', HEART, 'text-base', '20%', { right: '2.5%' }, '4s', '1.5s'],
  ['♥', HEART, 'text-xs', '45%', { left: '4%' }, '5s', '0.5s'],
  ['♥', HEART, 'text-sm', '70%', { right: '30%' }, '3.5s', '2s'],
  ['♥', HEART, 'text-xs', '12%', { left: '60%' }, '4.5s', '0.8s'],
  ['♥', HEART, 'text-base', '80%', { left: '8%' }, '5.2s', '1.1s'],
  ['♥', HEART, 'text-xs', '55%', { right: '15%' }, '3.8s', '2.2s'],
];

export default function FloatingDecor() {
  return (
    <div className="fixed inset-0 z-[1] pointer-events-none overflow-hidden select-none" aria-hidden="true">
      {/* Crescent moon */}
      <div
        className="absolute top-[8%] right-[5%] size-[46px] rounded-full animate-float"
        style={{ boxShadow: '12px -6px 0 0 #fde68a', animationDuration: '6s' }}
      />

      {glyphs.map(([glyph, colour, size, top, side, duration, delay], i) => (
        <div
          key={i}
          className={`absolute animate-float ${colour} ${size}`}
          style={{ top, ...side, animationDuration: duration, animationDelay: delay }}
        >
          {glyph}
        </div>
      ))}
    </div>
  );
}
