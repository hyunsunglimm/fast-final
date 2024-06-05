'use client';

import BottomSheet from '@/components/BottomSheet';
import Icon from '@/components/Icon';
import Tab from '@/components/ui/Tab';
import Text from '@/components/ui/Text';
import { useState } from 'react';
import SelectCardCompany, { cardCompanies } from './SelectCardCompany';
import SelectFiltering from './SelectFiltering';
import FlexBox from '@/components/ui/FlexBox';
import FilteringPlace from './FilteringPlace';
import { useQueryString } from '@/shared/hooks/useQueryString';

export type CardCompany = { title: string; iconPath: string };

const FilteringSection = () => {
  const { router, pathname, params, queryValues } = useQueryString();
  const [option, setOption] = useState('');

  const selectedCardCompaniesByQueryString = queryValues('card-company').map((title) => {
    return {
      title,
      iconPath: cardCompanies.find((cardCompany) => cardCompany.title === title)!.iconPath
    };
  });

  const selectedFilteringsByQueryString = queryValues('filtering');

  const [selectedCardCompanies, setSelectedCardCompanies] = useState<CardCompany[]>(
    selectedCardCompaniesByQueryString
  );

  const [selectedFilterings, setSelectedFilterings] = useState<string[]>(
    selectedFilteringsByQueryString
  );

  const cardCompanyIsOpen = option === 'card company';
  const filteringIsOpen = option === 'filtering';

  const onClose = () => {
    setOption('');
  };

  const onSelectCardCompany = (selectedCardCompany: CardCompany) => {
    const existingIndex = selectedCardCompanies.findIndex(
      (item) => item.title === selectedCardCompany.title
    );

    if (existingIndex > -1) {
      const newArray = selectedCardCompanies.filter((_, index) => index !== existingIndex);
      setSelectedCardCompanies(newArray);
    } else {
      setSelectedCardCompanies((prev) => [...prev, selectedCardCompany]);
    }
  };

  const onClickCardCompany = () => {
    params.delete('card-company');
    selectedCardCompanies.forEach((item) => {
      params.append('card-company', item.title);
    });
    router.push(pathname + '?' + params.toString(), { scroll: false });
    onClose();
  };

  const onSelectFiltering = (title: string) => {
    if (selectedFilterings.includes(title)) {
      const newArray = selectedFilterings.filter((filter) => filter !== title);
      setSelectedFilterings(newArray);
    } else {
      setSelectedFilterings((prev) => [...prev, title]);
    }
  };

  const onClickFiltering = () => {
    params.delete('filtering');
    selectedFilterings.forEach((filtering) => {
      params.append('filtering', filtering);
    });
    router.push(pathname + '?' + params.toString(), { scroll: false });
    onClose();
  };

  return (
    <>
      <section className='mb-40 bg-white'>
        <Tab type='underline' array={['예적금', '대출', '카드', '보험']} tabKey='tab1' />
        <div className='border-b border-gray-100 px-20 py-16'>
          <Tab type='box' array={['신용카드', '체크카드']} tabKey='tab2' />
        </div>

        <FilteringPlace
          title='카드사'
          option='card company'
          selectedItems={selectedCardCompaniesByQueryString}
          setOption={setOption}
          selectedContents={
            <ul className='hide-scrollbar flex gap-[1.6rem] overflow-x-scroll'>
              {selectedCardCompaniesByQueryString.map(({ title, iconPath }) => {
                return (
                  <li key={title}>
                    <Icon src={iconPath} alt={title} size='32' />
                  </li>
                );
              })}
            </ul>
          }
        />

        <FilteringPlace
          title='필터링'
          option='filtering'
          selectedItems={selectedFilteringsByQueryString}
          setOption={setOption}
          borderBottom={false}
          selectedContents={
            <ul className='hide-scrollbar flex gap-[0.8rem] overflow-x-scroll'>
              {selectedFilteringsByQueryString.map((filter) => {
                return (
                  <li
                    key={filter}
                    className='flex shrink-0 gap-[0.4rem] rounded-xs bg-primary py-[0.7rem] pl-[1.2rem] pr-[0.8rem] text-white'
                  >
                    <Text sizes='12' weight='600'>
                      {filter}
                    </Text>
                    <Icon
                      src='/icons/financial-product/close-icon.svg'
                      alt='close icon'
                      size='16'
                      onClick={() => {
                        params.delete('filtering', filter);
                        router.push(pathname + '?' + params.toString());
                        setSelectedFilterings((prev) => prev.filter((title) => title !== filter));
                      }}
                    />
                  </li>
                );
              })}
            </ul>
          }
        />

        <FlexBox className='gap-4 px-20 pb-16 pt-[0.4rem]'>
          <Icon src='/icons/system-icon/info.svg' alt='info icon' size='16' />
          <Text sizes='12' className='text-gray-500'>
            필터를 적용하면 상품비교 정확도가 올라가요!
          </Text>
        </FlexBox>
      </section>

      <BottomSheet
        title='카드사'
        buttonLabel='적용하기'
        isOpen={cardCompanyIsOpen}
        onClose={onClose}
        onClick={onClickCardCompany}
        buttonOptions={{
          size: 'md',
          styled: 'fill_black',
          disabled: selectedCardCompanies.length === 0
        }}
      >
        <SelectCardCompany items={selectedCardCompanies} onSelect={onSelectCardCompany} />
      </BottomSheet>

      <BottomSheet
        title='필터링'
        buttonLabel='적용하기'
        isOpen={filteringIsOpen}
        onClose={onClose}
        onClick={onClickFiltering}
        buttonOptions={{
          size: 'md',
          styled: 'fill_black',
          disabled: selectedFilterings.length === 0
        }}
      >
        <SelectFiltering items={selectedFilterings} onSelect={onSelectFiltering} />
      </BottomSheet>
    </>
  );
};

export default FilteringSection;
