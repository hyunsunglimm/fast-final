import { useState } from 'react';
import { useQuery, useQueryClient } from '@tanstack/react-query';
import { useForm, FormProvider } from 'react-hook-form';
import BottomSheet from '@/components/BottomSheet';
import BottomSheetTitle from '../common/BottomSheetTitle';
import TargetManagementInput from '../common/TargetManagementInput';
import { FormValues, TargetModifyBottomSheetProps } from '@/shared/types/budgetCalendarType';
import { LastMonthInquiryResponse } from '@/shared/types/response/targetBudget';
import { patchBudget, getLastMonthInquiry } from '@/service/api/calendar';
import { formatNumber } from '@/shared/utils/formatNumber';

const TargetModifyBottomSheet = ({
  modifyPopup,
  setModifyPopup,
  setShowPopup,
  onClose
}: TargetModifyBottomSheetProps) => {
  const methods = useForm<FormValues>();
  const queryClient = useQueryClient();
  const [inputValue, setInputValue] = useState('');

  const handleButtonClick = async () => {
    const isValid = await methods.trigger('amount');
    if (isValid) {
      const numericValue = parseInt(inputValue.replace(/,/g, ''), 10);
      await patchBudget(numericValue);
      onClose();
      queryClient.removeQueries({ queryKey: ['budgetManagement'] });
      queryClient.removeQueries({ queryKey: ['getCalendar'] });
      queryClient.refetchQueries({ queryKey: ['consumptionweather'] });
      document.body.style.overflow = '';
    }
  };

  const handleEnterKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      handleButtonClick();
    }
  };

  const { data: amount } = useQuery<LastMonthInquiryResponse>({
    queryKey: ['getLastMonthInquiry'],
    queryFn: getLastMonthInquiry
  });

  return (
    <FormProvider {...methods}>
      <BottomSheet
        title='목표 수정'
        buttonLabel={inputValue ? '수정 완료하기' : '금액을 입력해 주세요'}
        isOpen={modifyPopup}
        onClose={() => setModifyPopup(false)}
        buttonOptions={{ disabled: !inputValue }}
        onClick={handleButtonClick}
        isBack={true}
        isBackHandler={() => {
          setShowPopup(true);
          setModifyPopup(false);
        }}
      >
        <BottomSheetTitle
          title='목표 예산을 얼마로 바꿀까요?'
          description={`저번 달에 ${formatNumber(amount?.used ?? 0)}원 썼어요`}
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
