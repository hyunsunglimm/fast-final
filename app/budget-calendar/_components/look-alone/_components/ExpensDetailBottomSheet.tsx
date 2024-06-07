import React from 'react';
import BottomSheet from '@/components/BottomSheet';
import Text from '@/components/ui/Text';
import Icon from '@/components/Icon';
import FlexBox from '@/components/ui/FlexBox';
import { useQuery } from '@tanstack/react-query';
import { getSpendingDetail } from '@/service/api/calendar';
import { returnDate } from '@/shared/utils/dateUtils';
import MyWalletSkeleton from '@/app/(home)/(default-home)/_components/MyWalletSkeleton';

type ExpensDetailBottomSheetProps = {
  historyId: string;
  openDetailBottomSheet: boolean;
  setOpenDetailBottomSheet: React.Dispatch<React.SetStateAction<boolean>>;
};

const ExpensDetailBottomSheet = ({
  historyId,
  openDetailBottomSheet,
  setOpenDetailBottomSheet
}: ExpensDetailBottomSheetProps) => {
  const { data: expensDetailData, isFetching } = useQuery({
    queryKey: ['expensDetail', historyId],
    queryFn: () => getSpendingDetail(historyId),
    enabled: openDetailBottomSheet
  });

  const { year, month, day, hour, minute } = returnDate(expensDetailData?.usedAt);

  const imgSrc = expensDetailData?.historyCategoryId.imageUrlTypeNo
    ? `/icons/categories/background/categories-${expensDetailData?.historyCategoryId.imageUrlTypeNo}.svg`
    : '/icons/categories/background/categories-14.svg';

  return (
    <BottomSheet
      title='소비내역'
      buttonLabel='변경하기'
      isOpen={openDetailBottomSheet}
      onClose={() => setOpenDetailBottomSheet(false)}
    >
      {isFetching ? (
        <MyWalletSkeleton />
      ) : (
        <>
          <FlexBox alignItems='center' className='mb-8 gap-8'>
            <Icon src={imgSrc} alt={`${expensDetailData?.historyCategoryId.type} 아이콘`} />
            <Text>{expensDetailData?.place}</Text>
          </FlexBox>
          <Text sizes='24' weight='700'>
            {expensDetailData?.cost.toLocaleString()} 원
          </Text>

          <ul className='mt-40 flex w-full flex-col'>
            <ListElement label='카테고리' detail={expensDetailData?.historyCategoryId.name ?? ''} />
            <ListElement label='메모' detail={expensDetailData?.memo ?? ''} />
            <ListElement
              label='거래처'
              detail={expensDetailData?.place ?? ''}
              isColorText={false}
            />
            <ListElement
              label='결제 수단'
              detail={expensDetailData?.payType ?? ''}
              isColorText={false}
            />
            <ListElement
              label='날짜'
              detail={` ${year}년 ${month}월 ${day}일 ${hour}:${minute}`}
              isColorText={false}
              isIcon={false}
            />
          </ul>
        </>
      )}
    </BottomSheet>
  );
};

export default ExpensDetailBottomSheet;

type ListElementProps = {
  label: string;
  detail: string;
  isIcon?: boolean;
  isColorText?: boolean;
};

const ListElement = ({ label, detail, isIcon = true, isColorText = true }: ListElementProps) => {
  const textColorClass = isColorText ? 'text-primary' : 'text-gray-700';
  return (
    <li className='flex w-full items-center justify-between py-16'>
      <Text sizes='16' weight='700' className='text-gray-700'>
        {label}
      </Text>
      <FlexBox alignItems='center' className='gap-8'>
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
