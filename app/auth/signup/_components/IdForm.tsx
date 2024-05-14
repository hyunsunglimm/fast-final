import Button from '@/components/ui/Button';
import Input from '@/components/ui/Input';
import Text from '@/components/ui/Text';
import React from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { EnteredValues, SetEnteredValues } from './step-form';

type FormFields = {
  id: string;
};

type IdFormProps = {
  enteredValues: EnteredValues;
  setEnteredValues: (value: EnteredValues | SetEnteredValues) => void;
};

const IdForm = ({ enteredValues, setEnteredValues }: IdFormProps) => {
  const {
    register,
    handleSubmit,
    setError,
    formState: { errors, isSubmitting, isSubmitSuccessful, isValid }
  } = useForm<FormFields>();

  const idRegex = /^[a-zA-Z0-9]+$/;

  const isIdRevalidation =
    isSubmitSuccessful && enteredValues.enteredId !== enteredValues.checkedId;

  const idChecker: SubmitHandler<FormFields> = async (data) => {
    try {
      await new Promise((resolve) => setTimeout(resolve, 1000));
      setEnteredValues((prev) => ({ ...prev, checkedId: data.id }));
      // throw new Error();
    } catch (error) {
      setError('id', {
        message: '이미 사용중인 아이디 입니다.'
      });
    }
  };

  return (
    <form className='relative mb-[3.7rem] flex w-full flex-col' onSubmit={handleSubmit(idChecker)}>
      <label htmlFor='id' className='mb-[1.5rem]'>
        <Text sizes='20' className='ml-[0.7rem]'>
          아이디를 입력해주세요
        </Text>
      </label>
      <div className='relative mb-[0.5rem]'>
        <Input
          className='text-18 placeholder:text-12 rounded-[1.5rem]'
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
            },
            onChange: (e) => setEnteredValues((prev) => ({ ...prev, enteredId: e.target.value }))
          })}
          type='text'
          id='id'
          placeholder='6자 이상의 영문 혹은 영문과 숫자를 조합'
        />
        <Button
          size='sm'
          styled={isSubmitting ? 'disabled' : 'fill'}
          rounded='lg'
          disabled={isSubmitting}
          className='absolute right-[1.3rem] top-[1.2rem]'
        >
          {isSubmitting ? '중복확인 중...' : '중복확인'}
        </Button>
      </div>
      {isSubmitSuccessful && !isIdRevalidation && (
        <Text sizes='12' className='absolute bottom-[-1.8rem] left-[0.9rem]'>
          사용 가능한 아이디입니다.
        </Text>
      )}
      {errors.id && (
        <Text sizes='12' className='absolute bottom-[-1.8rem] left-[0.9rem] text-red-500'>
          {errors.id.message}
        </Text>
      )}
      {isIdRevalidation && isValid && (
        <Text sizes='12' className='absolute bottom-[-1.8rem] left-[0.9rem] text-red-500'>
          중복확인을 다시 해주세요
        </Text>
      )}
    </form>
  );
};

export default IdForm;
