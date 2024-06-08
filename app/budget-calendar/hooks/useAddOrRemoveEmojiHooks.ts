import { useState, MouseEvent } from 'react';
import { returnDate } from '@/shared/utils/dateUtils';
import { ShareDataType } from '@/shared/types/budgetCalendarType';

const useAddOrRemoveEmojiHooks = (reactionDate: string, initialTogetherData: ShareDataType) => {
  const [shareData, setShareData] = useState(initialTogetherData);
  const { day: reactionDay } = returnDate(reactionDate);

  /** 반응에 이모지 추가 */
  const handleAddEmojiClick = (e: MouseEvent<HTMLButtonElement>) => {
    const selectEmoji = e.currentTarget.name;

    setShareData((prev) => {
      const copyShareData = { ...prev, daily: [...prev.daily] };
      const findDaily = copyShareData.daily.find((item) => {
        const { day: findItemDay } = returnDate(item.date);
        return findItemDay === reactionDay;
      });

      if (findDaily) {
        const updatedFindDaily = { ...findDaily, reactions: [...findDaily.reactions] };
        const existingReaction = updatedFindDaily.reactions.find(
          (reaction) => reaction.stickerOrEmoticonID === selectEmoji
        );

        if (existingReaction) {
          existingReaction.count += 1;
        } else {
          updatedFindDaily.reactions.push({
            stickerOrEmoticonID: selectEmoji,
            memberId: 1,
            count: 1
          });
        }
        const dailyIndex = copyShareData.daily.findIndex((item) => item.date === findDaily.date);
        copyShareData.daily[dailyIndex] = updatedFindDaily;
      }

      return copyShareData;
    });
  };

  /** 반응에서 이모지 삭제 */
  const handleRemoveEmojiClick = (e: MouseEvent<HTMLButtonElement>) => {
    const currentClickEmoji = e.currentTarget.name;

    setShareData((prev) => {
      const copyData = { ...prev };
      const findDaily = copyData.daily.find((item) => {
        const { day: findItemDay } = returnDate(item.date);
        return findItemDay === reactionDay;
      });

      if (findDaily) {
        const existingReaction = findDaily.reactions.find(
          (reaction) => reaction.stickerOrEmoticonID === currentClickEmoji
        );
        if (existingReaction && existingReaction.count > 1) {
          existingReaction.count -= 1;
        } else {
          findDaily.reactions = findDaily.reactions.filter(
            (reaction) => reaction.stickerOrEmoticonID !== currentClickEmoji
          );
        }
      }
      return copyData;
    });
  };

  return { shareData, handleAddEmojiClick, handleRemoveEmojiClick };
};

export default useAddOrRemoveEmojiHooks;
