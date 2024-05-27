/* eslint-disable react-hooks/exhaustive-deps */
'use client';
import { useEffect, useState } from 'react';
import AuthHeader from '../../_components/AuthHeader';
import CheckedGender from '../_components/CheckedGender';
import DaumAddress from '../_components/DaumAddress';
import Icon from '@/components/Icon';
import Input from '@/components/ui/Input';
import ClearInputValueIcon from '../../_components/ClearInputValueIcon';
import Button from '@/components/ui/Button';
import { useFormContext } from 'react-hook-form';
import { SignupInputsValues } from '../../schema/signupSchema';
import { useRouter } from 'next/navigation';
import { FormControl, FormField, FormItem, FormMessage } from '@/components/ui/form';
import { CardContent } from '@/components/ui/card';

const StepThreePage = () => {
  const [visiblePostDaum, setVisiblePostDaum] = useState(false);

  const router = useRouter();
  const {
    watch,
    register,
    clearErrors,
    setValue,
    control,
    trigger,
    getValues,
    formState: { errors }
  } = useFormContext<SignupInputsValues>();

  const onClickNext = async () => {
    const isRoadNameAdress = await trigger('address.roadName', { shouldFocus: true });
    const isDetailAdress = await trigger('address.detail', { shouldFocus: true });
    const isGenderChecked = await trigger('gender');

    if (isRoadNameAdress && isDetailAdress && isGenderChecked) {
      router.push('/auth/signup/step-4');
    }
  };

  useEffect(() => {
    if (watch('address.roadName')) {
      clearErrors('address.roadName');
    }
  }, [visiblePostDaum]);

  return (
    <>
      {/* 다음 주소 창 */}
      {visiblePostDaum && (
        <DaumAddress setVisiblePostDaum={setVisiblePostDaum} setValue={setValue} />
      )}

      {/* 헤더 */}
      <AuthHeader title='회원가입' pushPath='/auth/signup/step-2' currentStep='3' />

      <CardContent flexDirection='col' className='mt-32 w-full space-y-20'>
        {/* 주소 검색하기 */}
        <FormField
          control={control}
          name='address.roadName'
          render={({ field }) => {
            return (
              <FormItem className='relative w-full'>
                <FormControl>
                  <>
                    <Input
                      className='pr-[6rem]'
                      placeholder='주소 검색하기'
                      id='address.roadName'
                      inputMode='text'
                      {...field}
                      validation={
                        errors.address?.roadName && !watch('address.roadName') ? 'error' : 'success'
                      }
                    />
                    <ClearInputValueIcon
                      rightMargin
                      show={Boolean(getValues('address.roadName'))}
                      onClick={() => setValue('address.roadName', '')}
                    />
                    <Icon
                      size='20'
                      src='/icons/system-icon/search-2.svg'
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
        {/* 상세 주소 */}
        {watch('address.roadName') && (
          <FormField
            control={control}
            name='address.detail'
            render={({ field }) => {
              return (
                <FormItem className='relative w-full'>
                  <FormControl>
                    <>
                      <Input
                        placeholder='상세주소를 입력해주세요'
                        id='address.detail'
                        inputMode='text'
                        {...field}
                        validation={errors.address?.detail ? 'error' : 'success'}
                      />
                      <ClearInputValueIcon
                        show={Boolean(getValues('address.detail'))}
                        onClick={() => setValue('address.detail', '')}
                      />
                    </>
                  </FormControl>
                  <FormMessage className='text-12 font-400 text-warning' />
                </FormItem>
              );
            }}
          />
        )}

        {/* 성별 선택 */}
        <CheckedGender register={register} errors={errors} />
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
