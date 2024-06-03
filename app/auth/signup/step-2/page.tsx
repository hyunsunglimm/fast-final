'use client';
import dynamic from 'next/dynamic';
import Input from '@/components/ui/Input';
import Button from '@/components/ui/Button';
import AuthHeader from '../../_components/AuthHeader';
import { useFormContext } from 'react-hook-form';
import { useRouter } from 'next/navigation';
import { FormControl, FormField, FormItem, FormMessage } from '@/components/ui/form';
import { CardContent } from '@/components/ui/card';
import { SignupInputsValues } from '../../schema/signupSchema';
import { useSignupStore } from '@/store/signup';
const ClearInputValueIcon = dynamic(() => import('../../_components/ClearInputValueIcon'), {
  ssr: false
});

const StepTwoPage = () => {
  const router = useRouter();
  const {
    getValues,
    control,
    trigger,
    formState: { errors },
    setValue
  } = useFormContext<SignupInputsValues>();

  const { setStorage } = useSignupStore();

  const onClickNext = async () => {
    const isEmailValid = await trigger('name', { shouldFocus: true });
    const isPasswordValid = await trigger('phoneNumber', { shouldFocus: true });
    if (isEmailValid && isPasswordValid) {
      setStorage('name', getValues('name'));
      setStorage('phoneNumber', getValues('phoneNumber'));
      router.push('/auth/signup/step-3');
    }
  };

  return (
    <>
      <AuthHeader title='회원가입' pushPath='/auth/signup' currentStep='2' />

      <CardContent flexDirection='col' className='mt-32 w-full space-y-20'>
        <FormField
          control={control}
          name='name'
          render={({ field }) => {
            return (
              <FormItem className='relative w-full'>
                <FormControl>
                  <>
                    <Input
                      placeholder='이름을 알려주세요'
                      id='name'
                      inputMode='text'
                      {...field}
                      validation={errors.name ? 'error' : 'success'}
                    />
                    <ClearInputValueIcon
                      show={Boolean(getValues('name'))}
                      onClick={() => setValue('name', '')}
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
          name='phoneNumber'
          render={({ field }) => {
            return (
              <FormItem className='relative w-full'>
                <FormControl>
                  <>
                    <Input
                      placeholder='휴대폰 번호를 알려주세요'
                      id='phoneNumber'
                      inputMode='numeric'
                      type='text'
                      {...field}
                      validation={errors.phoneNumber ? 'error' : 'success'}
                    />
                    <ClearInputValueIcon
                      show={Boolean(getValues('phoneNumber'))}
                      onClick={() => setValue('phoneNumber', '')}
                    />
                  </>
                </FormControl>
                <FormMessage className='text-12 font-400 text-warning' />
              </FormItem>
            );
          }}
        />
      </CardContent>
      <div className='absolute bottom-[3rem] left-0 right-0 mx-auto w-full px-20 pb-32 pt-24 xs:w-[520px]'>
        <Button
          type='button'
          className='w-full'
          onClick={onClickNext}
          disabled={!(getValues('name') && getValues('phoneNumber'))}
        >
          다음
        </Button>
      </div>
    </>
  );
};

export default StepTwoPage;
