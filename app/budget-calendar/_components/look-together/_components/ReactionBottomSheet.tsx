import BottomSheet from '@/components/BottomSheet';
import Text from '@/components/ui/Text';
import FlexBox from '@/components/ui/FlexBox';
import Icon from '@/components/Icon';
import TextButton from '@/components/ui/TextButton';
import { ShareData } from '@/shared/types/budgetCalendarType';
type ReactionBottomSheetProps = {
  openReactionSheet: boolean;
  setOpenReactionSheet: React.Dispatch<React.SetStateAction<boolean>>;
  shareData: ShareData;
};

const ReactionBottomSheet = ({
  openReactionSheet,
  setOpenReactionSheet,
  shareData
}: ReactionBottomSheetProps) => {
  return (
    <BottomSheet
      title='반응 보기'
      buttonLabel=''
      isButtonShow={false}
      isOpen={openReactionSheet}
      onClose={() => setOpenReactionSheet(false)}
    >
      <Text sizes='18' weight='700'>
        총 {shareData.count}개
      </Text>
      {shareData.daily.map((item, idx) => {
        const month = new Date(item.date).getMonth() + 1;
        const day = new Date(item.date).getDate();

        return (
          <FlexBox key={idx} className='my-24 w-full gap-x-16'>
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
                {item.reactions.map((item) => {
                  return (
                    <TextButton
                      key={item.stickerOrEmoticonID}
                      role='button'
                      className='h-[2.8rem] w-[4.1rem] rounded-full bg-gray-50 text-12 hover:bg-gray-200 hover:no-underline active:scale-95'
                    >
                      <span role='img' className='mr-4 font-sans'>
                        {item.stickerOrEmoticonID}
                      </span>
                      {item.count}
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
