import { useState } from 'react';
import { useForm, FormProvider } from 'react-hook-form';
import BottomSheet from '@/components/BottomSheet';
import BottomSheetTitle from '../common/BottomSheetTitle';
import TargetManagementInput from '../common/TargetManagementInput';
import { FormValues, TargetModifyBottomSheetProps } from '@/shared/types/budgetCalendarType';

const TargetModifyBottomSheet = ({
  modifyPopup,
  setModifyPopup,
  setShowPopup
}: TargetModifyBottomSheetProps) => {
  const methods = useForm<FormValues>();
  const [inputValue, setInputValue] = useState('');

  const handleButtonClick = async () => {
    const isValid = await methods.trigger('amount');
    if (isValid) {
      setModifyPopup(false);
    }
  };

  const handleEnterKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      handleButtonClick();
    }
  };

  return (
    <FormProvider {...methods}>
      <BottomSheet
        title='목표 수정'
        buttonLabel={inputValue ? '수정 완료하기' : '금액을 입력해 주세요'}
        isOpen={modifyPopup}
        onClose={() => setModifyPopup(false)}
        buttonOptions={{ disabled: !inputValue }}
        onClick={handleButtonClick}
        isBackHandler={() => {
          setShowPopup(true);
          setModifyPopup(false);
        }}
      >
        <BottomSheetTitle
          title='목표 예산을 얼마로 세울까요?'
          description='저번 달에 1,000,000원 썼어요'
        />
        <TargetManagementInput
          inputValue={inputValue}
          setInputValue={setInputValue}
          onEnterKeyPress={handleEnterKeyPress}
        />
      </BottomSheet>
    </FormProvider>
  );
};

export default TargetModifyBottomSheet;
