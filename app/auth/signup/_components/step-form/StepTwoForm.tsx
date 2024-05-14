import Button from '@/components/ui/Button';
import Text from '@/components/ui/Text';
import { CardContent } from '@/components/ui/card';
import React from 'react';

export const StepTwoForm = () => {
  return (
    <CardContent flexDirection='col'>
      <form className='w-full'>
        <label htmlFor='name'>
          <Text variant='p' sizes='20'>
            이름을 알려주세요
          </Text>
        </label>
        <input type='text' id='name' placeholder='이름' />
        <label htmlFor='email'>
          <Text variant='p' sizes='20'>
            이메일을 알려주세요
          </Text>
        </label>
        <input type='text' id='email' placeholder='이메일' />
        <Button type='button'>중복확인</Button>
        <Button>다음</Button>
      </form>
    </CardContent>
  );
};
