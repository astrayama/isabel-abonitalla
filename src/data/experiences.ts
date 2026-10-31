export type ExperienceTag = 'school' | 'internship' | 'work' | 'community' | 'teaching' | 'founder';

export type Experience = {
  company: string;
  role: string;
  tag: ExperienceTag;
  fileName?: string;    // timeline file label, defaults to "<company>.exp"
  display?: 'card' | 'rail'; // calendar style; community roles default to a side rail
  note?: string;        // shown after the company, e.g. a GPA
  startDate: string;    // e.g. "May 2022"; the calendar places entries by these dates
  endDate: string;      // e.g. "Aug 2022" or "Present"
  location: string;
  logoUrl: string;
  detailUrl?: string;
  bullets: string[];
};

export const experiences: Experience[] = [
  {
    company: "Purdue",
    role: "Cloud computing degree",
    tag: "school",
    fileName: "purdue.edu",
    note: "3.99 GPA",
    startDate: "Jul 2025",
    endDate: "Nov 2026",
    location: "",
    logoUrl: "",
    bullets: []
  },
  {
    company: "Microsoft",
    role: "Software Engineer Intern",
    tag: "internship",
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
    tag: "community",
    display: "card",
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
    tag: "teaching",
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
    tag: "founder",
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
    tag: "internship",
    startDate: "Jun 2021",
    endDate: "Sep 2021",
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
    tag: "internship",
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
    tag: "work",
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
    tag: "teaching",
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
    tag: "community",
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
    tag: "community",
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
    tag: "founder",
    startDate: "May 2020",
    endDate: "Feb 2021",
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
    tag: "internship",
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
    company: "HackCUNY",
    role: "Lead Organizer",
    tag: "community",
    note: "CUNY Startups",
    startDate: "Feb 2020",
    endDate: "Mar 2024",
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
    tag: "internship",
    startDate: "Jan 2020",
    endDate: "Jul 2020",
    location: "New York, NY",
    logoUrl: "/images/companies/fiera.jpeg",
    bullets: [
      "Developed a data parser for 18 years of FBI crime reports",
      "Enhanced controls and reporting processes, saving 400 hours and $20,000 a year"
    ]
  },
  {
    company: "HAX",
    role: "Director of Internal Affairs & Operations",
    tag: "community",
    startDate: "Aug 2019",
    endDate: "May 2020",
    location: "",
    logoUrl: "",
    bullets: [
      "Led the Operations team: branding standards, financial reports, nonprofit compliance, and keeping goals and timelines on track",
      "Onboarded new members and budgeted funding from sponsors",
      "Created guidelines and standards to streamline tasks across divisions"
    ]
  },
  {
    company: "The City University of New York",
    role: "Data Analytics Intern",
    tag: "internship",
    fileName: "cuny.exp",
    startDate: "Jul 2019",
    endDate: "Aug 2019",
    location: "New York, NY",
    logoUrl: "",
    bullets: [
      "Collected, analyzed, and organized student enrollment records with a team of 6",
      "Standardized records for 250+ courses and validated 1,400+ institution records across CUNY",
      "Tested and debugged Schedule Builder, a student-facing scheduling app, and wrote its user manual"
    ]
  },
  {
    company: "HAX",
    role: "Director of Design",
    tag: "community",
    startDate: "Mar 2019",
    endDate: "Aug 2019",
    location: "",
    logoUrl: "",
    bullets: [
      "Led the design of the logo, website, and social media posts",
      "Created and maintained the branding guide and press kit"
    ]
  },
  {
    company: "Robert Wood Johnson University Hospital",
    role: "Nursing Informatics Intern",
    tag: "internship",
    fileName: "rwjuh.exp",
    note: "Break Through Tech Sprinternship",
    startDate: "Jan 2019",
    endDate: "Jan 2019",
    location: "New Brunswick, NJ",
    logoUrl: "",
    bullets: [
      "Trained nursing directors on HealthGrid for electronic medical records",
      "Debugged and troubleshot Find Your Way, the hospital's in-house navigation app"
    ]
  },
  {
    company: "Hunter College",
    role: "Computer Science coursework",
    tag: "school",
    fileName: "hunter.edu",
    display: "rail",
    note: "Dean's List",
    startDate: "Aug 2017",
    endDate: "Dec 2024",
    location: "New York, NY",
    logoUrl: "/images/companies/hunter.jfif",
    bullets: []
  },
  {
    company: "Columbia University Medical Center",
    role: "Research Associate",
    tag: "work",
    fileName: "cumc.exp",
    startDate: "Jun 2017",
    endDate: "Aug 2018",
    location: "New York, NY",
    logoUrl: "",
    bullets: [
      "Used R in the MR-Science lab to compare brain metabolite levels in healthy patients and patients with multiple sclerosis",
      "Applied machine learning to classify multiple sclerosis variants from proton spectroscopy data with 72% accuracy"
    ]
  },
  {
    company: "Khan's Tutorial",
    role: "Quality Manager of HSAP Department",
    tag: "teaching",
    startDate: "Mar 2017",
    endDate: "Feb 2019",
    location: "New York, NY",
    logoUrl: "",
    bullets: [
      "Promoted to manager after teaching 70 students; supervised 5 instructors teaching 210+ students for state exams and the SAT",
      "Ran classroom logistics, inventory, and finances, and met with parents bi-monthly on student progress",
      "Built a more efficient student database for the SAT program, was named Manager of the Month, and grew enrollment 20%"
    ]
  },
  {
    company: "Columbia Engineering",
    role: "Student Intern",
    tag: "internship",
    note: "HK Maker Lab",
    startDate: "Jul 2016",
    endDate: "Aug 2016",
    location: "New York, NY",
    logoUrl: "",
    bullets: [
      "Prototyped a guidance system for the visually impaired using ultrasonic sensors on glasses, speakers, and Arduino",
      "Wrote a business plan with my team and pitched it to a panel of biomedical professionals"
    ]
  },
  {
    company: "Icahn School of Medicine at Mount Sinai",
    role: "Research Intern",
    tag: "internship",
    fileName: "mount-sinai.exp",
    note: "Urban Barcode Research Program",
    startDate: "Apr 2016",
    endDate: "May 2017",
    location: "New York, NY",
    logoUrl: "",
    bullets: [
      "Characterized New York City soil biomes with next-generation sequencing and found a novel phage capable of killing Staph aureus",
      "Took preparatory classes in conservation biology and DNA barcoding"
    ]
  }
];
