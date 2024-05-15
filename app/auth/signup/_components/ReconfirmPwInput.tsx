import { RegisterOptions, useFormContext } from 'react-hook-form';
import InputLayout from './InputLayout';
import { StepOneFormFields, StepOneFormFieldsKey } from './step-form';
import SuccessIcon from '@/components/icons/SuccessIcon';

const ReconfirmPwInput = () => {
  const {
    formState: { isValid }
  } = useFormContext();

  const icon = (
    <div className='absolute right-[2.1rem] top-[1.8rem]'>{isValid && <SuccessIcon />}</div>
  );

  const rule: RegisterOptions<StepOneFormFields, StepOneFormFieldsKey> = {
    validate: (value, { password }) => {
      if (value !== password) {
        return '비밀번호가 일치하지 않습니다.';
      }
      return true;
    }
  };

  return (
    <InputLayout
      fieldKey='reconfirmPw'
      title='비밀번호를 한번 더 입력해주세요'
      rule={rule}
      placeholder='비밀번호를 확인해주세요'
      icon={icon}
      inputType='password'
    />
  );
};

export default ReconfirmPwInput;
