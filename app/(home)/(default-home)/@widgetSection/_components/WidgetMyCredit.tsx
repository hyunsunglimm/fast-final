'use client';
import React from 'react';
import { WidgetItemCardContainer } from './_components/WidgetItemCardContainer';
import DoughnutChart from '@/components/DoughnutChart';
import {
  generateDoughnutChartData,
  myCreditScoreGraphOptions,
  DoughnutChartDataset
} from '@/utils/graph-config';

export const WidgetMyCredit = () => {
  const LABEL = '나의 신용점수';
  const MY_CREDIT = 880;
  const TOTAL_CREIDT = 1000;
  const dataSets: DoughnutChartDataset[] = [{ data: [MY_CREDIT, TOTAL_CREIDT - MY_CREDIT] }];

  return (
    <WidgetItemCardContainer title={LABEL} subText={`${MY_CREDIT}점`}>
      <div className='relative h-[6.65rem] w-full'>
        <div className='absolute -top-1/2 min-h-full w-full'>
          <DoughnutChart
            dataConfig={generateDoughnutChartData([LABEL], dataSets)}
            options={myCreditScoreGraphOptions}
          />
        </div>
      </div>
    </WidgetItemCardContainer>
  );
};
