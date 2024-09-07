'use client';
import { ChangeEvent, useState, useEffect } from 'react';
import FlexBox from '@/components/ui/FlexBox';
import Text from '@/components/ui/Text';
import Icon from '@/components/Icon';
import Checkbox from '@/components/ui/CheckBox';
import Button from '@/components/ui/Button';
import AuthHeader from '../../_components/AuthHeader';
import { useFormContext } from 'react-hook-form';

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

const StepFourPage = () => {
  const [allChecked, setAllChecked] = useState(false);
  const [optionChecked, setOptionChecked] = useState(false);
  const [checkItems, setCheckItems] = useState<number[]>([]);

  const {
    formState: { isSubmitting }
  } = useFormContext();

  const handleCheckAll = (e: ChangeEvent<HTMLInputElement>) => {
    setAllChecked((prev) => !prev);
    const { checked } = e.target;
    if (checked) {
      setCheckItems(policyList.map((_, i) => i));
    } else {
      setCheckItems([]);
    }
  };

  const handleCheckItem = (e: ChangeEvent<HTMLInputElement>, index: number) => {
    const { checked } = e.target;
    if (checked) {
      setCheckItems((prev) => [...prev, index]);
    } else {
      setCheckItems((prev) => prev.filter((item) => item !== index));
    }
  };

  useEffect(() => {
    if (checkItems.length === policyList.length) {
      setAllChecked(true);
    } else {
      setAllChecked(false);
    }
  }, [checkItems]);

  return (
    <>
      <AuthHeader title='이용약관' pushPath='/auth/signup/step-3' currentStep='4' />
      <FlexBox flexDirection='col' className='mt-32 w-full'>
        <Checkbox
          checked={allChecked}
          onChange={handleCheckAll}
          sizes='16'
          className='w-full justify-start gap-8 rounded-xs border border-gray-300 p-16 has-[:checked]:border-primary/10 has-[:checked]:bg-primary/20'
        >
          <Text sizes='16' weight='500' className='mt-[0.2rem]'>
            필수 항목 모두 동의
          </Text>
        </Checkbox>

        <FlexBox flexDirection='col' className='mb-24 mt-10 w-full space-y-6 px-24'>
          {policyList.map((item, index) => {
            return (
              <Checkbox
                key={item.id}
                checked={checkItems.includes(index)}
                onChange={(e) => handleCheckItem(e, index)}
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
          checked={optionChecked}
          onChange={() => setOptionChecked((prev) => !prev)}
          sizes='16'
          className='w-full justify-start gap-8 rounded-xs border border-gray-300 p-16 has-[:checked]:border-primary/10 has-[:checked]:bg-primary/20'
        >
          <Text sizes='16' weight='500' className='mt-[0.2rem]'>
            [선택] 프로모션 알림 수신 동의
          </Text>
        </Checkbox>
      </FlexBox>
      <div className='absolute bottom-[3rem] left-0 right-0 mx-auto w-full px-20 pb-32 pt-24 xs:w-[520px]'>
        <Button type='submit' className='w-full' disabled={!allChecked || isSubmitting}>
          완료
        </Button>
      </div>
    </>
  );
};
export default StepFourPage;
