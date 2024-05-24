'use client';
import { useFormContext } from 'react-hook-form';
import { SignupInputsValues } from '../_components/signupSchema';
import { useRouter } from 'next/navigation';
import { FormControl, FormField, FormItem, FormMessage } from '@/components/ui/form';
import Input from '@/components/ui/Input';
import { CardContent } from '@/components/ui/card';
import FlexBox from '@/components/ui/FlexBox';
import SignupHeader from '../_components/SignupHeader';
import Text from '@/components/ui/Text';
import Button from '@/components/ui/Button';

const StepTwoPage = () => {
  const router = useRouter();
  const {
    control,
    trigger,
    formState: { errors }
  } = useFormContext<SignupInputsValues>();

  const onClickNext = async () => {
    const isEmailValid = await trigger('name', { shouldFocus: true });
    const isPasswordValid = await trigger('phoneNumber', { shouldFocus: true });
    if (isEmailValid && isPasswordValid) {
      router.push('/auth/signup/step-3');
    }
  };

  return (
    <>
      <SignupHeader onClick={() => router.push('/auth/signup')} />
      <FlexBox className='space-y-2' flexDirection='col'>
        <Text variant='h2' sizes='20' weight='700'>
          회원가입을 위해
          <br /> 정보를 입력해주세요
        </Text>
        <Text className='text-gray-500' sizes='18' weight='500'>
          <span className='text-primary'>2</span> / 3
        </Text>
      </FlexBox>
      <CardContent flexDirection='col' className='mt-32 w-full space-y-12'>
        <FormField
          control={control}
          name='name'
          render={({ field }) => {
            return (
              <FormItem className='w-full'>
                <FormControl>
                  <Input
                    placeholder='이름을 알려주세요'
                    id='name'
                    inputMode='text'
                    {...field}
                    validation={errors.name ? 'error' : 'success'}
                  />
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
              <FormItem className='w-full'>
                <FormControl>
                  <Input
                    placeholder='휴대폰 번호를 알려주세요'
                    id='phoneNumber'
                    inputMode='numeric'
                    type='text'
                    {...field}
                    validation={errors.phoneNumber ? 'error' : 'success'}
                  />
                </FormControl>
                <FormMessage className='text-12 font-400 text-warning' />
              </FormItem>
            );
          }}
        />
      </CardContent>
      <div className='absolute bottom-[3rem] left-0 right-0 mx-auto w-full px-20 pb-32 pt-24 xs:w-[520px]'>
        <Button type='button' className='w-full' onClick={onClickNext}>
          다음
        </Button>
      </div>
    </>
  );
};

export default StepTwoPage;
