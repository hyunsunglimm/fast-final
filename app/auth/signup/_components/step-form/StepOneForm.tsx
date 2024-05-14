'use client';

import Button from '@/components/ui/Button';
import { CardContent } from '@/components/ui/card';
import { SubmitHandler, useForm } from 'react-hook-form';

type FormFields = {
  id: string;
  password: string;
  reconfirmPassword: string;
};

export const StepOneForm = () => {
  const {
    register,
    handleSubmit,
    setError,
    formState: { errors, isSubmitting }
  } = useForm<FormFields>();

  const onSubmit: SubmitHandler<FormFields> = async (data) => {
    try {
      await new Promise((resolve) => setTimeout(resolve, 1000));
    } catch (error) {
      setError('root', {
        message: '서버 에러'
      });
    }
  };

  return (
    <CardContent flexDirection='col' onSubmit={handleSubmit(onSubmit)}>
      <form className='flex w-full flex-col'>
        <div className='flex flex-col'>
          <label htmlFor='id'>아이디를 입력해주세요</label>
          <input
            {...register('id', {
              required: '아이디를 입력해주세요',
              validate: (value) => {
                if (!value.includes('@')) {
                  return 'Email must include @';
                }
                return true;
              },
              minLength: {
                value: 6,
                message: '아이디는 6자 이상입니다.'
              }
            })}
            type='text'
            id='id'
            placeholder='6자 이상의 영문 혹은 영문과 숫자를 조합'
          />
          {errors.id && <div className='text-red-500'>{errors.id.message}</div>}
        </div>
        <Button type='button' size='sm'>
          중복확인
        </Button>
        <div className='flex flex-col'>
          <label htmlFor='password'>비밀번호를 입력해주세요</label>
          <input
            {...register('password', { required: true })}
            type='password'
            id='password'
            autoComplete='off'
            placeholder='영문, 숫자, 특수문자를 포함하여 8자 이상'
          />
          {errors.password && <div className='text-red-500'>{errors.password.message}</div>}
        </div>
        <div className='flex flex-col'>
          <label htmlFor='confirmPassword'>비밀번호를 한번 더 입력해주세요</label>
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
        <Button disabled={isSubmitting}>{isSubmitting ? '제출중...' : '다음'}</Button>
        {errors.root && <div className='text-red-500'>{errors.root.message}</div>}
      </form>
    </CardContent>
  );
};
