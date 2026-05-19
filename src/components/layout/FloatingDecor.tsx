import React from 'react';

export default function FloatingDecor() {
  return (
    <div className="fixed inset-0 z-[1] pointer-events-none overflow-hidden select-none">
      {/* Crescent Moon */}
      <div 
        className="absolute top-[8%] right-[5%] text-yellow-200 text-4xl animate-float" 
        style={{ animationDuration: '6s' }}
      >
        🌙
      </div>

      {/* Stars */}
      <div className="absolute top-[15%] left-[10%] text-yellow-300 text-sm animate-float" style={{ animationDuration: '3s', animationDelay: '0s' }}>★</div>
      <div className="absolute top-[25%] right-[20%] text-yellow-300 text-xs animate-float" style={{ animationDuration: '4s', animationDelay: '1s' }}>★</div>
      <div className="absolute top-[40%] left-[8%] text-yellow-300 text-xs animate-float" style={{ animationDuration: '5s', animationDelay: '0.5s' }}>★</div>
      <div className="absolute top-[10%] left-[40%] text-yellow-300 text-sm animate-float" style={{ animationDuration: '3.5s', animationDelay: '2s' }}>★</div>
      <div className="absolute top-[60%] right-[12%] text-yellow-300 text-sm animate-float" style={{ animationDuration: '4.5s', animationDelay: '0.2s' }}>★</div>
      <div className="absolute top-[75%] left-[15%] text-yellow-300 text-xs animate-float" style={{ animationDuration: '3.2s', animationDelay: '1.5s' }}>★</div>
      <div className="absolute top-[85%] right-[25%] text-yellow-300 text-sm animate-float" style={{ animationDuration: '5.5s', animationDelay: '0.8s' }}>★</div>
      <div className="absolute top-[50%] left-[30%] text-yellow-300 text-xs animate-float" style={{ animationDuration: '4.2s', animationDelay: '2.5s' }}>★</div>
      <div className="absolute top-[35%] right-[8%] text-yellow-300 text-sm animate-float" style={{ animationDuration: '3.8s', animationDelay: '1.2s' }}>★</div>
      <div className="absolute top-[90%] left-[45%] text-yellow-300 text-xs animate-float" style={{ animationDuration: '4.8s', animationDelay: '0.7s' }}>★</div>

      {/* Hearts */}
      <div className="absolute top-[20%] right-[40%] text-pink-300 text-xs animate-float" style={{ animationDuration: '4s', animationDelay: '1.5s' }}>♥</div>
      <div className="absolute top-[45%] left-[20%] text-pink-300 text-xs animate-float" style={{ animationDuration: '5s', animationDelay: '0.5s' }}>♥</div>
      <div className="absolute top-[70%] right-[30%] text-pink-300 text-xs animate-float" style={{ animationDuration: '3.5s', animationDelay: '2s' }}>♥</div>
      <div className="absolute top-[12%] left-[60%] text-pink-300 text-xs animate-float" style={{ animationDuration: '4.5s', animationDelay: '0.8s' }}>♥</div>
      <div className="absolute top-[80%] left-[8%] text-pink-300 text-xs animate-float" style={{ animationDuration: '5.2s', animationDelay: '1.1s' }}>♥</div>
      <div className="absolute top-[55%] right-[15%] text-pink-300 text-xs animate-float" style={{ animationDuration: '3.8s', animationDelay: '2.2s' }}>♥</div>
    </div>
  );
}
