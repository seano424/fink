module.exports = {
  purge: [],
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
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
