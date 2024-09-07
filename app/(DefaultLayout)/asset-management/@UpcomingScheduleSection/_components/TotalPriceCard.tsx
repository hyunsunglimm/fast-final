import { Card, CardContent } from '@/components/ui/card';
import FlexBox from '@/components/ui/FlexBox';
import Image from 'next/image';
import Text from '@/components/ui/Text';

const TotalPriceCard = () => {
  return (
    <Card className='my-[2rem] p-[2.4rem]'>
      <CardContent justifyContent='between' alignItems='center' className='w-full p-0'>
        <FlexBox flexDirection='col' className='space-y-2'>
          <FlexBox alignItems='center' className='gap-x-2'>
            <Text weight='500'>이번달 카드값이에요</Text>
            <FlexBox
              justifyContent='center'
              alignItems='center'
              className='h-[1.2rem] w-[1.2rem] rounded-full bg-gray-300 text-10 font-400 text-white'
            >
              ?
            </FlexBox>
          </FlexBox>
          <Text sizes='20' weight='700'>
            150,000원
          </Text>
        </FlexBox>
        <div className='relative h-[5.7rem] w-[6.6rem]'>
          <Image src='/images/asset-page/asset-card.svg' alt='카드 이미지' fill sizes='auto' />
        </div>
      </CardContent>
    </Card>
  );
};

export default TotalPriceCard;
