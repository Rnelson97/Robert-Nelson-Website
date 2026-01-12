
import React from 'react';
import { WorkExperience, AdditionalExperience, SkillGroup, ContactInfo } from './types';

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
  },
  {
    quote: "Had to go on a hiatus but came back to review Robert. He was wonderful, professional and knowledgeable, will contact and hire again once I return to work.",
    author: "Sam Zamor",
    context: "Independent Client"
  }
];

export const HOBBIES = [
  {
    title: "Bodybuilding",
    location: "Natural Competitor 2024",
    description: "Disciplined approach to physique and nutrition. Successfully competed as a natural bodybuilder in 2024, applying the same data-driven optimization to health as I do to tracking systems.",
    icon: "fa-dumbbell"
  },
  {
    title: "Muay Thai",
    location: "Striking & Conditioning",
    description: "Finding mental clarity through high-intensity striking and traditional technique. It’s a practice of focus, timing, and constant technical adjustment.",
    icon: "fa-hand-fist"
  },
  {
    title: "Photography",
    location: "Architecture & Automotive",
    description: "Capturing the clean lines of modern architecture and the precision engineering of automotive design. A creative outlet centered on composition and detail.",
    icon: "fa-camera-retro"
  },
  {
    title: "Fly fishing & Tying",
    location: "Technical Craft",
    description: "Applying technical patience to the water. From the macro-level hatch observation to the micro-detail of tying custom flies that mimic local ecosystems.",
    icon: "fa-fish-fins"
  },
  {
    title: "Athletics",
    location: "Griz Football Alum",
    description: "Five years of Division I competition built a foundation of discipline and team-first leadership that translates to every project.",
    icon: "fa-football"
  }
];

export const WORK_EXPERIENCE: WorkExperience[] = [
  {
    role: "Tracking Specialist",
    company: "Pathlabs, an MiQ company",
    period: "Jan 2024 - Present",
    location: "Missoula, MT",
    highlights: [
      "Architected and enhanced a Tag Monitoring System to proactively detect signal degradation across platforms, improving system reliability and enabling scalable QA across enterprise deployments.",
      "Designed automated ingestion and validation workflows using Google Apps Script, reducing manual overhead and improving long-term maintainability of tracking infrastructure.",
      "Led a full overhaul of conversion and signal architecture (HubSpot + Google Ads Enhanced Conversions) for internal systems, delivering a 13.4% conversion rate increase, 43% reduction in cost per conversion, and 25% reduction in MQL cost within two months.",
      "Served as primary technical owner and subject matter expert for advanced platform integrations, including Google and Facebook server-side/CAPI implementations.",
      "Acted as a technical bridge between client teams, media strategy, and internal stakeholders to scope requirements, design solutions, and ensure accurate execution.",
      "Contributed structured implementation feedback to internal tooling and process improvements, supporting broader product and platform evolution.",
      "Operated within agile workflows (SCRUM), supporting sprint planning and iterative solution delivery."
    ]
  },
  {
    role: "Tracking Coordinator",
    company: "Pathlabs, an MiQ company",
    period: "May 2023 - Jan 2024",
    location: "Missoula, MT",
    highlights: [
      "Coordinated and managed complex tracking implementations across 100+ advertising accounts, improving accuracy and operational efficiency by approximately 20%.",
      "Performed deep QA across GTM containers, live environments, and downstream platforms to ensure end-to-end signal integrity.",
      "Built and maintained tracking architectures across multiple platforms, supporting scalable campaign measurement and analytics.",
      "Collaborated closely with internal teams to resolve blockers, align priorities, and deliver under tight timelines."
    ]
  },
  {
    role: "Independent Consultant",
    company: "Upwork & Direct",
    period: "2023 - Present",
    location: "Remote",
    highlights: [
      "Designed and implemented scalable analytics and signal-tracking solutions for 15+ clients across e-commerce, SaaS, and service-based industries.",
      "Led client discovery, technical scoping, implementation, and post-launch validation, maintaining a 100% job success rating.",
      "Developed reusable system templates and deployment frameworks, reducing implementation time by ~30% across projects.",
      "Built custom reporting and visualization tools to surface system performance, drop-offs, and optimization opportunities."
    ]
  }
];

export const ADDITIONAL_EXPERIENCE: AdditionalExperience[] = [
  {
    role: "Commercial Loan Processor",
    company: "First Security Bank",
    period: "June 2022 – May 2023",
    location: "Missoula, MT",
    highlights: [
      "Processed and validated complex, high-value financial documentation ($1M+ per file), ensuring accuracy, compliance, and system integrity.",
      "Led cross-functional coordination with executives and legal teams on high-risk operational workflows.",
      "Built automation tools using Power Query to reduce manual processing time and improve operational efficiency."
    ]
  }
];

export const SKILL_GROUPS: SkillGroup[] = [
  {
    category: "The Core",
    icon: "fa-code-branch",
    items: [
      "GTM Expert", 
      "GA4", 
      "Web Analytics",
      "LinkedIn Insights", 
      "Meta Pixel", 
      "Tiktok Pixel", 
      "X Pixel", 
      "Reddit Pixel", 
      "Pinterest Pixel", 
      "Conversion API", 
      "Server-Side Tracking"
    ]
  },
  {
    category: "Practical Familiarity",
    icon: "fa-terminal",
    items: [
      "n8n",
      "JavaScript", 
      "Python", 
      "CSS", 
      "HTML", 
      "App Scripts", 
      "Local LLM's", 
      "Networking", 
      "Linux", 
      "AI/ML Concepts", 
      "SQL", 
      "DOM Logic"
    ]
  },
  {
    category: "The Vision",
    icon: "fa-eye",
    items: ["Looker Studio", "Excel Automation", "Power BI", "Data Architecture"]
  }
];

export const EDUCATION = {
  degree: "Management & Entrepreneurship",
  school: "University of Montana",
  period: "2017 - 2021",
  details: "NCAA Division I Football Athlete (5 Years)"
};
