import React from 'react';
import InputLayout from './InputLayout';
import { useFormContext } from 'react-hook-form';
import { RegisterInputValue } from './SignupForm';
const NameInput = () => {
  const { register } = useFormContext<RegisterInputValue>();

  return (
    <InputLayout register={register} fieldKey='name' title='이름을 알려주세요' placeholder='이름' />
  );
};

export default NameInput;
