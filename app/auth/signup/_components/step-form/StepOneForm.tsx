'use client';

import { CardContent } from '@/components/ui/card';
import IdInput from '../IdInput';
import PwInput from '../PwInput';
import { FormProvider, SubmitHandler, useForm } from 'react-hook-form';
import Button from '@/components/ui/Button';

export type StepOneFormFieldsKey = 'id' | 'password' | 'reconfirmPw';

export type StepOneFormFields = {
  id: string;
  password: string;
  reconfirmPw: string;
};

export const StepOneForm = () => {
  const methods = useForm<StepOneFormFields>();

  const { setError, handleSubmit } = methods;

  const nextStepSubmit: SubmitHandler<StepOneFormFields> = async (data) => {
    try {
      await new Promise((resolve) => setTimeout(resolve, 1000));
      console.log(data);
      // 데이터 세션 저장 -> 다음 스탭으로
    } catch (error) {
      setError('root', {
        message: '서버 에러'
      });
    }
  };

  return (
    <CardContent flexDirection='col' className=''>
      <FormProvider {...methods}>
        <form className='w-full' onSubmit={handleSubmit(nextStepSubmit)}>
          <IdInput />
          <PwInput />
          <div className='flex justify-between'>
            <Button styled='outline' type='button' size='signup_prev' rounded='xl'>
              이전
            </Button>
            <Button size='signup_next' styled='outline' rounded='xl'>
              다음
            </Button>
          </div>
        </form>
      </FormProvider>
    </CardContent>
  );
};
