import type { LucideIcon } from 'lucide-react';
import {
  Clock,
  DollarSign,
  FlaskConical,
  Flag,
  FolderOpen,
  GraduationCap,
  Medal,
  Mic,
  Presentation,
  Star,
  Trophy,
  Users,
} from 'lucide-react';
import type { Tint } from './profile';
import { archivedProjects, projects } from './projects';

export type Achievement = {
  value: string;
  title: string;
  detail: string;
  tint: Tint;
  icon: LucideIcon;
};

export const achievements: Achievement[] = [
  { value: '18×', title: 'hackathon winner', detail: 'including 1st place at the Maternal Mortality & Morbidity Code-a-thon', tint: 'yellow', icon: Trophy },
  { value: 'Top 50', title: 'MLH community member', detail: 'out of 135,000+ globally', tint: 'pink', icon: Star },
  { value: '1,000+', title: 'hackers coached', detail: 'across 17 MLH events with 300+ students each', tint: 'blue', icon: Users },
  { value: '3.99', title: 'GPA', detail: 'cloud computing at Purdue', tint: 'lilac', icon: GraduationCap },
  { value: '1st', title: 'MIT Grand Hack', detail: 'won the Patient Safety Challenge at MIT Hacking Medicine, 2023', tint: 'teal', icon: Medal },
  { value: '$25K+', title: 'raised in two months', detail: 'led the sponsorships team for CUNY Hackathon', tint: 'yellow', icon: DollarSign },
  { value: '400 hrs', title: 'saved every year', detail: 'plus $20,000 a year, by improving controls and reporting at Fiera Capital', tint: 'pink', icon: Clock },
  { value: '4×', title: 'MLH Hackcon speaker', detail: 'a talk every year from 2021 to 2024, on supporting hackers, hackathon legacy and burnout', tint: 'blue', icon: Mic },
  { value: '20+', title: 'workshops taught', detail: 'international virtual sessions on tech and entrepreneurship for MLH', tint: 'lilac', icon: Presentation },
  { value: '3', title: 'orgs founded', detail: 'HackGuild, Hunter College GDSC and Craving', tint: 'teal', icon: Flag },
  { value: String(projects.length + archivedProjects.length), title: 'projects shipped', detail: 'VR, AI, mobile, health and more, all in projects/', tint: 'yellow', icon: FolderOpen },
  { value: '1', title: 'novel bacteriophage', detail: 'discovered in biomedical research, one that kills Staph aureus', tint: 'pink', icon: FlaskConical },
];

// The progress pill reads "12 / 99 unlocked"; there's always more to go
export const ACHIEVEMENT_SLOTS = 99;
