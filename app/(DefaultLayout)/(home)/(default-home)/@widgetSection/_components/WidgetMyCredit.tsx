'use client';
import React from 'react';
import { WidgetItemCardContainer } from './_components/WidgetItemCardContainer';
import DoughnutChart from '@/components/DoughnutChart';
import {
  generateChartData,
  myCreditScoreGraphOptions,
  DoughnutChartDataset,
  getGradient
} from '@/shared/utils/graph-config';

export const WidgetMyCredit = () => {
  const LABEL = '나의 신용점수';
  const MY_CREDIT = 880;
  const TOTAL_CREDIT = 1000;
  const dataSets: DoughnutChartDataset[] = [
    {
      data: [MY_CREDIT, TOTAL_CREDIT - MY_CREDIT],
      backgroundColor: (context) => {
        const chart = context.chart;
        const { chartArea } = chart;
        if (!chartArea) {
          return '';
        }
        if (context.dataIndex === 0) {
          return getGradient(chart, false);
        } else {
          return '#edf0f3';
        }
      },
      hoverBackgroundColor: (context) => {
        const chart = context.chart;
        const { chartArea } = chart;
        if (!chartArea) {
          return '';
        }
        if (context.dataIndex === 0) {
          return getGradient(chart, true);
        } else {
          return '#edf0f3';
        }
      },
      borderWidth: 0,
      borderRadius: { innerEnd: 30, outerEnd: 30 }
    }
  ];

  return (
    <WidgetItemCardContainer title={LABEL} subText={`${MY_CREDIT}점`}>
      <div className='relative h-[6.65rem] w-full'>
        <div className='absolute -top-1/2 min-h-full w-full'>
          <DoughnutChart
            dataConfig={generateChartData([LABEL], dataSets)}
            options={myCreditScoreGraphOptions}
          />
        </div>
      </div>
    </WidgetItemCardContainer>
  );
};
