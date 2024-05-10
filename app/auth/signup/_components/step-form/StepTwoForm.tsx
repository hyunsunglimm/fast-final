import Button from '@/components/ui/Button';
import { CardContent } from '@/components/ui/card';
import React from 'react';

export const StepTwoForm = () => {
  return (
    <CardContent flexDirection='col'>
      <form>
        <label htmlFor='name'>이름을 알려주세요</label>
        <div>
          <input type='text' id='name' />
        </div>
      </form>
      <form className='flex flex-col'>
        <label htmlFor='email'>이메일을 알려주세요</label>
        <input type='text' id='email' />
        <label htmlFor='phone'>휴대폰 번호를 알려주세요</label>
        <input type='text' id='phone' />
      </form>
      <Button>다음</Button>
    </CardContent>
  );
};
