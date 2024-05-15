import { SubmitHandler, useFormContext } from 'react-hook-form';
import InputLayout from './InputLayout';
import { StepOneFormFields } from './step-form';

const IdInput = () => {
  const { setError } = useFormContext<StepOneFormFields>();
  const idRegex = /^[a-zA-Z0-9]+$/;
  const rule = {
    required: '아이디를 입력해주세요.',
    minLength: {
      value: 6,
      message: '아이디는 6자 이상입니다.'
    },
    maxLength: {
      value: 20,
      message: '아이디는 21자 미만입니다.'
    },
    pattern: {
      value: idRegex,
      message: '영문 혹은 영문과 숫자 조합으로 작성해주세요.'
    }
  };

  const idChecker: SubmitHandler<StepOneFormFields> = async (data) => {
    try {
      await new Promise((resolve) => setTimeout(resolve, 1000));
      // throw new Error();
    } catch (error) {
      setError('id', {
        message: '이미 사용중인 아이디 입니다.'
      });
    }
  };

  return (
    <InputLayout
      fieldKey='id'
      title='아이디를 입력해주세요'
      placeholder='6자 이상의 영문 혹은 영문과 숫자를 조합'
      rule={rule}
      onClick={idChecker}
      isButton={true}
    />
  );
};

export default IdInput;
