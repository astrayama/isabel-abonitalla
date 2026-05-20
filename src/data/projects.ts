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
    imageUrl: '/images/projects/yggdrasil.jpg',
    projectUrl: 'https://yggdrasil-journal.lovable.app/',
    stack: ['React', 'TypeScript', 'Google AI Studio', 'Supabase', 'Vite']
  },
  {
    title: 'Anicca',
    categories: ['Healthcare', 'AI/ML'],
    description: 'A gentle mood and energy tracker that maps emotions to seven chakras',
    imageUrl: '/images/projects/anicca.jpg',
    projectUrl: 'https://anicca.lovable.app/',
    stack: ['React', 'TypeScript', 'Tailwind CSS']
  },
  {
    title: 'Polvo Planner',
    categories: ['Business & Finance'],
    description: 'A pastry production planner for Toasty Polvo',
    imageUrl: '/images/projects/polvo.png',
    projectUrl: 'https://devpost.com/software/kapwa-codefest',
    stack: ['React', 'TypeScript', 'Tailwind CSS']
  },
  {
    title: 'ColorFit',
    categories: ['Entertainment'],
    description: 'Get an outfit recommendation based on your skin tone!',
    imageUrl: '/images/projects/colorfit.png',
    projectUrl: 'https://devpost.com/software/colorfit',
    stack: ['Python', 'OpenCV', 'Cohere', 'Flask', 'Next.js']
  },
  {
    title: 'meds.fyi',
    categories: ['Healthcare', 'Social Impact'],
    description: 'Healthcare Price Transparency platform for better medical cost visibility',
    imageUrl: '/images/projects/medsfyi.png',
    projectUrl: 'https://devpost.com/software/meds-fyi',
    stack: ['React', 'GCP', 'Firebase', 'SQL', 'Node.js']
  },
  {
    title: 'Carbon Footprint Ticker',
    categories: ['Social Impact'],
    description: 'Track your carbon footprint over time and compare with friends.',
    imageUrl: '/images/projects/carbon-ticker.png',
    projectUrl: 'https://devpost.com/software/carbon-footprint-ticker',
    stack: ['React', 'D3.js', 'Firebase']
  },
  {
    title: 'WEmotion',
    categories: ['Healthcare'],
    description: 'WE are here to help alexithymia patients resolve their emotional conflicts.',
    imageUrl: '/images/projects/wemotion.gif',
    projectUrl: 'https://devpost.com/software/alexithymia',
    stack: ['React', 'Firebase', 'Chart.js']
  },
  {
    title: 'FoodLink',
    categories: ['Social Impact'],
    description: 'Build a community while saving the environment with crowdsourced food pantries!',
    imageUrl: '/images/projects/foodlink.png',
    projectUrl: 'https://devpost.com/software/foodlink',
    stack: ['HTML', 'CSS', 'Flask', 'Jinja', 'Google Places API', 'GCP']
  },
  {
    title: 'Tomo',
    categories: ['Healthcare'],
    description: 'Your friend and personal guide empowering you on your journey towards self-growth!',
    imageUrl: '/images/projects/tomo.png',
    projectUrl: 'https://devpost.com/software/tomo',
    stack: ['React', 'Firebase']
  },
  {
    title: "Hero's Path",
    categories: ['Entertainment'],
    description: "I'll remember enough for both of us ❤",
    imageUrl: '/images/projects/heros-path.jpg',
    projectUrl: 'https://devpost.com/software/hero-s-path',
    stack: ['React', 'Google Maps API', 'Twilio']
  },
  {
    title: 'Magenta',
    categories: ['Entertainment', 'AI/ML'],
    description: 'A Manga Soundtrack Generator, a Manga Jam',
    imageUrl: '/images/projects/magenta.png',
    projectUrl: 'https://devpost.com/software/magenta-8473n2',
    stack: ['GCP', 'React', 'Node.js', 'TensorFlow']
  },
  {
    title: 'Trip Splitter',
    categories: ['Business & Finance'],
    description: 'Splitting multiple checks has never been easier!',
    imageUrl: '/images/projects/trip-splitter.png',
    projectUrl: 'https://devpost.com/software/trip-splitter',
    stack: ['React', 'Firebase']
  },
  {
    title: 'Face Mask Detection using Machine Learning',
    categories: ['AI/ML', 'Healthcare', 'Social Impact'],
    description: 'Enforce face mask wearing using machine learning.',
    imageUrl: '/images/projects/mask-detection.jpg',
    projectUrl: 'https://devpost.com/software/mask-detection-with-ai',
    stack: ['Python', 'OpenCV', 'TensorFlow']
  },
  {
    title: 'Athena: Empathetic Playlists',
    categories: ['Entertainment'],
    description: 'Get song recommendations based on your emotions!',
    imageUrl: '/images/projects/athena.jpg',
    projectUrl: 'https://devpost.com/software/athena-empathetic-playlists',
    stack: ['React Native', 'Spotify API', 'Emotiv', 'Python']
  },
  {
    title: 'Sift',
    categories: ['Business & Finance'],
    description: 'Helping restaurant owners sift through the noise and gain constructive feedback.',
    imageUrl: '/images/projects/sift.png',
    projectUrl: 'https://devpost.com/software/sift-sachacks-iii-project',
    stack: ['Adobe XD', 'GCP', 'IBM Watson', 'Kaggle', 'Python']
  },
  {
    title: 'Safely',
    categories: ['Social Impact'],
    description: 'Safety App for Women by Women',
    imageUrl: '/images/projects/safely.png',
    projectUrl: 'https://devpost.com/software/safely-safety-app-with-women-in-mind-by-women',
    stack: ['React Native', 'Adobe XD', 'GCP']
  },
  {
    title: 'TrustBuilder',
    categories: ['Social Impact'],
    description: 'Transparency and accountability for nonprofits and politicians',
    imageUrl: '/images/projects/trustbuilder.png',
    projectUrl: 'https://devpost.com/software/trustbuilder',
    stack: ['React', 'Express.js', 'Node.js', 'Heroku', 'OAuth']
  }
];
