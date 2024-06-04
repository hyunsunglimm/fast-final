import Text from '@/components/ui/Text';
import CustomNavigationCard from './CustomNavigationCard';
import { FINANCIAL_PRODUCT_NAVIGATION } from '@/utils/financial-product/staticData';
import FlexBox from '@/components/ui/FlexBox';

const CustomNavigationSection = () => {
  return (
    <section className='mb-40'>
      <Text sizes='20' variant='h1' weight='700' className='mb-20'>
        맞춤탐색
      </Text>
      <FlexBox className='hide-scrollbar gap-20 overflow-x-scroll'>
        {FINANCIAL_PRODUCT_NAVIGATION.map((info) => (
          <CustomNavigationCard key={info.title} recommendationInfo={info} />
        ))}
      </FlexBox>
    </section>
  );
};

export default CustomNavigationSection;
