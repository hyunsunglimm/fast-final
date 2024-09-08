'use client';

import Text from '@/components/ui/Text';
import { useEffect, useState } from 'react';
import { useQueryString } from '@/shared/hooks/useQueryString';
import { useQuery } from '@tanstack/react-query';
import Spinner from '@/components/Spinner';
import FlexBox from '@/components/ui/FlexBox';
import CardsToCompare from './CardsToCompare';
import BottomButton from './BottomButton';
import { CardResponseType } from '@/shared/types/response/card';
import Image from 'next/image';
import InvalidPopup from './InvalidPopup';
import ValidPopup from './ValidPopup';

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

  const [popupType, setPopupType] = useState<'' | 'valid' | 'invalid'>('');

  const selectedCards = queryValues(QUERY_KEY);

  const selectedCardsInfo = cardsToCompare?.filter((card) => selectedCards.includes(card.id));

  const firstCardInfo = selectedCardsInfo && selectedCardsInfo[0]?.benefitCategories;
  const secondCardInfo = selectedCardsInfo && selectedCardsInfo[1]?.benefitCategories;

  const comparableCategories = firstCardInfo?.filter((category) =>
    secondCardInfo?.includes(category)
  );

  const isIncomparable =
    selectedCards.length === 2 && comparableCategories && comparableCategories.length === 0;

  const isComparable =
    selectedCards.length === 2 && comparableCategories && comparableCategories.length > 0;

  useEffect(() => {
    if (isIncomparable) setPopupType('invalid');
    if (isComparable) setPopupType('valid');

    const timer = setTimeout(() => {
      setPopupType('');
    }, 8000);

    return () => clearTimeout(timer);
  }, [isIncomparable, isComparable]);

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
      <InvalidPopup isOpen={popupType === 'invalid'} />
      <ValidPopup
        isOpen={popupType === 'valid' && isComparable}
        count={comparableCategories?.length || 0}
      />
      <BottomButton
        disabled={selectedCards.length < 2 || isIncomparable}
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
    <section className='px-20 pb-[6rem]'>
      <Text variant='h6' sizes='20' weight='700' className='mb-4'>
        조회된 카드가 없어요!
      </Text>
      <Text className='text-gray-500'>카드사와 필터링을 다시 선택해주세요</Text>
      <Image
        src='/images/not-found-porko-gray.png'
        alt='not found porko'
        width={400}
        height={183}
        className='mx-auto mb-20 mt-40 w-[18.3rem]'
      />
    </section>
  );
};
