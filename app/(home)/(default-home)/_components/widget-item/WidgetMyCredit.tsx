'use client';
import React from 'react';
import { WidgetItemCardContainer } from './_components/WidgetItemCardContainer';
import DoughnutChart from '@/components/DoughnutChart';
import { creditDataConfig, creditOptions } from './graphConfig';

export const WidgetMyCredit = () => {
  return (
    <WidgetItemCardContainer title='나의 신용점수' subText={`${880}점`}>
      <div className='relative h-[6.65rem] w-full'>
        <div className='absolute -top-1/2 min-h-full w-full'>
          <DoughnutChart dataConfig={creditDataConfig} options={creditOptions} />
        </div>
      </div>
    </WidgetItemCardContainer>
  );
};
