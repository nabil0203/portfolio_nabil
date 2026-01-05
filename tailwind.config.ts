import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        background: '#020617', // Deep Navy
        surface: '#0f172a',    // Dark Slate
        accent: '#3b82f6',     // Electric Blue
        primary: '#f8fafc',    // High-contrast white
        secondary: '#94a3b8',  // Muted Slate
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        mono: ['Roboto Mono', 'monospace'],
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'dot-pattern-faint': "url(\"data:image/svg+xml,%3Csvg width='20' height='20' viewBox='0 0 20 20' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%231E1E1E' fill-opacity='0.1'%3E%3Ccircle cx='10' cy='10' r='1.5'/%3E%3C/g%3E%3C/svg%3E\")",
      },
    },
  },
  plugins: [],
}

export default config
