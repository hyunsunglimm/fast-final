import { CardContent } from '@/components/ui/card';
import Input from '@/components/ui/Input';
import FlexBox from '@/components/ui/FlexBox';
import Text from '@/components/ui/Text';

export const StepTwoForm = () => {
  return (
    <>
      <CardContent flexDirection='col' className='mt-32 space-y-12'>
        <FlexBox className='w-full gap-8' flexDirection='col'>
          <Input placeholder='이름을 알려주세요' id='name' />
          <Text sizes='12'>메시지</Text>
        </FlexBox>
        <FlexBox className='w-full gap-8' flexDirection='col'>
          <Input placeholder='휴대폰 번호를 알려주세요' id='phoneNumber' />
          <Text sizes='12'>메시지</Text>
        </FlexBox>
      </CardContent>
    </>
  );
};
