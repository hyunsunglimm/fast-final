import React from 'react';
import InputLayout from './InputLayout';

const EmailInput = () => {
  const buttonInfo = {
    title: '중복확인',
    onClick: () => console.log('중복확인')
  };

  return (
    <InputLayout
      fieldKey='email'
      title='이메일을 알려주세요'
      placeholder='이메일'
      buttonInfo={buttonInfo}
    />
  );
};

export default EmailInput;
