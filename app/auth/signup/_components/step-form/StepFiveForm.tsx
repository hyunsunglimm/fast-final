import { ChangeEvent, useState, useEffect } from 'react';
import FlexBox from '@/components/ui/FlexBox';
import Text from '@/components/ui/Text';
import { CheckIcon, ArrowRightIcon } from '@/components/icons';
import { useFormContext } from 'react-hook-form';
import Button from '@/components/ui/Button';
import { useRouter } from 'next/navigation';
const policyList = [
  {
    id: 'service',
    title: '[필수] (프로덕트명) 서비스 필수 동의'
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
export const StepFiveForm = () => {
  const router = useRouter();
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
      <FlexBox flexDirection='col' className='w-full'>
        <Text sizes='20'>이용약관을 확인하고 동의해주세요</Text>
        <label className='has-[:checked]:text-green-500 has-[:checked]:ring-indigo-200'>
          <FlexBox alignItems='center' className='gap-x-4 p-0'>
            <input
              {...register('selectAll')}
              checked={isAllChecked}
              onChange={handleSelectAll}
              type='checkbox'
              className='hidden'
            />
            <CheckIcon
              fill={isAllChecked ? '#51D868' : '#fff'}
              stroke={isAllChecked ? '#fff' : '#b7b7b7'}
            />
            <Text sizes='18'>필수 항목 모두 동의하기</Text>
          </FlexBox>
        </label>
        <FlexBox
          flexDirection='col'
          className='w-full rounded-2xl border border-black px-0 py-0 [&>*]:border-b [&>*]:border-black'
        >
          {policyList.map((item, index) => {
            const isChecked = selectedOptionsArray[index] === true;
            const fillClass = isChecked ? 'fill-[#51D868]' : 'fill-white';
            const strokeClass = isChecked ? 'stroke-white' : 'stroke-[#b7b7b7]';
            return (
              <div
                key={item.id}
                className='flex w-full items-center justify-between p-5 last:border-b-0'
              >
                <label className='flex cursor-pointer items-center justify-between has-[:checked]:text-green-500 has-[:checked]:ring-indigo-200'>
                  <FlexBox alignItems='center' className='gap-x-4 p-0'>
                    <input
                      {...register(`selectOptions.${index}`)}
                      type='checkbox'
                      className='hidden'
                      id={item.id}
                    />
                    <CheckIcon className={`${fillClass} ${strokeClass}`} />
                    <Text sizes='18'>{item.title}</Text>
                  </FlexBox>
                </label>
                <ArrowRightIcon className='fill-none stroke-black' width={8} height={12} />
              </div>
            );
          })}
        </FlexBox>
        <FlexBox
          alignItems='center'
          justifyContent='between'
          className='w-full rounded-2xl border border-black p-5'
        >
          <label className='flex cursor-pointer items-center justify-between has-[:checked]:text-green-500 has-[:checked]:ring-indigo-200'>
            <FlexBox alignItems='center' className='gap-x-4 p-0'>
              <input type='checkbox' className='peer/promotion hidden' id='promotion' />
              <CheckIcon className='fill-white stroke-[#b7b7b7] peer-checked/promotion:fill-[#51D868] peer-checked/promotion:stroke-white' />
              <Text sizes='18'>[선택] 프로모션 알림 수신 동의</Text>
            </FlexBox>
          </label>
          <ArrowRightIcon className='fill-none stroke-black' width={8} height={12} />
        </FlexBox>

        <FlexBox className='w-full gap-x-4'>
          <Button
            type='button'
            className='disabled:cursor-not-allowed disabled:bg-gray-300'
            onClick={() => router.back()}
          >
            이전
          </Button>
          <Button
            type='submit'
            disabled={!isAllChecked}
            className='w-[21rem] shrink-0 disabled:cursor-not-allowed disabled:bg-gray-300'
          >
            완료
          </Button>
        </FlexBox>
      </FlexBox>
    </>
  );
};
