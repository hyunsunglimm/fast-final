import BottomSheet from '@/components/BottomSheet';
import Text from '@/components/ui/Text';
import FlexBox from '@/components/ui/FlexBox';
import Icon from '@/components/Icon';
import TextButton from '@/components/ui/TextButton';
import { useSubmitEmojiContext } from '@/app/budget-calendar/context/SubmitEmojiProvider';
import { returnDate } from '@/shared/utils/dateUtils';
import { MY_MEMBER_ID } from '@/app/budget-calendar/hooks/useAddOrRemoveEmojiHooks';
import { cn } from '@/shared/utils/twMerge';

const ReactionBottomSheet = () => {
  const { openTotalReactionSheet, setOpenTotalReactionSheet, shareData, handleAddEmojiClick } =
    useSubmitEmojiContext();

  return (
    <BottomSheet
      title='반응 보기'
      buttonLabel=''
      isButtonShow={false}
      isOpen={openTotalReactionSheet}
      onClose={() => setOpenTotalReactionSheet(false)}
    >
      <Text sizes='18' weight='700'>
        총 {shareData.totalCount}개
      </Text>
      {shareData.daily.map((item) => {
        const { day, month } = returnDate(item.date);
        return (
          <FlexBox key={item.date} className='my-24 w-full gap-x-16'>
            <Icon
              src={`/icons/weather/weather-${item.weatherId}.svg`}
              alt='날씨 아이콘'
              size='48'
              className='shrink-0'
            />
            <FlexBox flexDirection='col' className='w-full space-y-[0.8rem]'>
              <Text sizes='12'>
                {month}월 {day}일
              </Text>
              <div className='grid grid-cols-5 gap-8'>
                {item.reactions.map((reaction) => {
                  const myReactionBtnClass = reaction.memberIds.includes(MY_MEMBER_ID)
                    ? 'border border-primary bg-select xs:hover:bg-primary/30'
                    : '';
                  return (
                    <TextButton
                      name={reaction.stickerOrEmoticonID}
                      key={reaction.stickerOrEmoticonID}
                      onClick={(e) => handleAddEmojiClick(e, item.date)}
                      className={cn(
                        'h-[2.8rem] w-[4.1rem] rounded-full bg-gray-50 text-12 hover:no-underline active:scale-95 xs:hover:bg-gray-200',
                        myReactionBtnClass
                      )}
                    >
                      <span role='img' className='mr-4 font-sans'>
                        {reaction.stickerOrEmoticonID}
                      </span>
                      {reaction.memberIds.length}
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
