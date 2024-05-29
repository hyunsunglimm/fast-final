import SwiperWrapper from '@/components/SwiperWrapper';
import FlexBox from '@/components/ui/FlexBox';
import Text from '@/components/ui/Text';
import { Card } from '@/components/ui/card';
import Image from 'next/image';

const FinancialProductBanner = () => {
  return (
    <section className='py-20'>
      <SwiperWrapper fraction>
        <Card className='relative flex justify-between p-24'>
          <FlexBox flexDirection='col'>
            <Text sizes='12' className='mb-[0.4rem] text-gray-600'>
              5월 이후 곧 소멸돼요!
            </Text>
            <Text sizes='16' weight='500'>
              사업자 세금 환급금 <br /> 지금 돌려 받으세요!
            </Text>
          </FlexBox>
          <Image
            src='/images/financial-product/pig-mansour.webp'
            alt='돼수르'
            width={1000}
            height={107}
            className='pointer-events-none absolute bottom-0 right-[1.1rem] w-[12.8rem]'
          />
        </Card>
        <Card className='relative flex justify-between p-24'>
          <FlexBox flexDirection='col'>
            <Text sizes='12' className='mb-[0.4rem] text-gray-600'>
              5월 이후 곧 소멸돼요!
            </Text>
            <Text sizes='16' weight='500'>
              사업자 세금 환급금 <br /> 지금 돌려 받으세요!
            </Text>
          </FlexBox>
          <Image
            src='/images/financial-product/pig-mansour.webp'
            alt='돼수르'
            width={1000}
            height={107}
            className='pointer-events-none absolute bottom-0 right-[1.1rem] w-[12.8rem]'
          />
        </Card>
      </SwiperWrapper>
    </section>
  );
};

export default FinancialProductBanner;
