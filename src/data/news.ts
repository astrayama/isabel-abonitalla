export type NewsItem = {
  title: string;
  description: string;
  url: string;
  source?: string;
  date?: string;
};

export const news: NewsItem[] = [
  {
    title: "MLH Hackcon XI: How You and Your Hackers Can Overcome Burnout",
    description: "Speaking about burnout prevention and recovery in the hackathon community",
    url: "#",
    source: "MLH Hackcon",
    date: "Aug 2023"
  },
  {
    title: "MIT Hacking Medicine's Grand Hack: Winning the Patient Safety Challenge",
    description: "Recognition for winning the Patient Safety Challenge at MIT's healthcare hackathon",
    url: "#",
    source: "MIT Grand Hack",
    date: "May 2023"
  },
  {
    title: "MLH Hackcon X Lightning Talk: Continuing the Legacy of your Hackathon",
    description: "Lightning talk on building sustainable hackathon communities",
    url: "#",
    source: "MLH Hackcon",
    date: "Aug 2022"
  },
  // Placeholders
  ...Array.from({ length: 11 }).map((_, i) => ({
    title: `Placeholder News Article ${i + 1}`,
    description: `Description for placeholder news ${i + 1}`,
    url: "#",
    source: "press",
    date: `202${i % 4}`
  }))
];
