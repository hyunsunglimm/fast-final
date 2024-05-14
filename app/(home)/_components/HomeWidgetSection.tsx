import SectionTitle from '@/components/SectionTitle';
import FlexBox from '@/components/ui/FlexBox';
import Button from '@/components/ui/Button';
import { Card } from '@/components/ui/card';
import WidgetItem from './home-widget/WidgetItem';
const widgetData = [
  { title: '이번 달 카드 실적' },
  { title: '매월 나가는 돈' },
  { title: '저번달에 쓴 돈' },
  { title: '거래횟수 Top 3' },
  { title: '나의 포인트' },
  { title: '소비통계' }
  // {title:'소비통계'},
];

const HomeWidgetSection = () => {
  return (
    <>
      <FlexBox justifyContent='between' alignItems='center'>
        <SectionTitle>한 눈에 보기</SectionTitle>
        <Button size='sm'>편집</Button>
      </FlexBox>
      <Card className='mb-[1.9rem] h-[17rem]'>맞춤 상품 추천</Card>
      <div className='grid grid-cols-2 gap-x-[2rem] gap-y-[1.9rem]'>
        {widgetData.map((item) => (
          <WidgetItem key={item.title} title={item.title} />
        ))}
      </div>
    </>
  );
};

export default HomeWidgetSection;
