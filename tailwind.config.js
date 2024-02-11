const withMT = require("@material-tailwind/react/utils/withMT");
 
module.exports = withMT({
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
    "path-to-your-node_modules/@material-tailwind/react/components/**/*.{js,ts,jsx,tsx}",
    "path-to-your-node_modules/@material-tailwind/react/theme/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'hero2': "url('./src/Assets/hero2.png')",
        'hero3': "url('./src/Assets/hero.png')",
      },
      colors:{
        'home-bg':'rgba(42, 42, 42, 1)',
        'text_gray':'#C5B9B9',
        'special':'#E8404A',
        'card_bg':'#1E1E1E'
      },
      fontFamily:{
        'Protest_Riot': 'Protest Riot',
        'Poppins':'Poppins',
        'bungee':"Bungee Outline"
        
      }
    },
  },
  plugins: [],
});


// shadow-md hover:shadow-special rounded transition duration-700 ease-in-out
