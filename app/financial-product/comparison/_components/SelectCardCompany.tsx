import Icon from '@/components/Icon';
import FlexBox from '@/components/ui/FlexBox';
import Text from '@/components/ui/Text';
import { CardCompany } from './FilteringSection';

export const cardCompanies = [
  { title: 'KB국민카드', iconPath: '/icons/logos/bank/bank-kb.svg' },
  { title: 'BC카드', iconPath: '/icons/logos/bank/bank-bc.svg' },
  { title: 'IBK기업은행', iconPath: '/icons/logos/bank/bank-ibk.svg' },
  { title: '신한카드', iconPath: '/icons/logos/bank/bank-shinhan.svg' },
  { title: 'NH농협카드', iconPath: '/icons/logos/bank/bank-nh.svg' },
  { title: '현대카드', iconPath: '/icons/logos/bank/bank-hyundai.svg' },
  { title: '우리카드', iconPath: '/icons/logos/bank/bank-woori.svg' },
  { title: '삼성카드', iconPath: '/icons/logos/bank/bank-samsung.svg' },
  { title: '하나카드', iconPath: '/icons/logos/bank/bank-hana.svg' },
  { title: '롯데카드', iconPath: '/icons/logos/bank/bank-lotte.svg' }
];

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
        {cardCompanies.map(({ title, iconPath }) => {
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
