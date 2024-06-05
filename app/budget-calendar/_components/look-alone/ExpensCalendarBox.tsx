import React, { useState } from 'react';
import Title from '../common/Title';
import Icon from '@/components/Icon';
import FlexBox from '@/components/ui/FlexBox';
import Link from 'next/link';
import Button from '@/components/ui/Button';
import Calendar from '../shared/Calendar';
import YearMonthDropdown from '../shared/YearMonthDropdown';

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
      <Calendar year={selectedYear} month={selectedMonth} />
    </section>
  );
};

export default ExpensCalendarBox;
