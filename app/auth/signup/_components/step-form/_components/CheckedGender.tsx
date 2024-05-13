import { CardContent } from '@/components/ui/card';
import { UseFormRegister } from 'react-hook-form';
import { InputValueType } from '../StepFourForm';
import Text from '@/components/ui/Text';

type CheckedGenderProps = {
  register: UseFormRegister<InputValueType>;
};

const genderChoiceBtnClass =
  'w-40 cursor-pointer rounded-md border border-black py-5 text-center transition duration-200 hover:bg-gray-400';

const CheckedGender = ({ register }: CheckedGenderProps) => {
  return (
    <>
      <Text sizes='20'>성별을 선택해주세요.</Text>
      <CardContent justifyContent='center' className='w-full gap-x-4'>
        <input
          {...register('gender', { required: true })}
          type='radio'
          className='peer/male hidden'
          id='male'
          value='male'
        />
        <label
          htmlFor='male'
          className={`${genderChoiceBtnClass} peer-checked/male:bg-black peer-checked/male:text-white`}
        >
          남성
        </label>
        <input
          {...register('gender', { required: true })}
          type='radio'
          id='female'
          value='female'
          className='peer/female hidden'
        />
        <label
          htmlFor='female'
          className={`${genderChoiceBtnClass} peer-checked/female:bg-black peer-checked/female:text-white`}
        >
          여성
        </label>
      </CardContent>
    </>
  );
};

export default CheckedGender;
