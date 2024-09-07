import { Controller, useFormContext } from 'react-hook-form';
import Input from '@/components/ui/Input';
import Text from '@/components/ui/Text';
import { TargetManagementInputProps, FormValues } from '@/shared/types/budgetCalendarType';
import ClearInputValueIcon from '@/app/(DefaultLayout)/auth/_components/ClearInputValueIcon';

const MAX_AMOUNT = 50000000;

const TargetManagementInput = ({
  inputValue,
  setInputValue,
  onEnterKeyPress
}: TargetManagementInputProps) => {
  const {
    control,
    setValue,
    getValues,
    formState: { errors }
  } = useFormContext<FormValues>();

  const formatNumberWithComma = (value: string) => value.replace(/\B(?=(\d{3})+(?!\d))/g, ',');

  const handleInputChange = (value: string) => {
    const numericValue = value.replace(/\D/g, '');
    const numericValueInt = parseInt(numericValue, 10);

    if (!isNaN(numericValueInt) && numericValueInt <= MAX_AMOUNT) {
      const formattedValue = formatNumberWithComma(numericValue);
      setInputValue(formattedValue);
      setValue('amount', formattedValue);
    } else if (numericValueInt > MAX_AMOUNT) {
      const maxFormattedValue = formatNumberWithComma(MAX_AMOUNT.toString());
      setInputValue(maxFormattedValue);
      setValue('amount', maxFormattedValue);
    } else {
      setInputValue('');
      setValue('amount', '');
    }
  };

  return (
    <div className='relative mt-40'>
      <Controller
        name='amount'
        control={control}
        rules={{
          required: '금액을 입력해 주세요',
          validate: (value) => {
            const numericValue = parseInt(value.replace(/,/g, ''), 10);
            if (isNaN(numericValue)) {
              return '숫자만 입력해 주세요';
            }
            if (numericValue > MAX_AMOUNT) {
              return `최대 금액은 ${formatNumberWithComma(MAX_AMOUNT.toString())}원 입니다.`;
            }
            return true;
          }
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
                onKeyDown={onEnterKeyPress}
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
  );
};

export default TargetManagementInput;
