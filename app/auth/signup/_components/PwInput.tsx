import React, { useState } from 'react';
import InputLayout from './InputLayout';

const PwInput = () => {
  const [isView, setIsView] = useState(false);

  const pwRegex = /^(?=.*[a-zA-Z])(?=.*[!@#$%^*+=-])(?=.*[0-9]).{8,20}$/;
  const rule = {
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
  };

  return (
    <InputLayout
      type='password'
      title='비밀번호를 입력해주세요'
      placeholder='영문, 숫자, 특수문자를 포함하여 8자 이상'
      rule={rule}
    />
  );
};

export default PwInput;
