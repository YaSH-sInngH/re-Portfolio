/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: 
  {
    extend: 
    {
      colors: 
      {
        b1: '#1f2937',
        b2: '#0f172a',
        b3: '#1e293b',
        b4: '#020617',
        b5: '#111827',
        b6: '#030712',
        b7: '#171717',
        b8: '#1a237e',

        fontFamily: {
          LondrinaShadow: ['Londrina Shadow', 'sans-serif'],
          LondrinaSolid: ['Londrina Solid', 'sans-serif'],
          Coiny: ['Coiny', 'system-ui'],
          Anton: ['Anton','sans-serif'],
          DM: ['DM Serif Display','serif'],
        },
      },
    }
  },
  plugins: [
    function ({ addUtilities }) {
      addUtilities({
        '.gradient-border': {
          'border-width': '8px',
          'border-style': 'solid',
          'border-image': ' radial-gradient(401px at 50.6% -0.3%, rgba(255, 255, 255, 0.31) 1.2%, rgb(36, 212, 219) 100.2%) 1',
        },
      });
    },
  ],
}

