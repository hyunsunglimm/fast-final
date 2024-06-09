import { useState, MouseEvent } from 'react';
import { returnDate } from '@/shared/utils/dateUtils';
import { ShareDataType } from '@/shared/types/budgetCalendarType';

export const MY_MEMBER_ID = 1;

const useAddOrRemoveEmojiHooks = (reactionDate: string, initialTogetherData: ShareDataType) => {
  const [shareData, setShareData] = useState(initialTogetherData);
  const { day: reactionDay } = returnDate(reactionDate);

  const handleAddEmojiClick = (e: MouseEvent<HTMLButtonElement>) => {
    const selectEmoji = e.currentTarget.name;

    setShareData((prev) => {
      const copyShareData = structuredClone(prev);
      // 데이터에서 현재 날짜 찾기
      const findCurrentDailyItem = copyShareData.daily.find((item) => {
        const { day: findItemDay } = returnDate(item.date);
        return findItemDay === reactionDay;
      });

      if (!findCurrentDailyItem) {
        return copyShareData; // 현재 날짜 데이터가 없으면 복사된 데이터 반환
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

  return { shareData, handleAddEmojiClick };
};

export default useAddOrRemoveEmojiHooks;
