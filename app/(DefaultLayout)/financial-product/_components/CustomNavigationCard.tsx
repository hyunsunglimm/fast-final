'use client';

import FlexBox from '@/components/ui/FlexBox';
import Text from '@/components/ui/Text';
import Image from 'next/image';
import { useRouter } from 'next/navigation';

type CustomNavigationCardProps = {
  recommendationInfo: {
    title: string;
    subTitle: string;
    href: string;
    color: string;
  };
  dragging: boolean;
};

const CustomNavigationCard = ({
  recommendationInfo: { title, subTitle, href, color },
  dragging
}: CustomNavigationCardProps) => {
  const imageUrl = href.split('?')[0];
  const router = useRouter();

  return (
    <div
      style={{ backgroundColor: color }}
      onClick={() => !dragging && router.push(`/financial-product/${href}`)}
      aria-label={`${title} 이동`}
      className='h-[30.9rem] w-[25.1rem] shrink-0 rounded-[2rem] px-24 py-28 text-white'
    >
      <FlexBox flexDirection='col' className='mb-[5.3rem] gap-4'>
        <Text sizes='18' weight='700'>
          {title}
        </Text>
        <Text>{subTitle}</Text>
      </FlexBox>
      <FlexBox justifyContent='center'>
        <Image
          src={`/images/financial-product/${imageUrl}.webp`}
          alt='search products'
          width={300}
          height={142}
          priority
          className='pointer-events-none h-[14.2rem] w-auto'
        />
      </FlexBox>
    </div>
  );
};

export default CustomNavigationCard;
