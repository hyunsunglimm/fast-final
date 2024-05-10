import Button from '@/components/ui/Button';
import Text from '@/components/ui/Text';
import { Card } from '@/components/ui/card/Card';
import Image from 'next/image';

type RecommendationInfoProps = {
  recommendationInfo: {
    title: string;
    subTitle: string;
    description: string;
    linkTitle: string;
  };
};

const RecommendationCard = ({
  recommendationInfo: { title, subTitle, description, linkTitle }
}: RecommendationInfoProps) => {
  return (
    <Card className='p-[2.4rem]'>
      <Text variant='h2' sizes='caption12' className='mb-[0.9rem] text-[#0089EC]'>
        {title}
      </Text>
      <Text variant='p' sizes='title20' className='mb-[0.4rem]'>
        {subTitle}
      </Text>
      <Text variant='p' sizes='caption12' className='mb-[2.8rem] text-[#787878]'>
        {description}
      </Text>
      <div className='mb-[2.8rem] flex justify-center'>
        <div className='relative inset-0 h-[14.2rem] w-[17rem]'>
          <Image src='/images/search-products.png' alt='search products' fill />
        </div>
      </div>
      <Button>{linkTitle}</Button>
    </Card>
  );
};

export default RecommendationCard;
