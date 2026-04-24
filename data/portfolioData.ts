export type {
  PersonalInfo,
  SiteMetadata,
  Contact,
  Education,
  Skill,
  Project,
  VolunteerExperience,
  PersonalDetails
} from '@/data/portfolioDataTypes'

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
  heroDescription: 'Problem solver with 400+ problems solved in major platforms. Building modern web applications with Django & React.',
  aboutDescription: [
    'A Web Developer with experience in building scalable, user-focused web applications. I am proficient in Django, React, and REST API development. Focusing on clean architecture, performance, and maintainable code.',
    'Developing real-world projects, including marketplace systems and learning management systems, where I have worked on backend logic, database design, and end-to-end feature implementation.',
    'Currently pursuing B.Sc. in Software Engineering, with a good foundation in Data Structures, Algorithms, and Object-Oriented Programming. Solved 400+ problems on major online platforms.',
    'Seeking a Junior Software Developer or Internship opportunity where I can apply my skills and contribute to products, collaborate with professional teams, and continue growing as a software engineer.',
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
export const skillsData: Skill[] = [
  // Programming Languages
  { name: 'C', category: 'Programming Languages' },
  { name: 'C++', category: 'Programming Languages' },
  { name: 'Python', category: 'Programming Languages' },
  { name: 'Java', category: 'Programming Languages' },
  { name: 'JavaScript', category: 'Programming Languages' },
  { name: 'PHP', category: 'Programming Languages' },

  // Frontend
  { name: 'React', category: 'Frontend' },
  { name: 'Tailwind CSS', category: 'Frontend' },
  { name: 'Bootstrap', category: 'Frontend' },
  { name: 'HTML', category: 'Frontend' },
  { name: 'CSS', category: 'Frontend' },

  // Backend
  { name: 'Django', category: 'Backend' },
  { name: 'REST APIs', category: 'Backend' },

  // Database
  { name: 'MySQL', category: 'Database' },
  { name: 'PostgreSQL', category: 'Database' },
  { name: 'SQLite', category: 'Database' },
  { name: 'Supabase', category: 'Database' },

  // Tools
  { name: 'Git', category: 'Tools' },
  { name: 'GitHub', category: 'Tools' },
  { name: 'VS Code', category: 'Tools' },

  // Other
  { name: 'Data Structures', category: 'Other' },
  { name: 'Algorithms', category: 'Other' },
  { name: 'OOP', category: 'Other' },
  { name: 'Machine Learning', category: 'Other' },

  // Problem Solving Platforms
  { name: 'Codeforces', category: 'Problem Solving Platforms', url: 'https://codeforces.com/profile/BlaZe_0203' },
  { name: 'LeetCode', category: 'Problem Solving Platforms', url: 'https://leetcode.com/u/BlaZe_0203/' },
  { name: 'Beecrowd', category: 'Problem Solving Platforms', url: 'https://judge.beecrowd.com/en/profile/757266' },
  { name: 'HackerRank', category: 'Problem Solving Platforms', url: 'https://www.hackerrank.com/profile/BlaZe_0203' },
  { name: 'CodeChef', category: 'Problem Solving Platforms', url: 'https://www.codechef.com/users/blaze_0203' },

]

// Projects Data
export const projectsData: Project[] = [
  {
    id: 'shopnest',
    title: '🛒 ShopNest',
    description: 'A full-featured, modern single-vendor e-commerce platform built with Django. ShopNest provides product browsing, stock availability display, shopping cart, user authentication, and secure online payment processing via SSLCommerz gateway.',
    tools: ['Django', 'SQLite', 'Tailwind CSS', 'SSLCommerz API'],
    githubUrl: 'https://github.com/nabil0203/ShopNest',
    liveUrl: 'https://shopnest-4thm.onrender.com/',
    imageUrl: '/images/projects/shopnest.png',
    featured: true
  },
  {
    id: 'farm2market',
    title: '🧑‍🌾 Farm2Market',
    description: 'A Django-based web application that connects farmers directly with buyers, enabling streamlined product listings, cart management, order tracking, and logistics coordination eliminating the need for middlemen.',
    tools: ['Django', 'MySQL', 'Supabase', 'Django templates', 'Tailwind CSS'],
    githubUrl: 'https://github.com/nabil0203/Farm2Market',
    liveUrl: 'https://farm2market-dtll.onrender.com/',
    imageUrl: '/images/projects/farm2market.png',
    featured: true
  },
  {
    id: 'taskify',
    title: '✅Taskify',
    description: 'A modern task management application with intuitive drag-and-drop functionality, real-time update, deadline tracking, and customizable workflows. Designed to boost productivity.',
    tools: ['Django', 'Bootstrap', 'SQLite', 'HTML'],
    githubUrl: 'https://github.com/nabil0203/taskify',
    liveUrl: 'https://taskify-cq2h.onrender.com',
    imageUrl: '/images/projects/taskify.jpg',
    featured: true
  },
  {
    id: 'coinly',
    title: '💰Coinly',
    description: 'An Expense tracking web application. This application is used by me personally on a daily basis. It allows me to track my daily expenses, view monthly ledgers, manage debt & receivables.',
    tools: ['Next.js', 'TypeScript', 'MongoDB', 'Tailwind CSS'],
    githubUrl: 'https://github.com/nabil0203/Coinly',
    liveUrl: 'https://coinly0203.vercel.app/',
    imageUrl: '/images/projects/coinly.png',
    featured: true
  },
  {
    id: 'quiz-verse',
    title: '🧪 Quiz Verse',
    description: 'Quiz Verse is an interactive multiple-choice quiz application built with Django. It demonstrates full-stack fundamentals including database relationships, form handling, request lifecycle management, and dynamic template rendering.',
    tools: ['Django', 'SQLite', 'HTML', 'Tailwind CSS'],
    githubUrl: 'https://github.com/nabil0203/Quiz_Verse',
    imageUrl: '/images/projects/quizverse.png',
    featured: true
  },
  {
    id: 'qr-code-generator',
    title: '⛆ QR Code Generator',
    description: 'A simple Python script that reads a Text/URL and a File name from a Text file. Then generates a QR code and saves it as an image.',
    tools: ['Python', 'qrcode'],
    githubUrl: 'https://github.com/nabil0203/QR_Code_Generator',
    imageUrl: '',
    featured: true
  },
  {
    id: 'auto-vault',
    title: '🚗Auto Vault',
    description: 'This is a lightweight PHP and MySQL web application. It allows users to do CRUD operations on cars. This project was developed as part of the SE_332 - Web Application Lab course to demonstrate core database operations in web development.',
    tools: ['PHP', 'MySQL', 'CSS', 'HTML'],
    githubUrl: 'https://github.com/nabil0203/AutoVault',
    imageUrl: '',
    featured: true
  },
  {
    id: 'scholar-shelf',
    title: '📖Scholar Shelf',
    description: 'An educational platform connecting students with tutors and study resources. Includes features for scheduling sessions, resource sharing, progress tracking, and interactive learning tools to enhance the educational experience.',
    tools: ['PHP', 'MySQL', 'CSS'],
    githubUrl: 'https://github.com/nabil0203/Scholar_Shelf',
    imageUrl: '',
    featured: true
  },
  {
    id: 'carMaster',
    title: '🚘CarMaster',
    description: 'CarMaster is a console-based Car Showroom Management System built using Java and Object-Oriented Programming principles. It allows users to add, update, display, and delete different types of cars through a menu-driven interface',
    tools: ['Java', 'OOP'],
    githubUrl: 'https://github.com/nabil0203/CarMaster',
    imageUrl: '',
    featured: true
  },
  {
    id: 'pharm-ease',
    title: '💊Pharm Ease',
    description: 'A console-based pharmacy management system designed to streamline medication dispensing, inventory management, and patient records. Features include prescription processing, stock alerts, and user-friendly interfaces for both pharmacists and patients. ',
    tools: ['C language'],
    githubUrl: 'https://github.com/nabil0203/Pharm_Ease',
    imageUrl: '',
    featured: true
  },


]

// Additional Information Data
export const personalDetailsData: PersonalDetails = {
  languages: [
    'Bengali (Native)',
    'English (Proficient)',
  ],
  certifications: [
    'International English Language Testing System (IELTS 7.0)'
  ],
  programs: [
    'Aspire Leaders Program 2024 (Harvard Business School)'
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
    // description: '[Description of volunteer work and impact]'
  },
  {
    organization: 'Cyber Security Centre, DIU',
    role: 'General Member',
    duration: 'May 2023 - Jun 2024',
    // description: '[Description of volunteer work and impact]'
  }
]

// Contact Information
export const contactData: Contact = {
  email: 'nabilahmed0203@gmail.com',
  phone: '+8801709548627',
  location: 'Dhamrai, Dhaka, Bangladesh',
  github: 'https://github.com/nabil0203',
  linkedin: 'https://linkedin.com/in/nabil0203',
  resume: 'https://drive.google.com/file/d/12LMfHVCskTmOKRfbn6wUQjbzcQ8166xE/view?usp=sharing'
}
