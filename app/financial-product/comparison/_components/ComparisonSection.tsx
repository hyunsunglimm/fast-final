import Text from '@/components/ui/Text';
import { useEffect, useMemo } from 'react';
import ComparisonCard from './ComparisonCard';
import { useQueryString } from '@/hooks/useQueryString';

const comparisonCards = [
  {
    id: 'c1',
    title: '신한카드 Mr.Life',
    description: '공과금부터 쇼핑까지 생활혜택!',
    fileName: 'shinhan-mrlife',
    benefits: ['식비', '카페', '포인트']
  },
  {
    id: 'c2',
    title: '카카오뱅크 신한카드 Time',
    description: 'Time For us to Shine',
    fileName: 'kakao-shinhan-time',
    benefits: ['대중교통', '택시', '카페']
  },
  {
    id: 'c3',
    title: '카카오페이 신한 라이언',
    description: '귀여운 라이언 대박 예감',
    fileName: 'kakao-shinhan-lion',
    benefits: ['포인트', '카페', '대중교통']
  },
  {
    id: 'c4',
    title: 'BC 바로 클리어 플러스',
    description: '월200 직장인에게 추천!',
    fileName: 'bc-clear-plus',
    benefits: ['식비', '온라인', '스트리밍']
  },
  {
    id: 'c5',
    title: '밸런스 카드',
    description: '혜택과 실적의 밸런스',
    fileName: 'balance',
    benefits: ['대중교통', '배달', '카페']
  }
];

const QUERY_KEY = 'card';

const ComparisonSection = () => {
  const { searchParams, pathname, router } = useQueryString();

  const params = useMemo(() => new URLSearchParams(searchParams.toString()), [searchParams]);

  const selectedCards = searchParams.getAll(QUERY_KEY);

  useEffect(() => {
    if (selectedCards.length > 2) {
      params.delete(QUERY_KEY, selectedCards[0]);
      router.push(pathname + '?' + params.toString(), { scroll: false });
    }
  }, [selectedCards, pathname, router, params]);

  const onSelect = (cardId: string) => {
    if (selectedCards.includes(cardId)) {
      params.delete(QUERY_KEY, cardId);
    } else {
      params.append(QUERY_KEY, cardId);
    }

    router.push(pathname + '?' + params.toString(), {
      scroll: false
    });
  };

  return (
    <section className='px-20'>
      <Text>
        최대 <Text weight='700'>2개</Text>까지만 선택할 수 있어요
      </Text>
      <ul className='mt-20 flex flex-col gap-[1.2rem]'>
        {comparisonCards.map((card) => {
          const isSelected = selectedCards.some((c) => c === card.id);

          return (
            <li key={card.id}>
              <ComparisonCard isSelected={isSelected} onSelect={onSelect} card={card} />
            </li>
          );
        })}
      </ul>
    </section>
  );
};

export default ComparisonSection;
