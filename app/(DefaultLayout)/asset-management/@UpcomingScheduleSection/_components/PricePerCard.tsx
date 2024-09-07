import { Card, CardHeader, CardContent, CardFooter } from '@/components/ui/card';
import FlexBox from '@/components/ui/FlexBox';
import Image from 'next/image';
import Text from '@/components/ui/Text';
import Button from '@/components/ui/Button';

const upcommingData = [
  {
    cardName: 'KB국민카드',
    cardType: '체크',
    amount: 135000,
    imgPath: '/images/asset-page/kb-card.webp'
  },
  {
    cardName: '신한카드',
    cardType: '체크',
    amount: 15000,
    imgPath: '/images/asset-page/shinhan-card.webp'
  }
];
const PricePerCard = () => {
  return (
    <Card className='p-[2.4rem]'>
      <CardHeader className='mb-[2.1rem] p-0'>
        <Text weight='500' sizes='14'>
          카드별 5월 카드값
        </Text>
      </CardHeader>
      <CardContent flexDirection='col' className='w-full gap-y-24 p-0'>
        {upcommingData.map((item) => {
          return (
            <FlexBox
              key={item.cardName}
              justifyContent='between'
              alignItems='center'
              className='w-full'
            >
              <FlexBox flexDirection='row' alignItems='center' className='gap-x-5'>
                <div className='relative h-[6rem] w-[4rem]'>
                  <Image src={item.imgPath} alt={item.cardName} fill sizes='auto' />
                </div>

                <FlexBox flexDirection='col' className='gap-y-10'>
                  <Text sizes='16' weight='700'>
                    {item.cardName}
                  </Text>
                  <Text weight='500'>{item.cardType}</Text>
                </FlexBox>
              </FlexBox>
              <Text sizes='16' weight='500'>
                {item.amount.toLocaleString('ko')} 원
              </Text>
            </FlexBox>
          );
        })}
      </CardContent>
      <CardFooter className='flex items-center justify-center pb-0 pt-24'>
        <Button size='sm' className='font-500'>
          더 알아보기
        </Button>
      </CardFooter>
    </Card>
  );
};

export default PricePerCard;
