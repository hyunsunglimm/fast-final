'use client';
import React from 'react';
import { WidgetItemCard } from './_components/WidgetItemCard';
import DoughnutChart from '@/components/DoughnutChart';
import { ChartData } from 'chart.js';
import { getGradient } from '@/utils/chartGetGradient';

export const WidgetMyCredit = () => {
  const MY_CREDIT = 386;
  const TOTAL_CREDIT = 1000;
  const label = '나의 신용점수';
  const dataConfig: ChartData<'doughnut'> = {
    labels: [label],
    datasets: [
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
        }
      }
    ]
  };
  return (
    <WidgetItemCard title={label} subText={`${MY_CREDIT}점`}>
      <div className='relative h-[6.65rem] w-full'>
        <div className='absolute -top-1/2 min-h-full w-full'>
          <DoughnutChart dataConfig={dataConfig} />
        </div>
      </div>
    </WidgetItemCard>
  );
};
