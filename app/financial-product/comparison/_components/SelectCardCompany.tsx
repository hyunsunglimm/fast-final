import Icon from '@/components/Icon';
import FlexBox from '@/components/ui/FlexBox';
import Text from '@/components/ui/Text';
import { CardCompany } from './FilteringSection';
import { CARD_COMPANIES } from '@/shared/utils/financial-product/staticData';

type SelectCardCompanyProps = {
  items: CardCompany[];
  onSelect: (item: CardCompany) => void;
};

const SelectCardCompany = ({ items, onSelect }: SelectCardCompanyProps) => {
  return (
    <section>
      <Text sizes='20' weight='700'>
        원하는 카드사를 선택해보세요
      </Text>
      <ul className='mt-28 grid grid-cols-3 gap-8'>
        {CARD_COMPANIES.map(({ title, iconPath }) => {
          const isSelected = items.findIndex((item) => item.title === title) > -1;

          return (
            <li key={title} className='relative'>
              <FlexBox
                flexDirection='col'
                alignItems='center'
                className={`gap-[0.6rem] rounded-xs border px-12 pb-[1.5rem] pt-[1.8rem] ${isSelected ? 'border-primary' : 'border-gray-300'}`}
                onClick={() => onSelect({ title, iconPath })}
              >
                <Icon src={iconPath} alt={`${title} logo`} size='36' />
                <Text>{title}</Text>
              </FlexBox>
              {isSelected && (
                <Icon
                  src='/icons/system-icon/checkbox/round-checkbox-on.svg'
                  alt='check icon'
                  size='20'
                  className='absolute right-[0.6rem] top-[0.6rem]'
                />
              )}
            </li>
          );
        })}
      </ul>
    </section>
  );
};

export default SelectCardCompany;
