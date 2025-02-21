/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    container: {
      center: true,
    },
    extend: {
      colors:{
        mainYellow: "#FFD814",
        navBgColor: "#131921",
        navBgSecColor: "#232F3E",
      }
    },
    fontFamily: {
      'ibm': ['IBM Plex Sans Condensed', 'sans-serif'],
      'inika': ['Inika', 'serif'],
    }
  },
  plugins: [],
}

