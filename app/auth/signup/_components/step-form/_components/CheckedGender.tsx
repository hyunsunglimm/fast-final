import FlexBox from '@/components/ui/FlexBox';
import { UseFormRegister } from 'react-hook-form';
import { InputValueType } from '../StepFourForm';
import Text from '@/components/ui/Text';
import { buttonVariants } from '@/components/ui/Button';
type CheckedGenderProps = {
  register: UseFormRegister<InputValueType>;
};

const genderChoiceBtnClass =
  'w-full h-[5.6rem] flex items-center justify-center cursor-pointer rounded-md border border-black text-center transition duration-200 hover:bg-gray-400';

const CheckedGender = ({ register }: CheckedGenderProps) => {
  return (
    <>
      <Text sizes='16' weight='600' className='mb-4'>
        성별을 선택해주세요.
      </Text>
      <FlexBox justifyContent='center' className='w-full gap-x-4'>
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
          <Text sizes='14' weight='600'>
            남성
          </Text>
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
          <Text sizes='14' weight='600'>
            여성
          </Text>
        </label>
      </FlexBox>
    </>
  );
};

export default CheckedGender;
