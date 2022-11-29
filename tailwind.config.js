/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: "Inter, sans-serif",
      },
      colors:{
        "primart-color":"#1D263A",
        "secondary-color":"7F828A",
        "active-color":"#1787FC",
        "background-color":"#F9FAFB",
        
        "badge-green":"#20BFA9",
        "badge-orange":"#FF794D",
        "badge-blue":"#1787FC",
        "badge-purple":"#9B51E0",
        "badge-dark":"#413E65",
        "badge-red":"#F04037",
        "badge-pink":"#F653A2",
        "badge-turquoise":"#00BCD4",
        "badge-militarygreen":"#81B214"


      }
    },
  },
  plugins: [],
}
