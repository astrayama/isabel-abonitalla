import React from 'react';
import OSWindow from '@/components/ui/OSWindow';
import { quickFacts } from '@/data/profile';

export default function QuickFacts() {
  return (
    <OSWindow title="quick_facts.ini" variant="pink" bodyClassName="px-5 pt-2 pb-4">
      <dl className="m-0">
        {quickFacts.map(([label, value]) => (
          <div
            key={label}
            className="flex justify-between gap-3 border-b border-dashed border-tint-lilac py-[11px] last:border-b-0"
          >
            <dt className="font-mono text-xs tracking-[0.1em] text-muted">{label}</dt>
            <dd className="m-0 text-right text-sm font-extrabold">{value}</dd>
          </div>
        ))}
      </dl>
    </OSWindow>
  );
}
