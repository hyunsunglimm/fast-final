import Button from '@/components/ui/Button';
import FlexBox from '@/components/ui/FlexBox';
import React, { useState } from 'react';
import DaumAddress from './_components/DaumAddress';
import Text from '@/components/ui/Text';
import CheckedGender from './_components/CheckedGender';
import { SubmitHandler, useForm } from 'react-hook-form';
import Input from '@/components/ui/Input';
import SearchIcon from '@/components/icons/SearchIcon';
export type InputValueType = {
  address: string;
  detailAdress?: string;
  gender: string;
};

type StepFourFormProps = {
  nextStep: () => void;
};

export const StepFourForm = ({ nextStep }: StepFourFormProps) => {
  const {
    register,
    handleSubmit,
    formState: { isValid },
    setValue,
    getValues
  } = useForm<InputValueType>({
    defaultValues: {},
    mode: 'onChange'
  });
  const [visiblePostDaum, setVisiblePostDaum] = useState(false);
  const addressFieldValues = getValues('address');

  const nextStepSubmit: SubmitHandler<InputValueType> = (data) => {
    nextStep();
  };

  return (
    <FlexBox flexDirection='col' className='relative h-screen w-full'>
      {visiblePostDaum && (
        <DaumAddress setValue={setValue} setVisiblePostDaum={setVisiblePostDaum} />
      )}
      <label htmlFor='address' className='mb-4'>
        <Text sizes='16' weight='600'>
          {addressFieldValues ? '상세 주소를 입력해주세요.' : '주소를 입력해주세요.'}
        </Text>
      </label>
      <FlexBox
        flexDirection='col'
        alignItems='center'
        className='mb-32 w-full rounded-sm border border-black bg-white'
      >
        <FlexBox className='w-full' alignItems='center'>
          <Input
            {...register('address', { required: true })}
            placeholder='주소를 입력해주세요.'
            aria-label='주소를 입력해주세요.'
            type='text'
            id='address'
            borderType='none'
            className='h-[5.6rem] w-full flex-grow text-14 placeholder:text-14'
            defaultValue={addressFieldValues || ''}
          />
          <FlexBox className='w-[4rem]' alignItems='center' justifyContent='center'>
            <SearchIcon
              className='cursor-pointer'
              onClick={() => setVisiblePostDaum((prev) => !prev)}
            />
          </FlexBox>
        </FlexBox>
        {Boolean(addressFieldValues) && (
          <>
            <div className='h-[1px] w-full bg-black' />
            <Input
              {...register('detailAdress')}
              placeholder='상세주소를 입력해주세요.'
              borderType='none'
              type='text'
              id='detailAdress'
              className='h-[5.6rem] w-full text-14 placeholder:text-14'
            />
          </>
        )}
      </FlexBox>

      <CheckedGender register={register} />
      <FlexBox className='w-full gap-x-4'>
        <Button type='button' className='disabled:cursor-not-allowed disabled:bg-gray-300'>
          이전
        </Button>
        <Button
          type='button'
          disabled={!isValid}
          className='w-[21rem] shrink-0 disabled:cursor-not-allowed disabled:bg-gray-300'
        >
          다음
        </Button>
      </FlexBox>
    </FlexBox>
  );
};
