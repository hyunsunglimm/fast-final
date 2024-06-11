import BottomSheet from '@/components/BottomSheet';
import Icon from '@/components/Icon';
import FlexBox from '@/components/ui/FlexBox';
import Text from '@/components/ui/Text';

const weatherInfoData = [
  {
    imgPath: '/icons/weather/weather-1.svg',
    text: '무지출'
  },
  {
    imgPath: '/icons/weather/weather-2.svg',
    text: '1~32%'
  },
  {
    imgPath: '/icons/weather/weather-3.svg',
    text: '33~65%'
  },
  {
    imgPath: '/icons/weather/weather-4.svg',
    text: '66~99%'
  },
  {
    imgPath: '/icons/weather/weather-5.svg',
    text: '예산 초과'
  }
];

type WeatherInfoBottomSheetProps = {
  openWeatherInfo: boolean;
  setOpenWeatherInfo: React.Dispatch<React.SetStateAction<boolean>>;
  title: string;
};

const WeatherInfoBottomSheet = ({
  openWeatherInfo,
  setOpenWeatherInfo,
  title
}: WeatherInfoBottomSheetProps) => {
  return (
    <BottomSheet
      title={title}
      buttonLabel=''
      isButtonShow={false}
      isOpen={openWeatherInfo}
      onClose={() => setOpenWeatherInfo(false)}
    >
      <Text sizes='20' weight='700'>
        소비 날씨를 통해 <br /> 한 눈에 파악할 수 있어요
      </Text>
      <ul className='mt-16 list-disc space-y-[1.6rem] pl-16 text-14 font-400 text-gray-700'>
        <li>날씨는 하루 예산 중 몇 %를 지출했는지에 따라 달라져요.</li>
        <li>하루 예산은 이번 달 남은 예산을 남은 일 수로 나눈 금액이에요.</li>
        <li>
          이번 달 목표 예산을 설정하면 하루 예산을 얼마나 사용했는지 소비 날씨로 알 수 있어요.
        </li>
      </ul>
      <FlexBox
        justifyContent='between'
        alignItems='center'
        className='mt-24 rounded-sm border border-dashed p-12'
      >
        {weatherInfoData.map((item) => {
          return (
            <FlexBox
              key={item.text}
              flexDirection='col'
              alignItems='center'
              justifyContent='between'
              className='h-[5.2rem] w-[4.8rem]'
            >
              <Icon src={item.imgPath} alt={`${item.text} 아이콘`} size='48' />
              <Text sizes='10' weight='500' className='text-gray-500'>
                {item.text}
              </Text>
            </FlexBox>
          );
        })}
      </FlexBox>
    </BottomSheet>
  );
};
export default WeatherInfoBottomSheet;
