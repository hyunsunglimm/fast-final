import Button from '@/components/ui/Button';
import { CardContent } from '@/components/ui/card';

export const StepOneForm = () => {
  return (
    <CardContent flexDirection='col'>
      <form>
        <label htmlFor='id'>아이디를 입력해주세요</label>
        <div>
          <input type='text' id='id' />
          <Button size='sm'>중복확인</Button>
        </div>
      </form>
      <form className='flex flex-col'>
        <label htmlFor='password'>비밀번호를 입력해주세요</label>
        <input type='password' id='password' autoComplete='off' />
        <label htmlFor='confirmPassword'>비비밀번호를 한번 더 입력해주세요</label>
        <input type='password' id='confirmPassword' autoComplete='off' />
      </form>
      <Button>다음</Button>
    </CardContent>
  );
};
