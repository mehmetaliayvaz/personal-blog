module.exports = {
  content: [
    './resources/**/*.antlers.html',
    './resources/**/*.blade.php',
    './resources/**/*.vue',
    './content/**/*.md'
  ],
  theme: {
    extend: {
      container:{
        center: true,
        padding: {
          DEFAULT: '1rem',
        }
      },
      backgroundImage: {
        'home-intro' : "url('/assets/img/bg/home-intro-bg.jpg')",
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}
