'use client';
import { createContext, useContext, useState, useEffect } from 'react';
import { initialTogetherData } from '../_components/look-together/data';
import { DailyDataItemType, Friend } from '@/shared/types/budgetCalendarType';
import { useYearMonthStore } from '@/store/yearMonthStore';
import { useQuery } from '@tanstack/react-query';
import { getCalendar } from '@/service/api/calendar';
import { returnDate } from '@/shared/utils/dateUtils';

export const MY_MEMBER_ID = 1;

type ValueType = {
  openTotalReactionSheet: boolean;
  openAddEmojiSheet: boolean;
  shareData: DailyDataItemType[];
  reactionDate: string;
  setOpenTotalReactionSheet: React.Dispatch<React.SetStateAction<boolean>>;
  setOpenAddEmojiSheet: React.Dispatch<React.SetStateAction<boolean>>;
  setReactionDate: React.Dispatch<React.SetStateAction<string>>;
  handleAddEmojiClick: (e: React.MouseEvent<HTMLButtonElement>, date?: string) => void;
  selectedProfile: Friend | null;
  setSelectedProfile: React.Dispatch<React.SetStateAction<Friend | null>>;
};

const SubmitEmojiContext = createContext<ValueType>({
  openTotalReactionSheet: false,
  openAddEmojiSheet: false,
  setOpenTotalReactionSheet: () => {},
  setOpenAddEmojiSheet: () => {},
  reactionDate: '',
  shareData: [],
  setReactionDate: () => {},
  handleAddEmojiClick: () => {},
  selectedProfile: {
    memberId: 0,
    name: '',
    profileImageUrl: ''
  },
  setSelectedProfile: () => {}
});

const SubmitEmojiProvider = ({ children }: { children: React.ReactNode }) => {
  const [openTotalReactionSheet, setOpenTotalReactionSheet] = useState(false);
  const [openAddEmojiSheet, setOpenAddEmojiSheet] = useState(false);
  const [reactionDate, setReactionDate] = useState('');
  const [shareData, setShareData] = useState<DailyDataItemType[]>([]);
  const [selectedProfile, setSelectedProfile] = useState<Friend | null>(null);
  const { selectedYear, selectedMonth } = useYearMonthStore();

  const { data: dailyData = [] } = useQuery<DailyDataItemType[]>({
    queryKey: ['getCalendar', selectedYear, selectedMonth, selectedProfile?.memberId],
    queryFn: () => getCalendar(selectedYear, selectedMonth, selectedProfile?.memberId)
  });

  useEffect(() => {
    if (dailyData.length > 0) {
      setShareData(() => {
        const mergedData = dailyData.map((dailyItem) => {
          const reactionData = initialTogetherData.find((item) => item.date === dailyItem.date);
          return reactionData ? { ...dailyItem, reactions: reactionData.reactions } : dailyItem;
        });
        return mergedData;
      });
    }
  }, [dailyData]);

  const { day: addEmojiDate } = returnDate(reactionDate);

  const handleAddEmojiClick = (e: React.MouseEvent<HTMLButtonElement>, date?: string) => {
    const selectEmoji = e.currentTarget.name;
    const { day: viewEmojiDate } = returnDate(date);

    const currentClickDate = date ? viewEmojiDate : addEmojiDate;

    setShareData((prev) => {
      const copyShareData = structuredClone(prev);

      // 데이터에서 현재 날짜 찾기
      const findCurrentDailyItem = copyShareData.find((item) => {
        const { day: findItemDay } = returnDate(item.date);
        return findItemDay === currentClickDate;
      });

      if (!findCurrentDailyItem) {
        return copyShareData; // 현재 날짜 데이터가 없으면 복사된 데이터 반환
      }

      // Ensure reactions is initialized
      if (!findCurrentDailyItem.reactions) {
        findCurrentDailyItem.reactions = [];
      }

      // 날짜에서 클릭한 아이템 찾기
      const existingReaction = findCurrentDailyItem.reactions.find(
        (reaction) => reaction.stickerOrEmoticonID === selectEmoji
      );

      if (existingReaction) {
        // 날짜에 해당 이모지가 있지만, 멤버 목록에 내 아이디 없으면 아이디 추가
        if (!existingReaction.memberIds.includes(MY_MEMBER_ID)) {
          existingReaction.memberIds.push(MY_MEMBER_ID);
          return copyShareData;
        }

        // 멤버 목록에 내 아이디 있으면 아이디 제거
        existingReaction.memberIds = existingReaction.memberIds.filter((id) => id !== MY_MEMBER_ID);

        // 멤버 아이디가 없으면 해당 이모지 삭제
        if (existingReaction.memberIds.length === 0) {
          findCurrentDailyItem.reactions = findCurrentDailyItem.reactions.filter(
            (reaction) => reaction.stickerOrEmoticonID !== selectEmoji
          );
        }

        return copyShareData;
      }

      // 날짜에 해당 이모지 없으면 내 아이디와 함께 이모지 추가
      findCurrentDailyItem.reactions.push({
        stickerOrEmoticonID: selectEmoji,
        memberIds: [MY_MEMBER_ID]
      });

      return copyShareData;
    });
  };

  const value = {
    openTotalReactionSheet,
    openAddEmojiSheet,
    setOpenAddEmojiSheet,
    setOpenTotalReactionSheet,
    shareData,
    reactionDate,
    setReactionDate,
    handleAddEmojiClick,
    selectedProfile,
    setSelectedProfile
  };

  return <SubmitEmojiContext.Provider value={value}>{children}</SubmitEmojiContext.Provider>;
};

export default SubmitEmojiProvider;

export const useSubmitEmojiContext = () => {
  return useContext(SubmitEmojiContext);
};
