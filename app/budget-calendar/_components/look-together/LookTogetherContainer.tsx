import React, { useState } from 'react';
import Line from '../common/Line';
import SharedCalendar from './SharedCalendar';
import SharedMembers from './SharedMembers';
import ConsumptionWeather from './ConsumptionWeather';
import RegretSpending from './RegretSpending';

const LookTogetherContainer: React.FC<{ viewMode: string }> = ({ viewMode }) => {
  // 선택중인 프로필
  const [selectedProfile, setSelectedProfile] = useState('나');

  return (
    <>
      {/* 공유한 멤버 */}
      <SharedMembers
        viewMode={viewMode}
        selectedProfile={selectedProfile}
        setSelectedProfile={setSelectedProfile}
      />
      {/* 공유 가계부 캘린더 */}
      <SharedCalendar selectedProfile={selectedProfile} />
      <Line />
      {/* 소비 날씨 */}
      <ConsumptionWeather selectedProfile={selectedProfile} />
      <Line />
      {/* 쓰고 후회한 돈 */}
      <RegretSpending />
    </>
  );
};

export default LookTogetherContainer;
