/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,jsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'verdana': ['Verdana', 'sans-serif'],
      },
      backgroundImage: {
        'gourmet-bg': "url('./assets/gourmet2.jpeg')",
      },
    },
  },
  plugins: [],
}