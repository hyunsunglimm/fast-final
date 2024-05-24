import localFont from 'next/font/local';
export const suit = localFont({
  src: [
    {
      path: '../public/font/SUIT-Regular.woff2',
      weight: '400',
      style: 'normal'
    },
    {
      path: '../public/font/SUIT-Medium.woff2',
      weight: '500',
      style: 'normal'
    },
    {
      path: '../public/font/SUIT-SemiBold.woff2',
      weight: '600',
      style: 'normal'
    },
    {
      path: '../public/font/SUIT-Bold.woff2',
      weight: '700',
      style: 'normal'
    },
    {
      path: '../public/font/SUIT-ExtraBold.woff2',
      weight: '800',
      style: 'normal'
    },
    {
      path: '../public/font/SUIT-Heavy.woff2',
      weight: '900',
      style: 'normal'
    }
  ]
});
