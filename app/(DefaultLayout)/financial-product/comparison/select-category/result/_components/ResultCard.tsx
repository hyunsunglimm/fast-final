import FlexBox from '@/components/ui/FlexBox';
import Text from '@/components/ui/Text';
import { Card } from '@/components/ui/card';
import { CardResponseType } from '@/shared/types/response/card';
import { CARD_BENEFIT_CATEGORIES } from '@/shared/utils/financial-product/staticData';
import Image from 'next/image';

type ResultCardProps = {
  cardInfo: CardResponseType;
  index: number;
  standard: string;
};

const ResultCard = ({ cardInfo, index, standard }: ResultCardProps) => {
  const benefitsByStandard = cardInfo.benefits.find((b) => {
    return CARD_BENEFIT_CATEGORIES.find((c) => c.title_en === b.category)?.title_kr === standard;
  });
  return (
    <Card className='flex w-full border border-gray-100 p-16'>
      <Image
        src={cardInfo.image_vertical}
        alt={`${cardInfo.name} 카드 이미지`}
        width={200}
        height={82}
        className='mr-16 w-[5.3rem]'
      />
      <FlexBox flexDirection='col' className='w-[23rem] shrink-0'>
        <Text weight='700' className={`mb-[1rem] ${index === 0 ? 'text-active' : 'text-warning'}`}>
          {cardInfo.name}
        </Text>
        <Text className='mb-[0.6rem]'>{standard}</Text>
        <div className='hide-scrollbar w-full overflow-x-scroll'>
          <ul className='flex gap-6'>
            {benefitsByStandard?.benefitDetails.map((benefit) => {
              return (
                <li
                  key={benefit}
                  className='shrink-0 rounded-[0.6rem] bg-gray-50 px-[0.8rem] py-[0.4rem]'
                >
                  <Text sizes='12' weight='700'>
                    {benefit}
                  </Text>
                </li>
              );
            })}
          </ul>
        </div>
      </FlexBox>
    </Card>
  );
};

export default ResultCard;
