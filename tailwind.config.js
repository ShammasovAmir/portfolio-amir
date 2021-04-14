module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontFamily: {
      sans: ['Roboto', 'sans-serif'],
    },
    extend: {
      fontFamily: {
        'open-sans': ['Open Sans', 'sans-serif'],
      },
      spacing: {
        100: '25rem',
        'five-percent': '5%',
        'ten-percent': '10%',
        'twenty-percent': '20%',
        'twenty-five-percent': '25%',
        'fifty-percent': '50%',
        'ten-screen-height': '10vh',
      },
      width: {
        '1/10': '10%',
        '2/10': '20%',
        '3/10': '30%',
        '4/10': '40%',
        '5/10': '50%',
        '6/10': '60%',
        '7/10': '70%',
        '8/10': '80%',
        '9/10': '90%',
      },
      maxWidth: {
        '1/2': '50%',
      },
      height: {
        125: '500px',
      },
      minHeight: {
        100: '400px',
      },
      inset: {
        '1/10': '10%',
      },
      screens: {
        'md-plus': '970px',
      },
      zIndex: {
        5: '5',
      },
    },
    colors: {
      'col-primary-light': '#ECF0F1',
      'col-primary-dark': '#282828',
      'col-secondary-dark-gray': '#333333',
      'col-secondary-darkest': '#202020',
      'col-logo': '#0ABDE3',
      'col-secondary-light': '#DDDDDD',
      'col-secondary-lightest': '#DEDEDE',
      'col-backdrop': 'rgba(0, 0, 0, 0.5)',
      'col-menu-backdrop': 'rgba(40, 40, 40, 0.9)',
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
