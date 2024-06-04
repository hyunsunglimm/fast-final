import React, { useState } from 'react';
import Title from '../common/Title';
import Icon from '@/components/Icon';
import FlexBox from '@/components/ui/FlexBox';
import Link from 'next/link';
import Button from '@/components/ui/Button';
import Calendar from '../shared/Calendar';

const ExpensCalendarBox = () => {
  const [selectedYear, setSelectedYear] = useState(new Date().getFullYear());
  const [selectedMonth, setSelectedMonth] = useState(new Date().getMonth() + 1);
  const [isOpen, setIsOpen] = useState(false);

  const handleToggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleYearMonthSelect = (year: number, month: number) => {
    setSelectedYear(year);
    setSelectedMonth(month);
    setIsOpen(false);
  };

  const renderOptions = () => {
    const options = [];
    const currentYear = new Date().getFullYear();
    const currentMonth = new Date().getMonth() + 1;
    for (let i = 0; i < 12; i++) {
      const year = currentYear - Math.floor((i + currentMonth - 1) / 12);
      let month = (currentMonth + 12 - i) % 12;
      if (month === 0) {
        month = 12;
      }
      options.push({ year, month });
    }
    return options.map(({ year, month }) => {
      return (
        <li key={`${year}-${month}`} onClick={() => handleYearMonthSelect(year, month)}>
          {year}년 {month}월
        </li>
      );
    });
  };

  return (
    <section className='mb-40 mt-24'>
      <Title title='소비 캘린더' justifyContent='start' className='mb-24'>
        <Icon src='/icons/system-icon/info.svg' alt='정보' size='16' />
      </Title>
      <FlexBox justifyContent='between' alignItems='center' className='relative mb-24'>
        <div>
          <div onClick={handleToggleDropdown}>
            {selectedYear !== new Date().getFullYear()
              ? `${String(selectedYear).slice(2)}년 `
              : null}
            {selectedMonth}월
          </div>
          {isOpen && <ul>{renderOptions()}</ul>}
        </div>
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
