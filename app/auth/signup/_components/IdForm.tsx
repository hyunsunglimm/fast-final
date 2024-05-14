import Button from '@/components/ui/Button';
import Input from '@/components/ui/Input';
import Text from '@/components/ui/Text';
import React from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';

type FormFields = {
  id: string;
};

const IdForm = () => {
  const {
    register,
    handleSubmit,
    setError,
    formState: {
      errors: idErrors,
      isSubmitting: idIsSubmitting,
      isSubmitSuccessful: isIdSubmitSuccessful
    }
  } = useForm<FormFields>();

  const idRegex = /^[a-zA-Z0-9]+$/;

  const idChecker: SubmitHandler<FormFields> = async (data) => {
    try {
      await new Promise((resolve) => setTimeout(resolve, 1000));
      // throw new Error();
    } catch (error) {
      setError('id', {
        message: '이미 사용중인 아이디 입니다.'
      });
    }
  };

  return (
    <form
      className='mb-[3.7rem] flex w-full flex-col gap-[3.7rem]'
      onSubmit={handleSubmit(idChecker)}
    >
      <div className='flex flex-col gap-[1.4rem]'>
        <label htmlFor='id'>
          <Text sizes='20'>아이디를 입력해주세요</Text>
        </label>
        <Input
          {...register('id', {
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
      <Button active={idIsSubmitting ? 'no' : 'yes'} disabled={idIsSubmitting} size='sm'>
        {idIsSubmitting ? '중복확인 중...' : '중복확인'}
      </Button>
    </form>
  );
};

export default IdForm;
