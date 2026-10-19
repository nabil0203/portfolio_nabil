import type { Config } from 'tailwindcss'

/**
 * Light Steel palette — nine neutral steps from paper to ink.
 * steel-50  #F8F9FA   steel-500 #6C757D
 * steel-100 #E9ECEF   steel-600 #495057
 * steel-200 #DEE2E6   steel-700 #343A40
 * steel-300 #CED4DA   steel-800 #212529
 * steel-400 #ADB5BD
 */
const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        steel: {
          50: '#F8F9FA',
          100: '#E9ECEF',
          200: '#DEE2E6',
          300: '#CED4DA',
          400: '#ADB5BD',
          500: '#6C757D',
          600: '#495057',
          700: '#343A40',
          800: '#212529',
        },
        // Semantic aliases (kept so existing class names keep working)
        background: '#F8F9FA',
        surface: '#E9ECEF',
        primary: '#212529',
        secondary: '#495057',
        accent: '#343A40',
        'accent-secondary': '#495057',
        'accent-glow': '#6C757D',
      },
      fontFamily: {
        sans: ['var(--font-body)', 'system-ui', 'sans-serif'],
        display: ['var(--font-display)', 'system-ui', 'sans-serif'],
        mono: ['ui-monospace', 'SFMono-Regular', 'Menlo', 'monospace'],
      },
    },
  },
  plugins: [],
}

export default config
