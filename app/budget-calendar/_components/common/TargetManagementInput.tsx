import { Controller, useFormContext } from 'react-hook-form';
import Input from '@/components/ui/Input';
import ClearInputValueIcon from '@/app/auth/_components/ClearInputValueIcon';
import Text from '@/components/ui/Text';
import { TargetManagementInputProps, FormValues } from '@/shared/types/budgetCalendarType';

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
    const formattedValue = formatNumberWithComma(numericValue);
    setInputValue(formattedValue);
    setValue('amount', formattedValue);
  };

  return (
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
