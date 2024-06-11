'use client';

import { IsBackHeader } from '@/components/header';
import FlexBox from '@/components/ui/FlexBox';
import Text from '@/components/ui/Text';
import { useEffect, useTransition } from 'react';
import { useQueryString } from '@/shared/hooks/useQueryString';
import { CARD_BENEFIT_CATEGORIES } from '@/shared/utils/financial-product/staticData';
import { useQueryClient } from '@tanstack/react-query';
import BottomButton from '../../_components/BottomButton';
import CategoryCard from './CategoryCard';
import LoadingBackdrop from '@/components/ui/LoadingBackdrop';
import { CardResponseType } from '@/shared/types/response/card';

const QUERY_KEY = 'category';

type SelectCategoryProps = {
  comparisonCards: CardResponseType[];
};

const SelectCategory = ({ comparisonCards }: SelectCategoryProps) => {
  const { searchParams, router, pathname, queryValues, params } = useQueryString();
  const queryClient = useQueryClient();
  const [isPending, startTransition] = useTransition();

  const selectedCategories = queryValues(QUERY_KEY);

  useEffect(() => {
    if (selectedCategories.length > 2) {
      params.delete(QUERY_KEY, selectedCategories[0]);
      router.push(pathname + '?' + params.toString(), { scroll: false });
    }
  }, [selectedCategories, pathname, router, params]);

  const onSelect = (title: string) => {
    if (selectedCategories.includes(title)) {
      params.delete(QUERY_KEY, title);
    } else {
      params.append(QUERY_KEY, title);
    }

    router.push(pathname + '?' + params.toString(), {
      scroll: false
    });
  };

  const handleNavigateToResultPage = async () => {
    startTransition(async () => {
      await queryClient.prefetchQuery({
        queryKey: ['comparedCards', ...queryValues('card')],
        queryFn: async () => {
          const res = await fetch(
            `${process.env.NEXT_PUBLIC_SANITY_BASE_URL}/api/cards/comparison/result?card=${queryValues('card')}`
          );
          return await res.json();
        }
      });
    });
    router.push(`${pathname}/result?${searchParams.toString()}`);
  };

  const firstCardBenefits = comparisonCards[0].benefitCategories;
  const secondCardBenefits = comparisonCards[1].benefitCategories;

  const comparableCategories = firstCardBenefits.filter((category) =>
    secondCardBenefits.includes(category)
  );

  return (
    <>
      {isPending && <LoadingBackdrop />}
      <IsBackHeader href={`./?${searchParams.toString()}`} defaultColor='#f2f4f6' />
      <main className='bg-gray-50 px-20 pb-[13.2rem]'>
        <FlexBox flexDirection='col' className='gap-8'>
          <Text sizes='24' weight='500'>
            어떤 항목을 기준으로 <br /> 비교하고 싶으세요?
          </Text>
          <Text sizes='16' weight='500'>
            최대 2개까지만 선택할 수 있어요!
          </Text>
        </FlexBox>
        <ul className='mt-28 grid grid-cols-3 gap-12'>
          {CARD_BENEFIT_CATEGORIES.map(({ title_kr, title_en, iconPath }) => {
            const isSelected = selectedCategories.some((c) => c === title_kr);
            const isSelectable = comparableCategories.includes(title_en);

            return (
              <li key={title_kr}>
                <CategoryCard
                  title={title_kr}
                  iconPath={iconPath}
                  isSelected={isSelected}
                  onSelect={onSelect}
                  disabled={!isSelectable}
                />
              </li>
            );
          })}
        </ul>
        {selectedCategories.length >= 1 && (
          <BottomButton
            onClick={handleNavigateToResultPage}
            path='/financial-product/comparison/select-category/result'
            isLoading={isPending}
          >
            결과보기
          </BottomButton>
        )}
      </main>
    </>
  );
};

export default SelectCategory;
