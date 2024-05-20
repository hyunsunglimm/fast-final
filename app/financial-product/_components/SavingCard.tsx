import HeartIcon from '@/components/icons/financial-product/HeartIcon';
import SpeakerIcon from '@/components/icons/financial-product/SpeakerIcon';
import Text from '@/components/ui/Text';
import { Card } from '@/components/ui/card';
import React from 'react';

type SavingCardProps = {
  saving: {
    bank: string;
    title: string;
    description: string;
    rate: string;
    startAmount: string;
    endAmount: number;
  };
};

const SavingCard = ({ saving }: SavingCardProps) => {
  const { bank, title, description, rate, startAmount, endAmount } = saving;

  return (
    <Card className='flex flex-col gap-[1.6rem] p-24'>
      <div className='flex items-center justify-between'>
        <div className='flex gap-[0.4rem]'>
          <div className='h-[1.6rem] w-[1.6rem] rounded-full bg-primary' />
          <Text sizes='12' className='text-gray-600'>
            {bank}
          </Text>
        </div>
        <HeartIcon />
      </div>

      <div className='flex justify-between'>
        <div>
          <Text variant='p' sizes='16' weight='700'>
            {title}
          </Text>
          <Text variant='p' className='text-gray-700'>
            {description}
          </Text>
        </div>
        <div>
          <div className='flex items-center'>
            <Text
              sizes='10'
              weight='500'
              className='mr-[0.4rem] rounded-[10rem] bg-gray-10 px-[0.6rem] py-[0.2rem]'
            >
              최고
            </Text>
            <Text weight='700'>{rate}</Text>
          </div>
        </div>
      </div>

      <div className='flex items-center gap-[0.8rem] rounded-xs bg-[#FAF7F6] px-12 py-[0.8rem]'>
        <SpeakerIcon />
        <Text>
          {startAmount}으로 시작하면{' '}
          <Text className='text-primary'>{endAmount.toLocaleString()}원!</Text>
        </Text>
      </div>
    </Card>
  );
};

export default SavingCard;
