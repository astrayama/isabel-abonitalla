import React from 'react';

export default function Background() {
  return (
    <div
      className="fixed inset-0 z-0 pointer-events-none"
      style={{
        background: 'linear-gradient(180deg, hsl(330, 50%, 88%) 0%, hsl(280, 40%, 85%) 50%, hsl(240, 50%, 82%) 100%)',
      }}
    >
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: `
            repeating-linear-gradient(0deg, transparent, transparent 39px, hsla(271, 43%, 90%, 0.97) 39px 40px),
            repeating-linear-gradient(90deg, transparent, transparent 39px, hsla(271, 43%, 90%, 0.97) 39px 40px)
          `,
          backgroundSize: '40px 40px',
        }}
      />
    </div>
  );
}
