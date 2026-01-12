
import { WorkExperience, AdditionalExperience, SkillGroup, ContactInfo } from './types.ts';

export const CONTACT_DATA: ContactInfo = {
  email: 'robertnelson1353@gmail.com',
  phone: '503-715-7740',
  location: 'Missoula, MT',
  linkedin: 'https://www.linkedin.com/in/robert-nelson-2ab8451a6/'
};

export const PROJECTS = [
  {
    title: "Flybox",
    status: "WIP",
    description: "A comprehensive fly fishing companion. Digital logbooks meet AI-driven hatch recommendations tailored to specific Montana river data.",
    tags: ["React", "River API", "AI"]
  },
  {
    title: "AI Marketing Intelligence",
    status: "Active",
    description: "Automated workflow built in n8n that scrapes and analyzes competitor post data across LinkedIn, Instagram, and Facebook to generate actionable marketing insights for clients.",
    tags: ["n8n", "LLMs", "Automation"]
  },
  {
    title: "IoT / ESP32 Tools",
    status: "Active",
    description: "Exploring hardware-software integration through custom ESP32 sensors for home environment tracking and automation.",
    tags: ["Embedded", "IoT"]
  },
  {
    title: "Private Home Cloud",
    status: "Stable",
    description: "Local infrastructure setup for secure data storage and media management, moving away from centralized SaaS dependencies.",
    tags: ["Networking", "Docker"]
  }
];

export const FREELANCE_STATS = [
  { label: "Client Satisfaction", value: "100%" },
  { label: "Clients Served", value: "15+" }
];

export const TESTIMONIALS = [
  {
    quote: "Robert was professional, easy to get a hold of, and patient! I would work with Robert again and highly recommend him for any of your Google Ad conversion tracking needs!",
    author: "Thomas Carton",
    context: "Vertices Company Inc."
  },
  {
    quote: "Robert is a fantastic communicator and takes the initiative in tackling tasks. Highly recommend.",
    author: "Nicholas Richards",
    context: "Packiyo"
  }
];

export const HOBBIES = [
  {
    title: "Bodybuilding",
    location: "Natural Competitor 2024",
    description: "Disciplined approach to physique and nutrition. Successfully competed as a natural bodybuilder in 2024.",
    icon: "fa-dumbbell"
  },
  {
    title: "Muay Thai",
    location: "Striking & Conditioning",
    description: "Finding mental clarity through high-intensity striking and traditional technique.",
    icon: "fa-hand-fist"
  }
];

export const WORK_EXPERIENCE: WorkExperience[] = [
  {
    role: "Tracking Specialist",
    company: "Pathlabs, an MiQ company",
    period: "Jan 2024 - Present",
    location: "Missoula, MT",
    highlights: [
      "Architected and enhanced a Tag Monitoring System to proactively detect signal degradation.",
      "Led a full overhaul of conversion and signal architecture (HubSpot + Google Ads Enhanced Conversions)."
    ]
  },
  {
    role: "Tracking Coordinator",
    company: "Pathlabs, an MiQ company",
    period: "May 2023 - Jan 2024",
    location: "Missoula, MT",
    highlights: [
      "Coordinated and managed complex tracking implementations across 100+ advertising accounts."
    ]
  }
];

export const ADDITIONAL_EXPERIENCE: AdditionalExperience[] = [
  {
    role: "Commercial Loan Processor",
    company: "First Security Bank",
    period: "June 2022 – May 2023",
    location: "Missoula, MT",
    highlights: ["Processed and validated complex financial documentation ($1M+ per file)."]
  }
];

export const SKILL_GROUPS: SkillGroup[] = [
  {
    category: "The Core",
    icon: "fa-code-branch",
    items: ["GTM Expert", "GA4", "Web Analytics", "Server-Side Tracking"]
  },
  {
    category: "Practical Familiarity",
    icon: "fa-terminal",
    items: ["n8n", "JavaScript", "Python", "Local LLM's", "Networking"]
  },
  {
    category: "The Vision",
    icon: "fa-eye",
    items: ["Looker Studio", "Excel Automation", "Data Architecture"]
  }
];

export const EDUCATION = {
  degree: "Management & Entrepreneurship",
  school: "University of Montana",
  period: "2017 - 2021",
  details: "NCAA Division I Football Athlete (5 Years)"
};
