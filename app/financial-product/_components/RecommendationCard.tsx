import Button from '@/components/ui/Button';
import Text from '@/components/ui/Text';
import Card from '@/components/ui/card/Card';

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
      <Text variant='h2' sizes='caption12' className='mb-[9px] text-[#0089EC]'>
        {title}
      </Text>
      <Text variant='p' sizes='title20' className='mb-[4px]'>
        {subTitle}
      </Text>
      <Text variant='p' sizes='caption12' className='mb-[28px] text-[#787878]'>
        {description}
      </Text>
      <div className='mb-[28px] flex h-[142px] items-center justify-center bg-green-300'>
        이미지
      </div>
      <Button>{linkTitle}</Button>
    </Card>
  );
};

export default RecommendationCard;
