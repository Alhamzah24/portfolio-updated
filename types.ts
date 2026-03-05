
export interface ProjectSection {
  title: string;
  content: string | string[];
}

export interface Project {
  id: string;
  title: string;
  description: string;
  image: string;
  tags: string[];
  link?: string;
  fullDescription?: ProjectSection[];
}

export interface Experience {
  company: string;
  role: string;
  period: string;
  description: string[];
}

export interface Skill {
  category: string;
  items: string[];
}

export interface PortfolioData {
  name: string;
  title: string;
  bio: string;
  about: string;
  email: string;
  linkedin: string;
  profileImage?: string;
  projects: Project[];
  experience: Experience[];
  skills: Skill[];
  education: {
    school: string;
    degree: string;
    period: string;
  }[];
}
