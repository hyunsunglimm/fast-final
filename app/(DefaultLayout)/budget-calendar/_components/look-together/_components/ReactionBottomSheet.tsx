import { useMemo } from 'react';
import BottomSheet from '@/components/BottomSheet';
import Text from '@/components/ui/Text';
import FlexBox from '@/components/ui/FlexBox';
import Icon from '@/components/Icon';
import TextButton from '@/components/ui/TextButton';

import { returnDate } from '@/shared/utils/dateUtils';
import { cn } from '@/shared/utils/twMerge';
import { useSubmitEmojiContext, MY_MEMBER_ID } from '../../../context/SubmitEmojiProvider';

const ReactionBottomSheet = () => {
  const { openTotalReactionSheet, setOpenTotalReactionSheet, shareData, handleAddEmojiClick } =
    useSubmitEmojiContext();

  const totalCount = useMemo(() => {
    return shareData.reduce((total, item) => {
      const itemCount =
        item.reactions?.reduce((sum, reaction) => sum + reaction.memberIds.length, 0) || 0;
      return total + itemCount;
    }, 0);
  }, [shareData]);

  return (
    <BottomSheet
      title='반응 보기'
      buttonLabel=''
      isButtonShow={false}
      isOpen={openTotalReactionSheet}
      onClose={() => setOpenTotalReactionSheet(false)}
    >
      <Text sizes='18' weight='700'>
        총 {totalCount}개
      </Text>
      {shareData.map((item) => {
        const { day, month } = returnDate(item.date);
        return (
          <FlexBox key={item.date} className='my-24 w-full gap-x-16'>
            <Icon
              src={
                item.weatherImageNo
                  ? `/icons/weather/weather-${item.weatherImageNo}.svg`
                  : '/icons/weather/weather-none.svg'
              }
              alt={item.weatherImageNo ? '날씨 아이콘' : '날씨 없음'}
              size='48'
              className='shrink-0'
            />
            <FlexBox flexDirection='col' className='w-full space-y-[0.8rem]'>
              <Text sizes='12'>
                {month}월 {day}일
              </Text>
              <div className='flex w-full max-w-[26rem] flex-wrap gap-8'>
                {item.reactions &&
                  item.reactions.map((reaction) => {
                    const myReactionBtnClass = reaction.memberIds.includes(MY_MEMBER_ID)
                      ? 'border border-primary bg-select xs:hover:bg-primary/30'
                      : '';
                    return (
                      <TextButton
                        name={reaction.stickerOrEmoticonID}
                        key={reaction.stickerOrEmoticonID}
                        onClick={(e) => handleAddEmojiClick(e, item.date)}
                        className={cn(
                          'flex h-[2.8rem] min-w-fit basis-[4.1rem] items-center rounded-full bg-gray-50 px-8 text-12 active:scale-95 xs:hover:bg-gray-200 xs:hover:no-underline',
                          myReactionBtnClass
                        )}
                      >
                        <span role='img' className='mr-4 font-sans'>
                          {reaction.stickerOrEmoticonID}
                        </span>
                        {reaction.memberIds.length >= 999 ? '999+' : reaction.memberIds.length}
                      </TextButton>
                    );
                  })}
              </div>
            </FlexBox>
          </FlexBox>
        );
      })}
    </BottomSheet>
  );
};

export default ReactionBottomSheet;
