module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontFamily: {

      display: ['montserrat'],

    },
    fontSize: {
      xs: '9px',
      sm: '10px',
      base: '12px',
      lg: '14px',
      xl: '16px',
      '2xl': '24px',

    },

    textColor: {
      'ashwhite': '#F2F2F2',
      gray1: '#bdbdbd',
      gray2: '#828282',
      gray3: '#4f4f4f',
      gray4: '#333333',
    },
    backgroundColor: theme => ({
      ...theme('colors'),
      'primary': '#EB5757',

    }),
    color: {
      'ashwhite': '#F2F2F2',
      'primary': '#EB5757',
    }

  },
  variants: {
    extend: {},
  },
  plugins: [require('@tailwindcss/forms')],
}

// width: {
//   lg: '394px',
//     },
// height: {
//   lg: '267px',
//     },