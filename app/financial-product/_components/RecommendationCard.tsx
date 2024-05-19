import Button from '@/components/ui/Button';
import Text from '@/components/ui/Text';
import { Card } from '@/components/ui/card/Card';
import Image from 'next/image';
import Link from 'next/link';

type RecommendationInfoProps = {
  recommendationInfo: {
    title: string;
    subTitle: string;
    description: string;
    linkTitle: string;
    href: string;
  };
};

const RecommendationCard = ({
  recommendationInfo: { title, subTitle, description, linkTitle, href }
}: RecommendationInfoProps) => {
  return (
    <Card className='p-24'>
      <Text variant='h2' sizes='12' weight='700' className='mb-[1rem] text-primary'>
        {title}
      </Text>
      <Text variant='p' sizes='20' weight='600' className='mb-[0.4rem]'>
        {subTitle}
      </Text>
      <Text variant='p' sizes='14' className='text-gray-700'>
        {description}
      </Text>
      <div className='my-[3.6rem] flex justify-center'>
        <Image
          src={`/images/${href}.svg`}
          alt='search products'
          width={1000}
          height={0}
          priority
          className='w-[17rem]'
        />
      </div>
      <Link href={`/financial-product/${href}`}>
        <Button size='md'>{linkTitle}</Button>
      </Link>
    </Card>
  );
};

export default RecommendationCard;
