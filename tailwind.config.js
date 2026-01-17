const { transform } = require('typescript')

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        Quicksand: ['"Quicksand"', 'cursive'],
        BlackOpsOne: ['"Black Ops One"', 'cursive']
      },

      animation: {
        fadeIn: 'fadeIn 0.7s ease-out forwards'
      },

      keyframes: {
        fadeIn: {
          from: {
            opacity: 0.8,
            transform: 'scale(1)'
          },
          to: {
            opacity: 1,
            transform: 'scale(1.05)'
          }
        }
      }
    }
  },
  plugins: []
}
