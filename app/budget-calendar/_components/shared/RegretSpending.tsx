'use client';
import React from 'react';
import { useQuery } from '@tanstack/react-query';
import Title from '../common/Title';
import Icon from '@/components/Icon';
import { Friend } from '@/shared/types/budgetCalendarType';
import { getConsumptionRegret } from '@/service/api/calendar/share';
import { useYearMonthStore } from '@/store/yearMonthStore';
import { formatNumber } from '@/shared/utils/formatNumber';
import { RegretSpendingResponse } from '@/shared/types/response/regretSpending';
import { resgrestData } from './resgrestData';

type SharedCalendarProps = {
  selectedProfile: Friend;
};

const RegretSpending = ({ selectedProfile }: SharedCalendarProps) => {
  const { selectedYear, selectedMonth } = useYearMonthStore();
  const { data, isSuccess } = useQuery<RegretSpendingResponse>({
    queryKey: ['regret', selectedYear, selectedMonth, selectedProfile.memberId],
    queryFn: () => getConsumptionRegret(selectedYear, selectedMonth, selectedProfile.memberId)
  });

  const regretItem = resgrestData.find((item) => item.no === (isSuccess && data.regretItemImageNo));

  return (
    <section className='px-20 pt-32 text-14'>
      <Title title={`${selectedProfile.name}의 후회 소비는?`} />
      <div className='mt-40 text-center'>
        <Icon
          src={regretItem ? regretItem.img : '/icons/budget-calendar/smile.webp'}
          alt='후회'
          className='mb-40 h-[12rem] w-[12rem] rounded-none'
        />

        <h4 className='mb-4 text-18 font-700'>
          총 {formatNumber(isSuccess ? data.regretCost : 0)}원
        </h4>
        <p className='text-14'>{regretItem && regretItem.text}</p>
      </div>
    </section>
  );
};

export default RegretSpending;
