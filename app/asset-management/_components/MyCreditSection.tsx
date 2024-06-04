'use client';
import React from 'react';
import SectionTitle from '@/components/SectionTitle';
import { Card, CardContent } from '@/components/ui/card';
import Text from '@/components/ui/Text';
import FlexBox from '@/components/ui/FlexBox';
import DoughnutChart from '@/components/DoughnutChart';
import {
  getGradient,
  generateChartData,
  myCreditScoreGraphOptions,
  DoughnutChartDataset
} from '@/shared/utils/graph-config';

const MyCreditSection = () => {
  const TOTAL_CREDIT = 1000;
  const MY_CREDIT = 880;
  const label = '나의 신용점수';
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
    <>
      <SectionTitle>내 신용 점수</SectionTitle>
      <Card>
        <CardContent
          flexDirection='row'
          justifyContent='center'
          className='gap-x-16 px-24 py-[1.1rem]'
        >
          <FlexBox flexDirection='col' className='my-auto h-full shrink-0'>
            <Text sizes='18' weight='700'>
              880
              <Text sizes='14' weight='500' className='text-gray-500'>
                점
              </Text>
            </Text>
            <Text sizes='12' className='text-gray-500'>
              상위 27%
            </Text>
            <Text sizes='12' className='text-gray-500'>
              50점 (03.08 대비)
            </Text>
          </FlexBox>
          <FlexBox
            alignItems='center'
            justifyContent='center'
            className='relative h-[9.2rem] w-[18.5rem]'
          >
            <Text sizes='18' weight='700' className='absolute -bottom-2 self-end'>
              KCB
            </Text>
            <div className='absolute -top-[35%] min-h-full w-full'>
              <DoughnutChart
                dataConfig={generateChartData([label], dataSets)}
                options={myCreditScoreGraphOptions}
              />
            </div>
          </FlexBox>
        </CardContent>
      </Card>
    </>
  );
};
export default MyCreditSection;
