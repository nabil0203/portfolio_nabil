# Portfolio Website - Chowdhury Nabil Ahmed

A modern, high-performance, dark-mode personal portfolio website built with **Next.js 14**, **TypeScript**, and **Tailwind CSS**. This project features sophisticated animations powered by **Framer Motion**, a modular component architecture, and performance-optimized loading.

## 🚀 Key Features

- **Modern & Premium Aesthetic**: Sleek dark theme with vibrant HSL-curated color accents and glassmorphism.
- **Sophisticated Animations**: 
  - Synchronized blob morphing and border-gradient spinning in the Hero section.
  - Smooth, synchronized mouse-parallax effects across multiple sections using custom hooks.
  - Scroll-triggered entry animations for all major sections.
- **Performance First**:
  - **Dynamic Imports**: Components below the fold are lazily loaded to minimize initial JavaScript execution.
  - **Optimized Assets**: Next.js Image component for efficient image delivery.
- **Type-Safe & Scalable**: Centralized TypeScript definitions and a modular directory structure.
- **Fully Responsive**: Meticulously designed for flawless display on mobile, tablet, and desktop.
- **SEO & Accessibility**: Semantic HTML5 structure and proper ARIA labels.

## 🛠️ Tech Stack

- **Framework**: [Next.js 14](https://nextjs.org/) (App Router)
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **Animations**: [Framer Motion](https://www.framer.com/motion/)
- **Icons**: [Lucide React](https://lucide.dev/)
- **Font**: [Inter](https://fonts.google.com/specimen/Inter)

## 📂 Project Structure

```text
├── app/                  # Next.js App Router (Layouts and Pages)
├── components/           # React Components
│   ├── Hero/             # Hero section components & synchronized animations
│   ├── Skills/           # Skill cards and category logic
│   ├── Projects/         # Project display and card interactions
│   └── ...               # Standalone sections (About, Contact, Header, etc.)
├── hooks/                # Custom React hooks (e.g., useMousePosition)
├── data/                 # Portfolio content and types
│   ├── portfolioData.ts  # Main content configuration
│   └── portfolioTypes.ts # Centralized TypeScript interfaces
├── public/               # Static assets (images, icons, etc.)
└── styles/               # Global CSS and Tailwind configurations
```

## 📋 Getting Started

### Prerequisites

Ensure you have **Node.js 18+** installed on your system.

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/nabil0203/portfolio_nabil.git
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the development server:
   ```bash
   npm run dev
   ```

## 🎨 Customization

All portfolio content is decoupled from the UI logic and can be managed in `data/portfolioData.ts`. You can update your bio, social links, education, skills, and projects in one place.

## 🚢 Deployment

The project is optimized for deployment on [Vercel](https://vercel.com/):
- **Live Demo**: [nabil0203.vercel.app](https://nabil0203.vercel.app/)

## 👤 Author

**Chowdhury Nabil Ahmed**
- GitHub: [@nabil0203](https://github.com/nabil0203)
- LinkedIn: [nabil0203](https://linkedin.com/in/nabil0203)
- Email: nabilahmed0203@gmail.com

## 🙏 Acknowledgments

Special thanks to the open-source communities behind Next.js, Framer Motion, and Tailwind CSS for providing the tools to build modern web experiences.

---
⭐ If you find this project helpful, please consider giving it a star!

