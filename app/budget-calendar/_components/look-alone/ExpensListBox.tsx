import { MouseEvent, useEffect, useState, useRef } from 'react';
import FlexBox from '@/components/ui/FlexBox';
import Icon from '@/components/Icon';
import { formatDate, groupByDate, returnDate } from '@/shared/utils/dateUtils';
import Title from '../common/Title';
import ExpenseSummary from './ExpensSummary';
import ExpenseItem from './ExpenseItem';
import { useInfiniteQuery } from '@tanstack/react-query';
import { getCalendarHistroy } from '@/service/api/calendar';
import ExpensDetailBottomSheet from './_components/ExpensDetailBottomSheet';
import ExpensListSkeleton from './_components/ExpensListSkeleton';
import RoundedSkeleton from '@/app/create-bucket/_components/RoundedSkeleton';

const ExpensListBox = () => {
  const {
    data: historyData,
    isFetching,
    isLoading,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage
  } = useInfiniteQuery({
    queryKey: ['calendarHistory'],
    queryFn: ({ pageParam }) => getCalendarHistroy(pageParam),
    getNextPageParam: (lastPage) => {
      const currentPage = lastPage.historyList.currentPage;
      const totalPages = lastPage.historyList.totalPages;
      return currentPage < totalPages ? currentPage + 1 : undefined;
    },
    initialPageParam: 1
  });
  const loadMoreRef = useRef<HTMLDivElement | null>(null);
  const [historyId, setHistoryId] = useState('');
  const [openDetailBottomSheet, setOpenDetailBottomSheet] = useState(false);

  useEffect(() => {
    const io = new IntersectionObserver((entries) => {
      entries.forEach(async (entry) => {
        if (entry.isIntersecting && hasNextPage && !isFetchingNextPage) {
          fetchNextPage();
        }
      });
    });

    const currentRef = loadMoreRef.current;
    if (currentRef) {
      io.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        io.unobserve(currentRef);
      }
      io.disconnect();
    };
  }, [hasNextPage, isFetchingNextPage, fetchNextPage]);
  if (isLoading) {
    return <ExpensListSkeleton />;
  }
  const pageResults = historyData?.pages.flatMap((page) => page.historyList);
  const elementsResults = pageResults?.flatMap((item) => item.elements);
  const groupedExpenses = groupByDate(elementsResults);

  const handleOpenBottomSheet = (e: MouseEvent<HTMLButtonElement>) => {
    setHistoryId(e.currentTarget.id);
    setOpenDetailBottomSheet(true);
  };

  return (
    <>
      <section className='px-20 py-24 text-16'>
        <Title title='소비 내역' className='mb-32'>
          <FlexBox alignItems='center' className='cursor-pointer text-14 text-gray-500'>
            <Icon src='/icons/system-icon/plus-gray.svg' alt='추가' size='16' />
            <p className='ml-4'>내역추가</p>
          </FlexBox>
        </Title>
        <FlexBox justifyContent='between' className='gap-[1.6rem]'>
          <ExpenseSummary label='지출' amount={historyData?.pages[0].totalSpent} />
          <ExpenseSummary label='수입' amount={historyData?.pages[0].totalEarned} />
        </FlexBox>
        {Object.entries(groupedExpenses).map(([date, expenses]) => {
          const { month } = returnDate(date);
          return (
            <div key={date} className='mt-32'>
              <div className='flex items-center gap-[0.8rem]'>
                <span className='text-14 text-gray-500'>
                  {month}월 {formatDate(date)}
                </span>
              </div>
              <ul>
                {expenses.map((data) => (
                  <ExpenseItem key={data.id} data={data} onClick={handleOpenBottomSheet} />
                ))}
              </ul>
            </div>
          );
        })}
        <div
          ref={loadMoreRef}
          style={{
            display: hasNextPage ? 'block' : 'none'
          }}
        ></div>
        {isFetching && (
          <FlexBox className='mt-24 gap-24' flexDirection='col'>
            {[...Array(6)].map((_, index) => (
              <RoundedSkeleton key={index} />
            ))}
          </FlexBox>
        )}
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
