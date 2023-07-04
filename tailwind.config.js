const defaultTheme = require('tailwindcss/defaultTheme');

const tailwindcssForms = require('@tailwindcss/forms');
const tailwindcssTypography = require('@tailwindcss/typography');

module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}',
    './src/context/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    screens: {
      xss: '390px',
      xs: '480px',
      sm: '640px',
      md: '768px',
      mdx: '960px',
      header: '1012px',
      lg: '1024px',
      xl: '1280px',
      '2xl': '1560px',
      '3xl': '1920px',
    },
    container: {
      center: true,
      padding: '1rem',
    },
    fontSize: {
      sm: ['clamp(0.85rem, calc(0.85rem + 0.00vw), 0.85rem)', '1.1rem'],
      md: ['clamp(0.9rem, calc(0.9rem + 0.00vw), 0.9rem)', '1.2rem'],
      base: ['clamp(1.07rem, calc(1.07rem + 0.00vw), 1.07rem)', '1.6rem'],
      lg: ['clamp(1.3rem, calc(1.3rem + 0vw), 1.3rem)', '2.2rem'],
      '2lg': ['clamp(1.85rem, calc(1.85rem + 0vw), 1.85rem)', '2.75rem'],
      xl: ['clamp(2.6rem, calc(2.6rem + 0.00vw), 2.6rem)', '3.25rem'],
      '2xl': ['clamp(2.9rem, calc(2.9rem + 0.00vw), 2.9rem)', '3.75rem'],
      '3xl': ['clamp(3.75rem, calc(3.75rem + 0.00vw), 3.75rem)', '5rem'],
      '4xl': ['clamp(4.375rem, calc(4.375rem + 0.00vw), 4.375rem)', '5rem'],
      '5xl': ['clamp(5.6rem, calc(5.6rem + 0vw), 5.6rem)', '5.5rem'],
    },
    extend: {
      fontFamily: {
        sans: ['Lato', ...defaultTheme.fontFamily.sans],
        title: ['Lobster', ...defaultTheme.fontFamily.sans],
      },
      height: {
        header: '6rem',
        breadcrumbs: '3rem',
      },
      colors: {
        primary: '#3B2020',
        secondary: '#DEA850',
        tertiary: '#FFFDEF',

        red: '#D53543',
        grey: '#F8F8F8',
      },
      zIndex: {
        header: 100,
        overlay: 200,
        sidebar: 300,
        cookie: 500,
        modal: 1000,
        toast: 10000,
      },
      keyframes: {
        grow: {
          '0%, 100%': { transform: 'scale(1.1)' },
          '50%': { transform: 'scale(1.05)' },
        },
      },
      animation: {
        grow: 'grow 3s infinite',
      },
      typography: (theme) => ({
        DEFAULT: {
          css: {
            color: theme('colors.primary'),
            strong: {
              color: theme('colors.primary'),
            },
            p: {
              fontSize: '16px',
              marginTop: '0.75rem',
              marginBottom: '0.75rem',
            },
            '> :first-child': {
              marginTop: '0rem',
              marginBottom: '0.75rem',
            },
            '> :last-child': {
              marginTop: '0.75rem',
              marginBottom: '0rem',
            },
            a: {
              color: theme('colors.red'),
              '&:hover': {
                color: theme('colors.red'),
              },
            },
            img: {
              margin: 0,
            },
            h1: {
              fontSize: theme('fontSize.xl'),
              marginTop: '0.5em',
              marginBottom: '0',
              color: theme('colors.primary'),
            },
            h2: {
              fontSize: '1.625rem',
              marginTop: '2rem',
              marginBottom: '1.5rem',
              color: theme('colors.primary'),
            },
            h3: {
              fontSize: '1.25rem',
              marginTop: '2rem',
              marginBottom: '1rem',
              color: theme('colors.primary'),
            },
            h4: {
              fontSize: theme('fontSize.base'),
              marginTop: '0.5em',
              marginBottom: '0',
              color: theme('colors.primary'),
            },
            h5: {
              fontSize: theme('fontSize.md'),
              marginTop: '0.5em',
              marginBottom: '0',
              color: theme('colors.primary'),
            },
            h6: {
              fontSize: theme('fontSize.md'),
              marginTop: '0.5em',
              marginBottom: '0',
              color: theme('colors.primary'),
            },
            ul: {
              marginTop: '0',
              marginBottom: '0',
            },
            ol: {
              marginTop: '0',
              marginBottom: '0',
            },
            li: {
              fontSize: '16px',
              marginTop: '0',
              marginBottom: '0.75rem',
              '&::marker': {
                color: theme('colors.primary'),
              },
            },
          },
        },
      }),
    },
  },
  plugins: [
    tailwindcssForms,
    tailwindcssTypography,
  ],
};
