import { useFormContext } from 'react-hook-form';
import InputLayout from './InputLayout';
import { RegisterInputValue } from './SignupForm';

const ReconfirmPwInput = () => {
  const { register } = useFormContext<RegisterInputValue>();

  // const rule = {
  //   validate: (value, { password }) => {
  //     if (value !== password) {
  //       return '비밀번호가 일치하지 않습니다.';
  //     }
  //     return true;
  //   }
  // };

  return (
    <InputLayout
      register={register}
      fieldKey='reconfirmPw'
      title='비밀번호를 한번 더 입력해주세요'
      placeholder='비밀번호를 확인해주세요'
      inputType='password'
    />
  );
};

export default ReconfirmPwInput;
