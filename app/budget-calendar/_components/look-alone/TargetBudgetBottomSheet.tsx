import { useState } from 'react';
import { useForm, Controller } from 'react-hook-form';
import BottomSheet from '@/components/BottomSheet';
import Text from '@/components/ui/Text';
import Input from '@/components/ui/Input';
import ClearInputValueIcon from '@/app/auth/_components/ClearInputValueIcon';

type TargetBudgetBottomSheetProps = {
  showPopup: boolean;
  setShowPopup: React.Dispatch<React.SetStateAction<boolean>>;
  setBudgetSet: React.Dispatch<React.SetStateAction<boolean>>;
};

type FormValues = {
  amount: string;
};

const TargetBudgetBottomSheet = ({
  showPopup,
  setShowPopup,
  setBudgetSet
}: TargetBudgetBottomSheetProps) => {
  const {
    control,
    setValue,
    getValues,
    formState: { errors },
    trigger
  } = useForm<FormValues>();
  const [inputValue, setInputValue] = useState('');

  const formatNumberWithComma = (value: string) => value.replace(/\B(?=(\d{3})+(?!\d))/g, ',');
  const handleInputChange = (value: string) => {
    const numericValue = value.replace(/\D/g, '');
    const formattedValue = formatNumberWithComma(numericValue);
    setInputValue(formattedValue);
    setValue('amount', formattedValue);
  };

  const handleButtonClick = async () => {
    const isValid = await trigger('amount');
    if (isValid) {
      // const numericValue = getValues('amount').replace(/,/g, ''); // 콤마를 제거한 숫자만 남기기
      // console.log('API로 보낼 값:', numericValue);
      setShowPopup(false);
      setBudgetSet(true);
    }
  };

  return (
    <BottomSheet
      title='목표 설정'
      buttonLabel={inputValue ? '설정 완료하기' : '금액을 입력해 주세요'}
      isOpen={showPopup}
      onClose={() => setShowPopup(false)}
      buttonOptions={{ disabled: !inputValue }}
      onClick={handleButtonClick}
    >
      <Text variant='h3' sizes='20' weight='700' className='mb-8'>
        목표 예산을 얼마로 세울까요?
      </Text>
      <Text variant='p' className='text-gray-700'>
        저번 달에 1,000,000원 썼어요
      </Text>
      <div className='relative mt-40'>
        <Controller
          name='amount'
          control={control}
          rules={{
            required: '금액을 입력해 주세요',
            validate: (value) => /^\d+(,\d{3})*$/.test(value) || '숫자만 입력해 주세요'
          }}
          render={({ field }) => {
            return (
              <>
                <Input
                  {...field}
                  id='amount'
                  validation={errors.amount ? 'error' : 'success'}
                  placeholder='금액'
                  trailingText='원'
                  onChange={(e) => handleInputChange(e.target.value)}
                  value={inputValue}
                  className='py-8 text-20'
                  trailingTextClass={`text-20 font-700 text-gray-500 ${inputValue ? 'pr-20' : 'mr-[-0.8rem]'}`}
                  labelClass='text-20 scale-[0.6] peer-focus:scale-[0.6]'
                />
                <ClearInputValueIcon
                  show={Boolean(getValues('amount'))}
                  onClick={() => {
                    setValue('amount', '');
                    setInputValue('');
                  }}
                />
              </>
            );
          }}
        />
        {errors.amount && (
          <Text variant='p' className='text-warning'>
            {errors.amount.message}
          </Text>
        )}
      </div>
    </BottomSheet>
  );
};

export default TargetBudgetBottomSheet;
