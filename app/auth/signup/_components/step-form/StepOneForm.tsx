import { CardContent } from '@/components/ui/card';
import Input from '@/components/ui/Input';
import FlexBox from '@/components/ui/FlexBox';
import Text from '@/components/ui/Text';

export const StepOneForm = () => {
  return (
    <CardContent flexDirection='col' className='mt-32 space-y-12'>
      <FlexBox className='w-full gap-8' flexDirection='col'>
        <Input placeholder='이메일을 입력해주세요' id='email' />
        <Text sizes='12'>메시지</Text>
      </FlexBox>
      <FlexBox className='w-full gap-8' flexDirection='col'>
        <Input placeholder='비밀번호를 입력해주세요' id='password' />
        <Text sizes='12'>메시지</Text>
      </FlexBox>
      <FlexBox className='w-full gap-8' flexDirection='col'>
        <Input placeholder='비밀번호 재확인' id='confirmPassword' />
        <Text sizes='12'>메시지</Text>
      </FlexBox>
    </CardContent>
  );
};
