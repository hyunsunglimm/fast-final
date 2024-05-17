import InputLayout from './InputLayout';
import { useFormContext } from 'react-hook-form';
const CodeInput = () => {
  const { register } = useFormContext();
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
