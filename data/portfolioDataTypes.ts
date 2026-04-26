// Portfolio Data Types

export interface SiteMetadata {
  title: string
  description: string
  keywords: string[]
  url: string
  siteName: string
}

export interface PersonalInfo {
  name: string
  title: string
  heroDescription: string
  aboutDescription: string[]
}

export interface Education {
  degree: string
  institution: string
  logo?: string
  url?: string
  graduation: string
  gpa?: string
  description?: string
}

export interface Skill {
  name: string
  category: string
  url?: string
  logo?: string
}

export interface Project {
  id: string
  title: string
  description: string
  tools: string[]
  features?: string[]
  githubUrl?: string
  liveUrl?: string
  imageUrl?: string
  featured?: boolean
}

export interface PersonalDetails {
  languages: string[]
  certifications: string[]
  programs: string[]
  hobbies: string[]
}

export interface VolunteerExperience {
  organization: string
  role: string
  duration: string
  description?: string
}

export interface Contact {
  email: string
  location: string
  github: string
  linkedin: string
  resume?: string
}
