
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
    shortDescription: 'A full-featured single-vendor e-commerce platform.',
    description: 'A full-featured, modern single-vendor e-commerce platform built with Django. ShopNest provides a complete online shopping experience with product management, shopping cart, secure payment integration, and user authentication.',
    tools: ['Django', 'SQLite', 'Tailwind CSS', 'SSLCommerz Api'],
    features: [
      'User authentication & authorization',
      'Product catalog with search & filtering',
      'Shopping cart & order management',
      'SSLCommerz payment gateway integration',
    ],
    githubUrl: 'https://github.com/nabil0203/ShopNest',
    liveUrl: 'https://shopnest-4thm.onrender.com/',
    imageUrl: '/images/projects/shopnest.png',
    featured: true,
    year: '2025',
    status: 'Live',
  },
  {
    id: 'farm2market',
    title: 'Farm2Market',
    shortDescription: 'A modern multi-role agricultural marketplace.',
    description: 'A full-featured, modern multi-role agricultural marketplace built with Django. Farm2Market provides a complete online agricultural marketplace with product management, order management, and user authentication.',
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
    featured: true,
    year: '2025',
    status: 'Live',
  },
  {
    id: 'taskify',
    title: 'Taskify',
    shortDescription: 'A task management application with drag-and-drop functionality.',
    description: 'A modern, sleek, and intuitive task management tool designed to enhance productivity. Taskify features seamless drag-and-drop task prioritization, real-time updates, deadline tracking, and customizable Kanban-style workflows for efficient daily organization.',
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
    featured: true,
    year: '2025',
    status: 'Live',
  },
  {
    id: 'coinly',
    title: 'Coinly',
    shortDescription: 'My personal expense tracker web application.',
    description: 'Coinly is a comprehensive personal finance tracking application built with Next.js and MongoDB. It offers daily expense tracking, a monthly ledger view, and debt & receivables management, all visualized through a clean, interactive dashboard.',
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
    featured: true,
    year: '2025',
    status: 'Live',
  },
  {
    id: 'quiz-verse',
    title: 'Quiz Verse',
    shortDescription: 'An interactive multiple-choice quiz application.',
    description: 'QuizVerse is an interactive multiple-choice quiz application built with Django. It demonstrates full-stack fundamentals including database relationships, form handling, request lifecycle management, and dynamic template rendering—all styled with a modern UI using Tailwind CSS.',
    tools: ['Django', 'SQLite', 'HTML', 'Tailwind CSS'],
    features: [
      'Multiple-choice quiz engine',
      'Dynamic question loading',
      'Optimized queries',
      'Form handling & validation',
    ],
    githubUrl: 'https://github.com/nabil0203/Quiz_Verse',
    imageUrl: '/images/projects/quizverse.png',
    featured: true,
    year: '2025',
    status: 'Archived',
  },
  {
    id: 'qr-code-generator',
    title: 'QR Code Generator',
    shortDescription: 'A Python script that reads texts and generates QR codes.',
    description: 'A simple Python script that reads a Text/URL from a Text file. Then generates a QR code and saves it as an image.',
    tools: ['Python', 'qrcode'],
    features: [
      'Reads input from a text file',
      'Generates QR codes from URLs or text',
      'Saves output as an image file',
    ],
    githubUrl: 'https://github.com/nabil0203/QR_Code_Generator',
    imageUrl: '/images/projects/qrcode.jpg',
    featured: false,
    year: '2025',
    status: 'Archived',
  },
  {
    id: 'auto-vault',
    title: 'Auto Vault',
    shortDescription: 'A web application for managing a car showroom inventory.',
    description: 'A lightweight PHP and MySQL web application for managing a car showroom inventory.',
    tools: ['PHP', 'MySQL', 'CSS', 'HTML'],
    features: [
      'Full CRUD operations',
      'MySQL-backed persistent data',
      'Clean tabular dashboard',
      'University lab project for SE-332'
    ],
    githubUrl: 'https://github.com/nabil0203/AutoVault',
    featured: false,
    year: '2024',
    status: 'Archived',
  },
  {
    id: 'scholar-shelf',
    title: 'Scholar Shelf',
    shortDescription: 'A platform for connecting students with tutors.',
    description: 'An educational platform connecting students with tutors and study resources, supporting session scheduling and progress tracking.',
    tools: ['PHP', 'MySQL', 'CSS'],
    features: [
      'Student-tutor connection platform',
      'Session scheduling',
      'Resource sharing & progress tracking',
      'University lab project for SE-224'
    ],
    githubUrl: 'https://github.com/nabil0203/Scholar_Shelf',
    featured: false,
    year: '2024',
    status: 'Archived',
  },
  {
    id: 'carMaster',
    title: 'CarMaster',
    shortDescription: 'A console-based Car Showroom Management System',
    description: 'A Car Showroom Management System demonstrating core OOP principles in Java with a full menu-driven interface.',
    tools: ['Java', 'OOP'],
    features: [
      'Menu-driven console interface',
      'Add, update, display & delete cars',
      'Filter cars by brand and price range',
      'OOP design principles',
      'University project for SE-221'
    ],
    githubUrl: 'https://github.com/nabil0203/CarMaster',
    featured: false,
    year: '2024',
    status: 'Archived',
  },
  {
    id: 'pharm-ease',
    title: 'Pharm Ease',
    shortDescription: 'A console-based pharmacy management system',
    description: 'A pharmacy management system written in C, handling medicine inventory, stock alerts, and patient records.',
    tools: ['C language'],
    features: [
      'Console-based interface',
      'Add, update, display & delete medicines',
      'Inventory management & stock alerts',
      'Patient records management',
      'University lab project for SE-133'
    ],
    githubUrl: 'https://github.com/nabil0203/Pharm_Ease',
    featured: false,
    year: '2024',
    status: 'Archived',
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
