/* eslint-disable react-hooks/exhaustive-deps */
'use client';
import { useState, useEffect, useCallback } from 'react';
import Input from '@/components/ui/Input';
import FlexBox from '@/components/ui/FlexBox';
import SignupHeader from '../_components/SignupHeader';
import Text from '@/components/ui/Text';
import Button from '@/components/ui/Button';
import Spinner from '@/components/Spinner';
import { useFormContext, useWatch } from 'react-hook-form';
import { SignupInputsValues } from '../_components/signupSchema';
import { useRouter } from 'next/navigation';
import { FormControl, FormField, FormItem, FormMessage } from '@/components/ui/form';
import { CardContent } from '@/components/ui/card';
import { useMutation } from '@tanstack/react-query';
import { checkEmailDuplicate } from '@/service/api/auth';

const StepOnePage = () => {
  const router = useRouter();
  const [emailMessage, setEmailMessage] = useState('');
  const {
    setValue,
    getValues,
    control,
    trigger,
    formState: { errors },
    setError,
    clearErrors
  } = useFormContext<SignupInputsValues>();

  type Tdata = {
    userId: string;
    message: string;
  };

  // useEffect(() => {
  //   console.log('dddd', checkEmailDuplicate(getValues('email')));
  // }, []);

  const { mutate, isPending } = useMutation<Tdata, Error, string>({
    mutationFn: (id) => checkEmailDuplicate(id),
    onSuccess: (data) => {
      if (data) {
        setEmailMessage(data.message);
        setValue('checkEmail', true);
      }
    },
    onError: (err) => {
      setError('email', {
        type: 'manual',
        message: err.message || ''
      });
    }
  });

  const email = useWatch({
    control,
    name: 'email',
    defaultValue: ''
  });

  const validateEmail = useCallback(async () => {
    const isValidEmail = await trigger('email');
    // console.log('isValidEmail', isValidEmail);
    // console.log('getvalues', getValues('checkEmail'));
    if (!isValidEmail) {
      setError('email', {
        type: 'manual',
        message: errors.email?.message || ''
      });
    } else {
      // isValidEmail에 true 면 checkEmail은 false가 되어야 한다.
      // 페이지가 갔다 오면 isValidEmail이 true라 checkEmail이 다시 false가 된다.
      clearErrors('email');
      setValue('checkEmail', false);
      // setValue('checkEmail', false);
      // if (getValues('checkEmail')) {
      //   console.log('else in getvalue true');
      //   return;
      // }
      // console.log('else out getvalue true');
    }
    // setIsButtonDisabled(!isValidEmail);
    setEmailMessage('');
  }, [trigger, setError, clearErrors, errors.email, setValue]);
  // console.log('emailMessage', emailMessage);
  useEffect(() => {
    validateEmail();
  }, [email]);

  const onClickNext = async () => {
    const isEmailValid = await trigger('email', { shouldFocus: true });
    const isPasswordValid = await trigger('password', { shouldFocus: true });
    const isConfirmPasswordValid = await trigger('confirmPassword', { shouldFocus: true });

    if (isEmailValid && isPasswordValid && isConfirmPasswordValid) {
      if (!getValues('checkEmail')) {
        setError('email', {
          type: 'manual',
          message: '이메일 중복 확인을 해주세요.'
        });
        return;
      } else {
        clearErrors('email');
      }
      router.push('/auth/signup/step-2');
    }
  };

  return (
    <>
      <SignupHeader currentStep='1' />
      <FlexBox className='space-y-2' flexDirection='col'>
        <Text variant='h2' sizes='20' weight='700'>
          회원가입을 위해
          <br /> 정보를 입력해주세요
        </Text>
        <Text className='text-gray-500' sizes='18' weight='500'>
          <span className='text-primary'>1</span> / 3
        </Text>
      </FlexBox>
      <CardContent flexDirection='col' className='mt-32 w-full space-y-12'>
        {/* 이메일 */}
        <FormField
          control={control}
          name='email'
          render={({ field }) => {
            return (
              <FormItem className='w-full'>
                <FormControl>
                  <FlexBox className='gap-8'>
                    <Input
                      placeholder='이메일을 입력해주세요'
                      id='email'
                      inputMode='email'
                      {...field}
                      validation={errors.email ? 'error' : 'success'}
                    />
                    <Button
                      name='checkEmail'
                      type='button'
                      size='xs'
                      className='w-[9.5rem] px-12'
                      onClick={() => mutate(getValues('email'))}
                      disabled={getValues('checkEmail') || isPending}
                    >
                      {isPending ? <Spinner /> : '중복 확인'}
                    </Button>
                  </FlexBox>
                </FormControl>

                {errors.email && <FormMessage className='text-12 font-400 text-warning' />}
                {emailMessage ? (
                  <FormMessage
                    className={`text-12 font-400 ${emailMessage.includes('가능한') ? 'text-active' : 'text-warning'}`}
                  >
                    {emailMessage}
                  </FormMessage>
                ) : null}
              </FormItem>
            );
          }}
        />
        {/* 패스워드 */}
        <FormField
          control={control}
          name='password'
          render={({ field }) => {
            return (
              <FormItem className='w-full'>
                <FormControl>
                  <Input
                    autoComplete='new-password'
                    autoCorrect='off'
                    placeholder='비밀번호를 입력해주세요'
                    id='password'
                    inputMode='text'
                    type='password'
                    {...field}
                    validation={errors.password ? 'error' : 'success'}
                  />
                </FormControl>
                <FormMessage className='text-12 font-400 text-warning' />
              </FormItem>
            );
          }}
        />
        {/* 패스워드 검증 */}
        <FormField
          control={control}
          name='confirmPassword'
          render={({ field }) => {
            return (
              <FormItem className='w-full'>
                <FormControl>
                  <Input
                    autoComplete='new-password'
                    autoCorrect='off'
                    placeholder='비밀번호 재확인'
                    id='confirmPassword'
                    type='password'
                    {...field}
                    validation={errors.confirmPassword ? 'error' : 'success'}
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

export default StepOnePage;

// const password = useWatch({
//   control,
//   name: 'password',
//   defaultValue: ''
// });
// const confirmPassword = useWatch({
//   control,
//   name: 'confirmPassword',
//   defaultValue: ''
// });

// const validatePassword = useCallback(async () => {
//   const isPasswordValid = await trigger('password');
//   if (!isPasswordValid) {
//     setError('password', {
//       type: 'manual',
//       message: errors.password?.message || ''
//     });
//   } else {
//     clearErrors('password');
//   }
// }, [trigger, setError, clearErrors, errors.password]);

// const validateConfirmPassword = useCallback(async () => {
//   const isConfirmPasswordValid = await trigger('confirmPassword');
//   if (!isConfirmPasswordValid) {
//     setError('confirmPassword', {
//       type: 'manual',
//       message: errors.confirmPassword?.message
//     });
//   } else {
//     clearErrors('confirmPassword');
//   }
// }, [trigger, setError, clearErrors, errors.confirmPassword]);

// useEffect(() => {
//   validatePassword();
// }, [password]);

// useEffect(() => {
//   validateConfirmPassword();
// }, [confirmPassword]);
