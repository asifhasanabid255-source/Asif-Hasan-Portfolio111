export type Language = 'en' | 'bn';

export type ProjectCategory = 'Video Editing' | 'Motion Graphics' | 'Graphic Design';

export type Platform = 'YouTube' | 'Behance' | 'Google Drive' | 'Vimeo' | 'Facebook' | 'Instagram';

export interface Project {
  id: string;
  title: Record<Language, string>;
  category: ProjectCategory;
  description: Record<Language, string>;
  thumbnail: string;
  platform: Platform;
  projectUrl: string;
}

export interface CVData {
  en: string; // URL to English CV PDF
  bn: string; // URL to Bangla CV PDF
}

export interface PersonalData {
  name: Record<Language, string>;
  professionalTitle: Record<Language, string>;
  profilePhoto: string;
  aboutText: Record<Language, string>;
  email: string;
  whatsapp: string;
  linkedin: string;
  youtube: string;
  behance: string;
  facebook?: string;
  location: Record<Language, string>;
  availability: Record<Language, string>;
  education: Array<{
    id: string;
    degree: Record<Language, string>;
    institution?: Record<Language, string>;
    year?: string;
    result?: Record<Language, string>;
    description?: Record<Language, string>;
  }>;
  experience: Array<{
    id: string;
    role: Record<Language, string>;
    company: Record<Language, string>;
    duration: Record<Language, string>;
    description: Record<Language, string>;
  }>;
  training: Array<{
    id: string;
    title: Record<Language, string>;
    institution: Record<Language, string>;
    year: string;
    areas?: Record<Language, string[]>;
    tools?: string[];
  }>;
  certificates: Array<{
    id: string;
    title: Record<Language, string>;
    issuer: Record<Language, string>;
    year: string;
    areas?: Record<Language, string[]>;
    status?: Record<Language, string>;
    link?: string;
  }>;
  cv?: CVData;
}
