'use client';
import { useCallback } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import FlexBox from '@/components/ui/FlexBox';
import Text from '@/components/ui/Text';
import Icon from '@/components/Icon';
import BarChart from '@/components/BarChart';
import {
  BarChartDataset,
  generateChartData,
  increaseMyAssetOptions
} from '@/shared/utils/graph-config';
import { useWindowResize } from '@/shared/hooks/useWindowResize';
const IncreaseMyAssetCard = () => {
  const { windowWidth } = useWindowResize();

  const calculateBarThickness = useCallback(() => {
    const baseWidth = 375;
    const baseThickness = 61.75;
    return (windowWidth / baseWidth) * baseThickness;
  }, [windowWidth]);

  const labels = ['1월', '2월', '3월', '오늘'];
  const dataSets: BarChartDataset[] = [
    {
      data: [65, 25, 10, 30],
      backgroundColor: ['#e4e9ef', '#e4e9ef', '#e4e9ef', '#ff7822'],
      borderWidth: 0,
      borderRadius: 15,
      borderSkipped: false,
      maxBarThickness: 80,
      barThickness: calculateBarThickness()
    }
  ];
  return (
    <Card className='h-[23rem] w-full shrink-0'>
      <CardContent flexDirection='col' className='gap-y-16 p-24'>
        <FlexBox flexDirection='col'>
          <Text weight='500' sizes='16' className='text-gray-500'>
            지난달 보다 자산이 증가했어요
          </Text>
          <FlexBox alignItems='center' className='gap-x-1'>
            <Text weight='700' sizes='18'>
              300,000원
            </Text>
            <Icon
              src='/icons/system-icon/arrow/bxs-up-arrow.svg'
              alt='자산 증가 화살표'
              size='16'
            />
          </FlexBox>
        </FlexBox>
        <div className='h-[11.4rem] w-full px-[0.8rem]'>
          <div>
            <BarChart
              dataConfig={generateChartData(labels, dataSets)}
              options={increaseMyAssetOptions}
            />
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default IncreaseMyAssetCard;
