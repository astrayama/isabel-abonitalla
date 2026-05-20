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
    company: "Roblox",
    role: "Product Manager Intern",
    startDate: "Jun 2021",
    endDate: "Sep 2021",
    location: "Remote",
    logoUrl: "/images/companies/roblox.png",
    bullets: [
      "Aligned design and engineering teams on inventory system requirements, impacting 2.5M+ creators",
      "Synthesized competitive analysis of Unity and Unreal Engine UIs into actionable roadmap recommendations",
      "Conducted user research and defined success metrics for inventory system redesign",
    ],
  },
  {
    company: "Major League Hacking",
    role: "Hackathon Coach",
    startDate: "Feb 2022",
    endDate: "Jan 2024",
    location: "New York, NY",
    logoUrl: "/images/companies/mlh.png",
    bullets: [
      "Owned end-to-end operations for 20+ events (300+ attendees each), managing logistics and budgets",
      "Coached 1,000+ hackers on product thinking, user research, and go-to-market strategy",
      "Presented at HackCon four times on diversity, event strategy, and inclusive hacker experiences",
    ],
  },
  {
    company: "Microsoft",
    role: "Software Engineer Intern",
    startDate: "May 2022",
    endDate: "Aug 2022",
    location: "Remote",
    logoUrl: "/images/companies/microsoft.ico",
    bullets: [
      "Reduced incident recovery time by building rollback functionality in C#, improving reliability SLAs",
      "Analyzed enterprise feedback and usage telemetry to define and prioritize Azure platform backlog items",
    ],
  },
  {
    company: "Craving",
    role: "Founder",
    startDate: "Feb 2022",
    endDate: "Present",
    location: "New York, NY",
    logoUrl: "/images/companies/craving.png",
    bullets: [
      "Founded and led a 20-person cross-functional team to build a dating app focused on honesty and safety",
      "Directed product design, user research, and development from concept to MVP through CUNY Startups",
    ],
  },
];
