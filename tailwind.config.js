const colors = require('material-ui-colors');

module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
    './node_modules/@fieldmade/ui/build/index.js',
  ],
  theme: {
    fontFamily: {
      sans: ['Helvetica Neue', 'sans-serif'],
      mono: ['Menlo', 'DejaVu Sans Mono', 'Bitstream Vera Sans Mono', 'Courier', 'monospace'],
      serif: ['Georgia', 'Times', 'serif'],
    },
    fontWeight: {
      line: 100,
      thin: 200,
      light: 300,
      normal: 400,
      semibold: 600,
      bold: 700,
      extrabold: 800,
      black: 900,
    },
    extend: {
      fontSize: {
        md: '0.9375rem',
      },
      screens: {
        lg: '1025px',
        xl: '1440px',
        '2xl': '1920px',
        '3xl': '2560px',
      },
      colors: { ...colors, darkBlue: '#021221', darkerBlue: '#010d17', current: 'currentColor' },
      borderWidth: {
        3: '3px',
      },
      scale: {
        102: '1.025',
      },
      minHeight: {
        '1/2': '50%',
        96: '24rem',
        'half': '50vh',
      },
    },
  },
  corePlugins: {
    preflight: true,
  },
  plugins: [require('@tailwindcss/forms'), require('@tailwindcss/typography'), require('@tailwindcss/line-clamp')],
};

