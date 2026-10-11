import React from 'react';

export default function Background() {
  return (
    <div
      className="fixed inset-0 z-0 pointer-events-none"
      style={{ background: 'var(--desk-gradient)' }}
    >
      <div className="desk-grid absolute inset-0" />
    </div>
  );
}
