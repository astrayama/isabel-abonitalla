export type Experience = {
  company: string;
  role: string;
  startDate: string;    // e.g. "May 2022"
  endDate: string;      // e.g. "Aug 2022" or "Present"
  location: string;
  logoUrl: string;
  detailUrl?: string;
  bullets: string[];
};

export const experiences: Experience[] = [
  {
    company: "Microsoft",
    role: "Software Engineer Intern",
    startDate: "May 2022",
    endDate: "Aug 2022",
    location: "Atlanta, GA",
    logoUrl: "/images/companies/msft.png",
    bullets: [
      "Implemented a rollback feature for the Impactful Orchestrator in C# with the Azure Planned Maintenance team"
    ]
  },
  {
    company: "Major League Hacking",
    role: "Hackathon Coach",
    startDate: "Mar 2022",
    endDate: "Jan 2024",
    location: "New York, NY",
    logoUrl: "/images/companies/mlh.png",
    bullets: [
      "Facilitate the success of seventeen 24-36 hour programming competitions each with 300+ students in attendance",
      "Teach 12+ international virtual workshops on technical and entrepreneurial topics to 40+ students"
    ]
  },
  {
    company: "Hunter College",
    role: "Undergraduate Teaching Assistant",
    startDate: "Feb 2022",
    endDate: "Dec 2022",
    location: "New York, NY",
    logoUrl: "/images/companies/hunter.jfif",
    bullets: [
      "Host office hours for 30+ students in the Computer Science department",
      "Teach data structures and algorithms to students in CSCI235"
    ]
  },
  {
    company: "Craving",
    role: "Founder",
    startDate: "Aug 2021",
    endDate: "Mar 2022",
    location: "New York, NY",
    logoUrl: "/images/companies/craving.png",
    bullets: [
      "Oversaw and managed the development of a mobile dating app which uses React Native and Firebase",
      "Created product requirements, technical specifications, business plan, pitch deck, roadmap, and other documents",
      "Participated in CUNY Startups accelerator program and finished ranking 4th out of 15 teams"
    ]
  },
  {
    company: "Roblox",
    role: "Product Management Intern",
    startDate: "May 2021",
    endDate: "Aug 2021",
    location: "San Mateo, CA",
    logoUrl: "/images/companies/roblox.jpg",
    bullets: [
      "Ideated key new features and wrote specification documents geared towards design and engineering teams",
      "Designed product requirements and low-fidelity mockups for desktop interfaces"
    ]
  },
  {
    company: "Oden Technologies Inc.",
    role: "Software Engineer Intern",
    startDate: "Feb 2021",
    endDate: "May 2021",
    location: "New York, NY",
    logoUrl: "/images/companies/oden.png",
    bullets: [
      "Improved user experience by implementing drag-and-drop reordering using React Typescript",
      "Created dynamic data visualization options using Go and GraphQL"
    ]
  },
  {
    company: "JumpButton Studio",
    role: "Director of Partnerships, Web Developer and Project Manager",
    startDate: "Jan 2021",
    endDate: "Oct 2021",
    location: "Philadelphia, PA",
    logoUrl: "/images/companies/jbs.jpg",
    bullets: [
      "Develop components for new company website and other client websites",
      "Manage projects by organizing sprints"
    ]
  },
  {
    company: "Research Foundation of City University of New York",
    role: "Teaching Assistant",
    startDate: "Sep 2020",
    endDate: "Dec 2020",
    location: "New York, NY",
    logoUrl: "/images/companies/rfcuny.png",
    bullets: [
      "Tutor 25 students in Computing Fundamentals class",
      "Assist students with lab activities and course project implementation"
    ]
  },
  {
    company: "Hunter College Google Developer Student Club",
    role: "Founder & President",
    startDate: "Jul 2020",
    endDate: "Dec 2023",
    location: "New York, NY",
    logoUrl: "/images/companies/dsc.png",
    bullets: [
      "Facilitate communications between core team, Google representatives, and campus faculty",
      "Plan and execute workshops and panels on technical skills"
    ]
  },
  {
    company: "The Purple Hydrangea Project",
    role: "Lead Developer and Board Member",
    startDate: "Jun 2020",
    endDate: "Sep 2021",
    location: "Chino Hills, CA",
    logoUrl: "/images/companies/php.jpg",
    bullets: [
      "Delegate tasks to the dev team and mentor high school students",
      "Make executive decisions and start initiatives"
    ]
  },
  {
    company: "HackGuild",
    role: "Founder and Executive Director",
    startDate: "May 2020",
    endDate: "Mar 2021",
    location: "New York, NY",
    logoUrl: "/images/companies/hg.png",
    bullets: [
      "Manage administrative duties including nonprofit compliance",
      "Create biweekly sprints and delegate tasks to 20 members"
    ]
  },
  {
    company: "Caribou Health",
    role: "Web Development Intern",
    startDate: "May 2020",
    endDate: "Aug 2020",
    location: "Toronto, Ontario, Canada",
    logoUrl: "/images/companies/caribou.png",
    bullets: [
      "Develop components for web-based healthcare platform",
      "Follow the Agile methodology"
    ]
  },
  {
    company: "CUNY Hackathon",
    role: "Lead Organizer",
    startDate: "Feb 2020",
    endDate: "Jul 2022",
    location: "New York, NY",
    logoUrl: "/images/companies/hackathon.png",
    bullets: [
      "Led the sponsorships team raising over $25,000 in two months",
      "Led the communications team creating and moderating platforms"
    ]
  },
  {
    company: "Fiera Capital Inc.",
    role: "Operations and IT Intern",
    startDate: "Jan 2020",
    endDate: "Jul 2020",
    location: "New York, NY",
    logoUrl: "/images/companies/fiera.jpeg",
    bullets: [
      "Developed a data parser for 18 years of FBI crime reports",
      "Enhanced controls and reporting processes, saving 400 hours and $20,000 a year"
    ]
  }
];
