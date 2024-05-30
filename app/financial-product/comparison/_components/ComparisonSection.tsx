import Text from '@/components/ui/Text';
import { useEffect } from 'react';
import ComparisonCard from './ComparisonCard';
import { useQueryString } from '@/hooks/useQueryString';
import { useQuery } from '@tanstack/react-query';
import { getComparisonCards } from '@/service/api/financial-product/cards';
import Spinner from '@/components/Spinner';
import FlexBox from '@/components/ui/FlexBox';

const QUERY_KEY = 'card';

const ComparisonSection = () => {
  const { data: comparisonCards, isPending } = useQuery({
    queryKey: ['comparisonCards'],
    queryFn: getComparisonCards
  });
  const { searchParams, pathname, router, params } = useQueryString();

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
      {isPending ? (
        <FlexBox justifyContent='center' className='mt-20'>
          <Spinner />
        </FlexBox>
      ) : (
        <ul className='mt-20 flex flex-col gap-[1.2rem]'>
          {comparisonCards?.map((card) => {
            const isSelected = selectedCards.some((c) => c === card.id);

            return (
              <li key={card.id}>
                <ComparisonCard isSelected={isSelected} onSelect={onSelect} card={card} />
              </li>
            );
          })}
        </ul>
      )}
    </section>
  );
};

export default ComparisonSection;
