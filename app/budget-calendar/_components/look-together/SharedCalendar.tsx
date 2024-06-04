import { useState } from 'react';
import Title from '../common/Title';
import FlexBox from '@/components/ui/FlexBox';
import TextButton from '@/components/ui/TextButton';
import Icon from '@/components/Icon';
import SubmitEmojiBottomSheet from './_components/SubmitEmojiBottomSheet';
import ReactionBottomSheet from './_components/ReactionBottomSheet';
import BudgetBanner from '../common/BudgetBanner';

type SharedCalendarProps = {
  selectedProfile: string;
};

const SharedCalendar = ({ selectedProfile }: SharedCalendarProps) => {
  const [openReactionSheet, setOpenReactionSheet] = useState(false);
  const [openEmojiSheet, setOpenEmojiSheet] = useState(false);

  return (
    <>
      <section className='px-20 pb-24'>
        <Title title={`${selectedProfile}님의 공유 가계부`} />
        <FlexBox className='mb-24 mt-16 w-full' alignItems='center' justifyContent='between'>
          <div>4월</div>
          <TextButton
            className='flex items-center justify-center gap-8 text-12'
            onClick={() => setOpenReactionSheet(true)}
          >
            <FlexBox
              alignItems='center'
              justifyContent='center'
              className='h-[2.4rem] w-[2.4rem] rounded-full bg-primary'
            >
              <Icon src='/icons/profile/reaction-profile.svg' alt='프로필 아이콘' size='16' />
            </FlexBox>
            반응 12개
          </TextButton>
        </FlexBox>
        <BudgetBanner icon={true} text='목표 예산 중 50%를 썼어요' showArrow={false} />
        <div className='mt-16 h-[30rem]' onClick={() => setOpenEmojiSheet(true)}>
          캘린더 넣을 예정
        </div>
      </section>

      {/* 반응 보기 바텀 시트 */}
      <ReactionBottomSheet
        openReactionSheet={openReactionSheet}
        setOpenReactionSheet={setOpenReactionSheet}
      />

      {/* 이모지 바텀 시트 */}
      <SubmitEmojiBottomSheet
        openEmojiSheet={openEmojiSheet}
        setOpenEmojiSheet={setOpenEmojiSheet}
      />
    </>
  );
};
export default SharedCalendar;
