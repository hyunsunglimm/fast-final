import { Card, CardContent } from '@/components/ui/card';
import FlexBox from '@/components/ui/FlexBox';
import Text from '@/components/ui/Text';
import { WeatherOne } from '@/components/icons';
const ConsumeWeatherCard = ({ children }: { children?: React.ReactNode }) => {
  return (
    <Card className='mt-[1.2rem] w-[32rem] shrink-0'>
      <CardContent className='gap-x-[1.6rem] px-[2rem] py-[2.4rem]' alignItems='center'>
        <WeatherOne />
        <FlexBox flexDirection='col'>
          <Text>오늘 소비 날씨는</Text>
          <Text sizes='18' weight='500'>
            천둥번개가 쳐요!
          </Text>
          <Text sizes='12' className='text-gray-500'>
            예산보다{' '}
            <Text weight='700' className='text-orange-500'>
              1,000,000원
            </Text>{' '}
            더 썼어요.
          </Text>
        </FlexBox>
      </CardContent>
    </Card>
  );
};

export default ConsumeWeatherCard;
