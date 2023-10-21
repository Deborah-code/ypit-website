import type { Config } from 'tailwindcss';
/** @type {import('tailwindcss').Config} */
const plugin = require('tailwindcss/plugin')
const fs = require('fs')
const postcss = require('postcss')

export default {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens: {
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1440px',
    },
    colors: {
      purple: {
      dark: '#5100BF',
      medium: '#AF8AE2',
      light: '#EEE6F9',
      },
      yellow: {
        dark: '#FFD855',
        medium: '#FFEBAA',
        light: '#FFF9E6',
        },
        black: {
          1: '#000000',
          dark: '#3A3A3A',
          medium: '#626262',
          light: '#ADADAD'
          },
    },
    fontSize:{
      hLarge: ['64px', '75px'],
      hMedium: ['56px', '75px'],
      hSmall: ['56px', 'normal'],
      hXsmall: ['48px', 'normal'],
      pLarge: ['36px', '41px'],
      pReg: ['24px', 'normal'],

    },
    fontFamily: {
      sans: ['Graphik', 'sans-serif'],
      serif: ['Merriweather', 'serif'],
    },
    spacing: {
      '1': '8px',
      '2': '12px',
      '3': '16px',
      '4': '24px',
      '5': '32px',
      '6': '48px',
  },
    extend: {
      spacing: {
          small1: '16px',
          small2: '24px',
          small3: '32px',
          medium1: '40px',
          medium2: '48px',
          medium3: '56px',
          large1:  '64px',
          large2: '72px',
          large3: '96px',
      },
      borderRadius: {
        '4xl': '2rem',
      }
  },
 

},
plugins: [
  require('@tailwindcss/typography'),
],
} satisfies Config

