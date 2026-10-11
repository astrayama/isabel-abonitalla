import type { Tint } from './profile';

export type SkillElement = {
  sym: string;   // two-letter "periodic table" symbol
  name: string;
};

export type SkillFolder = {
  id: string;
  label: string;
  tint: Tint;
  elements: SkillElement[];
};

export const skillFolders: SkillFolder[] = [
  {
    id: 'languages',
    label: 'languages/',
    tint: 'lilac',
    elements: [
      { sym: 'Py', name: 'Python' },
      { sym: 'Js', name: 'JavaScript' },
      { sym: 'Cs', name: 'C#' },
      { sym: 'Cp', name: 'C++' },
      { sym: 'R', name: 'R' },
      { sym: 'Go', name: 'Go' },
    ],
  },
  {
    id: 'frontend',
    label: 'frontend/',
    tint: 'pink',
    elements: [
      { sym: 'Re', name: 'React' },
      { sym: 'Rn', name: 'React Native' },
      { sym: 'Nx', name: 'Next.js' },
      { sym: 'Gb', name: 'Gatsby.js' },
      { sym: 'Hc', name: 'HTML/CSS' },
    ],
  },
  {
    id: 'backend',
    label: 'backend/',
    tint: 'blue',
    elements: [
      { sym: 'No', name: 'Node.js' },
      { sym: 'Gq', name: 'GraphQL' },
      { sym: 'Fb', name: 'Firebase' },
      { sym: 'Sb', name: 'Supabase' },
      { sym: 'Sq', name: 'SQL' },
      { sym: 'My', name: 'MySQL' },
      { sym: 'Ns', name: 'NoSQL' },
    ],
  },
  {
    id: 'cloud',
    label: 'cloud/',
    tint: 'sky',
    elements: [
      { sym: 'Gc', name: 'GCP' },
      { sym: 'Az', name: 'Azure' },
      { sym: 'Aw', name: 'AWS' },
    ],
  },
  {
    id: 'tools',
    label: 'tools/',
    tint: 'teal',
    elements: [
      { sym: 'Gt', name: 'Git' },
      { sym: 'Ad', name: 'Adobe Creative Suite' },
      { sym: 'Of', name: 'Office 365' },
      { sym: 'Lv', name: 'Lovable' },
      { sym: 'Cl', name: 'Claude' },
      { sym: 'Gm', name: 'Gemini' },
      { sym: 'Gp', name: 'GPT' },
      { sym: 'N8', name: 'n8n' },
      { sym: 'Un', name: 'Unsloth' },
    ],
  },
  {
    id: 'product',
    label: 'product/',
    tint: 'yellow',
    elements: [
      { sym: 'Ps', name: 'Product Strategy' },
      { sym: 'Rm', name: 'Roadmapping' },
      { sym: 'Ur', name: 'User Research' },
      { sym: 'Wf', name: 'Wireframing & Prototyping' },
      { sym: 'Xf', name: 'Cross-Functional Leadership' },
      { sym: 'Sm', name: 'Stakeholder Management' },
      { sym: 'Ag', name: 'Agile & Scrum' },
      { sym: 'Ph', name: 'PostHog' },
      { sym: 'Fg', name: 'Figma' },
      { sym: 'Nt', name: 'Notion' },
      { sym: 'At', name: 'Atlassian' },
    ],
  },
];
