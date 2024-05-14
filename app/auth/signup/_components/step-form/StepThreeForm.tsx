import Text from '@/components/ui/Text';
import Button from '@/components/ui/Button';
import { CardContent } from '@/components/ui/card';

export const StepThreeForm = () => {
  return (
    <CardContent flexDirection='col'>
      <form className='w-full'>
        <label htmlFor='name'>
          <Text variant='p' sizes='20'>
            휴대폰 번호를 알려주세요
          </Text>
        </label>
        <input type='text' id='name' placeholder='- 제외 11자리' />
        <Button>인증번호 요청</Button>
        <label htmlFor='email'>
          <Text variant='p' sizes='20'>
            인증번호 6자리를 입력해주세요
          </Text>
        </label>
        <input type='text' id='email' placeholder='인증번호 6자리' />
        <Button>인증번호 재요청</Button>
        <Button>다음</Button>
      </form>
    </CardContent>
  );
};
