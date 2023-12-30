import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      dropShadow: {
        '5px': '0 0 5px rgba(245,223,80, 0.7)',
      },
      colors: {
        background: 'hsl(var(--background))',
        foreground: 'hsl(var(--foreground))',
        primary: 'hsl(var(--primary))',
        special_2: 'hsl(var(--special_2))',
        special_1: 'hsl(var(--special_1))',
        detail: 'hsl(var(--detail))',
        maize: {
          DEFAULT: '#F5DF50',
          100: '#3e3604',
          200: '#7b6c07',
          300: '#b9a20b',
          400: '#f1d414',
          500: '#f5df50',
          600: '#f7e574',
          700: '#f9ec97',
          800: '#fbf2ba',
          900: '#fdf9dc',
        },
        deep_pink: {
          DEFAULT: '#FF2295',
          100: '#3a001e',
          200: '#74003c',
          300: '#ae005a',
          400: '#e90078',
          500: '#ff2295',
          600: '#ff50aa',
          700: '#ff7bbf',
          800: '#ffa7d5',
          900: '#ffd3ea',
        },
        ruddy_blue: {
          DEFAULT: '#47A5FB',
          100: '#01213f',
          200: '#03427e',
          300: '#0463bd',
          400: '#0785fa',
          500: '#47a5fb',
          600: '#6bb6fc',
          700: '#90c8fd',
          800: '#b5dafd',
          900: '#daedfe',
        },
        zaffre: {
          DEFAULT: '#2C17AD',
          100: '#080422',
          200: '#110945',
          300: '#190d67',
          400: '#221289',
          500: '#2c17ad',
          600: '#391fe2',
          700: '#6b57e9',
          800: '#9c8ff0',
          900: '#cec7f8',
        },
        indigo: {
          DEFAULT: '#5C007D',
          100: '#13001a',
          200: '#250033',
          300: '#38004d',
          400: '#4b0066',
          500: '#5c007d',
          600: '#9600cc',
          700: '#c21aff',
          800: '#d666ff',
          900: '#ebb3ff',
        },
        federal_blue: {
          DEFAULT: '#170550',
          100: '#050110',
          200: '#090221',
          300: '#0e0331',
          400: '#120441',
          500: '#170550',
          600: '#2d0aa1',
          700: '#4410f0',
          800: '#8360f5',
          900: '#c1affa',
        },
      },
    },
  },
  plugins: [],
  darkMode: ['class'],
};
export default config;
