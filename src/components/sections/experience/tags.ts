import type { ExperienceTag } from '@/data/experiences';

// Each tag borrows one of the folder tints from globals.css
const tagColor: Record<ExperienceTag, string> = {
  school: 'lilac',
  internship: 'blue',
  work: 'sky',
  community: 'pink',
  teaching: 'teal',
  founder: 'yellow',
};

export const tagWash = (tag: ExperienceTag) => `var(--wash-${tagColor[tag]})`;
export const tagTint = (tag: ExperienceTag) => `var(--tint-${tagColor[tag]})`;

// Hatched fill for the side rails
export const tagStripes = (tag: ExperienceTag) =>
  `repeating-linear-gradient(135deg, ${tagTint(tag)} 0 3px, ${tagWash(tag)} 3px 9px)`;
