/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#f8f9fa',
          100: '#f1f3f5',
          200: '#e9ecef',
          300: '#dee2e6',
          400: '#ced4da',
          500: '#8B5A2B', // Wood brown
          600: '#774C24', // Darker wood brown
          700: '#5D3A1A', // Even darker wood brown
          800: '#3D2712', // Very dark wood brown
          900: '#2C1810', // Almost black wood brown
        },
        secondary: {
          500: '#2B5F75', // Complementary blue
        },
        accent: {
          500: '#D4A76A', // Light wood accent
        }
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        serif: ['Merriweather', 'serif'],
      },
    },
  },
  plugins: [],
  darkMode: 'class',
} 