import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}'
  ],
  theme: {
    extend: {
      boxShadow: {
        '3xl': '0px 4px 10px 0px rgba(0, 0, 0, 0.06)'
      },
      screens: {
        xs: '520px'
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
        red_500: '#F5553F',
        'gray-10': '#F7F9FA',
        'gray-50': '#F2F4F6',
        'gray-100': '#EDF0F3',
        'gray-200': '#E4E9EF',
        'gray-300': '#CCD1D6',
        'gray-400': '#B8BEC4',
        'gray-500': '#8E939A',
        'gray-600': '#747A81',
        'gray-700': '#4B5158',
        black: '#23282E'
      },
      fontWeight: {
        '300': '300',
        '400': '400',
        '500': '500',
        '600': '600',
        '700': '700',
        '800': '800',
        '900': '900'
      }
    }
  },
  plugins: []
};
export default config;
