import { MouseEvent, useState } from 'react';
import FlexBox from '@/components/ui/FlexBox';
import Icon from '@/components/Icon';
import { formatDate, groupByDate } from '@/shared/utils/dateUtils';
import Title from '../common/Title';
import ExpenseSummary from './ExpensSummary';
import ExpenseItem from './ExpenseItem';
import { useQuery } from '@tanstack/react-query';
import { getCalendarHistroy } from '@/service/api/calendar';
import ExpensDetailBottomSheet from './_components/ExpensDetailBottomSheet';
import ExpensListSkeleton from './_components/ExpensListSkeleton';

const ExpensListBox = () => {
  const { data: historyData, isLoading } = useQuery({
    queryKey: ['calendarHistory'],
    queryFn: getCalendarHistroy
  });
  const [historyId, setHistoryId] = useState('');
  const [openDetailBottomSheet, setOpenDetailBottomSheet] = useState(false);

  const groupedExpenses = groupByDate(historyData?.historyList);

  const handleOpenBottomSheet = (e: MouseEvent<HTMLButtonElement>) => {
    setHistoryId(e.currentTarget.id);
    setOpenDetailBottomSheet(true);
  };

  if (isLoading) {
    return <ExpensListSkeleton />;
  }

  return (
    <>
      <ExpensListSkeleton />
      <section className='px-20 py-24 text-16'>
        <Title title='소비 내역' className='mb-32'>
          <FlexBox alignItems='center' className='cursor-pointer text-14 text-gray-500'>
            <Icon src='/icons/system-icon/plus-gray.svg' alt='추가' size='16' />
            <p className='ml-4'>내역추가</p>
          </FlexBox>
        </Title>
        <FlexBox justifyContent='between' className='gap-[1.6rem]'>
          <ExpenseSummary label='지출' amount={historyData?.totalSpent} />
          <ExpenseSummary label='수입' amount={historyData?.totalEarned} />
        </FlexBox>
        {Object.entries(groupedExpenses).map(([date, expenses]) => {
          return (
            <div key={date} className='mt-32'>
              <div className='flex items-center gap-[0.8rem]'>
                <span className='text-14 text-gray-500'>{formatDate(date)}</span>
              </div>
              <ul>
                {expenses.map((data, index) => (
                  <ExpenseItem key={index} data={data} onClick={handleOpenBottomSheet} />
                ))}
              </ul>
            </div>
          );
        })}
      </section>
      <ExpensDetailBottomSheet
        historyId={historyId}
        openDetailBottomSheet={openDetailBottomSheet}
        setOpenDetailBottomSheet={setOpenDetailBottomSheet}
      />
    </>
  );
};

export default ExpensListBox;
