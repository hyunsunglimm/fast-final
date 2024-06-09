import React from 'react';
import BottomSheet from '@/components/BottomSheet';
import * as unicodeEmoji from 'unicode-emoji';
import Text from '@/components/ui/Text';
import TextButton from '@/components/ui/TextButton';
import FlexBox from '@/components/ui/FlexBox';
import Button from '@/components/ui/Button';
import { returnDate } from '@/shared/utils/dateUtils';
import { useSubmitEmojiContext } from '@/app/budget-calendar/context/SubmitEmojiProvider';
import { MY_MEMBER_ID } from '@/app/budget-calendar/hooks/useAddOrRemoveEmojiHooks';
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
  const { daily } = shareData;

  const noScrollContents = (
    <FlexBox flexDirection='col' className='w-full touch-none bg-white'>
      <Text className='text-gray-700'>
        {month}월 {reactionDay}일
      </Text>

      {/* 남긴 반응 이모지 */}
      <div className='mt-16 grid w-full grid-cols-5 gap-8'>
        {daily.map((item) => {
          const currentDate = new Date(item.date).getDate() === reactionDay;
          return item.reactions.map((emoji) => {
            const myReactionBtnClass = emoji.memberIds.includes(MY_MEMBER_ID)
              ? 'border border-primary bg-select xs:hover:bg-primary/30'
              : '';
            return (
              <React.Fragment key={emoji.stickerOrEmoticonID}>
                {currentDate && (
                  <TextButton
                    name={emoji.stickerOrEmoticonID}
                    onClick={handleAddEmojiClick}
                    className={cn(
                      'flex h-[2.8rem] w-full min-w-[4.1rem] items-center justify-center rounded-full bg-gray-50 px-8 text-12 hover:no-underline active:scale-95 xs:hover:bg-gray-200',
                      myReactionBtnClass
                    )}
                  >
                    <span role='img' className='mr-4 font-sans'>
                      {emoji.stickerOrEmoticonID}
                    </span>
                    <span className='truncate'>{emoji.memberIds.length}</span>
                  </TextButton>
                )}
              </React.Fragment>
            );
          });
        })}
      </div>

      {/* 이모지 스티커 탭 */}
      <FlexBox className='mt-40 gap-x-8'>
        <Button size='xs' styled='fill_black' className='rounded-full font-500'>
          이모지
        </Button>
        <Button size='xs' styled='outline' className='rounded-full font-500 text-gray-500'>
          스티커
        </Button>
      </FlexBox>
    </FlexBox>
  );

  return (
    <BottomSheet
      title='반응남기기'
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
              className='h-[3.6rem] w-[3.6rem] rounded-full bg-gray-50 text-20 hover:no-underline active:scale-95 xs:hover:bg-gray-200'
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
