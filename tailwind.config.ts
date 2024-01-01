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
      fontSize: {
        md: '16px',
      },
      dropShadow: {
        white: '0 0 5px rgba(255,255,255, 1)',
      },
      boxShadow: {
        boxy: '5px 5px 0px 0px hsl(var(--special_1))',
      },
      colors: {
        special_1: 'hsl(var(--special_1))',
        special_2: 'hsl(var(--special_2))',
        detail: 'hsl(var(--detail))',
        link: 'hsl(var(--link))',
        'primary-color': 'hsl(var(--primary-color))',

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
        federal_blue: {
          DEFAULT: '#120B68',
          100: '#040215',
          200: '#08042a',
          300: '#0b0740',
          400: '#0f0955',
          500: '#120b68',
          600: '#2013b1',
          700: '#3a2ae9',
          800: '#7b71f0',
          900: '#bdb8f8',
        },
        purple: {
          DEFAULT: '#740175',
          100: '#170017',
          200: '#2e002e',
          300: '#450146',
          400: '#5b015d',
          500: '#740175',
          600: '#bf02c2',
          700: '#f916fd',
          800: '#fb63fd',
          900: '#fdb1fe',
        },
        deep_pink: {
          DEFAULT: '#F4398C',
          100: '#39031b',
          200: '#720737',
          300: '#ab0a52',
          400: '#e30d6e',
          500: '#f4398c',
          600: '#f661a4',
          700: '#f888bb',
          800: '#fab0d1',
          900: '#fdd7e8',
        },
        electric_blue: {
          DEFAULT: '#27EAFE',
          100: '#00343a',
          200: '#016874',
          300: '#019cae',
          400: '#01d0e7',
          500: '#27eafe',
          600: '#50edfe',
          700: '#7cf1fe',
          800: '#a8f6ff',
          900: '#d3faff',
        },
        cornflower_blue: {
          DEFAULT: '#4E97FE',
          100: '#001c42',
          200: '#013784',
          300: '#0153c6',
          400: '#0b70fe',
          500: '#4e97fe',
          600: '#71acfe',
          700: '#94c1fe',
          800: '#b8d5ff',
          900: '#dbeaff',
        },
        sunglow: {
          DEFAULT: '#FED253',
          100: '#433200',
          200: '#866501',
          300: '#c99701',
          400: '#fec20f',
          500: '#fed253',
          600: '#fedc75',
          700: '#fee597',
          800: '#ffedba',
          900: '#fff6dc',
        },
      },
      borderRadius: {
        sm: '3px',
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
        fade: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        pulse: {
          '50%': {
            opacity: '0.25',
          },
        },
        'reveal-simon': {
          '0%': { opacity: '0', width: '0px', 'margin-right': '0px' },
          '30%': { opacity: '1', width: '72.5px', 'margin-right': '5px' },
          '70%': { opacity: '1', width: '72.5px', 'margin-right': '5px' },
          '100%': { opacity: '0', width: '0px', 'margin-right': '0px' },
        },
        'reveal-abiatar': {
          '0%': { opacity: '0', width: '0px', 'margin-right': '0px' },
          '30%': { opacity: '1', width: '64.43px', 'margin-right': '5px' },
          '70%': { opacity: '1', width: '64.43px', 'margin-right': '5px' },
          '100%': { opacity: '0', width: '0px', 'margin-right': '0px' },
        },
        'reveal-munoz': {
          '0%': { opacity: '0', width: '0px', 'margin-right': '0px' },
          '30%': { opacity: '1', width: '50.86px', 'margin-right': '5px' },
          '70%': { opacity: '1', width: '50.86px', 'margin-right': '5px' },
          '100%': { opacity: '0', width: '0px', 'margin-right': '0px' },
        },
        'reveal-saavedra': {
          '0%': { opacity: '0', width: '0px' },
          '30%': { opacity: '1', width: '111.15px' },
          '70%': { opacity: '1', width: '111.15px' },
          '100%': { opacity: '0', width: '0px' },
        },
        capitalize: {
          '0%': { 'text-transform': 'none' },
          '30%': { 'text-transform': 'capitalize' },
          '70%': { 'text-transform': 'capitalize' },
          '100%': { 'text-transform': 'none' },
        },
      },
      animation: {
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out',
        'reveal-simon': 'reveal-simon 2.5s 1',
        'reveal-abiatar': 'reveal-abiatar 2.5s 1',
        'reveal-munoz': 'reveal-munoz 2.5s 1',
        'reveal-saavedra': 'reveal-saavedra 2.5s 1',
        fade: 'fade ease-in 0.3s 1',
        capitalize: 'capitalize 2.5s 1',
      },
    },
  },
  plugins: [require('tailwindcss-animate')],
};
export default config;
