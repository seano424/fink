module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      animation: {
        shake: 'shake 1s linear 1',
      },
      keyframes: {
        shake: {
          '10%, 90%': {
            transform: 'translate3d(-1px, 0, 0)',
          },

          '20%, 80%': {
            transform: 'translate3d(2px, 0, 0)',
          },

          '30%, 50%, 70%': {
            transform: 'translate3d(-4px, 0, 0)',
          },

          '40%, 60%': {
            transform: 'translate3d(4px, 0, 0)',
          },
        },
      },
      height: {
        '10p': '10%',
        '20p': '20%',
        '30p': '30%',
        '40p': '40%',
        '50p': '50%',
        '60p': '60%',
        '70p': '70%',
        '80p': '80%',
        '90p': '90%',
        200: '200px',
        300: '300px',
        400: '400px',
        500: '500px',
        600: '600px',
        700: '700px',
        800: '800px',
        900: '900px',
        1000: '1000px',
      },
      width: {
        '10p': '10%',
        '20p': '20%',
        '30p': '30%',
        '40p': '40%',
        '50p': '50%',
        '60p': '60%',
        '70p': '70%',
        '80p': '80%',
        '90p': '90%',
        200: '200px',
        300: '300px',
        400: '400px',
        500: '500px',
        600: '600px',
        700: '700px',
        800: '800px',
        900: '900px',
        1000: '1000px',
      },
      colors: {
        palette: {
          lighter: '#F5F3FF',
          light: '#DDD6FE',
          primary: '#5B21B6',
          dark: '#4C1D95',
        },
      },
      fontFamily: {
        primary: ['"Libre Franklin"'],
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
