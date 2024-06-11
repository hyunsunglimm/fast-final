import Icon from '@/components/Icon';
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
      className={`flex flex-col items-center justify-center gap-6 px-24 pb-16 pt-28 ${isSelected && 'relative ring-1 ring-primary'} ${disabled ? 'cursor-not-allowed' : 'cursor-pointer'}`}
      onClick={() => !disabled && onSelect(title)}
    >
      <Icon src={iconPath} alt='bus icon' size='40' />
      <Text>{title}</Text>
      {isSelected && (
        <Icon
          src='/icons/system-icon/checkbox/round-checkbox-on.svg'
          alt='check icon'
          size='20'
          className='absolute right-[0.8rem] top-[0.8rem]'
        />
      )}
      {disabled && '선택불가능'}
    </Card>
  );
};

export default CategoryCard;
