'use client';
import Button from '@/components/ui/Button';
import { CardContent } from '@/components/ui/card';
import React, { useState } from 'react';
import DaumAddress from './_components/DaumAddress';
import Text from '@/components/ui/Text';
import CheckedGender from './_components/CheckedGender';
import { SubmitHandler, useForm } from 'react-hook-form';

export type InputValueType = {
  address: string;
  detailAdress?: string;
  gender: string;
};

export const StepFourForm = () => {
  const {
    register,
    handleSubmit,
    formState: { isValid },
    setValue,
    getValues
  } = useForm<InputValueType>({ mode: 'onChange' });
  const [visiblePostDaum, setVisiblePostDaum] = useState(false);
  const addressFieldValues = getValues('address');

  const nextStepSubmit: SubmitHandler<InputValueType> = (data) => {};

  return (
    <CardContent flexDirection='col' className='relative h-screen w-full'>
      {visiblePostDaum && (
        <DaumAddress setValue={setValue} setVisiblePostDaum={setVisiblePostDaum} />
      )}
      <form className='w-full' onSubmit={handleSubmit(nextStepSubmit)}>
        <label htmlFor='address'>
          <Text sizes='title20'>주소를 입력해주세요.</Text>
        </label>
        <CardContent className='w-full'>
          <input
            {...register('address', { required: true })}
            placeholder='주소를 입력해주세요.'
            aria-label='주소를 입력해주세요.'
            type='text'
            id='address'
            className='h-10 w-full flex-grow'
            defaultValue={addressFieldValues || ''}
          />
          <Button type='button' onClick={() => setVisiblePostDaum((prev) => !prev)}>
            주소 검색
          </Button>
        </CardContent>
        {Boolean(addressFieldValues) && (
          <>
            <label htmlFor='detailAddress'>
              <Text sizes='title20'>상세 주소를 입력해주세요.</Text>
            </label>
            <input
              {...register('detailAdress')}
              placeholder='상세주소를 입력해주세요.'
              type='text'
              id='detailAdress'
              className='h-10 w-full'
            />
          </>
        )}

        <CheckedGender register={register} />
        <Button
          type='submit'
          disabled={!isValid}
          className='disabled:cursor-not-allowed disabled:bg-gray-300'
        >
          다음
        </Button>
      </form>
    </CardContent>
  );
};
