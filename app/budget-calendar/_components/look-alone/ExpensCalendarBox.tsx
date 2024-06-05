import React, { useState, useEffect, useRef } from 'react';
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
  const dropdownRef = useRef<HTMLDivElement | null>(null);

  const handleToggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleYearMonthSelect = (year: number, month: number) => {
    setSelectedYear(year);
    setSelectedMonth(month);
    setIsOpen(false);
  };

  const handleClickOutside = (event: MouseEvent) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

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
        <li
          key={`${year}-${month}`}
          onClick={() => handleYearMonthSelect(year, month)}
          className='py-4'
        >
          {String(year).slice(2)}년 {month}월
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
        <div className='relative' ref={dropdownRef}>
          <FlexBox alignItems='center' onClick={handleToggleDropdown} className='text-16 font-700'>
            {selectedYear !== new Date().getFullYear()
              ? `${String(selectedYear).slice(2)}년 `
              : null}
            {selectedMonth}월
            <Icon
              src='/icons/system-icon/arrow/bxs-down-arrow.svg'
              alt='화살표'
              className='ml-2 h-[0.6rem] w-[0.8rem] rounded-none'
            />
          </FlexBox>
          {isOpen && (
            <ul className='absolute z-[2] w-[10rem] rounded-sm border bg-white px-4 py-8 text-center text-14'>
              {renderOptions()}
            </ul>
          )}
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
