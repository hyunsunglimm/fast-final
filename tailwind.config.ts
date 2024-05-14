import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}'
  ],
  theme: {
    extend: {
      screens: {
        xs: '520px'
      },
      backgroundColor: {
        'gray-100': '#f0f0f0',
        'gray-200': '#e8e8e8',
        'gray-300': '#d0d0d0',
        'gray-500': '#949494',
        'gray-700': '#505050'
      },
      fontSize: {
        '48': ['4.8rem', { lineHeight: '7.2rem' }],
        '40': ['4rem', { lineHeight: '6rem' }],
        '36': ['3.6rem', { lineHeight: '5.2rem' }],
        '32': ['3.2rem', { lineHeight: '4.8rem' }],
        '28': ['2.8rem', { lineHeight: '4rem' }],
        '24': ['2.4rem', { lineHeight: '3.2rem' }],
        '20': ['2rem', { lineHeight: '2.8rem' }],
        '18': ['1.8rem', { lineHeight: '2.6rem' }],
        '16': ['1.6rem', { lineHeight: '2.4rem' }],
        '14': ['1.4rem', { lineHeight: '2rem' }],
        '12': ['1.2rem', { lineHeight: '1.8rem' }],
        '10': ['1rem', { lineHeight: '1.6rem' }]
      },
      colors: {
        active: '#0089EC',
        red_500: '#F5553F'
      }
    }
  },
  plugins: []
};
export default config;
