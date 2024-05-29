import Icon from '@/components/Icon';
import FlexBox from '@/components/ui/FlexBox';
import Text from '@/components/ui/Text';
import { Card } from '@/components/ui/card';
import { benefitCategoryIconPath } from '@/utils/benefitCategoryIconPath';
import Image from 'next/image';

type ComparisonCard = {
  id: string;
  title: string;
  description: string;
  fileName: string;
  benefits: string[];
};

type ComparisonCardProps = {
  isSelected: boolean;
  onSelect: (cardId: string) => void;
  card: ComparisonCard;
};

const ComparisonCard = ({ isSelected, onSelect, card }: ComparisonCardProps) => {
  return (
    <Card
      className={`p-24 ${isSelected && 'relative ring-1 ring-primary'}`}
      onClick={() => onSelect(card.id)}
    >
      <FlexBox>
        <Image
          src={`/images/financial-product/${card.fileName}.webp`}
          alt={card.title}
          width={100}
          height={70}
          className='mr-16 w-[4.4rem]'
        />
        <FlexBox flexDirection='col'>
          <Text sizes='16' weight='600' className='mb-[0.2rem]'>
            {card.title}
          </Text>
          <Text className='mb-[1rem]'>{card.description}</Text>
          <ul className='flex gap-[0.8rem]'>
            {card.benefits.map((benefit) => {
              return (
                <li key={benefit} className='flex items-center gap-[0.2rem]'>
                  <Icon src={benefitCategoryIconPath[benefit]} alt={`${benefit} icon`} size='12' />
                  <Text sizes='12' className='text-gray-600'>
                    {benefit}
                  </Text>
                </li>
              );
            })}
          </ul>
        </FlexBox>
      </FlexBox>
      {isSelected && (
        <Icon
          src='/icons/system-icon/checkbox/round-checkbox-on.svg'
          alt='check icon'
          size='24'
          className='absolute right-[2.4rem] top-1/2 w-[2.4rem] translate-y-[-50%]'
        />
      )}
    </Card>
  );
};

export default ComparisonCard;
