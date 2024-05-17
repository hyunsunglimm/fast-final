import Text from '@/components/ui/Text';

type ProductIconProps = {
  title: string;
  icon: React.ReactNode;
};

const ProductIcon = ({ title, icon }: ProductIconProps) => {
  return (
    <div className='flex flex-col items-center gap-[0.8rem]'>
      {icon}
      <Text sizes='12'>{title}</Text>
    </div>
  );
};

export default ProductIcon;
