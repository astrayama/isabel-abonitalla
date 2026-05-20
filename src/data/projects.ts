export type Category = 'AI/ML' | 'Business & Finance' | 'Entertainment' | 'Healthcare' | 'Social Impact';

export type Project = {
  title: string;
  categories: Category[];
  description: string;
  imageUrl: string;
  projectUrl: string;
  stack: string[];
};

export const projects: Project[] = [
  {
    title: 'Yggdrasil',
    categories: ['AI/ML'],
    description: 'Journal insights and visualizations',
    imageUrl: '/images/projects/yggdrasil.png',
    projectUrl: '#',
    stack: ['React', 'TypeScript', 'OpenAI', 'Supabase', 'Node.js'],
  },
  {
    title: 'Anicca',
    categories: ['Healthcare', 'AI/ML'],
    description: 'A gentle mood and energy tracker that maps emotions to seven chakras',
    imageUrl: '/images/projects/anicca.png',
    projectUrl: '#',
    stack: ['React', 'TypeScript', 'Firebase', 'AI/ML'],
  },
  {
    title: 'Polvo Planner',
    categories: ['Business & Finance'],
    description: 'A pastry production planner for Toasty Polvo',
    imageUrl: '/images/projects/polvo.png',
    projectUrl: '#',
    stack: ['React', 'TypeScript', 'Tailwind'],
  },
  {
    title: 'ColorFit',
    categories: ['Entertainment'],
    description: 'Get an outfit recommendation based on your skin tone!',
    imageUrl: '/images/projects/colorfit.png',
    projectUrl: '#',
    stack: ['Python', 'ML', 'React'],
  },
  {
    title: 'meds.fyi',
    categories: ['Healthcare', 'Social Impact'],
    description: 'Healthcare Price Transparency platform for better medical cost visibility',
    imageUrl: '/images/projects/medsfyi.png',
    projectUrl: '#',
    stack: ['React', 'GCP', 'SQL', 'Node.js'],
  },
  // Placeholders
  ...Array.from({ length: 12 }).map((_, i) => ({
    title: `Placeholder Project ${i + 1}`,
    categories: ['Entertainment'] as Category[],
    description: `Description for placeholder ${i + 1}`,
    imageUrl: `/images/projects/placeholder.png`,
    projectUrl: '#',
    stack: [],
  }))
];
