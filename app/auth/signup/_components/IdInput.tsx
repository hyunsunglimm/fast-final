import InputLayout from './InputLayout';

const IdInput = () => {
  // const idRegex = /^[a-zA-Z0-9]+$/;
  // const rule = {
  //   required: '아이디를 입력해주세요.',
  //   minLength: {
  //     value: 6,
  //     message: '아이디는 6자 이상입니다.'
  //   },
  //   maxLength: {
  //     value: 20,
  //     message: '아이디는 21자 미만입니다.'
  //   },
  //   pattern: {
  //     value: idRegex,
  //     message: '영문 혹은 영문과 숫자 조합으로 작성해주세요.'
  //   }
  // };
  const buttonInfo = {
    title: '중복확인',
    onClick: () => console.log('중복확인')
  };

  return (
    <InputLayout
      fieldKey='id'
      title='아이디를 입력해주세요'
      placeholder='6자 이상의 영문 혹은 영문과 숫자를 조합'
      buttonInfo={buttonInfo}
    />
  );
};

export default IdInput;
