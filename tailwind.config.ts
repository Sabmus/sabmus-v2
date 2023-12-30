import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode: ['class'],
  prefix: '',
  theme: {
    container: {
      center: true,
      padding: '2rem',
      screens: {
        '2xl': '1400px',
      },
    },
    extend: {
      fontFamily: {
        consolas: 'Consolas',
        roboto_mono: 'RobotoMono',
        source_code_pro: 'SourceCodePro',
      },
      dropShadow: {
        '5px': '0 0 5px rgba(245,223,80, 0.7)',
      },
      colors: {
        special_1: 'hsl(var(--special_1))',
        special_2: 'hsl(var(--special_2))',
        detail: 'hsl(var(--detail))',

        border: 'hsl(var(--border))',
        input: 'hsl(var(--input))',
        ring: 'hsl(var(--ring))',
        background: 'hsl(var(--background))',
        foreground: 'hsl(var(--foreground))',
        primary: {
          DEFAULT: 'hsl(var(--primary))',
          foreground: 'hsl(var(--primary-foreground))',
        },
        secondary: {
          DEFAULT: 'hsl(var(--secondary))',
          foreground: 'hsl(var(--secondary-foreground))',
        },
        destructive: {
          DEFAULT: 'hsl(var(--destructive))',
          foreground: 'hsl(var(--destructive-foreground))',
        },
        muted: {
          DEFAULT: 'hsl(var(--muted))',
          foreground: 'hsl(var(--muted-foreground))',
        },
        accent: {
          DEFAULT: 'hsl(var(--accent))',
          foreground: 'hsl(var(--accent-foreground))',
        },
        popover: {
          DEFAULT: 'hsl(var(--popover))',
          foreground: 'hsl(var(--popover-foreground))',
        },
        card: {
          DEFAULT: 'hsl(var(--card))',
          foreground: 'hsl(var(--card-foreground))',
        },
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
      borderRadius: {
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)',
      },
      keyframes: {
        'accordion-down': {
          from: { height: '0' },
          to: { height: 'var(--radix-accordion-content-height)' },
        },
        'accordion-up': {
          from: { height: 'var(--radix-accordion-content-height)' },
          to: { height: '0' },
        },
      },
      animation: {
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out',
      },
    },
  },
  plugins: [require('tailwindcss-animate')],
};
export default config;
