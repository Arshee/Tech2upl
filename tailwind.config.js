/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
      colors: {
        'brand-primary': '#08D9D6',   // Vibrant Cyan/Teal from logo
        'brand-secondary': '#00B8B4', // Darker Teal for hover
        'brand-light': '#66FBFB',    // Lighter Teal for accents
        'base-100': '#252A34',       // Dark Slate/Charcoal BG
        'base-200': '#303640',       // Lighter Slate for cards
        'base-300': '#414853',       // Input backgrounds, hovers
        'base-content': '#EAEAEA',   // Main text color (off-white)
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
      },
    },
  },
  plugins: [],
}
