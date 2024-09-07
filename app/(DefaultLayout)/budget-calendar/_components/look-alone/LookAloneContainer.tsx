'use client';
import { useState, useEffect, useRef, useCallback } from 'react';
import { useRouter, useSearchParams, usePathname } from 'next/navigation';
import { useQuery } from '@tanstack/react-query';
import dynamic from 'next/dynamic';
import Tab from '@/components/ui/Tab';
import Line from '../common/Line';
import BudgetBanner from '../common/BudgetBanner';
import ExpensCalendarBox from './ExpensCalendarBox';
import ManagementBottomSheet from './ManagementBottomSheet';
import { getBudgetInquiry } from '@/service/api/budget';
import { BudgetInquiryResponse } from '@/shared/types/response/targetBudget';
import LoadingBackdrop from '@/components/ui/LoadingBackdrop';
import useThrottle from '@/shared/hooks/useThrottle';
const TargetModifyBottomSheet = dynamic(() => import('./TargetModifyBottomSheet'), { ssr: false });
const ExpensListBox = dynamic(() => import('./ExpensListBox'), { ssr: false });
const TargetBudgetBottomSheet = dynamic(() => import('./TargetBudgetBottomSheet'), { ssr: false });

const LookAloneContainer = () => {
  const pathname = usePathname();
  const router = useRouter();
  const searchParams = useSearchParams();
  const initialDisplayMode = searchParams.get('displayMode') || '캘린더 보기';

  // 상태 관리
  const [budgetSet, setBudgetSet] = useState(false); // 예산 목표가 설정되었는지 여부
  const [showPopup, setShowPopup] = useState(false);
  const [modifyPopup, setModifyPopup] = useState(false);
  const [displayMode, setDisplayMode] = useState(initialDisplayMode); // 현재 표시 모드

  // year, month
  const [selectedYear, setSelectedYear] = useState(new Date().getFullYear());
  const [selectedMonth, setSelectedMonth] = useState(new Date().getMonth() + 1);

  const handleYearMonthSelect = (year: number, month: number) => {
    setSelectedYear(year);
    setSelectedMonth(month);
  };

  const {
    data: cost,
    refetch,
    isLoading
  } = useQuery<BudgetInquiryResponse>({
    retry: 1,
    queryKey: ['getBudgetInquiry', selectedYear, selectedMonth],
    queryFn: () => getBudgetInquiry(selectedYear, selectedMonth)
  });

  useEffect(() => {
    if (budgetSet) {
      refetch();
    }
  }, [budgetSet, refetch]);

  const handleModifyPopupClose = () => {
    setModifyPopup(false);
    refetch(); // 목표 예산 수정 후 데이터 다시 가져오기
  };

  // 탭 변경
  const calendarRef = useRef<HTMLDivElement | null>(null);
  const listRef = useRef<HTMLDivElement | null>(null);
  const headerHeight =
    typeof window !== 'undefined'
      ? 11.8 * parseFloat(getComputedStyle(document.documentElement).fontSize)
      : 0; // 8.8rem to px

  const handleTabChange = (newDisplayMode: string) => {
    setDisplayMode(newDisplayMode);
    const params = new URLSearchParams(searchParams.toString());
    params.set('displayMode', newDisplayMode);
    router.replace(`${pathname}?${params.toString()}`);
    if (newDisplayMode === '캘린더 보기' && calendarRef.current) {
      window.scrollTo({ top: calendarRef.current.offsetTop - headerHeight, behavior: 'smooth' });
    } else if (newDisplayMode === '내역 보기' && listRef.current) {
      window.scrollTo({ top: listRef.current.offsetTop - headerHeight, behavior: 'smooth' });
    }
  };

  const handleScroll = useThrottle(
    useCallback(() => {
      if (calendarRef.current && listRef.current) {
        const calendarTop = calendarRef.current.getBoundingClientRect().top;
        const listTop = listRef.current.getBoundingClientRect().top;
        const tabHeight = headerHeight; // 헤더 높이

        if (
          calendarTop <= tabHeight &&
          calendarTop >= -calendarRef.current.offsetHeight + tabHeight
        ) {
          setDisplayMode('캘린더 보기');
          if (displayMode !== '캘린더 보기') {
            const params = new URLSearchParams(searchParams.toString());
            params.set('displayMode', '캘린더 보기');
            router.replace(`${pathname}?${params.toString()}`, { scroll: false });
          }
        } else if (listTop <= tabHeight && listTop >= -listRef.current.offsetHeight + tabHeight) {
          setDisplayMode('내역 보기');
          if (displayMode !== '내역보기') {
            const params = new URLSearchParams(searchParams.toString());
            params.set('displayMode', '내역 보기');
            router.replace(`${pathname}?${params.toString()}`, { scroll: false });
          }
        }
      }
    }, [displayMode, headerHeight, pathname, router, searchParams]),
    300
  );

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [handleScroll]);

  if (isLoading) {
    return <LoadingBackdrop />;
  }

  const isCurrentMonth =
    selectedYear === new Date().getFullYear() && selectedMonth === new Date().getMonth() + 1;

  return (
    <>
      <div className='sticky top-[4.4rem] z-20 bg-white px-20 pb-24 pt-16'>
        <Tab
          pageParams='캘린더 보기'
          array={['캘린더 보기', '내역 보기']}
          type='box'
          tabKey='displayMode'
          onTabChange={handleTabChange}
        />
      </div>
      <div className='px-20 text-12' ref={calendarRef}>
        {cost ? (
          <BudgetBanner
            icon={true}
            text={`목표 예산 중 ${cost.used}%를 썼어요`}
            showArrow={true}
            onClick={() => setShowPopup(true)}
          />
        ) : (
          isCurrentMonth && (
            <BudgetBanner
              icon={true}
              text='목표 예산을 설정할까요?'
              showArrow={true}
              onClick={() => setShowPopup(true)}
            />
          )
        )}
        <ExpensCalendarBox
          budgetSet={budgetSet}
          selectedYear={selectedYear}
          selectedMonth={selectedMonth}
          handleYearMonthSelect={handleYearMonthSelect}
        />
      </div>
      <Line />
      <div ref={listRef}>
        <ExpensListBox />
      </div>
      {cost ? (
        <ManagementBottomSheet
          showPopup={showPopup}
          setShowPopup={setShowPopup}
          setModifyPopup={setModifyPopup}
        />
      ) : (
        <TargetBudgetBottomSheet
          showPopup={showPopup}
          setShowPopup={setShowPopup}
          setBudgetSet={setBudgetSet}
        />
      )}
      {modifyPopup && (
        <TargetModifyBottomSheet
          modifyPopup={modifyPopup}
          setModifyPopup={setModifyPopup}
          setShowPopup={setShowPopup}
          onClose={handleModifyPopupClose}
        />
      )}
    </>
  );
};

export default LookAloneContainer;
