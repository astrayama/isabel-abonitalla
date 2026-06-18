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
    url: "https://www.youtube.com/watch?v=F6Gg1XAPq_w&t=11s",
    source: "MLH Hackcon",
    date: "Aug 2023"
  },
  {
    title: "MIT Hacking Medicine's Grand Hack: Winning the Patient Safety Challenge",
    description: "Recognition for winning the Patient Safety Challenge at MIT's healthcare hackathon",
    url: "https://www.patientsafetytech.com/past-competitions/mithackingmedicinegrandhack2023",
    source: "MIT Grand Hack",
    date: "May 2023"
  },
  {
    title: "MLH Hackcon X Lightning Talk: Continuing the Legacy of your Hackathon",
    description: "Lightning talk on building sustainable hackathon communities",
    url: "https://www.youtube.com/watch?v=L_ure3Z-qGw",
    source: "MLH Hackcon",
    date: "Aug 2022"
  },
  {
    title: "Launch House: Hack House 3 - Demo Day NYC",
    description: "Demo Day presentation at Launch House NYC (Timestamp 1:25:03)",
    url: "https://launchhouse.livecontrol.tv/f7066703",
    source: "Launch House",
    date: "2022"
  },
  {
    title: "MLH Hackcon IX Lightning Talk: 4 Ways You Can Support Your Hackers",
    description: "Lightning talk on supporting hackathon participants",
    url: "https://youtu.be/bTqJFxEVS5c?t=1102",
    source: "MLH Hackcon",
    date: "Aug 2021"
  },
  {
    title: "The National Center for Women & Information Technology (NCWIT) Collegiate Award Finalist",
    description: "Selected as finalist for the prestigious NCWIT Collegiate Award 2021",
    url: "https://www.aspirations.org/blog/national-center-women-information-technology-ncwit-selects-finalists-2021-ncwit-collegiate",
    source: "NCWIT",
    date: "2021"
  },
  {
    title: "Interview with Isabel Abonitalla: Chapter leader, student, and entrepreneur",
    description: "Codecademy interview discussing leadership and entrepreneurship in tech",
    url: "https://news.codecademy.com/interview-isabel-chapter-leader/",
    source: "Codecademy",
    date: "2021"
  },
  {
    title: "MLH's Top 50 Hackers of 2020",
    description: "Named one of Major League Hacking's Top 50 Hackers out of 100,000 participants",
    url: "https://top.mlh.io/2020/profiles/isabel-abonitalla",
    source: "Major League Hacking",
    date: "2020"
  },
  {
    title: "Shine Podcast: Celebrating Your Whole Self at Work",
    description: "Discussion with Shine co-founders about workspace culture",
    url: "https://youtu.be/ae2pofZ5L1Q",
    source: "Shine App",
    date: "2020"
  },
  {
    title: "NJII Code-a-thon focuses on Maternal Mortality and Morbidity",
    description: "Coverage of healthcare-focused hackathon addressing maternal health issues",
    url: "https://njbiz.com/njii-code-thon-focuses-maternal-mortality-morbidity/",
    source: "NJBiz",
    date: "2020"
  },
  {
    title: "Newtown High School Graduation Speech",
    description: "Valedictorian speech at Newtown High School graduation",
    url: "https://youtu.be/XOcD6CwDPB8",
    source: "YouTube",
    date: "2019"
  },
  {
    title: "Consortium Alumni Youth Council: Urban Barcode Research Project",
    description: "Experience in the Urban Barcode Research Project",
    url: "https://www.youtube.com/watch?v=-R3UXu-Ztn8",
    source: "YouTube",
    date: "2019"
  },
  {
    title: "Using Barcoded DNA to Identify Weapons Against Antibiotic Resistance",
    description: "Research on using DNA barcoding to combat antibiotic resistance",
    url: "https://www.cshl.edu/labdish/how-cool-is-science-students-use-barcoded-dna-to-identify-a-weapon-against-antibiotic-resistance/",
    source: "CSHL",
    date: "2019"
  },
  {
    title: "HK Maker Lab: Biomedical Engineering Design Program",
    description: "6 week intensive biomedical engineering design program for NYC high school students",
    url: "https://www.youtube.com/watch?v=CKKF8KxN0vc&feature=youtu.be",
    source: "YouTube",
    date: "2018"
  }
];
