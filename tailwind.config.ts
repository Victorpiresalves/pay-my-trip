import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        navy: {
          950: '#050810',
          900: '#0a0e1a',
          800: '#111827',
          700: '#1a2235',
        },
        canada: {
          red: '#D80621',
          'red-dark': '#a80418',
        },
        pitch: {
          DEFAULT: '#16a34a',
          light: '#22c55e',
          dark: '#15803d',
        },
        polaroid: {
          white: '#f5f0eb',
          caption: '#e8e0d5',
        },
      },
      fontFamily: {
        display: ['var(--font-bebas)', 'Impact', 'Arial Black', 'sans-serif'],
        body: ['var(--font-inter)', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        polaroid: '0 20px 60px rgba(0,0,0,0.6), 0 4px 20px rgba(0,0,0,0.4)',
        glow: '0 0 30px rgba(34, 197, 94, 0.4), 0 0 60px rgba(34, 197, 94, 0.15)',
        'glow-sm': '0 0 15px rgba(34, 197, 94, 0.3)',
      },
      animation: {
        float: 'float 6s ease-in-out infinite',
        'float-delayed': 'float 6s ease-in-out 2s infinite',
        'float-slow': 'float 8s ease-in-out 1s infinite',
        'pulse-glow': 'pulseGlow 2s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-12px)' },
        },
        pulseGlow: {
          '0%, 100%': { boxShadow: '0 0 20px rgba(34,197,94,0.3)' },
          '50%': { boxShadow: '0 0 40px rgba(34,197,94,0.6)' },
        },
      },
    },
  },
  plugins: [],
};

export default config;
