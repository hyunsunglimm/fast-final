import Icon from '@/components/Icon';
import Button from '@/components/ui/Button';
import FlexBox from '@/components/ui/FlexBox';
import Text from '@/components/ui/Text';

const CurrentCardInfo = () => {
  return (
    <>
      <section className='relative bg-white px-20 pb-40 pt-[4.4rem]'>
        <FlexBox
          justifyContent='center'
          alignItems='center'
          className='absolute left-[2rem] top-[-2.4rem] h-[4.8rem] w-[4.8rem] rounded-full bg-active'
        >
          <Text weight='700' className='text-white'>
            WIN
          </Text>
        </FlexBox>
        <Text sizes='20' weight='700'>
          카카오뱅크 신한카드 Time
        </Text>
        <FlexBox
          flexDirection='col'
          className='mb-12 mt-[1.4rem] gap-8 rounded-sm bg-[#e9eeff] px-24 py-20'
        >
          <FlexBox alignItems='center'>
            <Text className='mr-[0.6rem]'>월간 최대 혜택</Text>
            <Icon src='/icons/system-icon/info.svg' alt='정보 아이콘' size='16' />
          </FlexBox>
          <Text sizes='24' weight='800'>
            45,835원
          </Text>
        </FlexBox>
        <div className='rounded-sm border border-[#edf0f5] px-20'>
          <FlexBox justifyContent='between' className='border-b border-[#edf0f5] py-20'>
            <Text>최대 할인 한도</Text>
            <Text sizes='16' weight='700'>
              5만원
            </Text>
          </FlexBox>
          <FlexBox justifyContent='between' className='border-b border-[#edf0f5] py-20'>
            <Text>연회비</Text>
            <Text sizes='16' weight='700'>
              1만원
            </Text>
          </FlexBox>
          <FlexBox justifyContent='between' className='py-20'>
            <Text>전월 실적</Text>
            <FlexBox alignItems='center'>
              <Text sizes='16' weight='700' className='mr-[0.4rem]'>
                최소 50만원
              </Text>
              <Icon src='/icons/system-icon/arrow/arrow-down.svg' alt='드롭다운 아이콘' size='16' />
            </FlexBox>
          </FlexBox>
        </div>
      </section>

      <section className='bg-white'>
        <FlexBox alignItems='center' className='mb-[1.8rem] gap-8 pl-20'>
          <Icon src='/icons/financial-product/speaker.svg' alt='speaker icon' size='24' />
          <Text sizes='16' weight='600'>
            해당 카드가{' '}
            <Text sizes='16' weight='600' className='text-active'>
              지원하는 혜택
            </Text>{' '}
            목록이에요!
          </Text>
        </FlexBox>
        <FlexBox className='scroll-hidden hide-scrollbar mb-40 flex-nowrap gap-8 overflow-x-scroll px-20'>
          <Text className='shrink-0 rounded-xs bg-gray-50 px-12 py-[0.8rem]'>1만원 머시기</Text>
          <Text className='shrink-0 rounded-xs bg-gray-50 px-12 py-[0.8rem]'>1만원 머시기</Text>
          <Text className='shrink-0 rounded-xs bg-gray-50 px-12 py-[0.8rem]'>1만원 머시기</Text>
          <Text className='shrink-0 rounded-xs bg-gray-50 px-12 py-[0.8rem]'>1만원 머시기</Text>
          <Text className='shrink-0 rounded-xs bg-gray-50 px-12 py-[0.8rem]'>1만원 머시기</Text>
          <Text className='shrink-0 rounded-xs bg-gray-50 px-12 py-[0.8rem]'>1만원 머시기</Text>
        </FlexBox>
        <FlexBox justifyContent='center' className='pb-40'>
          <Button size='sm' styled='outline' className='rounded-full'>
            카드 자세히 보기
          </Button>
        </FlexBox>
      </section>
    </>
  );
};

export default CurrentCardInfo;
