import Icon from '@/components/Icon';
import FlexBox from '@/components/ui/FlexBox';
import Text from '@/components/ui/Text';
import { Card } from '@/components/ui/card';

type CategoryCardProps = {
  title: string;
  iconPath: string;
  onSelect: (arg: string) => void;
  isSelected: boolean;
  disabled: boolean;
};

const CategoryCard = ({ title, iconPath, onSelect, isSelected, disabled }: CategoryCardProps) => {
  return (
    <Card
      className={`relative flex flex-col items-center justify-center gap-6 px-24 pb-16 pt-28 ${isSelected && 'ring-1 ring-primary'} ${disabled ? 'cursor-not-allowed' : 'cursor-pointer'}`}
      onClick={() => !disabled && onSelect(title)}
    >
      <Icon src={iconPath} alt='bus icon' size='40' />
      <Text className={disabled ? 'text-gray-500' : ''}>{title}</Text>
      {isSelected && (
        <Icon
          src='/icons/system-icon/checkbox/round-checkbox-on.svg'
          alt='check icon'
          size='12'
          className='absolute right-[0.8rem] top-[0.8rem]'
        />
      )}
      {disabled && (
        <FlexBox
          className='absolute top-[0.8rem] w-[8.4rem]'
          justifyContent='between'
          alignItems='center'
        >
          <Text sizes='10' className='text-warning'>
            선택불가
          </Text>
          <Icon src='/icons/financial-product/warning.svg' alt='경고 아이콘' size='16' />
        </FlexBox>
      )}
    </Card>
  );
};

export default CategoryCard;
