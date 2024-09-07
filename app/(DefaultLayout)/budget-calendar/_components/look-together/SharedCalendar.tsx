import { MouseEvent, useMemo } from 'react';
import { useQuery } from '@tanstack/react-query';
import Title from '../common/Title';
import FlexBox from '@/components/ui/FlexBox';
import TextButton from '@/components/ui/TextButton';
import Icon from '@/components/Icon';
import BudgetBanner from '../common/BudgetBanner';
import Calendar from '../shared/Calendar';
import YearMonthDropdown from '../shared/YearMonthDropdown';
import { useSubmitEmojiContext } from '../../context/SubmitEmojiProvider';
import { getBudgetInquiry } from '@/service/api/budget';
import { BudgetInquiryResponse } from '@/shared/types/response/targetBudget';
import { Friend } from '@/shared/types/budgetCalendarType';
import { useYearMonthStore } from '@/store/yearMonthStore';

type SharedCalendarProps = {
  selectedProfile: Friend;
};

const SharedCalendar = ({ selectedProfile }: SharedCalendarProps) => {
  const { setOpenAddEmojiSheet, setOpenTotalReactionSheet, shareData, setReactionDate } =
    useSubmitEmojiContext();

  const totalCount = useMemo(() => {
    return shareData.reduce((total, item) => {
      const itemCount =
        item.reactions?.reduce((sum, reaction) => sum + reaction.memberIds.length, 0) || 0;
      return total + itemCount;
    }, 0);
  }, [shareData]);

  const { selectedYear, selectedMonth, setSelectedYearMonth } = useYearMonthStore();
  const handleYearMonthSelect: (year: number, month: number) => void = (year, month) => {
    setSelectedYearMonth(year, month);
  };

  const handleReactionSheet = (e: MouseEvent<HTMLDivElement>) => {
    setReactionDate(e.currentTarget.id);
    setOpenAddEmojiSheet((prev) => !prev);
  };

  const { data: cost } = useQuery<BudgetInquiryResponse>({
    queryKey: ['getBudgetInquiry', selectedYear, selectedMonth, selectedProfile.memberId],
    queryFn: () => getBudgetInquiry(selectedYear, selectedMonth, selectedProfile.memberId)
  });

  return (
    <>
      <section className='px-20 pb-24'>
        <Title title={`${selectedProfile.name}의 공유 가계부`} />
        <FlexBox className='mb-24 mt-16 w-full' alignItems='center' justifyContent='between'>
          <YearMonthDropdown
            selectedYear={selectedYear}
            selectedMonth={selectedMonth}
            onSelect={handleYearMonthSelect}
          />
          <TextButton
            className='flex items-center justify-center gap-8 text-12'
            onClick={() => setOpenTotalReactionSheet(true)}
          >
            <FlexBox
              alignItems='center'
              justifyContent='center'
              className='h-[2.4rem] w-[2.4rem] rounded-full bg-primary'
            >
              <Icon src='/icons/profile/reaction-profile.svg' alt='프로필 아이콘' size='16' />
            </FlexBox>
            반응 {totalCount}개
          </TextButton>
        </FlexBox>
        <BudgetBanner
          icon={true}
          text={`목표 예산 중 ${cost ? cost.used : '?'}%를 썼어요`}
          showArrow={false}
          className='mb-24'
        />
        <Calendar
          year={selectedYear}
          month={selectedMonth}
          shareData={shareData}
          onClick={handleReactionSheet}
        />
      </section>
    </>
  );
};
export default SharedCalendar;
