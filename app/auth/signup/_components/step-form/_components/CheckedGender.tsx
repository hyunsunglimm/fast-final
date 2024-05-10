import { CardContent } from '@/components/ui/card';
import React, { ChangeEvent } from 'react';

type CheckedGenderProps = {
  setStepFourInput: React.Dispatch<
    React.SetStateAction<{
      address: string;
      gender: string;
    }>
  >;
};

const genderChoiceBtnClass =
  'w-40 cursor-pointer rounded-md border border-black py-5 text-center transition duration-200 hover:bg-gray-400';

const CheckedGender = ({ setStepFourInput }: CheckedGenderProps) => {
  const handleGenderChange = (e: ChangeEvent<HTMLInputElement>) => {
    setStepFourInput((prev) => ({ ...prev, gender: e.target.id }));
  };
  return (
    <CardContent justifyContent='center' className='w-full gap-x-4'>
      <input
        type='radio'
        className='peer/male hidden'
        id='male'
        name='gender'
        onChange={handleGenderChange}
      />
      <label
        htmlFor='male'
        className={`${genderChoiceBtnClass} peer-checked/male:bg-black peer-checked/male:text-white`}
      >
        남성
      </label>
      <input
        type='radio'
        id='female'
        className='peer/female hidden'
        name='gender'
        onChange={handleGenderChange}
      />
      <label
        htmlFor='female'
        className={`${genderChoiceBtnClass} peer-checked/female:bg-black peer-checked/female:text-white`}
      >
        여성
      </label>
    </CardContent>
  );
};

export default CheckedGender;
