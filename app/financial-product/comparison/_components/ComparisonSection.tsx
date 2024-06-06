'use client';

import Text from '@/components/ui/Text';
import { useEffect } from 'react';
import { useQueryString } from '@/shared/hooks/useQueryString';
import { useQuery } from '@tanstack/react-query';
import { getCardsToCompare } from '@/service/api/financial-product/cards';
import Spinner from '@/components/Spinner';
import FlexBox from '@/components/ui/FlexBox';
import CardsToCompare from './CardsToCompare';
import BottomButton from './BottomButton';

const QUERY_KEY = 'card';

const ComparisonSection = () => {
  const { data: cardsToCompare, isPending } = useQuery({
    queryKey: ['cardsToCompare'],
    queryFn: getCardsToCompare
  });
  const { pathname, router, params, queryValues } = useQueryString();

  const selectedCards = queryValues(QUERY_KEY);

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
    <>
      <section className='px-20'>
        <Text variant='h2' sizes='20' weight='700' className='mb-4'>
          비교할 카드 선택하기
        </Text>
        <Text variant='p'>
          최대 <Text weight='700'>2개</Text>까지만 선택할 수 있어요
        </Text>
        {isPending ? (
          <FlexBox justifyContent='center' className='mt-20'>
            <Spinner />
          </FlexBox>
        ) : (
          <ul className='mt-20 flex flex-col gap-[1.2rem]'>
            {cardsToCompare?.map((card) => {
              const isSelected = selectedCards.some((c) => c === card.id);

              return (
                <li key={card.id}>
                  <CardsToCompare isSelected={isSelected} onSelect={onSelect} card={card} />
                </li>
              );
            })}
          </ul>
        )}
      </section>
      {selectedCards.length >= 2 && (
        <BottomButton path='/financial-product/comparison/select-category'>비교하기</BottomButton>
      )}
    </>
  );
};

export default ComparisonSection;
