import Text from '@/components/ui/Text';
import CustomNavigationCard from './CustomNavigationCard';
import SwiperWrapper from '@/components/SwiperWrapper';
import { FINANCIAL_PRODUCT_NAVIGATION } from '@/shared/utils/financial-product/staticData';

const CustomNavigationSection = () => {
  return (
    <section className='mb-40'>
      <Text sizes='20' variant='h1' weight='700' className='mb-20'>
        맞춤탐색
      </Text>
      <SwiperWrapper dots>
        {FINANCIAL_PRODUCT_NAVIGATION.map((info) => (
          <CustomNavigationCard key={info.title} recommendationInfo={info} />
        ))}
      </SwiperWrapper>
    </section>
  );
};

export default CustomNavigationSection;
