module.exports = {
  content: ['./public/**/*.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
          primary: '#CA38ED',
          secondary: '#E487FB',
          terciary: '#3E1149',
          silver: '#574E5A',
          light: '#BCB1BF',
          error: '#AD3C40',
      }
  },
  fontFamily: {
      'poppins':  ['Poppins', 'sans-serif'],
  }
  },
  plugins: [],
}
