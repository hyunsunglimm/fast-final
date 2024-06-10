import React from 'react';
import Title from '../common/Title';
import Icon from '@/components/Icon';
import { Friend } from '@/shared/types/budgetCalendarType';

type SharedCalendarProps = {
  selectedProfile: Friend;
};

const RegretSpending = ({ selectedProfile }: SharedCalendarProps) => {
  return (
    <section className='px-20 pt-32 text-14'>
      <Title title={`${selectedProfile.name}의 후회 소비는?`} />
      <div className='mt-40 text-center'>
        <Icon
          src='/icons/budget-calendar/pencil.webp'
          alt='맥북'
          className='mb-40 h-[12rem] w-[12rem] rounded-none'
        />

        <h4 className='mb-4 text-18 font-700'>총 122,000원</h4>
        <p className='text-14'>애플펜슬 만큼 아낄 수 있었어요</p>
      </div>
    </section>
  );
};

export default RegretSpending;
