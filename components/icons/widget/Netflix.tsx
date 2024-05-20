import React from 'react';

export const Netflix = () => {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      className='h-[4.4rem] w-[3.7rem]'
      viewBox='0 0 37 44'
      fill='none'
    >
      <g opacity='0.7' filter='url(#filter0_d_1742_52474)'>
        <path d='M19.9783 10H27V34H19.9783V10Z' fill='#B1060F' />
        <path d='M10 10H17.0217V34H10V10Z' fill='#B1060F' />
        <path d='M10 10H17.0217L27 34H19.9783L10 10Z' fill='#E40813' />
      </g>
      <defs>
        <filter
          id='filter0_d_1742_52474'
          x='0'
          y='0'
          className='h-[4.4rem] w-[3.7rem]'
          filterUnits='userSpaceOnUse'
          colorInterpolationFilters='sRGB'
        >
          <feFlood floodOpacity='0' result='BackgroundImageFix' />
          <feColorMatrix
            in='SourceAlpha'
            type='matrix'
            values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0'
            result='hardAlpha'
          />
          <feOffset />
          <feGaussianBlur stdDeviation='5' />
          <feComposite in2='hardAlpha' operator='out' />
          <feColorMatrix type='matrix' values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0' />
          <feBlend mode='normal' in2='BackgroundImageFix' result='effect1_dropShadow_1742_52474' />
          <feBlend
            mode='normal'
            in='SourceGraphic'
            in2='effect1_dropShadow_1742_52474'
            result='shape'
          />
        </filter>
      </defs>
    </svg>
  );
};
