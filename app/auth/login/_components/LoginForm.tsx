'use client';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { loginSchema, defaultValues, LoginInputsValues } from '../../schema/loginSchema';
import { Form, FormControl, FormField, FormItem, FormMessage } from '@/components/ui/form';
import { CardContent } from '@/components/ui/card';
import EyeIcon from '../../_components/EyeIcon';
import Button from '@/components/ui/Button';
import Input from '@/components/ui/Input';
import FlexBox from '@/components/ui/FlexBox';
import ClearInputValueIcon from '../../_components/ClearInputValueIcon';
import Checkbox from '@/components/ui/CheckBox';
import Text from '@/components/ui/Text';
import TextButton from '@/components/ui/TextButton';
import Link from 'next/link';
const LoginForm = () => {
  const [showPassword, setShowPassword] = useState(false);

  const form = useForm<LoginInputsValues>({
    resolver: zodResolver(loginSchema),
    defaultValues
  });

  const {
    setValue,
    handleSubmit,
    formState: { errors },
    control
  } = form;

  const onSubmit = (data: LoginInputsValues) => {
    console.log(data);
  };

  return (
    <Form {...form}>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className='flex h-[59.6rem] flex-col items-center justify-between bg-white px-20 pb-24'
      >
        <CardContent flexDirection='col' alignItems='center' className='w-full'>
          <FlexBox className='mb-[4.8rem] h-[12rem] w-[12rem] bg-gray-50'></FlexBox>
          {/* 이메일 */}
          <FlexBox className='w-full space-y-20' flexDirection='col'>
            <FormField
              control={control}
              name='email'
              render={({ field }) => {
                return (
                  <FormItem className='w-full '>
                    <FormControl>
                      <FlexBox className='w-full gap-x-8'>
                        <div className='relative w-full'>
                          <Input
                            placeholder='이메일을 입력해주세요'
                            id='email'
                            inputMode='email'
                            {...field}
                            validation={errors.email ? 'error' : 'success'}
                          />
                          <ClearInputValueIcon show={true} onClick={() => setValue('email', '')} />
                        </div>
                      </FlexBox>
                    </FormControl>

                    {errors.email && <FormMessage className='text-12 font-400 text-warning' />}
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
                  <FormItem className='relative w-full'>
                    <FormControl>
                      <>
                        <Input
                          autoComplete='new-password'
                          autoCorrect='off'
                          placeholder='비밀번호를 입력해주세요'
                          id='password'
                          inputMode='text'
                          type={showPassword ? 'text' : 'password'}
                          {...field}
                          validation={errors.password ? 'error' : 'success'}
                        />

                        <ClearInputValueIcon
                          rightMargin
                          show={true}
                          onClick={() => setValue('password', '')}
                        />
                        <EyeIcon show={showPassword} setState={setShowPassword} />
                      </>
                    </FormControl>
                    <FormMessage className='text-12 font-400 text-warning' />
                  </FormItem>
                );
              }}
            />
          </FlexBox>
          <FlexBox className='mt-24 gap-8 self-start' alignItems='center'>
            <Checkbox />
            <Text className='text-gray-700'>자동 로그인</Text>
          </FlexBox>
          <Footer />
        </CardContent>

        <Button type='submit' className='w-full self-end'>
          로그인
        </Button>
      </form>
    </Form>
  );
};

export default LoginForm;

const Footer = () => {
  return (
    <FlexBox className='mt-[4.8rem] gap-x-22' alignItems='center'>
      <TextButton type='button' className='text-gray-700' asChild>
        <Link href='#' aria-label='포코계정 찾기로 가기'>
          포코계정 찾기
        </Link>
      </TextButton>
      <div className='h-6 w-[1px] bg-gray-300' aria-hidden></div>
      <TextButton type='button' className='text-gray-700' asChild>
        <Link href='#' aria-label='비밀번호 찾기로 가기'>
          비밀번호 찾기
        </Link>
      </TextButton>
      <div className='h-6 w-[1px] bg-gray-300' aria-hidden></div>
      <TextButton type='button' className='text-gray-700' asChild>
        <Link href='#' aria-label='회원가입으로 가기'>
          회원가입
        </Link>
      </TextButton>
    </FlexBox>
  );
};
