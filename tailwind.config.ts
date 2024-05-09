import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}'
  ],
  theme: {
    extend: {
      backgroundColor: {
        'bg-gray-100': '#f0f0f0',
        'bg-gray-200': '#e8e8e8',
        'bg-gray-300': '#d0d0d0',
        'bg-gray-500': '#949494',
        'bg-gray-700': '#505050'
      },
      fontSize: {
        data48: ['48px', { lineHeight: '72px' }],
        data40: ['40px', { lineHeight: '60px' }],
        data36: ['36px', { lineHeight: '52px' }],
        title32: ['32px', { lineHeight: '48px' }],
        title28: ['28px', { lineHeight: '40px' }],
        title24: ['24px', { lineHeight: '32px' }],
        title20: ['20px', { lineHeight: '28px' }],
        title18: ['18px', { lineHeight: '26px' }],
        body16: ['16px', { lineHeight: '24px' }],
        body14: ['14px', { lineHeight: '20px' }],
        caption12: ['12px', { lineHeight: '18px' }],
        caption10: ['10px', { lineHeight: '16px' }]
      }
    }
  },
  plugins: []
};
export default config;
