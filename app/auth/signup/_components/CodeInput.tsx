import InputLayout from './InputLayout';
import { useFormContext } from 'react-hook-form';
import { RegisterInputValue } from './SignupForm';
const CodeInput = () => {
  const { register } = useFormContext<RegisterInputValue>();
  const buttonInfo = {
    title: '인증번호 재요청',
    onClick: () => console.log('인증번호 재요청')
  };

  return (
    <InputLayout
      register={register}
      fieldKey='code'
      title='인증번호 6자리를 입력해주세요'
      placeholder='인증번호 6자리'
      buttonInfo={buttonInfo}
    />
  );
};

export default CodeInput;
