import { ChangeEvent, useState, useEffect } from 'react';
import FlexBox from '@/components/ui/FlexBox';
import Text from '@/components/ui/Text';
import Icon from '@/components/Icon';
import { useFormContext } from 'react-hook-form';
import Checkbox from '@/components/ui/CheckBox';
import Button from '@/components/ui/Button';

const policyList = [
  {
    id: 'service',
    title: '[필수] PORKO 서비스 필수 동의'
  },
  {
    id: 'IdentityVerification',
    title: '[필수] 본인확인 필수 동의'
  },
  {
    id: 'CreditManagementService',
    title: '[필수] 신용관리 서비스 필수 동의'
  }
];
type CheckboxType = {
  selectAll: boolean;
  selectOptions: boolean[];
};
export const StepFourForm = () => {
  const [isAllChecked, setIsAllChecked] = useState(false);
  const { register, watch, setValue } = useFormContext();
  const selectedOptionsArray = policyList.map((_, index) => watch(`selectOptions.${index}`));
  const isSelectedOption = selectedOptionsArray.every((select) => select === true);

  const handleSelectAll = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.currentTarget.checked) {
      policyList.forEach((_, index) => {
        setValue(`selectOptions.${index}`, true);
      });
    } else {
      policyList.forEach((_, index) => {
        setValue(`selectOptions.${index}`, false);
      });
    }
  };

  useEffect(() => {
    setIsAllChecked(isSelectedOption);
  }, [isSelectedOption]);

  return (
    <>
      <FlexBox flexDirection='col' className='mt-32 w-full'>
        <Checkbox
          checked={isAllChecked}
          onChange={handleSelectAll}
          sizes='16'
          className='w-full justify-start gap-8 rounded-xs border border-gray-300 p-16 has-[:checked]:border-primary/10 has-[:checked]:bg-primary/20'
        >
          <Text sizes='16' weight='500' className='mt-[0.2rem]'>
            필수 항목 모두 동의
          </Text>
        </Checkbox>

        <FlexBox flexDirection='col' className='mb-24 mt-10 w-full space-y-6 px-24'>
          {policyList.map((item) => {
            return (
              <Checkbox
                key={item.id}
                checked={isAllChecked}
                onChange={handleSelectAll}
                sizes='20'
                className='w-full justify-start gap-8 '
                onImage='/icons/system-icon/checkbox/checkbox-on.svg'
                offImage='/icons/system-icon/checkbox/checkbox-off.svg'
              >
                <Text sizes='12' weight='500' className='text-gray-700'>
                  {item.title}
                </Text>
                <Icon
                  src='/icons/system-icon/arrow/arrow-right.svg'
                  alt={`${item.title} 보러가기 화살표`}
                  size='12'
                  placeholder='empty'
                />
              </Checkbox>
            );
          })}
        </FlexBox>
        <Checkbox
          checked={isAllChecked}
          onChange={handleSelectAll}
          sizes='16'
          className='w-full justify-start gap-8 rounded-xs border border-gray-300 p-16 has-[:checked]:border-primary/10 has-[:checked]:bg-primary/20'
        >
          <Text sizes='16' weight='500' className='mt-[0.2rem]'>
            [선택] 프로모션 알림 수신 동의
          </Text>
        </Checkbox>
      </FlexBox>
    </>
  );
};
