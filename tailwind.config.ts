import type { Config } from 'tailwindcss'

const config: Config = {
  // Dark mode በክላስ እንዲሰራ ይፈቅዳል
  darkMode: 'class',
  
  // Tailwind የትኞቹን ፋይሎች መፈተሽ እንዳለበት የሚገልጽ
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './lib/**/*.{js,ts,jsx,tsx,mdx}',
    './styles/**/*.css',
  ],
  
  theme: {
    extend: {
      // ለግዕዝ እና ለእንግሊዝኛ የተመረጡ ፎንቶች
      fontFamily: {
        sans: ['var(--font-inter)', 'var(--font-noto-sans-ethiopic)', 'sans-serif'],
      },
      
      // የሶፊ ሲስተም ሶሉሽን መለያ ቀለሞች
      colors: {
        primary: {
          50: '#e8eaf6',
          100: '#c5cae9',
          200: '#9fa8da',
          300: '#7986cb',
          400: '#5c6bc0',
          500: '#3f51b5', // ዋናው ሰማያዊ ቀለም
          600: '#3949ab',
          700: '#303f9f',
          800: '#283593',
          900: '#1a237e',
        },
        secondary: {
          50: '#e1f5fe',
          100: '#b3e5fc',
          200: '#81d4fa',
          300: '#4fc3f7',
          400: '#29b6f6',
          500: '#03a9f4',
          600: '#039be5',
          700: '#0288d1',
          800: '#0277bd',
          900: '#01579b',
        },
        success: { 500: '#4caf50' },
        error: { 500: '#f44336' },
        warning: { 500: '#ffc107' },
        neutral: {
          0: '#ffffff',
          50: '#fafafa',
          100: '#f5f5f5',
          200: '#eeeeee',
          300: '#e0e0e0',
          400: '#bdbdbd',
          500: '#9e9e9e',
          600: '#757575',
          700: '#616161',
          800: '#424242',
          900: '#212121',
          1000: '#000000',
        },
      },
      
      // የርቀት (Spacing) መለኪያዎች
      spacing: {
        '0': '0px',
        '1': '4px',
        '2': '8px',
        '4': '16px',
        '8': '32px',
        '12': '48px',
        '16': '64px',
      },
      
      // የቅርጽ ማእዘናት (Border Radius)
      borderRadius: {
        'sm': '0.125rem',
        'md': '0.375rem',
        'lg': '0.5rem',
        'xl': '0.75rem',
        '2xl': '1rem',
        'full': '9999px',
      },
    },
  },
  plugins: [],
}

export default config