'use client';

import Text from '@/components/ui/Text';
import { useEffect } from 'react';
import { useQueryString } from '@/shared/hooks/useQueryString';
import { useQuery } from '@tanstack/react-query';
import Spinner from '@/components/Spinner';
import FlexBox from '@/components/ui/FlexBox';
import CardsToCompare from './CardsToCompare';
import BottomButton from './BottomButton';
import { CardResponseType } from '@/shared/types/response/card';
import Image from 'next/image';

const QUERY_KEY = 'card';

const ComparisonSection = () => {
  const { pathname, router, params, queryValues, queryValue } = useQueryString();

  const cardType = queryValue('tab2');
  const cardCompanies = queryValues('card-company');
  const benefitCategories = queryValues('filtering');

  const {
    data: cardsToCompare,
    isLoading,
    isSuccess
  } = useQuery<CardResponseType[]>({
    queryKey: ['cardsToCompare', cardType, cardCompanies, benefitCategories],
    queryFn: async () => {
      params.delete(QUERY_KEY);
      router.push(pathname + '?' + params.toString(), { scroll: false });

      const res = await fetch(
        `${process.env.NEXT_PUBLIC_SANITY_BASE_URL}/api/cards/comparison?type=${cardType}&company=${cardCompanies}&category=${benefitCategories}`
      );

      return await res.json();
    }
  });

  const selectedCards = queryValues(QUERY_KEY);

  const selectedCardsInfo = cardsToCompare?.filter((card) => selectedCards.includes(card.id));

  const firstCardInfo = selectedCardsInfo && selectedCardsInfo[0]?.benefitCategories;
  const secondCardInfo = selectedCardsInfo && selectedCardsInfo[1]?.benefitCategories;

  const comparableCategories = firstCardInfo?.filter((category) =>
    secondCardInfo?.includes(category)
  );

  const isIncomparable = selectedCards.length === 2 && comparableCategories?.length === 0;

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
      {isLoading && (
        <FlexBox justifyContent='center' className='mt-20'>
          <Spinner />
        </FlexBox>
      )}
      {isSuccess && cardsToCompare?.length === 0 && <Warning />}
      {isSuccess && cardsToCompare?.length > 0 && (
        <section className='px-20'>
          <Text variant='h2' sizes='20' weight='700' className='mb-4'>
            비교할 카드 선택하기
          </Text>

          {isSuccess && cardsToCompare?.length > 0 && (
            <Text variant='p'>
              최대{' '}
              <Text weight='700' className='text-primary'>
                2개
              </Text>
              까지 선택가능해요!
            </Text>
          )}
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
        </section>
      )}
      <BottomButton
        disabled={selectedCards.length < 2 || isIncomparable}
        isPopup={isIncomparable}
        path='/financial-product/comparison/select-category'
      >
        비교하기
      </BottomButton>
    </>
  );
};

export default ComparisonSection;

const Warning = () => {
  return (
    <section className='flex flex-col items-center pb-[6rem]'>
      <Image
        src='/images/not-found-porko.webp'
        alt='not found porko'
        width={400}
        height={183}
        className='mx-auto mb-20 w-[18.3rem]'
      />
      <Text sizes='20' weight='700'>
        조회된 카드가 없어요!
      </Text>
      <Text className='mt-8 text-center text-gray-500'>카드사와 필터링을 다시 선택해주세요</Text>
    </section>
  );
};
