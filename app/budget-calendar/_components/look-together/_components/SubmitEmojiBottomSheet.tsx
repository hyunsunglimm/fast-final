import { MouseEvent, useState } from 'react';
import BottomSheet from '@/components/BottomSheet';
import * as unicodeEmoji from 'unicode-emoji';
import Text from '@/components/ui/Text';
import TextButton from '@/components/ui/TextButton';
import FlexBox from '@/components/ui/FlexBox';
import Button from '@/components/ui/Button';

type SubmitEmojiBottomSheetProps = {
  openEmojiSheet: boolean;
  setOpenEmojiSheet: React.Dispatch<React.SetStateAction<boolean>>;
};

const SubmitEmojiBottomSheet = ({
  openEmojiSheet,
  setOpenEmojiSheet
}: SubmitEmojiBottomSheetProps) => {
  const [selectEmoji, setSelectEmoji] = useState('');
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

  const handleEmojiClick = (e: MouseEvent<HTMLButtonElement>) => {
    setSelectEmoji(e.currentTarget.name);
  };
  return (
    <BottomSheet
      title='반응남기기'
      buttonLabel=''
      isButtonShow={false}
      isOpen={openEmojiSheet}
      onClose={() => setOpenEmojiSheet(false)}
    >
      <FlexBox
        flexDirection='col'
        className='absolute left-0 top-[8.5rem] w-full touch-none bg-white px-24 pb-24'
      >
        <Text className='text-gray-700'>4월 10일 수요일</Text>
        <FlexBox className='mt-16 gap-8'>
          <TextButton
            role='button'
            className='h-[2.8rem] w-[4.1rem] rounded-full bg-gray-50 text-12 hover:bg-gray-200 hover:no-underline active:scale-95'
          >
            <span role='img' className='mr-4 font-sans'>
              {selectEmoji}
            </span>
            1
          </TextButton>
          <TextButton
            role='button'
            className='h-[2.8rem] w-[4.1rem] rounded-full bg-gray-50 text-12 hover:bg-gray-200 hover:no-underline active:scale-95'
          >
            <span role='img' className='mr-4 font-sans'>
              {selectEmoji}
            </span>
            1
          </TextButton>
        </FlexBox>
        <FlexBox className='mt-40 gap-x-8'>
          <Button size='xs' styled='fill_black' className='rounded-full font-500'>
            이모지
          </Button>
          <Button size='xs' styled='fill_black' className='rounded-full font-500'>
            스티커
          </Button>
        </FlexBox>
      </FlexBox>
      <div className='mt-[16rem] grid grid-cols-6 gap-x-22 gap-y-24'>
        {emojiObject['face-emotion'].map((item) => {
          return (
            <TextButton
              name={item.emoji}
              onClick={handleEmojiClick}
              role='button'
              aria-label={`${item.description} 버튼`}
              key={item.emoji}
              className='h-[3.6rem] w-[3.6rem] rounded-full bg-gray-50 text-20 hover:bg-gray-200 hover:no-underline active:scale-95'
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
