import Icon from '@/components/Icon';
import Text from '@/components/ui/Text';

type ProductIconProps = {
  title: string;
  iconPath: string;
};

const ProductIcon = ({ title, iconPath }: ProductIconProps) => {
  return (
    <div className='flex flex-col items-center gap-[0.8rem]'>
      <Icon src={iconPath} alt={title} size='56' />
      <Text sizes='12'>{title}</Text>
    </div>
  );
};

export default ProductIcon;
