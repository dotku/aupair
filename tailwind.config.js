/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#E6B800', // Darker Golden
          light: '#FFD700',
          dark: '#CC9900',
        },
        secondary: {
          DEFAULT: '#4A90E2', // Richer Blue
          light: '#87CEEB',
          dark: '#2171CC',
        },
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
};
