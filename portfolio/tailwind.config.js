/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        LondrinaShadow: ['Londrina Shadow', 'sans-serif'],
        LondrinaSolid: ['Londrina Solid', 'sans-serif'],
        Coiny: ['Coiny', 'system-ui'],
        Anton: ['Anton','sans-serif'],
        DM: ['DM Serif Display','serif'],
      },
    },
  },
  plugins: [],
}

