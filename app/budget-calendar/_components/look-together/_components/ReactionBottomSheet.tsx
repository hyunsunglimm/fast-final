import BottomSheet from '@/components/BottomSheet';
import Text from '@/components/ui/Text';
import FlexBox from '@/components/ui/FlexBox';
import Icon from '@/components/Icon';
import TextButton from '@/components/ui/TextButton';

type ReactionBottomSheetProps = {
  openReactionSheet: boolean;
  setOpenReactionSheet: React.Dispatch<React.SetStateAction<boolean>>;
};

const ReactionBottomSheet = ({
  openReactionSheet,
  setOpenReactionSheet
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
        총 12개
      </Text>
      {[...Array(10)].map((item, idx) => {
        return (
          <FlexBox key={idx} className='my-24 w-full gap-x-16'>
            <Icon
              src='/icons/weather/weather-1.svg'
              alt='날씨 아이콘'
              size='48'
              className='shrink-0'
            />
            <FlexBox flexDirection='col' className='w-full space-y-[0.8rem]'>
              <Text sizes='12'>4월 {idx + 1}일</Text>
              <div className='grid grid-cols-5 gap-8'>
                {[...Array(6)].map((item, index) => {
                  return (
                    <TextButton
                      key={index}
                      role='button'
                      className='h-[2.8rem] w-[4.1rem] rounded-full bg-gray-50 text-12 hover:bg-gray-200 hover:no-underline active:scale-95'
                    >
                      <span role='img' className='mr-4 font-sans'>
                        😆
                      </span>
                      1
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
