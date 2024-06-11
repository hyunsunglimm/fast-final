import { AriaRole } from 'react';
import Icon from '@/components/Icon';
import FlexBox from '@/components/ui/FlexBox';
import Text from '@/components/ui/Text';
import { returnDate } from '@/shared/utils/dateUtils';
import { SpendingDetailResponse } from '@/shared/types/response/calendarHistroy';

type ExpenseDetailsProps = {
  expenseDetailData: SpendingDetailResponse | undefined;
  setIsChangingCategory: React.Dispatch<React.SetStateAction<boolean>>;
};

const ExpenseDetails = ({ expenseDetailData, setIsChangingCategory }: ExpenseDetailsProps) => {
  const { year, month, day, hour, minute } = returnDate(expenseDetailData?.usedAt);

  const imgSrc = expenseDetailData?.historyCategoryId.imageUrlTypeNo
    ? `/icons/categories/background/categories-${expenseDetailData?.historyCategoryId.imageUrlTypeNo}.svg`
    : '/icons/categories/background/categories-14.svg';

  const hourText = hour < 10 ? '0' + hour : hour;
  const minuteText = minute < 10 ? '0' + minute : minute;

  return (
    <>
      <FlexBox alignItems='center' className='mb-8 gap-8'>
        <Icon src={imgSrc} alt={`${expenseDetailData?.historyCategoryId.type} 아이콘`} />
        <Text>{expenseDetailData?.place}</Text>
      </FlexBox>
      <Text sizes='24' weight='700'>
        {expenseDetailData && expenseDetailData?.cost > 0
          ? `+${expenseDetailData?.cost.toLocaleString()}`
          : expenseDetailData?.cost.toLocaleString()}
        원
      </Text>
      <ul className='mt-40 flex w-full flex-col'>
        <ListElement
          onClick={() => setIsChangingCategory(true)}
          label='카테고리'
          detail={expenseDetailData?.historyCategoryId.name ?? ''}
          role='button'
        />
        <ListElement label='메모' detail='메모를 남겨보세요.' role='button' />
        <ListElement
          label='거래처'
          detail={expenseDetailData?.place ?? ''}
          isColorText={false}
          role='button'
        />
        <ListElement
          label='결제 수단'
          detail={expenseDetailData?.payType ?? ''}
          isColorText={false}
          role='button'
        />
        <ListElement
          label='날짜'
          detail={` ${year}년 ${month}월 ${day}일 ${hourText}:${minuteText}`}
          isColorText={false}
          isIcon={false}
        />
      </ul>
    </>
  );
};

export default ExpenseDetails;

type ListElementProps = {
  label: string;
  detail: string;
  isIcon?: boolean;
  isColorText?: boolean;
  onClick?: () => void;
  role?: AriaRole;
};

const ListElement = ({
  label,
  detail,
  isIcon = true,
  isColorText = true,
  onClick,
  role = 'none'
}: ListElementProps) => {
  const textColorClass = isColorText ? 'text-primary' : 'text-gray-700';
  return (
    <li className='flex w-full items-center justify-between py-16'>
      <Text sizes='16' weight='700' className='text-gray-700'>
        {label}
      </Text>

      <FlexBox onClick={onClick} role={role} alignItems='center' className='gap-8'>
        <Text sizes='16' weight='400' className={`${textColorClass}`}>
          {detail}
        </Text>
        {isIcon && (
          <Icon
            role='button'
            src='/icons/system-icon/arrow/arrow-right.svg'
            alt='화살표 아이콘'
            size='16'
          />
        )}
      </FlexBox>
    </li>
  );
};
