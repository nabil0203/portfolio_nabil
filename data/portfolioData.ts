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
  { name: 'Postman', category: 'Tools' },

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
    title: '🧑‍🌾 Farm2Market',
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
    title: '✅Taskify',
    description: 'A task management application with drag-and-drop functionality.',
    tools: ['Django', 'Bootstrap', 'SQLite', 'HTML'],
    features: [
      'Drag-and-drop task management',
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
    title: '💰Coinly',
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
    title: '🧪 Quiz Verse',
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
    title: '⛆ QR Code Generator',
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
    title: '🚗Auto Vault',
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
    title: '📖Scholar Shelf',
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
    title: '🚘CarMaster',
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
    title: '💊Pharm Ease',
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
