import Icon from '@/components/Icon';
import FlexBox from '@/components/ui/FlexBox';
import Text from '@/components/ui/Text';
import { Card } from '@/components/ui/card';
import { benefitCategoryIconPath } from '@/utils/benefitCategoryIconPath';
import Image from 'next/image';
import { usePathname, useSearchParams, useRouter } from 'next/navigation';
import { useEffect, useMemo } from 'react';

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
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const router = useRouter();

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
    <div className='px-20'>
      <Text>
        최대 <Text weight='700'>2개</Text>까지만 선택할 수 있어요
      </Text>
      <ul className='mt-20 flex flex-col gap-[1.2rem]'>
        {comparisonCards.map((card) => {
          const isSelected = selectedCards.some((c) => c === card.id);

          return (
            <li key={card.id}>
              <Card
                className={`p-24 ${isSelected && 'relative ring-1 ring-primary'}`}
                onClick={() => onSelect(card.id)}
              >
                <FlexBox>
                  <Image
                    src={`/images/financial-product/${card.fileName}.png`}
                    alt={card.title}
                    width={100}
                    height={70}
                    className='mr-16 w-[4.4rem]'
                  />
                  <FlexBox flexDirection='col'>
                    <Text sizes='16' weight='600' className='mb-[0.2rem]'>
                      {card.title}
                    </Text>
                    <Text className='mb-[1rem]'>{card.description}</Text>
                    <ul className='flex gap-[0.8rem]'>
                      {card.benefits.map((benefit) => {
                        return (
                          <li key={benefit} className='flex items-center gap-[0.2rem]'>
                            <Icon
                              src={benefitCategoryIconPath[benefit]}
                              alt={`${benefit} icon`}
                              size='12'
                            />
                            <Text sizes='12' className='text-gray-600'>
                              {benefit}
                            </Text>
                          </li>
                        );
                      })}
                    </ul>
                  </FlexBox>
                </FlexBox>
                {isSelected && (
                  <Icon
                    src='/icons/system-icon/checkbox/checkbox-on.svg'
                    alt='check icon'
                    size='24'
                    className='absolute right-[2.4rem] top-1/2 w-[2.4rem] translate-y-[-50%]'
                  />
                )}
              </Card>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default ComparisonSection;
