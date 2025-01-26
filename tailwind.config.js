/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    typography: require('./typography'),
    extend: {
      colors: {
        gray: {
          50: '#F9FAFB',
          100: '#F3F4F6',
          200: '#E5E7EB',
          300: '#D1D5DB',
          400: '#9CA3AF',
          500: '#6B7280',
          700: '#2A2F36', // Dunkleres Grau für futuristisches Gefühl
          800: '#1A1D21', // Fast Schwarz
          900: '#0E0F11', // Tiefes Schwarz
        },
        primary: {
          50: '#DCEEFB',
          100: '#B6E0FE',
          200: '#84C5F4',
          300: '#62B0E8',
          400: '#4098D7',
          500: '#2680C2',
          600: '#186FAF', // Dunkelblau für Hauptakzente
          700: '#0F609B', // Tieferes Blau
          800: '#0A558C', // Dunkelster Blauton
          900: '#003E6B', // Fast Schwarz-Blau
        },
        blue: {
          50: '#EBF8FF',
          100: '#D1EEFC',
          200: '#A7D8F0',
          300: '#7CC1E4',
          400: '#55AAD4',
          500: '#3A8BCD', // Standard-Blau für Buttons
          600: '#0074CC', // Tieferes Blau für Hover
          700: '#005BA1', // Akzent-Blau
        },
        dark: {
          50: '#F1F1F1',
          100: '#E1E1E1',
          200: '#C7C7C7',
          300: '#A4A4A4',
          400: '#757575',
          500: '#5A5A5A',
          600: '#333333',
          700: '#222222',
          800: '#1C1C1C', // Schwarzer Hintergrund
          900: '#111111', // Tiefstes Schwarz
        },
        neon: {
          green: '#39FF14', // Neon-Grün für futuristische Akzente
          blue: '#00FFFF', // Cyan-Neon für Details
        },
      },
      screens: {
        mobile: '320px',
        tablet: '640px',
        pc: '1024px',
      },
      boxShadow: {
        futuristic: '0 4px 30px rgba(0, 0, 0, 0.8)', // Tiefer Schatten
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
    require('@tailwindcss/line-clamp'),
  ],
};
