import React from 'react';
import BottomSheet from '@/components/BottomSheet';
import * as unicodeEmoji from 'unicode-emoji';
import Text from '@/components/ui/Text';
import TextButton from '@/components/ui/TextButton';
import FlexBox from '@/components/ui/FlexBox';
import Button from '@/components/ui/Button';
import { returnDate } from '@/shared/utils/dateUtils';
import {
  useSubmitEmojiContext,
  MY_MEMBER_ID
} from '@/app/budget-calendar/context/SubmitEmojiProvider';

import { cn } from '@/shared/utils/twMerge';

const SubmitEmojiBottomSheet = () => {
  const groupBy = 'category';
  const omitWhere: unicodeEmoji.OmitEmojiWhere = {
    version: ['15.1'],
    category: [
      'activities-events',
      'animals-nature',
      'flags',
      'food-drink',
      'objects',
      'person-people',
      'symbols',
      'travel-places'
    ]
  };
  const emojiObject = unicodeEmoji.getEmojisGroupedBy(groupBy, omitWhere);
  const { openAddEmojiSheet, setOpenAddEmojiSheet, reactionDate, shareData, handleAddEmojiClick } =
    useSubmitEmojiContext();
  const { day: reactionDay, month } = returnDate(reactionDate);
  // const { daily } = shareData;

  const noScrollContents = (
    <FlexBox flexDirection='col' className='w-full touch-none bg-white'>
      <Text className='text-gray-700'>
        {month}월 {reactionDay}일
      </Text>

      {/* 남긴 반응 이모지 */}
      <div className='mt-16 h-[11rem] w-full overflow-hidden'>
        <div className='hide-scrollbar flex h-full w-full flex-wrap content-start gap-8 overflow-y-scroll'>
          {shareData.map((item) => {
            const currentDate = new Date(item.date).getDate() === reactionDay;
            return (
              item.reactions &&
              item.reactions.map((reaction) => {
                const myReactionBtnClass = reaction.memberIds.includes(MY_MEMBER_ID)
                  ? 'border border-primary bg-select xs:hover:bg-primary/30'
                  : '';
                return (
                  <React.Fragment key={reaction.stickerOrEmoticonID}>
                    {currentDate && (
                      <TextButton
                        name={reaction.stickerOrEmoticonID}
                        onClick={handleAddEmojiClick}
                        className={cn(
                          'h-[2.8rem] min-w-fit flex-initial basis-[4.1rem] rounded-full bg-gray-50 px-8 text-12 leading-[2.8rem] active:scale-95 xs:hover:bg-gray-200 xs:hover:no-underline',
                          myReactionBtnClass
                        )}
                      >
                        <span role='img' className='mr-4 font-sans'>
                          {reaction.stickerOrEmoticonID}
                        </span>
                        <span className='truncate'>
                          {reaction.memberIds.length >= 999 ? '999+' : reaction.memberIds.length}
                        </span>
                      </TextButton>
                    )}
                  </React.Fragment>
                );
              })
            );
          })}
        </div>
      </div>

      {/* 이모지 스티커 탭 */}
      <FlexBox className='mt-40 gap-x-8'>
        <Button size='sm' styled='fill_black' className='h-[3.6rem] rounded-full font-500'>
          이모지
        </Button>
        <Button
          size='sm'
          styled='outline'
          className='h-[3.6rem] rounded-full border-gray-400 font-500 text-gray-500'
        >
          스티커
        </Button>
      </FlexBox>
    </FlexBox>
  );

  return (
    <BottomSheet
      title='반응 남기기'
      buttonLabel=''
      isButtonShow={false}
      isOpen={openAddEmojiSheet}
      onClose={() => setOpenAddEmojiSheet(false)}
      noScrollContents={noScrollContents}
    >
      {/* 이모지 리스트 */}
      <div className='grid grid-cols-6 gap-x-22 gap-y-24'>
        {emojiObject['face-emotion'].map((item) => {
          return (
            <TextButton
              name={item.emoji}
              onClick={handleAddEmojiClick}
              role='button'
              aria-label={`${item.description} 버튼`}
              key={item.emoji}
              className='h-[3.6rem] w-[3.6rem] rounded-full bg-gray-50 text-20 active:scale-95 xs:hover:bg-gray-200 xs:hover:no-underline'
            >
              <span role='img' aria-label={item.description} className='font-sans'>
                {item.emoji}
              </span>
            </TextButton>
          );
        })}
      </div>
    </BottomSheet>
  );
};
export default SubmitEmojiBottomSheet;
