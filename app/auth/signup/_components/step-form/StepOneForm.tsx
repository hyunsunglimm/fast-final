'use client';

import { CardContent } from '@/components/ui/card';
import IdInput from '../IdInput';
import PwInput from '../PwInput';

import ReconfirmPwInput from '../ReconfirmPwInput';
import SignupNav from '../SignupNav';

export const StepOneForm = () => {
  return (
    <CardContent flexDirection='col' className=''>
      <div className='flex w-full flex-col gap-[3.7rem]'>
        <IdInput />
        <PwInput />
        <ReconfirmPwInput />
        <SignupNav />
      </div>
    </CardContent>
  );
};
