module.exports = {
  mode: 'jit',
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      height: {
        'almost-screen' : 'calc(100% - 104px)',
      }
    },
    // fontFamily: {
    //   'inter': ['Inter']
    // }
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
