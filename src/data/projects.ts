export type Category = 'AI/ML' | 'Business & Finance' | 'Entertainment' | 'Healthcare' | 'Social Impact';

export type Project = {
  title: string;
  categories: Category[];
  description: string;
  imageUrl: string;
  projectUrl: string;
};

export const projects: Project[] = [
  {
    title: 'Yggdrasil',
    categories: ['AI/ML'],
    description: 'Journal insights and visualizations',
    imageUrl: '/images/projects/yggdrasil.png',
    projectUrl: '#',
  },
  {
    title: 'Anicca',
    categories: ['Healthcare', 'AI/ML'],
    description: 'A gentle mood and energy tracker that maps emotions to seven chakras',
    imageUrl: '/images/projects/anicca.png',
    projectUrl: '#',
  },
  {
    title: 'Polvo Planner',
    categories: ['Business & Finance'],
    description: 'A pastry production planner for Toasty Polvo',
    imageUrl: '/images/projects/polvo.png',
    projectUrl: '#',
  },
  {
    title: 'ColorFit',
    categories: ['Entertainment'],
    description: 'Get an outfit recommendation based on your skin tone!',
    imageUrl: '/images/projects/colorfit.png',
    projectUrl: '#',
  },
  {
    title: 'meds.fyi',
    categories: ['Healthcare', 'Social Impact'],
    description: 'Healthcare Price Transparency platform for better medical cost visibility',
    imageUrl: '/images/projects/medsfyi.png',
    projectUrl: '#',
  },
  // Placeholders
  ...Array.from({ length: 12 }).map((_, i) => ({
    title: `Placeholder Project ${i + 1}`,
    categories: ['Entertainment'] as Category[],
    description: `Description for placeholder ${i + 1}`,
    imageUrl: `/images/projects/placeholder.png`,
    projectUrl: '#',
  }))
];
