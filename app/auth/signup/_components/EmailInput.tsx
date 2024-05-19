import React from 'react';
import InputLayout from './InputLayout';
import { useFormContext } from 'react-hook-form';
import { RegisterInputValue } from './SignupForm';
const EmailInput = () => {
  const { register } = useFormContext<RegisterInputValue>();
  const buttonInfo = {
    title: '중복확인',
    onClick: () => console.log('중복확인')
  };

  return (
    <InputLayout
      register={register}
      fieldKey='email'
      title='이메일을 알려주세요'
      placeholder='이메일'
      buttonInfo={buttonInfo}
    />
  );
};

export default EmailInput;
