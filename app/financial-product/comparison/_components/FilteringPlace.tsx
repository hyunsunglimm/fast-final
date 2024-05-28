import Icon from '@/components/Icon';
import Text from '@/components/ui/Text';
import { CardCompany } from './FilteringSection';
import { ReactNode } from 'react';

type FilteringPlaceProps = {
  title: string;
  option: string;
  selectedItems: string[] | CardCompany[];
  setOption: (arg: string) => void;
  selectedContents: ReactNode;
};

const FilteringPlace = ({
  title,
  option,
  selectedItems,
  setOption,
  selectedContents
}: FilteringPlaceProps) => {
  return (
    <div className='flex items-center border-b border-gray-100 px-20 py-16'>
      <div
        className='relative flex shrink-0 gap-[0.6rem] rounded-xs border border-gray-200 px-[1rem] py-[0.7rem]'
        onClick={() => setOption(option)}
      >
        <Icon src='/icons/financial-product/filter-icon.svg' alt='filter icon' size='16' />
        <Text
          sizes='12'
          weight='700'
          className={`${selectedItems.length > 0 ? 'text-primary' : 'text-gray-500'}`}
        >
          {title}
        </Text>
        {selectedItems.length > 0 && (
          <Text
            sizes='10'
            weight='500'
            className='absolute right-[-0.6rem] top-[-0.5rem] flex h-[1.6rem] w-[1.6rem] items-center justify-center rounded-full bg-primary text-white'
          >
            {selectedItems.length}
          </Text>
        )}
      </div>
      <div className='mx-16 h-[2.6rem] w-[0.1rem] border border-gray-200' />
      {selectedContents}
    </div>
  );
};

export default FilteringPlace;
