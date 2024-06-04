import { useState } from 'react';
import Title from '../common/Title';
import FlexBox from '@/components/ui/FlexBox';
import TextButton from '@/components/ui/TextButton';
import Icon from '@/components/Icon';
import BottomSheet from '@/components/BottomSheet';
import SubmitEmojiBottomSheet from './_components/SubmitEmojiBottomSheet';
type SharedCalendarProps = {
  selectedProfile: string;
};

const SharedCalendar = ({ selectedProfile }: SharedCalendarProps) => {
  const [openReactionBottomSheet, setOpenReactionBottomShee] = useState(false);

  const handleOpenReactionBottomSheet = () => {
    // unicodeEmoji.getEmojis();
    setOpenReactionBottomShee((prev) => !prev);
  };

  return (
    <>
      <section className='px-20 pb-24'>
        <Title title={`${selectedProfile}님의 공유 가계부`} />
        <FlexBox className='w-full' justifyContent='between'>
          <div>4월</div>
          <TextButton
            className='flex items-center justify-center gap-8 text-12'
            onClick={handleOpenReactionBottomSheet}
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
        <div className='mt-16 h-[30rem]'>캘린더 넣을 예정</div>
      </section>
      <BottomSheet
        buttonLabel=''
        title='반응 보기'
        isButtonShow={false}
        isOpen={openReactionBottomSheet}
        onClose={handleOpenReactionBottomSheet}
      >
        dddd
      </BottomSheet>
      <SubmitEmojiBottomSheet />
    </>
  );
};
export default SharedCalendar;
