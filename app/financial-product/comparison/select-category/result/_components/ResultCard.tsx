import FlexBox from '@/components/ui/FlexBox';
import Text from '@/components/ui/Text';
import { Card } from '@/components/ui/card';
import Image from 'next/image';

type ResultCardProps = {
  cardInfo: { title: string; imgPath: string; categories: string; benefits: string[] };
};

const ResultCard = ({ cardInfo: { title, imgPath, categories, benefits } }: ResultCardProps) => {
  return (
    <Card className='flex w-full border border-gray-100 p-16'>
      <Image
        src={imgPath}
        alt={title === '카드 A' ? '카드 A 이미지' : '카드 B 이미지'}
        width={200}
        height={82}
        className='mr-16 w-[5.3rem]'
      />
      <FlexBox flexDirection='col'>
        <Text
          weight='700'
          className={`mb-[1rem] ${title === '카드 A' ? 'text-active' : 'text-warning'}`}
        >
          {title}
        </Text>
        <Text className='mb-[0.6rem]'>{categories}</Text>
        <FlexBox className='gap-6'>
          {benefits.map((benefit) => {
            return (
              <Text
                key={benefit}
                sizes='12'
                weight='700'
                className='rounded-[0.6rem] bg-gray-50 px-[0.8rem] py-[0.4rem]'
              >
                {benefit}
              </Text>
            );
          })}
        </FlexBox>
      </FlexBox>
    </Card>
  );
};

export default ResultCard;
