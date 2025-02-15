/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        'gradient-back':'#0000001a',
        primary:"#ff8901",
        secondary:"#fb923c",
      },
    },
  },
  plugins: [],
}

