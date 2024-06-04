import { Card, CardHeader, CardContent, CardFooter } from '@/components/ui/card';
import FlexBox from '@/components/ui/FlexBox';
import Icon from '@/components/Icon';
import Text from '@/components/ui/Text';
import Button from '@/components/ui/Button';
const fiexedExpensesData = [
  { title: '월세', date: '내일', imgPath: '/icons/asset-page/month-rental.svg' },
  { title: '교통비', date: '2일뒤', imgPath: '/icons/asset-page/bus.svg' },
  { title: '구독서비스', date: '4일뒤', imgPath: '/icons/asset-page/subs.svg' }
];
const FixedExpensesCard = () => {
  return (
    <>
      <Card className='px-24 py-[2.2rem]'>
        <CardHeader>
          <FlexBox justifyContent='between' className='w-full'>
            <Text weight='500' className='text-gray-700'>
              이번 달에 이만큼 나가요
            </Text>
            <Text className='text-gray-500'>5.07 기준</Text>
          </FlexBox>
          <Text weight='700' sizes='20' className='mb-20'>
            300,000원
          </Text>
        </CardHeader>
        <CardContent className='p-0' flexDirection='col'>
          {fiexedExpensesData.map((item) => {
            return (
              <FlexBox
                key={item.title}
                alignItems='center'
                justifyContent='between'
                className='mb-[2rem] w-full last:mb-0'
              >
                <FlexBox className='gap-x-8' alignItems='center'>
                  <Icon
                    src={item.imgPath}
                    alt={`${item.title} 아이콘`}
                    size='24'
                    className='rounded-none'
                  />
                  <Text weight='700' sizes='16'>
                    {item.title}
                  </Text>
                </FlexBox>
                <Text sizes='16'>{item.date}</Text>
              </FlexBox>
            );
          })}
        </CardContent>
        <CardFooter className='flex w-full items-center justify-center p-0 pt-20'>
          <Button size='sm' className='font-600'>
            내 고정 지출 알아보기
          </Button>
        </CardFooter>
      </Card>
    </>
  );
};

export default FixedExpensesCard;
