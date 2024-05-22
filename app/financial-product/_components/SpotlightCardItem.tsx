import Icon from '@/components/Icon';
import FlexBox from '@/components/ui/FlexBox';
import Text from '@/components/ui/Text';
import { Card } from '@/components/ui/card';
import Image from 'next/image';

type SpotlightCardItemProps = {
  card: {
    title: string;
    annualBenefits: number;
    annualFee: string;
    image: string;
    isEvent: boolean;
  };
  count: number;
};

const SpotlightCardItem = ({
  card: { title, annualBenefits, annualFee, image, isEvent },
  count
}: SpotlightCardItemProps) => {
  return (
    <Card className='flex items-center p-16'>
      <FlexBox flexDirection='col' alignItems='center' className='mr-20'>
        {count === 1 ? (
          <Icon src='/icons/financial-product/gold-crown.svg' alt='gold-crown' size='16' />
        ) : count === 2 ? (
          <Icon src='/icons/financial-product/sliver-crown.svg' alt='sliver-crown' size='16' />
        ) : count === 3 ? (
          <Icon src='/icons/financial-product/bronze-crown.svg' alt='bronze-crown' size='16' />
        ) : (
          <Icon src='/icons/financial-product/empty-crown.svg' alt='empty-crown' size='16' />
        )}
        <Text weight='700' className='mt-[0.2rem]'>
          {count}
        </Text>
      </FlexBox>
      <Image
        src={`/images/${image}.png`}
        alt={title}
        width={1000}
        height={0}
        className='mr-[1.6rem] w-[5.2rem]'
      />
      <FlexBox flexDirection='col'>
        <Text weight='500' className='mb-[0.2rem]'>
          {title}
        </Text>
        <Text sizes='16' weight='700' className='mb-[1rem]'>
          연 혜택 {annualBenefits.toLocaleString()}원
        </Text>
        <Text
          sizes='12'
          className={`rounded-xs px-[0.8rem] py-[0.4rem] ${isEvent ? 'border border-primary bg-[#FAF7F5] text-primary' : 'bg-gray-50'}`}
        >
          {annualFee}
        </Text>
      </FlexBox>
    </Card>
  );
};

export default SpotlightCardItem;
