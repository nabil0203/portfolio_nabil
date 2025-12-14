// Portfolio Data Types and Content

export interface Contact {
  email: string
  phone: string
  location: string
  github: string
  linkedin: string
}

export interface Education {
  degree: string
  institution: string
  graduation: string
  description?: string
}

export interface Skill {
  name: string
  category: string
}

export interface Project {
  id: string
  title: string
  description: string
  tools: string[]
  githubUrl?: string
  liveUrl?: string
  featured?: boolean
}

export interface VolunteerExperience {
  organization: string
  role: string
  duration: string
  description?: string
}


// Contact Information
export const contactData: Contact = {
  email: 'nabilahmed0203@gmail.com',
  phone: '+8801709548627',
  location: 'Dhamrai, Dhaka, Bangladesh',
  github: 'https://github.com/nabil0203',
  linkedin: 'https://linkedin.com/in/nabil0203'
}

// Education Data
export const educationData: Education[] = [
  {
    degree: 'Bachelor of Science in Computer Science',
    institution: 'Daffodil International University',
    graduation: 'Expected Graduation: 2025',
    description: 'Specializing in Software Engineering with focus on Data Structures, Algorithms, and Web Development'
  }
]

// Skills Data
export const skillsData: Skill[] = [
  // Programming Languages
  { name: 'C', category: 'Programming Languages' },
  { name: 'C++', category: 'Programming Languages' },
  { name: 'Python', category: 'Programming Languages' },
  { name: 'Java', category: 'Programming Languages' },
  { name: 'JavaScript', category: 'Programming Languages' },

  // Frontend
  { name: 'React', category: 'Frontend' },
  { name: 'Next.js', category: 'Frontend' },
  { name: 'HTML', category: 'Frontend' },
  { name: 'CSS', category: 'Frontend' },
  { name: 'Tailwind CSS', category: 'Frontend' },

  // Backend
  { name: 'Django', category: 'Backend' },
  { name: 'REST APIs', category: 'Backend' },

  // Database
  { name: 'MySQL', category: 'Database' },
  { name: 'PostgreSQL', category: 'Database' },

  // Tools & Technologies
  { name: 'Git', category: 'Tools & Technologies' },
  { name: 'GitHub', category: 'Tools & Technologies' },
  { name: 'VS Code', category: 'Tools & Technologies' },

  // Other
  { name: 'Data Structures', category: 'Other' },
  { name: 'Algorithms', category: 'Other' },
  { name: 'OOP', category: 'Other' },
  { name: 'Machine Learning', category: 'Other' }
]

// Projects Data
export const projectsData: Project[] = [
  {
    id: 'taskify',
    title: 'Taskify',
    description: 'A modern task management application with intuitive drag-and-drop functionality, real-time collaboration, deadline tracking, and customizable workflows. Designed to boost productivity for individuals and teams.',
    tools: ['React', 'Firebase', 'Material-UI', 'JavaScript'],
    githubUrl: 'https://github.com/nabil0203/taskify',
    liveUrl: 'https://taskify-cq2h.onrender.com',
    featured: true
  },
  {
    id: 'pharm-ease',
    title: 'Pharm Ease',
    description: 'A comprehensive pharmacy management system designed to streamline medication dispensing, inventory management, and patient records. Features include prescription processing, stock alerts, and user-friendly interfaces for both pharmacists and patients.',
    tools: ['React', 'Node.js', 'MongoDB', 'Express.js'],
    githubUrl: 'https://github.com/nabil0203/pharm-ease',
    featured: true
  },
  
  {
    id: 'scholar-shelf',
    title: 'Scholar Shelf',
    description: 'An educational platform connecting students with tutors and study resources. Includes features for scheduling sessions, resource sharing, progress tracking, and interactive learning tools to enhance the educational experience.',
    tools: ['Next.js', 'TypeScript', 'PostgreSQL', 'Tailwind CSS'],
    githubUrl: 'https://github.com/nabil0203/scholar-shelf',
    featured: true
  }
  
]

// Additional Information Data
export const languagesData: string[] = [
  'English (Proficient)',
  'Bengali (Native)'
]

export const certificationsData: string[] = [
  'International English Language Testing System (IELTS 7.0)'
]

export const hobbiesData: string[] = [
  'Following global geopolitical trends and international affairs',
]

export const volunteerExperiencesData: VolunteerExperience[] = [
  {
    organization: 'DIU Software Engineering Club',
    role: 'General Member',
    duration: 'Feb 2023 - Present',
    // description: '[Description of volunteer work and impact]'
  },
  {
    organization: 'Cyber Security Centre, DIU',
    role: 'General Member',
    duration: 'May 2023 - Jun 2024',
    // description: '[Description of volunteer work and impact]'
  }
]

