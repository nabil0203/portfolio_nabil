# Portfolio Website — Chowdhury Nabil Ahmed

[![Next.js](https://img.shields.io/badge/Next.js-14.2.35-black?style=flat-square&logo=next.js)](https://nextjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.x-blue?style=flat-square&logo=typescript)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3.3.6-38B2AC?style=flat-square&logo=tailwind-css)](https://tailwindcss.com/)
[![Framer Motion](https://img.shields.io/badge/Framer_Motion-12.x-black?style=flat-square&logo=framer)](https://www.framer.com/motion/)
[![Web3Forms](https://img.shields.io/badge/Web3Forms-API-00C7B7?style=flat-square)](https://web3forms.com/)
[![Vercel](https://img.shields.io/badge/Deployed_on-Vercel-black?style=flat-square&logo=vercel)](https://nabil0203.vercel.app/)

A modern, high-performance personal portfolio website built with **Next.js 14 (App Router)**, **TypeScript**, and **Tailwind CSS**. Styled with an editorial **"Light Steel"** design system and animated with **Framer Motion**, it features an interactive master–detail project explorer, a full-screen certifications lightbox, a serverless contact form, and performance optimizations.

🔗 **Live Website**: [nabil0203.vercel.app](https://nabil0203.vercel.app/)  
🔗 **Bio Link**: [nabil0203.bio.link](https://nabil0203.bio.link/)

---

## 📸 Key Highlights & Features

- **Editorial "Light Steel" Aesthetic**:
  - Curated 9-step neutral palette (`steel-50` `#F8F9FA` paper to `steel-800` `#212529` ink).
  - Contrasting deep-steel hero section paired with a minimal, content-focused reading experience across all other sections.
  - Interactive hero portrait with an offset frame, hover grayscale-to-color transition, and a pulsating "Open to work" availability badge.

- **Editorial Typography**:
  - **Bricolage Grotesque**: Characterful display font for headlines.
  - **Instrument Sans**: Clean, readable sans-serif for body copy.
  - Integrated with Next.js font optimization (`next/font/google`) without external font download latency.

- **Master–Detail Project Explorer**:
  - Desktop: Pinned vertical sidebar with smooth state transitions via Framer Motion's `AnimatePresence`.
  - Mobile: Horizontal swipe strip.
  - Full keyboard navigation support (`ArrowUp`, `ArrowDown`, `Home`, `End`) adhering to WAI-ARIA tablist standards.
  - Rich project metadata including live status pills (`Live`, `In Development`, `Archived`), release years, key feature checklists, technology tags, and direct GitHub / Demo links.

- **Certifications Lightbox Viewer**:
  - Interactive modal dialog with keyboard navigation (`Escape` to close, `ArrowLeft` / `ArrowRight` to cycle).
  - Multi-image pagination dots and automatic background scroll locking.
  - Fallback placeholder handling for missing or slow-loading credential assets.

- **Skills & Technologies Matrix**:
  - Categorized skill chips across programming languages, web development, databases, and machine learning.
  - Integrated official brand SVG icons (via jsDelivr and Simple Icons) with external reference links.

- **Functional Serverless Contact Form**:
  - Powered by **Web3Forms API** via a custom `useContactForm` React hook.
  - Built-in spam prevention through a honeypot field.
  - Real-time feedback states (`idle`, `submitting` with spinner, `success`, `error`) with auto-dismissing notifications.

- **Smart Navigation & Accessibility**:
  - Custom `useScrollSpy` hook leveraging `IntersectionObserver` to track the active section cleanly without layout shifts or flicker.
  - Mobile drawer menu with `Escape` key dismissal.
  - Reactive floating **Back to Top** button triggered after scrolling past a threshold.
  - Dedicated support for `prefers-reduced-motion` and custom high-contrast focus rings for keyboard navigation.

- **Performance-First Architecture**:
  - **Dynamic Lazy Loading**: Below-the-fold sections (`About`, `Skills`, `Projects`, `Education`, `Certifications`, `AdditionalInfo`, `Contact`) are dynamically imported with `next/dynamic` to minimize initial JavaScript bundle size (~149 kB first load).
  - **Static Site Generation (SSG)**: Fast TTFB and pre-rendered pages.
  - **Decoupled Data Architecture**: All portfolio data is centralized in strictly typed TypeScript files (`data/portfolioData.ts`).

---

## 🛠️ Tech Stack

| Layer | Technologies |
| :--- | :--- |
| **Framework** | [Next.js 14](https://nextjs.org/) (App Router, SSG, `next/dynamic`, `next/image`, `next/font`) |
| **Language** | [TypeScript 5](https://www.typescriptlang.org/) (Strict type checking) |
| **Styling** | [Tailwind CSS 3](https://tailwindcss.com/) (Custom Light Steel design tokens, PostCSS, Autoprefixer) |
| **Animation** | [Framer Motion 12](https://www.framer.com/motion/) (Scroll reveals, layout animations, exit transitions) |
| **Icons** | [Lucide React](https://lucide.dev/) & Brand SVGs via Devicon / Simple Icons |
| **Fonts** | [Bricolage Grotesque](https://fonts.google.com/specimen/Bricolage+Grotesque) & [Instrument Sans](https://fonts.google.com/specimen/Instrument+Sans) |
| **Form Backend** | [Web3Forms](https://web3forms.com/) (Serverless email dispatch) |
| **Deployment** | [Vercel](https://vercel.com/) |

---

## 📂 Project Structure

```text
portfolio_nabil/
├── app/
│   ├── favicon.ico              # Browser favicon
│   ├── globals.css              # Custom styling, Tailwind layers, Light Steel utilities
│   ├── layout.tsx               # Root layout, Google Fonts, SEO & OpenGraph metadata
│   └── page.tsx                 # Home page with dynamic below-the-fold imports
├── components/
│   ├── About/                   # About overview, academic stats, problem-solving highlights
│   │   ├── AboutCard.tsx
│   │   ├── AboutSection.tsx
│   │   └── SummarySection.tsx
│   ├── AdditionalInfo/          # Personal details, volunteer experience, languages, hobbies
│   │   ├── AdditionalInfoSection.tsx
│   │   ├── InfoRow.tsx
│   │   ├── PersonalDetails.tsx
│   │   └── VolunteerExperience.tsx
│   ├── Certifications/          # Certification cards, fullscreen Lightbox modal, image fallback
│   │   ├── CertificationCard.tsx
│   │   ├── CertificationLightbox.tsx
│   │   ├── CertificationsSection.tsx
│   │   └── ImageWithFallback.tsx
│   ├── Contact/                 # Contact form with Web3Forms, contact info links
│   │   ├── ContactForm.tsx
│   │   ├── ContactInfo.tsx
│   │   └── ContactSection.tsx
│   ├── Education/               # Education timeline and academic waiver achievements
│   │   ├── EducationCard.tsx
│   │   └── EducationSection.tsx
│   ├── Hero/                    # Hero header, offset portrait card, availability badge, CTAs
│   │   ├── HeroButton.tsx
│   │   ├── HeroImage.tsx
│   │   ├── HeroSection.tsx
│   │   └── ScrollIndicator.tsx
│   ├── Navbar/                  # Sticky navigation bar with mobile drawer & active section spy
│   │   └── Navbar.tsx
│   ├── Projects/                # Master–detail interactive project explorer with keyboard support
│   │   └── ProjectsSection.tsx
│   ├── Skills/                  # Categorized skills matrix with brand logos & doc links
│   │   ├── SkillCard.tsx
│   │   └── SkillsSection.tsx
│   ├── BackToTop.tsx            # Animated scroll-to-top button
│   ├── Footer.tsx               # Social links and copyright
│   ├── MotionDiv.tsx            # Viewport scroll-reveal wrapper component
│   ├── SectionDivider.tsx       # Visual section separator
│   └── SectionHeader.tsx        # Consistent typography section headers
├── data/
│   ├── constants.ts             # Global constants (Web3Forms API key, scroll thresholds)
│   ├── portfolioData.ts         # Single source of truth for all portfolio content
│   └── portfolioDataTypes.ts    # TypeScript definitions for all portfolio data entities
├── hooks/
│   ├── useContactForm.ts        # Form submission hook (honeypot, status management, Web3Forms)
│   └── useScrollSpy.ts          # IntersectionObserver active navigation tracker
├── public/
│   ├── images/
│   │   ├── certifications/      # Certification badges and credentials
│   │   ├── education/           # Institution logos
│   │   ├── projects/            # Project showcase imagery
│   │   └── profile.jpg          # Profile portrait
│   └── logo.png                 # Personal brand logo
├── utils/
│   └── dom.ts                   # Smooth scroll helper utilities
├── next.config.js               # Next.js security headers
├── package.json                 # Scripts and package dependencies
├── tailwind.config.ts           # Tailwind CSS design system tokens and theme extensions
└── tsconfig.json                # TypeScript configuration
```

---

## 📋 Getting Started

### Prerequisites

- **Node.js**: `v18.17.0` or higher
- **npm** (or `pnpm` / `yarn`)

### Installation

1. **Clone the repository**:
   ```bash
   git clone https://github.com/nabil0203/portfolio_nabil.git
   cd portfolio_nabil
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Start the development server**:
   ```bash
   npm run dev
   ```

4. **Open in browser**:
   Visit [http://localhost:3000](http://localhost:3000) to view the application.

---

## ⚙️ Available Scripts

| Command | Description |
| :--- | :--- |
| `npm run dev` | Starts the Next.js local development server on port 3000 |
| `npm run build` | Compiles the production build with type checking and page optimization |
| `npm run start` | Runs the compiled Next.js production server |

---

## 🎨 Content Management & Customization

The portfolio is architected to decouple content from code. You can update the content without touching UI components:

1. **Portfolio Content** (`data/portfolioData.ts`):
   - `siteMetadata`: Title, description, keywords, and OpenGraph parameters.
   - `personalInfo`: Name, title, hero overview, and about paragraphs.
   - `statsData`: Highlight numbers (problems solved, CGPA, projects).
   - `educationData`: Degrees, universities, waiver information, dates.
   - `skillsData`: Grouped skills with optional brand logo URLs and official websites.
   - `projectsData`: Project listings, status (`Live`, `In Development`, `Archived`), tech stack, key bullet points, and repository/live URLs.
   - `certificationsData`: Certification title, issuing authority, and credential image arrays.
   - `contactData`: Email, bio link, location, LinkedIn, GitHub, and Resume link.

2. **Contact Form Setup** (`data/constants.ts`):
   - To receive emails via the contact form, get a free access key from [Web3Forms](https://web3forms.com/) and update `WEB3FORMS_ACCESS_KEY` in `data/constants.ts`.

3. **Design Tokens & Theme** (`tailwind.config.ts` & `app/globals.css`):
   - Palette colors (`steel-50` through `steel-800`) can be customized in `tailwind.config.ts`.
   - Fonts can be swapped in `app/layout.tsx`.

---

## 🚢 Deployment

The project is optimized for zero-configuration deployment on **Vercel**:

1. Push your repository to GitHub.
2. Import the repository in [Vercel](https://vercel.com/new).
3. Vercel will automatically detect Next.js and run `npm run build`.
4. Deploy with automatic SSL, global CDN delivery, and preview environments for pull requests.

---

## 👤 Author

**Chowdhury Nabil Ahmed**  
*Software Developer — Majoring in Software Engineering*

- 🌐 **Live Portfolio**: [nabil0203.vercel.app](https://nabil0203.vercel.app)
- 🔗 **Bio Link**: [nabil0203.bio.link](https://nabil0203.bio.link)
- 💼 **LinkedIn**: [linkedin.com/in/nabil0203](https://linkedin.com/in/nabil0203)
- 🐙 **GitHub**: [@nabil0203](https://github.com/nabil0203)
- 📧 **Email**: [nabilahmed0203@gmail.com](mailto:nabilahmed0203@gmail.com)

---

## 📄 License

This project is open-source and available under the terms of the MIT License.
