export type Tint = 'lilac' | 'pink' | 'blue' | 'sky' | 'teal' | 'yellow';

export const links = {
  resume: '/resume.pdf',
  email: 'mailto:isabelabonitalla@gmail.com',
  linkedin: 'https://www.linkedin.com/in/isabel-abonitalla',
  github: 'https://github.com/astrayama',
  devpost: 'https://devpost.com/isabiiil',
  creativeWorks: 'https://isa23-links.vercel.app/',
  upwork: 'https://www.upwork.com/freelancers/~01da5c274739c25969',
};

export const tickerText =
  "★ Isabel's portfolio ★ CS undergrad @ Purdue ★ 18× hackathon winner ★ MLH Top 50 ★ product builder ★ accessibility advocate ★ open to PM + product engineer roles";

export const typewriterRoles = ['a product builder', 'a CS undergrad', 'an accessibility advocate'];

export const heroChips: { label: string; tint: Tint }[] = [
  { label: 'Purdue', tint: 'lilac' },
  { label: 'GPA 3.99', tint: 'pink' },
  { label: '18× hackathon winner', tint: 'blue' },
  { label: 'MLH Top 50', tint: 'yellow' },
];

export const quickFacts: [label: string, value: string][] = [
  ['STUDYING', 'cloud computing @ Purdue'],
  ['GPA', '3.99'],
  ['HACKATHONS', '18× winner'],
  ['MLH', 'Top 50 of 135,000+'],
  ['COACHED', '1,000+ hackers'],
  ['LOOKING FOR', 'PM / product engineer roles'],
];

// Taskbar tabs, in page order
export const navSections = [
  { id: 'hero', label: 'welcome.exe' },
  { id: 'about', label: 'about.txt' },
  { id: 'skills', label: 'skills.exe' },
  { id: 'projects', label: 'projects/' },
  { id: 'experience', label: 'experience.log' },
  { id: 'press', label: 'press/' },
  { id: 'contact', label: 'contact.exe' },
];
