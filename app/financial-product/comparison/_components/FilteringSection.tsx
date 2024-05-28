import BottomSheet from '@/components/BottomSheet';
import Icon from '@/components/Icon';
import Tab from '@/components/ui/Tab';
import Text from '@/components/ui/Text';
import { useState } from 'react';
import SelectCardCompany, { cardCompanies } from './SelectCardCompany';
import SelectFiltering from './SelectFiltering';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import FlexBox from '@/components/ui/FlexBox';

export type CardCompany = { title: string; iconPath: string };

const FilteringSection = () => {
  const searchParams = useSearchParams();
  const router = useRouter();
  const pathname = usePathname();
  const [option, setOption] = useState('');

  const params = new URLSearchParams(searchParams.toString());

  const selectedCardCompaniesByQueryString = searchParams.getAll('card-company').map((title) => {
    return {
      title,
      iconPath: cardCompanies.find((cardCompany) => cardCompany.title === title)!.iconPath
    };
  });

  const selectedFilteringsByQueryString = searchParams.getAll('filtering');

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

        <div className='flex items-center border-b border-gray-100 px-20 py-16'>
          <div
            className='relative flex shrink-0 gap-[0.6rem] rounded-xs border border-gray-200 px-[1rem] py-[0.7rem]'
            onClick={() => setOption('card company')}
          >
            <Icon src='/icons/financial-product/filter-icon.svg' alt='filter icon' size='16' />
            <Text
              sizes='12'
              weight='700'
              className={`${selectedCardCompaniesByQueryString.length > 0 ? 'text-primary' : 'text-gray-500'}`}
            >
              카드사
            </Text>
            {selectedCardCompaniesByQueryString.length > 0 && (
              <Text
                sizes='10'
                weight='500'
                className='absolute right-[-0.6rem] top-[-0.5rem] flex h-[1.6rem] w-[1.6rem] items-center justify-center rounded-full bg-primary text-white'
              >
                {selectedCardCompaniesByQueryString.length}
              </Text>
            )}
          </div>
          <div className='mx-16 h-[2.6rem] w-[0.1rem] border border-gray-200' />
          <ul className='hide-scrollbar flex gap-[1.6rem] overflow-x-scroll'>
            {selectedCardCompaniesByQueryString.map(({ title, iconPath }) => {
              return (
                <li key={title}>
                  <Icon src={iconPath} alt={title} size='32' />
                </li>
              );
            })}
          </ul>
        </div>

        <div className='flex items-center px-20 py-16'>
          <div
            className='relative flex shrink-0 gap-[0.6rem] rounded-xs border border-gray-200 px-[1rem] py-[0.7rem]'
            onClick={() => setOption('filtering')}
          >
            <Icon src='/icons/financial-product/filter-icon.svg' alt='filter icon' size='16' />
            <Text
              sizes='12'
              weight='700'
              className={`${selectedFilteringsByQueryString.length > 0 ? 'text-primary' : 'text-gray-500'}`}
            >
              필터링
            </Text>
            {selectedFilteringsByQueryString.length > 0 && (
              <Text
                sizes='10'
                weight='500'
                className='absolute right-[-0.6rem] top-[-0.5rem] flex h-[1.6rem] w-[1.6rem] items-center justify-center rounded-full bg-primary text-white'
              >
                {selectedFilteringsByQueryString.length}
              </Text>
            )}
          </div>
          <div className='mx-16 h-[2.6rem] w-[0.1rem] border border-gray-200' />
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
        </div>
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
