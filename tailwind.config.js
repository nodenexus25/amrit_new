/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'teal-deep': '#1F5C4A',
        'teal-light': '#E8F0EC',
        'gold': '#C99A3D',
        'gold-light': '#FDF5E6',
        'jaggery': '#8A5A3B',
        'jaggery-light': '#F5EBE0',
        'cream': '#FBF7EF',
        'ink': '#2A2A28',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      transitionTimingFunction: {
        'cinematic': 'cubic-bezier(0.22, 1, 0.36, 1)',
      },
      transitionDuration: {
        '600': '600ms',
        '800': '800ms',
      }
    },
  },
  plugins: [],
}
