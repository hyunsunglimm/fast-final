import Icon from '@/components/Icon';
import FlexBox from '@/components/ui/FlexBox';
import Text from '@/components/ui/Text';

type SelectFilteringType = {
  items: string[];
  onSelect: (item: string) => void;
};

const filterings = [
  '쇼핑',
  '카페',
  '편의점',
  '대중교통',
  '마트',
  '문화',
  '백화점',
  '통신비',
  '주유',
  '여행',
  '온라인',
  '식음료',
  '구독',
  '월납',
  '건강',
  '간편결제'
];

const SelectFiltering = ({ items, onSelect }: SelectFilteringType) => {
  return (
    <section>
      <Text sizes='20' weight='700'>
        원하는 혜택항목을 선택해보세요
      </Text>
      <ul className='mt-28 flex flex-wrap gap-8'>
        {filterings.map((filtering) => {
          const isSelected = items.includes(filtering);
          return (
            <li key={filtering}>
              <FlexBox
                alignItems='center'
                className={`gap-6 rounded-xs border px-12 py-[0.8rem] ${isSelected ? 'border-primary' : 'border-gray-300'}`}
                onClick={() => onSelect(filtering)}
              >
                {isSelected ? (
                  <Icon
                    src='/icons/system-icon/checkbox/round-checkbox-on.svg'
                    alt='check icon'
                    size='16'
                  />
                ) : (
                  <Icon src='/icons/system-icon/plus.svg' alt='plus icon' size='16' />
                )}
                <Text>{filtering}</Text>
              </FlexBox>
            </li>
          );
        })}
      </ul>
    </section>
  );
};

export default SelectFiltering;
