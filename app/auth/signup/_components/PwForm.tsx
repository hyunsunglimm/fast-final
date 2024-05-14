import Button from '@/components/ui/Button';
import Text from '@/components/ui/Text';
import React from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';

type FormFields = {
  password: string;
  reconfirmPassword: string;
};

const PwForm = () => {
  const {
    register,
    handleSubmit,
    setError,
    formState: { errors, isSubmitting }
  } = useForm<FormFields>();

  const nextStepSubmit: SubmitHandler<FormFields> = async (data) => {
    try {
      await new Promise((resolve) => setTimeout(resolve, 1000));
    } catch (error) {
      setError('root', {
        message: '서버 에러'
      });
    }
  };

  return (
    <form className='flex w-full flex-col gap-[3.7rem]' onSubmit={handleSubmit(nextStepSubmit)}>
      <div className='flex flex-col gap-[1.4rem]'>
        <label htmlFor='password'>
          <Text sizes='20'>비밀번호를 입력해주세요</Text>
        </label>
        <input
          {...register('password', { required: true })}
          type='password'
          id='password'
          autoComplete='off'
          placeholder='영문, 숫자, 특수문자를 포함하여 8자 이상'
        />
        {errors.password && <div className='text-red-500'>{errors.password.message}</div>}
      </div>
      <div className='flex flex-col gap-[1.4rem]'>
        <label htmlFor='confirmPassword'>
          <Text sizes='20'>비밀번호를 한번 더 입력해주세요</Text>
        </label>
        <input
          {...register('reconfirmPassword', { required: true })}
          type='password'
          id='confirmPassword'
          autoComplete='off'
          placeholder='비밀번호를 확인해주세요'
        />
        {errors.reconfirmPassword && (
          <div className='text-red-500'>{errors.reconfirmPassword.message}</div>
        )}
      </div>
      {errors.root && <div className='text-red-500'>{errors.root.message}</div>}
      <Button disabled={isSubmitting}>{isSubmitting ? '제출중...' : '다음'}</Button>
    </form>
  );
};

export default PwForm;
