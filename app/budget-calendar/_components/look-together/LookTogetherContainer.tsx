'use client';
import dynamic from 'next/dynamic';
import React, { useEffect } from 'react';
import Line from '../common/Line';
import SharedCalendar from './SharedCalendar';
import SharedMembers from './SharedMembers';
import ConsumptionWeather from '../shared/ConsumptionWeather';
import RegretSpending from '../shared/RegretSpending';
import ReactionBottomSheet from './_components/ReactionBottomSheet';
import LoadingBackdrop from '@/components/ui/LoadingBackdrop';
import { User } from 'next-auth';
import { useSubmitEmojiContext } from '../../context/SubmitEmojiProvider';

const SubmitEmojiBottomSheet = dynamic(() => import('./_components/SubmitEmojiBottomSheet'), {
  ssr: false
});

type LookTogetherContainerProps = {
  viewMode: string;
  userData: User | undefined;
};

const LookTogetherContainer = ({ viewMode, userData }: LookTogetherContainerProps) => {
  // 선택중인 프로필
  const { selectedProfile, setSelectedProfile } = useSubmitEmojiContext();

  useEffect(() => {
    if (userData !== null && userData !== undefined) {
      setSelectedProfile({
        memberId: Number(userData.id),
        name: userData.name || '???',
        profileImageUrl: userData.image || '/icons/profile/profile.svg'
      });
    }
  }, [userData, setSelectedProfile]);

  if (selectedProfile === null) {
    return <LoadingBackdrop />;
  }
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
      <RegretSpending selectedProfile={selectedProfile} />

      {/* 이모지 남기기 바텀 시트 */}
      <SubmitEmojiBottomSheet />

      {/* 반응 보기 바텀 시트 */}
      <ReactionBottomSheet />
    </>
  );
};

export default LookTogetherContainer;
