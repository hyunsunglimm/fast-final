import { useState } from 'react';
import { useQuery, useQueryClient } from '@tanstack/react-query';
import { useForm, FormProvider } from 'react-hook-form';
import BottomSheet from '@/components/BottomSheet';
import { FormValues, TargetBudgetBottomSheetProps } from '@/shared/types/budgetCalendarType';
import TargetManagementInput from '../common/TargetManagementInput';
import BottomSheetTitle from '../common/BottomSheetTitle';
import { getLastMonthInquiry, postBudget } from '@/service/api/calendar';
import { LastMonthInquiryResponse } from '@/shared/types/response/targetBudget';
import { formatNumber } from '@/shared/utils/formatNumber';

const TargetBudgetBottomSheet = ({
  showPopup,
  setShowPopup,
  setBudgetSet
}: TargetBudgetBottomSheetProps) => {
  const methods = useForm<FormValues>();
  const queryClient = useQueryClient();
  const [inputValue, setInputValue] = useState('');

  const handleButtonClick = async () => {
    const isValid = await methods.trigger('amount');
    if (isValid) {
      const numericValue = parseInt(inputValue.replace(/,/g, ''), 10);
      await postBudget(numericValue);
      setShowPopup(false);
      setBudgetSet(true);

      queryClient.removeQueries({ queryKey: ['budgetManagement'] });
      queryClient.removeQueries({ queryKey: ['getCalendar'] });
      queryClient.refetchQueries({ queryKey: ['consumptionweather'] });
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
        title='목표 설정'
        buttonLabel={inputValue ? '설정 완료하기' : '금액을 입력해 주세요'}
        isOpen={showPopup}
        onClose={() => setShowPopup(false)}
        buttonOptions={{ disabled: !inputValue }}
        onClick={handleButtonClick}
      >
        <BottomSheetTitle
          title='목표 예산을 얼마로 세울까요?'
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

export default TargetBudgetBottomSheet;
