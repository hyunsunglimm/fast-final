import Text from '@/components/ui/Text';
import { CardContent } from '@/components/ui/card';
import Certification from '../Certification';

export const StepThreeForm = () => {
  return (
    <CardContent flexDirection='col'>
      <Text sizes='title20' variant='p'>
        문자로 받은
        <br /> 인증번호 6자리를 입력해주세요
      </Text>
      <Text sizes='body16'>남은 시간 03:00</Text>
      <Certification />
    </CardContent>
  );
};
