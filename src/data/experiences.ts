export type Experience = {
  company: string;
  role: string;
  date: string;
  location: string;
  logoUrl: string;
  detailUrl?: string;
};

export const experiences: Experience[] = [
  {
    company: "Microsoft",
    role: "Software Engineer Intern",
    date: "May 2022",
    location: "Atlanta, GA",
    logoUrl: "/images/companies/microsoft.ico",
  },
  {
    company: "Major League Hacking",
    role: "Hackathon Coach",
    date: "March 2022",
    location: "New York, NY",
    logoUrl: "/images/companies/mlh.png",
  },
  {
    company: "Roblox",
    role: "Product Management Intern",
    date: "May 2021",
    location: "San Mateo, CA",
    logoUrl: "/images/companies/roblox.png",
  },
  {
    company: "Craving",
    role: "Founder",
    date: "August 2021",
    location: "New York, NY",
    logoUrl: "/images/companies/craving.png",
  },
  // Room for 10 more entries
];
