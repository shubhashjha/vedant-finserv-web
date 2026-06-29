/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#0B6E4F',
        secondary: '#12C48B',
        accent: '#F4B400',
        dark: '#1A1A1A',
        surface: '#F8FAFC',
      },
      boxShadow: {
        soft: '0 10px 30px rgba(15, 23, 42, 0.08)',
        glow: '0 12px 40px rgba(11, 110, 79, 0.12)',
      },
      backgroundImage: {
        'finance-grid':
          'linear-gradient(rgba(11, 110, 79, 0.06) 1px, transparent 1px), linear-gradient(90deg, rgba(11, 110, 79, 0.06) 1px, transparent 1px)',
      },
      borderRadius: {
        xl2: '1rem',
      },
    },
  },
  plugins: [],
};
