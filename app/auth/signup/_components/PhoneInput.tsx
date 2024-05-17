import InputLayout from './InputLayout';

const PhoneInput = () => {
  const buttonInfo = {
    title: '인증번호 요청',
    onClick: () => console.log('인증번호 요청')
  };

  return (
    <InputLayout
      fieldKey='phone'
      title='휴대폰 번호를 알려주세요'
      placeholder='- 제외 11자리'
      buttonInfo={buttonInfo}
    />
  );
};

export default PhoneInput;
