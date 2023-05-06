/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily:{
      'sans': ['Poppins', 'sans-serif']
    },
    extend: {
      colors:{
        'pink-10' : '#ff6a95',
        'slate-10' : '#202142',
        'slate-20': '#333',
        
      }
    },
  },
  plugins: [],
}