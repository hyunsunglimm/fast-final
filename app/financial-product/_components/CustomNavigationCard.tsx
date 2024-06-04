'use client';

import FlexBox from '@/components/ui/FlexBox';
import Text from '@/components/ui/Text';
import Image from 'next/image';
import Link from 'next/link';

type CustomNavigationCardProps = {
  recommendationInfo: {
    title: string;
    subTitle: string;
    href: string;
    color: string;
  };
};

const CustomNavigationCard = ({
  recommendationInfo: { title, subTitle, href, color }
}: CustomNavigationCardProps) => {
  const imageUrl = href.split('?')[0];

  return (
    <Link
      style={{ backgroundColor: color }}
      href={`/financial-product/${href}`}
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
    </Link>
    // <Card className='w-full shrink-0 p-24'>
    //   <Text variant='h2' sizes='12' weight='700' className='mb-[1rem] text-primary'>
    //     {title}
    //   </Text>
    //   <Text variant='p' sizes='20' weight='600' className='mb-[0.4rem]'>
    //     {subTitle}
    //   </Text>
    //   <Text variant='p' sizes='14' className='text-gray-700'>
    //     {description}
    //   </Text>
    //   <div className='my-[3.6rem] flex justify-center'>
    //     <Image
    //       src={`/images/financial-product/${imageUrl}.webp`}
    //       alt='search products'
    //       width={300}
    //       height={142}
    //       priority
    //       className='pointer-events-none h-[14.2rem] w-auto'
    //     />
    //   </div>
    //   <Button asChild size='md'>
    //     <Link href={`/financial-product/${href}`} aria-label={`${title} 이동`}>
    //       {linkTitle}
    //     </Link>
    //   </Button>
    // </Card>
  );
};

export default CustomNavigationCard;
