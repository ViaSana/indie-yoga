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
        sans: ['Lato', 'sans-serif'],
        body: ['Ubuntu', 'sans-serif']
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
        'd-blue': '#27476E',
        'aqua': '#65D8D2',
        'blue': '#C6F9F6',
        'yellow': '#E5B02B',
        'light': '#EEE8EC',
        'grey' : '#DADADA',
      }
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
    require("daisyui"),
  ],

  daisyui: {
    themes: false, // true: all themes | false: only light + dark | array: specific themes like this ["light", "dark", "cupcake"]
    styled: true, // include daisyUI colors and design decisions for all components
    utils: true, // adds responsive and modifier utility classes
    rtl: false, // rotate style direction from left-to-right to right-to-left. You also need to add dir="rtl" to your html tag and install `tailwindcss-flip` plugin for Tailwind CSS.
    prefix: "", // prefix for daisyUI classnames (components, modifiers and responsive class names. Not colors)
    logs: true, // Shows info about daisyUI version and used config in the console when building your CSS
  },
}
