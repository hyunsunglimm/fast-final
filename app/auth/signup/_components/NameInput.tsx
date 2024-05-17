import React from 'react';
import InputLayout from './InputLayout';
import { useFormContext } from 'react-hook-form';
const NameInput = () => {
  const { register } = useFormContext();

  return (
    <InputLayout register={register} fieldKey='name' title='이름을 알려주세요' placeholder='이름' />
  );
};

export default NameInput;
