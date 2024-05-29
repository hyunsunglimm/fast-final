import React from 'react';
import Title from '../common/Title';

const SharedCalendar: React.FC<{ selectedProfile: string }> = ({ selectedProfile }) => {
  return (
    <section className='px-20 pb-24'>
      <Title title={`${selectedProfile}님의 공유 가계부`} />
      <div className='mt-16 h-[30rem]'>캘린더 넣을 예정</div>
    </section>
  );
};
export default SharedCalendar;
