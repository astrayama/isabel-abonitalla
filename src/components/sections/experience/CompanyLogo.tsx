'use client';
import React, { useState } from 'react';
import Image from 'next/image';
import type { Experience } from '@/data/experiences';
import { cn } from '@/lib/utils';

const boxes = {
  sm: 'size-4 rounded-[4px] text-[9px] md:size-5',
  lg: 'size-10 rounded-lg border-2 border-edge text-lg',
};

export default function CompanyLogo({ exp, size = 'sm' }: { exp: Experience; size?: 'sm' | 'lg' }) {
  const [imgError, setImgError] = useState(false);
  return (
    <span className={cn('relative flex flex-none items-center justify-center overflow-hidden bg-white', boxes[size])}>
      {exp.logoUrl && !imgError ? (
        <Image
          src={exp.logoUrl}
          alt=""
          fill
          sizes={size === 'sm' ? '20px' : '40px'}
          className="object-contain"
          onError={() => setImgError(true)}
        />
      ) : (
        <span className="font-mono leading-none text-[hsl(240,30%,20%)]">{exp.company.charAt(0)}</span>
      )}
    </span>
  );
}
