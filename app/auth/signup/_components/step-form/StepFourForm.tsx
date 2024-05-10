'use client';
import Button from '@/components/ui/Button';
import { CardContent } from '@/components/ui/card';
import React, { useState } from 'react';
import DaumAddress from './_components/DaumAddress';
import Text from '@/components/ui/Text';
import CheckedGender from './_components/CheckedGender';

type InputValueType = {
  address: string;
  detailAdress?: string;
  gender: string;
};

export const StepFourForm = () => {
  const [stepFourInput, setStepFourInput] = useState<InputValueType>({
    address: '',
    detailAdress: '',
    gender: ''
  });
  const [visiblePostDaum, setVisiblePostDaum] = useState(false);

  const handlePostDaumVisible = () => {
    setVisiblePostDaum((prev) => !prev);
  };

  return (
    <CardContent flexDirection='col' className='relative h-screen w-full'>
      {visiblePostDaum && (
        <DaumAddress setVisiblePostDaum={setVisiblePostDaum} setStepFourInput={setStepFourInput} />
      )}

      <label htmlFor='address'>
        <Text sizes='title20'>주소를 입력해주세요.</Text>
      </label>
      <CardContent className='w-full'>
        <input
          placeholder='주소를 입력해주세요.'
          aria-label='주소를 입력해주세요.'
          type='text'
          id='address'
          className='h-10 w-full flex-grow'
          defaultValue={stepFourInput.address && stepFourInput.address}
        />
        <Button onClick={handlePostDaumVisible}>주소 검색</Button>
      </CardContent>
      {stepFourInput.address && (
        <>
          <label htmlFor='detailAddress'>
            <Text sizes='title20'>상세 주소를 입력해주세요.</Text>
          </label>
          <input placeholder='선택사항' type='text' id='address' className='h-10 w-full' />
        </>
      )}

      <Text sizes='title20'>성별을 선택해주세요.</Text>
      <CheckedGender setStepFourInput={setStepFourInput} />
      <Button
        disabled={!(!!stepFourInput.address && !!stepFourInput.gender)}
        className='disabled:cursor-not-allowed disabled:bg-gray-300'
      >
        다음
      </Button>
    </CardContent>
  );
};
