import React, { useState } from 'react';
import InputLayout from './InputLayout';
import VisibleIcon from '@/components/icons/signup/VisibleIcon';
import InvisibleIcon from '@/components/icons/InvisibleIcon';

const PwInput = () => {
  const [isView, setIsView] = useState(false);

  const icon = (
    <div
      className='absolute right-[2.1rem] top-[1.8rem]'
      onClick={() => setIsView((prev) => !prev)}
    >
      {isView ? <VisibleIcon /> : <InvisibleIcon />}
    </div>
  );

  // const pwRegex = /^(?=.*[a-zA-Z])(?=.*[!@#$%^*+=-])(?=.*[0-9]).{8,20}$/;
  // const rule = {
  //   required: '비밀번호를 입력해주세요.',
  //   minLength: {
  //     value: 8,
  //     message: '비밀번호는 8자 이상입니다.'
  //   },
  //   maxLength: {
  //     value: 20,
  //     message: '비밀번호는 21자 미만입니다.'
  //   },
  //   pattern: {
  //     value: pwRegex,
  //     message: '영문, 숫자, 특수문자를 모두 포함해야 합니다.'
  //   }
  // };

  return (
    <InputLayout
      fieldKey='password'
      title='비밀번호를 입력해주세요'
      placeholder='영문, 숫자, 특수문자를 포함하여 8자 이상'
      icon={icon}
      inputType={isView ? 'text' : 'password'}
    />
  );
};

export default PwInput;
