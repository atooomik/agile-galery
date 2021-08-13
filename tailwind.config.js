const colors = require('tailwindcss/colors')

module.exports = {
  
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
    colors: {
      white: '#FFF',
      noir: '#242526',
      semiGray: 'rgba(226,232,240,0.3)',
      coolgray: colors.coolGray,
      lightblue: colors.lightBlue,
      bluegray: colors.blueGray,
    }
  },
  variants: {
    extend: {},
  },
  plugins: [],
  purge: {
    // Learn more on https://tailwindcss.com/docs/controlling-file-size/#removing-unused-css
    enabled: process.env.NODE_ENV === 'production',
    content: [
      'components/**/*.vue',
      'layouts/**/*.vue',
      'pages/**/*.vue',
      'plugins/**/*.js',
      'nuxt.config.js'
    ]
  }
}
