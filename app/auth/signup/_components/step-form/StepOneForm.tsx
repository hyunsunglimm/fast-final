'use client';

import Button from '@/components/ui/Button';
import Text from '@/components/ui/Text';
import { CardContent } from '@/components/ui/card';
import { SubmitHandler, useForm } from 'react-hook-form';

type Idtype = {
  id: string;
};

type FormFields = {
  password: string;
  reconfirmPassword: string;
};

export const StepOneForm = () => {
  const {
    register: idRegister,
    handleSubmit: idHandleSubmit,
    setError: setIdError,
    formState: {
      errors: idErrors,
      isSubmitting: idIsSubmitting,
      isSubmitSuccessful: isIdSubmitSuccessful
    }
  } = useForm<Idtype>();

  const {
    register,
    handleSubmit,
    setError,
    formState: { errors, isSubmitting }
  } = useForm<FormFields>();

  const idRegex = /^[a-zA-Z0-9]+$/;

  const pwValidator = () => {};

  const idChecker: SubmitHandler<Idtype> = async (data) => {
    try {
      await new Promise((resolve) => setTimeout(resolve, 1000));
      throw new Error();
    } catch (error) {
      setIdError('id', {
        message: '이미 사용중인 아이디 입니다.'
      });
    }
  };

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
    <CardContent flexDirection='col'>
      <form
        className='mb-[3.7rem] flex w-full flex-col gap-[3.7rem]'
        onSubmit={idHandleSubmit(idChecker)}
      >
        <div className='flex flex-col gap-[1.4rem]'>
          <label htmlFor='id'>
            <Text sizes='20'>아이디를 입력해주세요</Text>
          </label>
          <input
            {...idRegister('id', {
              required: '아이디를 입력해주세요.',
              minLength: {
                value: 6,
                message: '아이디는 6자 이상입니다.'
              },
              maxLength: {
                value: 20,
                message: '아이디는 21자 미만입니다.'
              },
              pattern: {
                value: idRegex,
                message: '영문 혹은 영문과 숫자 조합으로 작성해주세요.'
              }
            })}
            type='text'
            id='id'
            placeholder='6자 이상의 영문 혹은 영문과 숫자를 조합'
          />
          {isIdSubmitSuccessful && <div>사용 가능한 아이디입니다.</div>}
          {idErrors.id && <div className='text-red-500'>{idErrors.id.message}</div>}
        </div>
        <Button disabled={idIsSubmitting} size='sm'>
          {idIsSubmitting ? '중복확인 중...' : '중복확인'}
        </Button>
      </form>

      <form className='flex w-full flex-col gap-[3.7rem]'>
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
    </CardContent>
  );
};
