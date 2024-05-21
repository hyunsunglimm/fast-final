import FlexBox from '@/components/ui/FlexBox';
import Text from '@/components/ui/Text';
import { Card } from '@/components/ui/card';

const FinancialProductBanner = () => {
  return (
    <Card className='relative mb-40 mt-20 flex justify-between p-24'>
      <FlexBox flexDirection='col'>
        <Text sizes='12' className='mb-[0.4rem] text-gray-600'>
          5월 이후 곧 소멸돼요!
        </Text>
        <Text sizes='16' weight='500'>
          사업자 세금 환급금 <br /> 지금 돌려 받으세요!
        </Text>
      </FlexBox>
      <div className='h-[8rem] w-[9.2rem] rounded-xs bg-green-500' />
      <Text sizes='10' className='absolute bottom-[1.2rem] left-[2.4rem]'>
        1 / 3
      </Text>
    </Card>
  );
};

export default FinancialProductBanner;
