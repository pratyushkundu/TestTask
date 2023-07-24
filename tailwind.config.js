/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        Outfit: ['Outfit', 'sans-serif'],
        Poppins: ['Poppins', 'sans-serif']
      },
      backgroundImage: {
        'hero-pattern': "url('../src/images/Group 160825.png')",
        'hero': "url('../src/images/Group 161186.png')",
        'hero-bag':"url('../src/images/Group 160825 (1).png')",
        'hero-mask':"url('../src/images/Mask.png')",
        'mask2':"url('../src/images/Mask2.png')",
        'line':"url('../src/images/Vector 13.png')"

      }
      , boxShadow: {
        'shade': '0 0 21px 0 rgba(7 ,59 ,65 ,0.05)'
      }
      ,
      borderColor: {
        'border': '2px solid rgba(71, 93, 91, 0.20)',
         'borderz':'rgba(71, 93, 91, 0.20)'
      },
      backgroundPosition: {

        'topz': 'center top 6rem',
      }
    },
  },
  plugins: [],
}
