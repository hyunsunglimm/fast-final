'use client';
// 나의 신용 점수
import React from 'react';
import { WidgetItemCard } from './WidgetItemCard';
import { CardContent } from '@/components/ui/card';
import { motion } from 'framer-motion';
import Text from '@/components/ui/Text';

export const WidgetMtCredit = () => {
  const creditScore = 886;
  const maxScore = 1000;
  const circumference = 2 * Math.PI * 70;
  const radius = 57.6;

  const draw = {
    hidden: { pathLength: 0, opacity: 0 },
    visible: () => {
      const delay = 0.5;
      return {
        pathLength: creditScore / maxScore,
        opacity: 1,
        transition: {
          pathLength: { delay, type: 'spring', duration: 1.5, bounce: 0 },
          opacity: { delay, duration: 0.01 }
        }
      };
    }
  };
  return (
    <WidgetItemCard title='나의 신용점수' subText='886점'>
      <CardContent justifyContent='center' className='w-full'>
        {/* <Text>KCB</Text> */}
        <div className='flex h-[7.2rem] w-full items-end justify-center'>
          <motion.svg
            width='130'
            height='67'
            viewBox='0 0 130 67'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'
            initial='hidden'
            animate='visible'
          >
            <path
              d='M65.0289 25.4235C84.2839 25.4235 100.484 38.7406 104.923 56.612C106.364 62.3769 111.379 66.5277 117.26 66.5277C125.503 66.5277 131.614 58.8027 129.654 50.847C122.621 21.6763 96.3327 0 65.0289 0C33.7252 0 7.43693 21.6763 0.346017 50.847C-1.55642 58.8603 4.49679 66.5277 12.7407 66.5277C18.6786 66.5277 23.6941 62.3769 25.0777 56.612C29.5167 38.6829 45.7163 25.4235 64.9713 25.4235H65.0289Z'
              fill='#E4E9EF'
            />
            <svg
              width='102'
              height='67'
              viewBox='0 0 102 67'
              fill='none'
              xmlns='http://www.w3.org/2000/svg'
              className='absolute'
            >
              <motion.path
                d='M65.0289 0C33.6675 0 7.43693 21.6763 0.346017 50.847C-1.55642 58.8603 4.49679 66.5277 12.7407 66.5277C18.6786 66.5277 23.6941 62.3769 25.0777 56.612C29.5167 38.6829 45.7163 25.4235 64.9713 25.4235C71.4857 25.4235 77.5389 26.98 83.0156 29.7472C88.0312 32.2838 94.0844 31.4191 98.0622 27.3836C104.058 21.2727 102.444 10.9534 94.7762 7.09091C85.8405 2.53659 75.7518 0 65.0289 0Z'
                fill='#FF7822'
                stroke='#FF7822'
                strokeWidth='1'
                strokeDasharray={102}
                strokeDashoffset={102}
                variants={draw}
              />
            </svg>
          </motion.svg>
          {/* <motion.svg
            className='h-full w-full transform overflow-hidden bg-transparent'
            initial='hidden'
            animate='visible'
            // viewBox='0 0 120 120'
          >
            <motion.circle
              cx='89'
              cy='89'
              r='79'
              stroke='#ff0055'
              strokeLinecap='round'
              strokeWidth='20'
              variants={draw}
            ></motion.circle>
          </motion.svg> */}
        </div>
      </CardContent>
    </WidgetItemCard>
  );
};
