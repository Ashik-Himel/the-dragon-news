/** @type {import('tailwindcss').Config} */
export default {
  content: ['index.html', 'src/**/*.jsx'],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: '1.5rem',
        md: '2rem',
        lg: '4rem',
        xl: '5rem',
        '2xl': '6rem'
      }
    },
    extend: {
      fontFamily: {
        "poppins": "'Poppins', sans-serif"
      },
      colors: {
        "gray": "#706F6F",
        "light-gray": "#9F9F9F"
      }
    },
  },
  plugins: [require('daisyui')],
  daisyui: {
    themes: [
      {
        light: {
          ...require("daisyui/src/theming/themes")["[data-theme=light]"],
          "primary": "#D72050",
          "secondary": "#403F3F"
        },
      },
    ]
  }
}