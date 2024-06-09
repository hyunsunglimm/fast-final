import Icon from '@/components/Icon';
import FlexBox from '@/components/ui/FlexBox';
import Text from '@/components/ui/Text';
import { Card } from '@/components/ui/card';
import { CardResponseType } from '@/shared/types/response/card';
import Image from 'next/image';

type SpotlightCardProps = {
  card: CardResponseType;
  count: number;
};

const SpotlightCard = ({
  card: { name, card_image, discount_limit, annual_fee },
  count
}: SpotlightCardProps) => {
  const isEvent = annual_fee <= 5000;

  return (
    <Card className='flex items-center p-16'>
      <FlexBox flexDirection='col' alignItems='center'>
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
        src={card_image}
        alt={`${name}의 카드 이미지`}
        width={400}
        height={52}
        className='w-[8.2rem] rotate-90'
      />
      <FlexBox flexDirection='col'>
        <Text weight='500' className='mb-[0.2rem]'>
          {name}
        </Text>
        <Text sizes='16' weight='700' className='mb-[1rem]'>
          월 최대 혜택 {discount_limit.toLocaleString()}원
        </Text>
        <Text
          sizes='12'
          className={`rounded-xs px-[0.8rem] py-[0.4rem] ${isEvent ? 'border border-primary bg-[#FAF7F5] text-primary' : 'bg-gray-50'}`}
        >
          {isEvent ? '연회비 이벤트' : `연회비 ${annual_fee.toLocaleString()}원`}
        </Text>
      </FlexBox>
    </Card>
  );
};

export default SpotlightCard;
