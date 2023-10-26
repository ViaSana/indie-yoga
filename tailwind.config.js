/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './_includes/**/*.{html,js,md}',
    './_layouts/**/*.{html,js,md}',
    './_*/*.{html,js,md}',
    './*.{html,js,md}'
  ],
  theme: {
    extend: {
      fontFamily: {
        body: ['Lato', 'sans-serif'],
        sans: ['Ubuntu', 'sans-serif']
      },
      spacing: {
        '5p': '5%',
        '10p': '10%',
        '15p': '15%',
      },
      aspectRatio: {
        'landscape': '2 / 1 ',
        'portrait': '3 / 4',
        'portrait-tall': '3 / 5',
      },
      minHeight:{
        '100': '100vh',
        '90': '90vh',
        '80': '80vh',
        '70': '70vh',
        '60': '60vh',
        '50': '50vh',
      },
      colors:{
        'aqua': '#bbfbfd',

        'd-blue': '#27476E',
        'blue': '#C6F9F6',
        'yellow': '#E5B02B',
        'light': '#EEE8EC',
        'grey' : '#DADADA',
      }
    },
  },
  daisyui: {
    themes: [
      {
        mytheme: {
          "primary": "#555555",
          "secondary": "#537887",
          "accent": "#000000",
          "neutral": "#ffffff",
          "base-100": "#eee8ec",
          "info": "#ffffff",
          "success": "#3e3d3d",
          "warning": "#bbfbfd",
          "error": "#bbfbfd",
        },
      },
    ],    
  },

  plugins: [
    require('@tailwindcss/typography'),
    require("daisyui"),
    require("tailwindcss-animate"),
  ],
}
