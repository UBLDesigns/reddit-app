/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "src/features/posts/components/PostCard.jsx"
  ],
  theme: {
    extend: {
      textShadow: {
        'md': ' 0 2px 3px rgba(0,0,0,0.5)'
      },
      fontFamily: {
        'inter' : ['Inter', 'sans-serif'],
        'roboto': ['Roboto', 'sans-serif']
      }
    },
  },
  plugins: [
    require('tailwindcss-textshadow')
  ],
}

