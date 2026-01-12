
export interface WorkExperience {
  role: string;
  company: string;
  period: string;
  location: string;
  highlights: string[];
}

export interface AdditionalExperience {
  role: string;
  company: string;
  period: string;
  location: string;
  highlights: string[];
}

export interface SkillGroup {
  category: string;
  items: string[];
  icon: string;
}

export interface ContactInfo {
  email: string;
  phone: string;
  location: string;
  linkedin: string;
}
