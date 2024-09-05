/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",

  ],
  theme: {
    extend: {
      spacing: {
        '7.5': '40px', 
      },
      colors: {
        'custom-gray': '#616161',
        'custom-black': '#363C43',
        'button-bg-black': '#171717',
        'button-active-black': '#363C43',
        'font-black': '#969696',
        'back-right': '#6F787C',
        'main': '#222222',

      },
      backgroundImage: {
        'back-right-background': 'linear-gradient(139.14deg, #303439 12.4%, #161718 94.96%)',
        
        'custom-gradient': `
          linear-gradient(180deg, rgba(40, 40, 40, 0.1) 0%, rgba(248, 248, 248, 0.1) 100%),
          linear-gradient(0deg, rgba(255, 255, 255, 0.05), rgba(255, 255, 255, 0.05))
        `,
      },
      
      boxShadow: {
        'inner-white': 'inset 4px 4px 8px rgba(255, 255, 255, 0.4)',
        'outer-custom': '0 4px 8px rgba(0, 0, 0, 0.7)', 

      },

      font: {
         'custom-font ' : '18px',
      },


    },
  },
  plugins: [
    function ({ addUtilities }) {
      addUtilities(
        {
          '.scrollbar-custom': {
            overflowY: 'scroll', 

          },
          '.scrollbar-custom::-webkit-scrollbar': {
            width: '8px', // 

          },
          '.scrollbar-custom::-webkit-scrollbar-track': {
            background: 'transparent', 

          },
          '.scrollbar-custom::-webkit-scrollbar-thumb': {
            background: '#616161', 
            borderRadius: '8px', 
          },
          '.scrollbar-custom::-webkit-scrollbar-thumb:hover': {
            background: '#888', 
          },
          '.inner-shadow-custom': {
            boxShadow: 'inset 4px 4px 8px rgba(255, 255, 255, 0.4)',
          },
          '.outer-shadow-custom': {
            boxShadow: '0 4px 8px rgba(0, 0, 0, 0.7)', 
          },
        },
        ['responsive', 'hover']
      );
    },
  ],

}

