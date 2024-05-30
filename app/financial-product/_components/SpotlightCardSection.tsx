'use client';

import FlexBox from '@/components/ui/FlexBox';
import Tab from '@/components/ui/Tab';
import Text from '@/components/ui/Text';
import SpotlightCardItem from './SpotlightCard';
import Button from '@/components/ui/Button';
import Icon from '@/components/Icon';
import { getSpotlightCards } from '@/service/api/financial-product/cards';
import { useQueryString } from '@/hooks/useQueryString';
import { useQuery } from '@tanstack/react-query';
import Spinner from '@/components/Spinner';

const SpotlightCardSection = () => {
  const { queryValue } = useQueryString();
  const type = queryValue('tab');

  const { data: spotlightCards, isPending } = useQuery({
    queryKey: ['spotlightCard', type],
    queryFn: () => getSpotlightCards(type)
  });

  return (
    <section>
      <FlexBox alignItems='center'>
        <Text
          sizes='20'
          className='mr-[0.8rem] border-b-[1px] border-black opacity-40'
          weight='700'
        >
          20대
        </Text>
        <Icon src='/icons/system-icon/arrow/arrow-down.svg' alt='drop down' size='16' />
        <Text sizes='20' variant='h1' weight='700' className='ml-[1.4rem]'>
          주목받는 카드
        </Text>
      </FlexBox>
      <div className='mb-24 mt-16'>
        <Tab array={['신용카드', '체크카드']} type='box' tabKey='tab' />
      </div>
      {isPending ? (
        <FlexBox justifyContent='center'>
          <Spinner />
        </FlexBox>
      ) : (
        <ul className='mb-24 flex flex-col gap-[1.2rem]'>
          {spotlightCards?.map((card, index) => {
            return (
              <li key={card.title}>
                <SpotlightCardItem card={card} count={index + 1} />
              </li>
            );
          })}
        </ul>
      )}

      {spotlightCards && (
        <Button size='md' styled='outline'>
          더보기
        </Button>
      )}
    </section>
  );
};

export default SpotlightCardSection;
