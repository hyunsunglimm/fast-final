import InputLayout from './InputLayout';
import SuccessIcon from '@/components/icons/SuccessIcon';

const ReconfirmPwInput = () => {
  const icon = (
    <div className='absolute right-[2.1rem] top-[1.8rem]'>
      <SuccessIcon />
    </div>
  );

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
      fieldKey='reconfirmPw'
      title='비밀번호를 한번 더 입력해주세요'
      placeholder='비밀번호를 확인해주세요'
      icon={icon}
      inputType='password'
    />
  );
};

export default ReconfirmPwInput;
