// Portfolio Data Types

export interface PersonalInfo {
  name: string
  title: string
  heroDescription: string
  aboutDescription: string[]
  aboutTitle: string
}

export interface SiteMetadata {
  title: string
  description: string
  keywords: string[]
  url: string
  siteName: string
}

export interface Contact {
  email: string
  phone: string
  location: string
  github: string
  linkedin: string
  resume?: string
}

export interface Education {
  degree: string
  institution: string
  url?: string
  graduation: string
  gpa?: string
  description?: string
}

export interface Skill {
  name: string
  category: string
  url?: string
}

export interface Project {
  id: string
  title: string
  description: string
  tools: string[]
  githubUrl?: string
  liveUrl?: string
  imageUrl?: string
  featured?: boolean
}

export interface VolunteerExperience {
  organization: string
  role: string
  duration: string
  description?: string
}
