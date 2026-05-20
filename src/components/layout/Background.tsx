import React from 'react';

export default function Background() {
  return (
    <div
      className="fixed inset-0 z-0 pointer-events-none"
      style={{
        background: 'var(--bg-gradient)',
      }}
    >
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: `
            repeating-linear-gradient(0deg, transparent, transparent 39px, var(--grid-color) 39px 40px),
            repeating-linear-gradient(90deg, transparent, transparent 39px, var(--grid-color) 39px 40px)
          `,
          backgroundSize: '40px 40px',
        }}
      />
    </div>
  );
}
