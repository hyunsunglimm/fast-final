import Button from '@/components/ui/Button';
import Input from '@/components/ui/Input';
import Text from '@/components/ui/Text';
import React, { useState } from 'react';
import VisibleIcon from '@/components/icons/VisibleIcon';
import SuccessIcon from '@/components/icons/SuccessIcon';
import InvisibleIcon from '@/components/icons/InvisibleIcon';

const PwInput = () => {
  const [isView, setIsView] = useState(false);

  const pwRegex = /^(?=.*[a-zA-Z])(?=.*[!@#$%^*+=-])(?=.*[0-9]).{8,20}$/;

  return (
    <section className='flex w-full flex-col gap-[3.7rem]'>
      <div className='relative flex flex-col gap-[1.4rem]'>
        <label htmlFor='password'>
          <Text sizes='20'>비밀번호를 입력해주세요</Text>
        </label>
        <div className='relative'>
          <Input
            className='text-18 placeholder:text-12 rounded-[1.5rem]'
            {...register('password', {
              required: '비밀번호를 입력해주세요.',
              minLength: {
                value: 8,
                message: '비밀번호는 8자 이상입니다.'
              },
              maxLength: {
                value: 20,
                message: '비밀번호는 21자 미만입니다.'
              },
              pattern: {
                value: pwRegex,
                message: '영문, 숫자, 특수문자를 모두 포함해야 합니다.'
              }
            })}
            type={isView ? 'text' : 'password'}
            id='password'
            autoComplete='off'
            placeholder='영문, 숫자, 특수문자를 포함하여 8자 이상'
          />
          <div
            className='absolute right-[2.1rem] top-[1.8rem]'
            onClick={() => setIsView((prev) => !prev)}
          >
            {isView ? <VisibleIcon /> : <InvisibleIcon />}
          </div>
        </div>
        {errors.password && (
          <Text sizes='12' className='absolute bottom-[-2.3rem] left-[0.9rem] text-red-500'>
            {errors.password.message}
          </Text>
        )}
      </div>

      <div className='relative flex flex-col gap-[1.4rem]'>
        <label htmlFor='confirmPassword'>
          <Text sizes='20'>비밀번호를 한번 더 입력해주세요</Text>
        </label>
        <div className='relative'>
          <Input
            className='text-18 placeholder:text-12 rounded-[1.5rem]'
            {...register('reconfirmPassword', {
              validate: (value, { password }) => {
                if (value !== password) {
                  return '비밀번호가 일치하지 않습니다.';
                }
                updateStepOneValues(password, 'password');
                return true;
              }
            })}
            type='password'
            id='confirmPassword'
            autoComplete='off'
            placeholder='비밀번호를 확인해주세요'
          />
          <div className='absolute right-[2.1rem] top-[1.8rem]'>{isValid && <SuccessIcon />}</div>
        </div>
        {errors.reconfirmPassword && (
          <Text sizes='12' className='absolute bottom-[-2.3rem] left-[0.9rem] text-red-500'>
            {errors.reconfirmPassword.message}
          </Text>
        )}
        {isValid && (
          <Text sizes='12' className='absolute bottom-[-2.3rem] left-[0.9rem]'>
            비밀번호가 일치합니다.
          </Text>
        )}
      </div>
      {errors.root && <div className='text-red-500'>{errors.root.message}</div>}
      <div className='flex justify-between'>
        <Button styled='outline' type='button' size='signup_prev' rounded='xl'>
          이전
        </Button>
        <Button
          size='signup_next'
          styled={!isValid || !isCheckedId ? 'outline' : isSubmitting ? 'disabled' : 'fill'}
          disabled={!isValid || isSubmitting || !isCheckedId}
          rounded='xl'
        >
          {isSubmitting ? '제출중...' : '다음'}
        </Button>
      </div>
    </section>
  );
};

export default PwInput;
