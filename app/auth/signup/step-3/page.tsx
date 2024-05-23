'use client';
import { useState } from 'react';
import { useFormContext } from 'react-hook-form';
import { SignupInputsValues } from '../_components/signupSchema';
import { useRouter } from 'next/navigation';
import { FormControl, FormField, FormItem, FormMessage } from '@/components/ui/form';
import CheckedGender from '../_components/CheckedGender';
import DaumAddress from '../_components/DaumAddress';
import Icon from '@/components/Icon';
import Input from '@/components/ui/Input';
import { CardContent } from '@/components/ui/card';
import FlexBox from '@/components/ui/FlexBox';
import SignupHeader from '../_components/SignupHeader';
import Text from '@/components/ui/Text';
import Button from '@/components/ui/Button';

const StepThreePage = () => {
  const [visiblePostDaum, setVisiblePostDaum] = useState(false);
  const router = useRouter();
  const {
    watch,
    setValue,
    control,
    trigger,
    formState: { errors }
  } = useFormContext<SignupInputsValues>();

  const onClickNext = async () => {
    const isEmailValid = await trigger('address.roadName', { shouldFocus: true });
    const isPasswordValid = await trigger('address.detail', { shouldFocus: true });
    const isGenderChecked = await trigger('gender', { shouldFocus: true });
    if (isEmailValid && isPasswordValid && isGenderChecked) {
      router.push('/auth/signup/step-3');
    }
  };

  return (
    <>
      {visiblePostDaum && (
        <DaumAddress setVisiblePostDaum={setVisiblePostDaum} setValue={setValue} />
      )}
      <SignupHeader onClick={() => router.push('/auth/signup/step-2')} />
      <FlexBox className='space-y-2' flexDirection='col'>
        <Text variant='h2' sizes='20' weight='700'>
          회원가입을 위해
          <br /> 정보를 입력해주세요
        </Text>
        <Text className='text-gray-500' sizes='18' weight='500'>
          <span className='text-primary'>3</span> / 3
        </Text>
      </FlexBox>
      <CardContent flexDirection='col' className='mt-32 w-full space-y-12'>
        <FormField
          control={control}
          name='address.roadName'
          render={({ field }) => {
            return (
              <FormItem className='relative w-full'>
                <FormControl>
                  <>
                    <Input
                      placeholder='주소 검색하기'
                      id='address.roadName'
                      inputMode='text'
                      {...field}
                      validation={errors.address?.detail ? 'error' : 'success'}
                    />
                    <Icon
                      src='/icons/system-icon/search.svg'
                      alt='검색 돋보기 아이콘'
                      className='absolute bottom-0 right-0 top-0 my-auto cursor-pointer'
                      placeholder='empty'
                      onClick={() => setVisiblePostDaum(true)}
                    />
                  </>
                </FormControl>
                <FormMessage className='text-12 font-400 text-warning' />
              </FormItem>
            );
          }}
        />

        <FormField
          control={control}
          name='address.detail'
          render={({ field }) => {
            return (
              <FormItem className='w-full'>
                <FormControl>
                  <Input
                    placeholder='상세주소를 입력해주세요'
                    id='address.detail'
                    inputMode='text'
                    {...field}
                    validation={errors.address?.detail ? 'error' : 'success'}
                  />
                </FormControl>
                <FormMessage className='text-12 font-400 text-warning' />
              </FormItem>
            );
          }}
        />
        <CheckedGender />
      </CardContent>
      <div className='absolute bottom-[3rem] left-0 right-0 mx-auto w-full px-20 pb-32 pt-24 xs:w-[520px]'>
        <Button type='button' className='w-full' onClick={onClickNext}>
          다음
        </Button>
      </div>
    </>
  );
};

export default StepThreePage;
