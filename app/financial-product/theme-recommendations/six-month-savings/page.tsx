import Text from '@/components/ui/Text';
import SavingCard from '../_components/SavingCard';

const savings = [
  {
    bank: '카카오뱅크',
    title: '26주 적금',
    description: '캐릭터와 함께 즐거운 도전',
    rate: '연 6%',
    startAmount: '5000원',
    endAmount: 1772807
  },
  {
    bank: '기업은행',
    title: 'IBK D-day 적금',
    description: '만기가 자유로운 적금',
    rate: '연 5.15%',
    startAmount: '월 20만원',
    endAmount: 1215249
  },
  {
    bank: '카카오뱅크',
    title: '굴비 적금',
    description: '부담없이 이용하는 적금',
    rate: '연 5%',
    startAmount: '월 30만원',
    endAmount: 1822207
  },
  {
    bank: '농협은행',
    title: 'NH올원e미니적금',
    description: '금액과 기간을 자유롭게',
    rate: '연 4.7%',
    startAmount: '월 50만원',
    endAmount: 3034792
  }
];

const page = () => {
  return (
    <section>
      <Text variant='h1' sizes='24' weight='600'>
        올 겨울에 6개월 적금 들고 <br /> 내년 여름 여행가자
      </Text>
      <Text variant='h2' sizes='16' className='mb-28 mt-[0.8rem] text-gray-700'>
        단기 적금으로 여행 경비를 모으고 싶다면!
      </Text>
      <ul className='flex flex-col gap-[1.2rem]'>
        {savings.map((saving) => {
          return (
            <li key={saving.title}>
              <SavingCard saving={saving} />
            </li>
          );
        })}
      </ul>
    </section>
  );
};

export default page;
