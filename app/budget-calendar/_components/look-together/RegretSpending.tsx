import React from 'react';
import Title from '../common/Title';
import Icon from '@/components/Icon';

const RegretSpending = () => {
  return (
    <section className='px-20 py-32 text-14'>
      <Title title='쓰고 후회한 돈' />
      <div className='mt-40 text-center'>
        <Icon
          src='/icons/budget-calendar/macBook.svg'
          alt='맥북'
          className='mb-40 h-[16rem] w-[16rem] rounded-none'
        />
        <div className='mb-16'>
          <h4 className='mb-4 text-18 font-700'>최신형 맥북</h4>
          <p>만큼 아낄 수 있었어요</p>
        </div>
        <p className='text-12 text-gray-500'>총 1,000,000원</p>
      </div>
    </section>
  );
};

export default RegretSpending;
