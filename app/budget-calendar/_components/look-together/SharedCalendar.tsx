import { useState } from 'react';
import Title from '../common/Title';
import FlexBox from '@/components/ui/FlexBox';
import TextButton from '@/components/ui/TextButton';
import Icon from '@/components/Icon';
import SubmitEmojiBottomSheet from './_components/SubmitEmojiBottomSheet';
import ReactionBottomSheet from './_components/ReactionBottomSheet';
import BudgetBanner from '../common/BudgetBanner';
import Calendar from '../shared/Calendar';
import YearMonthDropdown from '../shared/YearMonthDropdown';

const shareData = {
  count: 12,
  daily: [
    {
      date: '2024-06-01',
      weatherId: 1,
      reactions: [
        { memberId: 2, stickerOrEmoticonID: 4 },
        { memberId: 4, stickerOrEmoticonID: 5 }
      ]
    },
    {
      date: '2024-06-02',
      weatherId: 3,
      reactions: [
        { memberId: 3, stickerOrEmoticonID: 11 },
        { memberId: 4, stickerOrEmoticonID: 3 }
      ]
    }
    // 나머지 데이터도 추가해주세요
  ]
};

type SharedCalendarProps = {
  selectedProfile: string;
};

const SharedCalendar = ({ selectedProfile }: SharedCalendarProps) => {
  const [openReactionSheet, setOpenReactionSheet] = useState(false);
  const [openEmojiSheet, setOpenEmojiSheet] = useState(false);

  // 달력 날짜
  const [selectedYear, setSelectedYear] = useState(new Date().getFullYear());
  const [selectedMonth, setSelectedMonth] = useState(new Date().getMonth() + 1);
  const handleYearMonthSelect = (year: number, month: number) => {
    setSelectedYear(year);
    setSelectedMonth(month);
  };

  return (
    <>
      <section className='px-20 pb-24'>
        <Title title={`${selectedProfile}의 공유 가계부`} />
        <FlexBox className='mb-24 mt-16 w-full' alignItems='center' justifyContent='between'>
          <YearMonthDropdown
            selectedYear={selectedYear}
            selectedMonth={selectedMonth}
            onSelect={handleYearMonthSelect}
          />
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
            반응 {shareData.count}개
          </TextButton>
        </FlexBox>
        <BudgetBanner icon={true} text='목표 예산 중 50%를 썼어요' showArrow={false} />

        <Calendar year={selectedYear} month={selectedMonth} shareData={shareData} />
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
