# Portfolio Website - Chowdhury Nabil Ahmed

A modern, minimalist, dark-mode personal portfolio website built with Next.js, TypeScript, and Tailwind CSS. Features smooth animations, responsive design, and a clean professional aesthetic.

## 🚀 Features

- **Modern Design**: Sleek, minimalist dark theme with eye-catching color accents
- **Smooth Animations**: Framer Motion powered scroll-triggered and hover animations
- **Fully Responsive**: Optimized for all screen sizes and devices
- **Type-Safe**: Built with TypeScript for better development experience
- **Performance Optimized**: Fast loading times and optimized bundle size
- **SEO Friendly**: Proper meta tags and semantic HTML structure

## 🛠️ Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Font**: Inter (Google Fonts)

## 📋 Prerequisites

Before you begin, ensure you have the following installed:

- Node.js 18+ 
- npm or yarn

## 🔧 Installation

1. Clone the repository:
```bash
git clone https://github.com/nabil0203/portfolio-nabil.git
cd portfolio-nabil
```

2. Install dependencies:
```bash
npm install
# or
yarn install
```

3. Run the development server:
```bash
npm run dev
# or
yarn dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser to see the result.

## 📁 Project Structure

```
portfolio-nabil/
├── app/                    # Next.js App Router pages
│   ├── layout.tsx          # Root layout
│   ├── page.tsx           # Home page
│   └── globals.css        # Global styles
├── components/            # React components
│   ├── AboutSection.tsx
│   ├── AdditionalInfoSection.tsx
│   ├── ContactSection.tsx
│   ├── Footer.tsx
│   ├── Header.tsx
│   ├── HeroSection.tsx
│   ├── Layout.tsx
│   ├── MotionDiv.tsx     # Reusable animation wrapper
│   ├── ProjectCard.tsx
│   ├── ProjectsSection.tsx
│   ├── ScrollIndicator.tsx
│   └── SkillsSection.tsx
├── data/                  # Data files
│   └── portfolioData.ts  # Portfolio content data
├── public/                # Static assets
├── tailwind.config.ts    # Tailwind configuration
├── tsconfig.json         # TypeScript configuration
└── package.json          # Dependencies
```

## 🎨 Customization

### Updating Portfolio Content

All portfolio content is managed in `data/portfolioData.ts`. You can easily update:

- **Contact Information**: Edit `contactData`
- **Education**: Modify `educationData` array
- **Skills**: Update `skillsData` array
- **Projects**: Edit `projectsData` array
- **Languages, Certifications, Hobbies**: Update respective arrays
- **Volunteer Experiences**: Modify `volunteerExperiencesData` array

### Changing Colors

Edit the color palette in `tailwind.config.ts`:

```typescript
colors: {
  primary: '#0f0f0f',      // Main background
  secondary: '#1a1a1a',    // Secondary background
  accent: '#3b82f6',       // Accent color (blue)
  text: {
    primary: '#f8fafc',    // Primary text
    secondary: '#cbd5e1',  // Secondary text
  },
}
```

## 📜 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

## 🚢 Deployment

### Deploy to Vercel (Recommended)

1. Push your code to GitHub
2. Import your repository on [Vercel](https://vercel.com)
3. Vercel will automatically detect Next.js and configure the build settings
4. Deploy!

### Deploy to Other Platforms

The project can be deployed to any platform that supports Next.js:

- **Netlify**: Connect your GitHub repo and deploy
- **AWS Amplify**: Connect repository and deploy
- **Railway**: Import from GitHub and deploy

## 📝 License

This project is open source and available under the [MIT License](LICENSE).

## 👤 Author

**Chowdhury Nabil Ahmed**

- GitHub: [@nabil0203](https://github.com/nabil0203)
- LinkedIn: [nabil0203](https://linkedin.com/in/nabil0203)
- Email: nabilahmed0203@gmail.com

## 🙏 Acknowledgments

- Built with [Next.js](https://nextjs.org/)
- Styled with [Tailwind CSS](https://tailwindcss.com/)
- Animated with [Framer Motion](https://www.framer.com/motion/)

---

⭐ If you find this project helpful, please consider giving it a star!

