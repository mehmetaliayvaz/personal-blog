module.exports = {
  content: [
    './resources/**/*.antlers.html',
    './resources/**/*.blade.php',
    './resources/**/*.vue',
    './content/**/*.md'
  ],
  theme: {
    screens: {
      'sm': '640px',
      'md': '768px',
      'lg': '992px',
      'xl': '1080px',
      '2xl': '1170px'
    },
    extend: {
      container:{
        center: true,
        padding: {
          DEFAULT: '1rem',
        }
      },
      backgroundImage: {
      },
      fontFamily: {
        'roboto': ['Roboto', 'sans-serif'],
      },
      boxShadow: {
        'base': '0 16px 38px -12px rgb(0 0 0 / 56%), 0 4px 25px 0 rgb(0 0 0 / 12%), 0 8px 10px -5px rgb(0 0 0 / 20%);',
      }
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}
