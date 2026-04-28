
import { Mail, Phone, MapPin, Linkedin } from 'lucide-react'

import {
  PersonalInfo,
  SiteMetadata,
  Contact,
  Education,
  Skill,
  Project,
  VolunteerExperience,
  PersonalDetails
} from '@/data/portfolioDataTypes'


// Site Metadata
export const siteMetadata: SiteMetadata = {
  title: 'Chowdhury Nabil Ahmed',
  description: 'Computer Science Undergraduate specializing in Software Engineering, skilled in Data Structures and Algorithms, Web Development, and Machine Learning.',
  keywords: ['Chowdhury Nabil Ahmed', 'Software Engineer', 'Computer Science', 'Web Development', 'Machine Learning', 'Portfolio'],
  url: 'https://nabil0203.vercel.app',
  siteName: 'Nabil Portfolio'
}


// Personal Information
export const personalInfo: PersonalInfo = {
  name: 'Chowdhury Nabil Ahmed',
  title: 'Web Developer, Majoring in Software Engineering',
  heroDescription: 'Building scalable web applications with Django and React. Problem solver with 400+ solved problems across major platforms.',
  aboutDescription: [
    'I’m a Software Engineering undergraduate with a focus on full-stack development using Django, React, and REST APIs. I prioritize clean architecture, performance, and maintainable code.',
    'Building systems that solve real-world problems, including e-commerce platforms, learning management systems, and other productivity tools.',
    'Alongside development, I have a good foundation in Data Structures, Algorithms, and Object-Oriented Programming. Solved 400+ problems on major online platforms.',
    'Currently open to internship and junior developer opportunities where I can leverage my technical skills, contribute to impactful projects, and grow professionally within a dynamic development team.',
  ],
}


// Education Data
export const educationData = [
  {
    degree: 'B.Sc. in Software Engineering',
    institution: 'Daffodil International University',
    logo: '/images/education/diu.png',
    url: 'https://daffodilvarsity.edu.bd',
    gpa: 'CGPA: 3.90',
    graduation: 'Jan 2023 - Dec 2026',
    description: 'Received Result-Based Scholarship',
  },
  {
    degree: 'HSC in Science',
    institution: 'Jahangirnagar University School and College',
    logo: '/images/education/jusc.png',
    url: 'https://juschoolcollege.org',
    gpa: 'GPA: 5.00',
    graduation: 'Jun 2018 - Jan 2021',
    description: '',
  }
];

// Skills Data

// - Simple Icons CDN:  https://cdn.simpleicons.org/<slug>[/<color>]
// - Devicons CDN:      https://cdn.jsdelivr.net/gh/devicons/devicon/icons/<name>/<file>.svg
export const skillsData: Skill[] = [

  // Programming Languages
  { name: 'Python', category: 'Programming Languages', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg' },
  { name: 'C', category: 'Programming Languages', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/c/c-original.svg' },
  { name: 'C++', category: 'Programming Languages', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg' },
  { name: 'JavaScript', category: 'Programming Languages', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg' },
  { name: 'Java', category: 'Programming Languages', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg' },

  // Backend
  { name: 'Django', category: 'Backend', logo: 'https://cdn.simpleicons.org/django/989898' }, 
  { name: 'Django REST Framework', category: 'Backend', logo: 'https://www.django-rest-framework.org/img/logo.png' },
  // Frontend
  { name: 'React', category: 'Frontend', logo: 'https://cdn.simpleicons.org/react' },
  { name: 'Tailwind CSS', category: 'Frontend', logo: 'https://cdn.simpleicons.org/tailwindcss' },
  { name: 'Bootstrap', category: 'Frontend', logo: 'https://cdn.simpleicons.org/bootstrap' },
  { name: 'HTML', category: 'Frontend', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg' },
  { name: 'CSS', category: 'Frontend', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg' },

  // Database
  { name: 'PostgreSQL', category: 'Database', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg' },
  { name: 'MySQL', category: 'Database', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg' },
  { name: 'SQLite', category: 'Database', logo: 'https://cdn.simpleicons.org/sqlite/989898' },
  { name: 'Supabase', category: 'Database', logo: 'https://cdn.simpleicons.org/supabase' },

  // Tools
  { name: 'GitHub', category: 'Tools', logo: 'https://cdn.simpleicons.org/github/white' },
  { name: 'Git', category: 'Tools', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg' },
  { name: 'Postman', category: 'Tools', logo: 'https://cdn.simpleicons.org/postman' },
  { name: 'VS Code', category: 'Tools', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg' },

  // Others
  { name: 'Data Structures', category: 'Others' },
  { name: 'Algorithms', category: 'Others' },
  { name: 'OOP', category: 'Others' },

  // Problem Solving Platforms
  { name: 'Codeforces', category: 'Problem Solving Platforms', url: 'https://codeforces.com/profile/BlaZe_0203', logo: 'https://cdn.simpleicons.org/codeforces' },
  { name: 'LeetCode', category: 'Problem Solving Platforms', url: 'https://leetcode.com/u/BlaZe_0203/', logo: 'https://cdn.simpleicons.org/leetcode' },
  { name: 'Beecrowd', category: 'Problem Solving Platforms', url: 'https://judge.beecrowd.com/en/profile/757266', logo: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAMAAABEpIrGAAAAclBMVEX////9/P3r5e7x7fO4pMRCAGr18/eKY55fEH76+ftVAHebfKzc0uFRAHTFtc5vNopSAHWjh7Kgg7BZAHmwmb3Tx9pzPo3HuNDYzd5mJIPg2OVoJ4RiGoDRxNiBVZd9T5WWdah5SJGQbKOGXZy+q8ipj7e703yJAAABHklEQVR4AbzQRWLDMBBA0W/FUeWx5ahWwIzp/Y8YZtj2aSUa4j8FCmYzvgvnmh/Dd5HEJDblu8WCmfvlq8wvV2ufbs5yXuXiRXxhvPfOObElL6o6b8JVazrTr5omleG1B5uSoKTDGIDYbXikZY1WdFaRSgZEvubRaEsSGhcDa6uAUJbcJXZERdQSAaVrAYo5dwunKVm6kKPRrQD1UMQxXImWBSfaV0BQxFwNoihJb1knm0Ak431IbkJpCtGXmXUAJXc/bnVqYrxUpIDtfMXNzFVoRWvL441kQOBNwN2fhCQouz7e+AjIXkZpfER5Os1kC+e3j1KJUVDXyq2BS7ZHa9/HfTzUpp6yLOv9yIvSugPxh+UOrOZVpB8F7DesAABdZRHOHW9vPgAAAABJRU5ErkJggg==' },
  { name: 'HackerRank', category: 'Problem Solving Platforms', url: 'https://www.hackerrank.com/profile/BlaZe_0203', logo: 'https://cdn.simpleicons.org/hackerrank' },
  { name: 'CodeChef', category: 'Problem Solving Platforms', url: 'https://www.codechef.com/users/blaze_0203', logo: 'https://cdn.simpleicons.org/codechef/white' },

]

// Projects Data
export const projectsData: Project[] = [
  {
    id: 'shopnest',
    title: 'ShopNest',
    description: 'A full-featured e-commerce web application.',
    tools: ['Django', 'React', 'MySQL', 'REST API', 'SSLCommerz'],
    features: [
      'User authentication & authorization',
      'Product catalog with search & filtering',
      'Shopping cart & order management',
      'SSLCommerz payment gateway integration',
    ],
    githubUrl: 'https://github.com/nabil0203/ShopNest',
    liveUrl: 'https://shopnest-4thm.onrender.com/',
    imageUrl: '/images/projects/shopnest.png',
    featured: true
  },
  {
    id: 'farm2market',
    title: 'Farm2Market',
    description: 'A Django-based web application that connects farmers directly with buyers.',
    tools: ['Django', 'Django templates', 'MySQL', 'Supabase', 'Tailwind CSS'],
    features: [
      'Role-based access control (Farmer & Buyer)',
      'Product listings & cart management',
      'Order tracking & logistics coordination',
      'Real-time notifications'
    ],
    githubUrl: 'https://github.com/nabil0203/Farm2Market',
    liveUrl: 'https://farm2market-dtll.onrender.com/',
    imageUrl: '/images/projects/farm2market.png',
    featured: true
  },
  {
    id: 'taskify',
    title: 'Taskify',
    description: 'A task management application with drag and drop functionality.',
    tools: ['Django', 'Bootstrap', 'SQLite', 'HTML'],
    features: [
      'Drag and drop task management',
      'Deadline tracking',
      'Real-time update',
      'Customizable workflows'
    ],
    githubUrl: 'https://github.com/nabil0203/taskify',
    liveUrl: 'https://taskify-cq2h.onrender.com',
    imageUrl: '/images/projects/taskify.jpg',
    featured: true
  },
  {
    id: 'coinly',
    title: 'Coinly',
    description: 'My personal expense tracker web application.',
    tools: ['Next.js', 'TypeScript', 'MongoDB', 'Tailwind CSS'],
    features: [
      'Daily expense tracking',
      'Monthly ledger view',
      'Debt & receivables management',
      'Personal finance dashboard',
    ],
    githubUrl: 'https://github.com/nabil0203/Coinly',
    liveUrl: 'https://coinly0203.vercel.app/',
    imageUrl: '/images/projects/coinly.png',
    featured: true
  },
  {
    id: 'quiz-verse',
    title: 'Quiz Verse',
    description: 'Quiz Verse is an interactive multiple-choice quiz application built with Django.',
    tools: ['Django', 'SQLite', 'HTML', 'Tailwind CSS'],
    features: [
      'Multiple-choice quiz',
      'Dynamic Loading',
      'Optimized queries',
      'Form handling & validation',
    ],
    githubUrl: 'https://github.com/nabil0203/Quiz_Verse',
    imageUrl: '/images/projects/quizverse.png',
    featured: true
  },
  {
    id: 'qr-code-generator',
    title: 'QR Code Generator',
    description: 'Users can generate QR codes from text or URLs.',
    tools: ['Python', 'qrcode'],
    features: [
      'Reads input from a text file',
      'Generates QR codes from URLs or text',
      'Saves output as an image file',
    ],
    githubUrl: 'https://github.com/nabil0203/QR_Code_Generator',
    imageUrl: '/images/projects/qrcode.jpg',
    featured: false
  },
  {
    id: 'auto-vault',
    title: 'Auto Vault',
    description: 'A lightweight PHP and MySQL web application for managing cars of a showroom.',
    tools: ['PHP', 'MySQL', 'CSS', 'HTML'],
    features: [
      'CRUD operations',
      'MySQL-backed data',
      'Course lab project (SE_332)',
    ],
    githubUrl: 'https://github.com/nabil0203/AutoVault',
    featured: false
  },
  {
    id: 'scholar-shelf',
    title: 'Scholar Shelf',
    description: 'An educational platform connecting students with tutors and study resources.',
    tools: ['PHP', 'MySQL', 'CSS'],
    features: [
      'Student-tutor connection platform',
      'Session scheduling',
      'Resource sharing & progress tracking',
    ],
    githubUrl: 'https://github.com/nabil0203/Scholar_Shelf',
    featured: false
  },
  {
    id: 'carMaster',
    title: 'CarMaster',
    description: 'A console-based Car Showroom Management System built using Java and OOP principles.',
    tools: ['Java', 'OOP'],
    features: [
      'Menu-driven console interface',
      'Add, update, display & delete cars',
      'Display cars by brand and price range',
      'OOP design principles',
    ],
    githubUrl: 'https://github.com/nabil0203/CarMaster',
    featured: false
  },
  {
    id: 'pharm-ease',
    title: 'Pharm Ease',
    description: 'A console-based pharmacy management system',
    tools: ['C language'],
    features: [
      'Console-based interface',
      'Add, update, display & delete medicines',
      'Inventory management & stock alerts',
      'Patient records management',
    ],
    githubUrl: 'https://github.com/nabil0203/Pharm_Ease',
    featured: false
  },


]

// Additional Information Data
export const personalDetailsData: PersonalDetails = {
  languages: [
    'Bengali (Native)',
    'English (Proficient)',
  ],
  certifications: [
    'International English Language Testing System (IELTS 7.0)',
  ],
  programs: [
    'Aspire Leaders Program 2024 (Harvard Business School)',
  ],
  hobbies: [
    'Following global geopolitical trends and international affairs',
  ]
}

export const volunteerExperiencesData: VolunteerExperience[] = [
  {
    organization: 'DIU Software Engineering Club',
    role: 'General Member',
    duration: 'Feb 2023 - Present',
  },
  {
    organization: 'Cyber Security Centre, DIU',
    role: 'General Member',
    duration: 'May 2023 - Jun 2024',
  },
]

// Contact Information
export const contactData: Contact = {
  email: 'nabilahmed0203@gmail.com',
  location: 'Dhamrai, Dhaka, Bangladesh',
  github: 'https://github.com/nabil0203',
  linkedin: 'https://linkedin.com/in/nabil0203',
  resume: 'https://drive.google.com/file/d/12LMfHVCskTmOKRfbn6wUQjbzcQ8166xE/view?usp=sharing'
}

// Contact Items
export const contactItems = [
  {
    icon: Linkedin,
    label: 'LinkedIn',
    value: 'Chowdhury Nabil Ahmed',
    color: 'text-blue-500'
  },
  {
    icon: Mail,
    label: 'Email',
    value: contactData.email,
    color: 'text-blue-400'
  },
  {
    icon: MapPin,
    label: 'Location',
    value: contactData.location,
    color: 'text-pink-400'
  },
]
