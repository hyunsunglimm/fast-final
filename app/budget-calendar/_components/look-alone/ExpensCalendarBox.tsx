import React, { useState } from 'react';
import Title from '../common/Title';
import Icon from '@/components/Icon';
import FlexBox from '@/components/ui/FlexBox';
import Link from 'next/link';
import Button from '@/components/ui/Button';
import Calendar from '../shared/Calendar';
import YearMonthDropdown from '../shared/YearMonthDropdown';

const dailyData = [
  { date: '2024-06-16', income: 0, expense: 2000, weatherId: 3, reaction: false },
  { date: '2024-06-17', income: 23000, expense: 0, weatherId: 3, reaction: false },
  { date: '2024-06-18', income: 50000, expense: 20000, weatherId: 4, reaction: false },
  { date: '2024-06-1', income: 2600000, expense: 70000, weatherId: 1, reaction: false },
  { date: '2024-06-10', income: 2600000, expense: 70000, weatherId: 1, reaction: false },
  { date: '2024-06-21', income: 2600000, expense: 70000, weatherId: 1, reaction: false },
  { date: '2024-06-30', income: 2600000, expense: 70000, weatherId: 1, reaction: false }
  // 추가적인 날짜 데이터 추가
];

const weeklyData = [
  { month: 6, week: 3, income: 0, expense: 1310003 },
  { month: 6, week: 2, income: 1230002, expense: 0 },
  { month: 6, week: 1, income: 1130001, expense: 12000 },
  { month: 5, week: 5, income: 0, expense: 1520000 },
  { month: 5, week: 4, income: 1720000, expense: 0 }
];

const ExpensCalendarBox = () => {
  const [selectedYear, setSelectedYear] = useState(new Date().getFullYear());
  const [selectedMonth, setSelectedMonth] = useState(new Date().getMonth() + 1);

  const handleYearMonthSelect = (year: number, month: number) => {
    setSelectedYear(year);
    setSelectedMonth(month);
  };

  return (
    <section className='mb-40 mt-24'>
      <Title title='소비 캘린더' justifyContent='start' className='mb-24'>
        <Icon src='/icons/system-icon/info.svg' alt='정보' size='16' />
      </Title>
      <FlexBox justifyContent='between' alignItems='center' className='relative mb-24'>
        <YearMonthDropdown
          selectedYear={selectedYear}
          selectedMonth={selectedMonth}
          onSelect={handleYearMonthSelect}
        />
        <Button asChild size='xs' styled='outline'>
          <Link
            href='/budget-calendar/consumption?daily=월별&viewType=금액'
            aria-label='가계부 소비분석 페이지로 이동'
          >
            소비 분석
          </Link>
        </Button>
      </FlexBox>
      <Calendar
        year={selectedYear}
        month={selectedMonth}
        weeklyData={weeklyData}
        dailyData={dailyData}
      />
      {/* <Calendar year={selectedYear} month={selectedMonth} /> */}
    </section>
  );
};

export default ExpensCalendarBox;
