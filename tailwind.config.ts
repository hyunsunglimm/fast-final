import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}'
  ],
  theme: {
    extend: {
      backgroundSize: {
        auto: 'auto',
        cover: 'cover',
        contain: 'contain',
        '53': '53rem'
      },
      backgroundImage: {
        'create-bucket': "url('/images/create-bucket/bg.webp')",
        'bucket-bubble': "url('/images/create-bucket/bubble.webp')"
      },
      boxShadow: {
        sm: '0px 0px 0px 1px rgba(0, 0, 0, 0.04), 0px 3px 8px 0px rgba(0, 0, 0, 0.15), 0px 3px 1px 0px rgba(0, 0, 0, 0.06)',
        '3xl': '0px 4px 10px 0px rgba(0, 0, 0, 0.06)',
        'top-shadow': '0px 4px 16px 0px rgba(75, 81, 88, 0.08)'
      },
      screens: {
        xs: '520px'
      },
      gap: {
        2: '0.2rem',
        4: '0.4rem',
        6: '0.6rem',
        8: '0.8rem',
        10: '1rem',
        12: '1.2rem',
        14: '1.4rem',
        16: '1.6rem',
        18: '1.8rem',
        20: '2rem',
        22: '2.2rem',
        24: '2.4rem'
      },
      fontSize: {
        '10': ['1rem', { lineHeight: '1.6rem' }],
        '12': ['1.2rem', { lineHeight: '1.8rem' }],
        '14': ['1.4rem', { lineHeight: '2rem' }],
        '16': ['1.6rem', { lineHeight: '2.4rem' }],
        '18': ['1.8rem', { lineHeight: '2.6rem' }],
        '20': ['2rem', { lineHeight: '2.8rem' }],
        '24': ['2.4rem', { lineHeight: '3.2rem' }],
        '28': ['2.8rem', { lineHeight: '4rem' }],
        '32': ['3.2rem', { lineHeight: '4.8rem' }],
        '36': ['3.6rem', { lineHeight: '5.2rem' }],
        '40': ['4rem', { lineHeight: '6rem' }],
        '48': ['4.8rem', { lineHeight: '7.2rem' }]
      },
      padding: {
        '4': '0.4rem',
        '6': '0.6rem',
        '8': '0.8rem',
        '10': '1rem',
        '12': '1.2rem',
        '16': '1.6rem',
        '20': '2rem',
        '24': '2.4rem',
        '28': '2.8rem',
        '32': '3.2rem',
        '36': '3.6rem',
        '40': '4rem'
      },
      margin: {
        '4': '0.4rem',
        '6': '0.6rem',
        '8': '0.8rem',
        '10': '1rem',
        '12': '1.2rem',
        '16': '1.6rem',
        '20': '2rem',
        '24': '2.4rem',
        '28': '2.8rem',
        '32': '3.2rem',
        '36': '3.6rem',
        '40': '4rem'
      },
      borderRadius: {
        xs: '0.8rem',
        sm: '1.2rem',
        md: '1.6rem',
        lg: '2.4rem'
      },
      colors: {
        bucket: '#53B7FF',
        challenge: '#32C889',
        primary: '#FF7822',
        dim: '#ADADAD',
        active: '#5A7EFF',
        warning: '#FF5C46',
        red_500: '#F5553F',
        select: '#FFEDE1',
        'gray-10': '#F7F9FA',
        'gray-50': '#F2F4F6',
        'gray-100': '#EDF0F3',
        'gray-200': '#E4E9EF',
        'gray-300': '#CCD1D6',
        'gray-400': '#B8BEC4',
        'gray-500': '#8E939A',
        'gray-600': '#747A81',
        'gray-700': '#4B5158',
        black: '#23282E',
        banner: '#FFEDE1'
      },
      fontWeight: {
        '400': '400',
        '500': '500',
        '600': '600',
        '700': '700',
        '800': '800'
      },
      animation: {
        pop: 'pop 200ms cubic-bezier(0.18, 0.67, 0.6, 1.22) 0s 1 normal forwards'
      },
      keyframes: {
        pop: {
          '0%': {
            scale: '100%'
          },
          '100%': {
            scale: '105%',
            'box-shadow': '0px 0px 16px 9px rgba(0, 0, 0, 0.06)'
          }
        }
      }
    }
  },
  plugins: []
};
export default config;
