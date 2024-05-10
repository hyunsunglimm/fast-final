import Text from '@/components/ui/Text';

const ProductIcon = ({ title }: { title: string }) => {
  return (
    <div className='flex flex-col items-center'>
      <div className='mb-[8px] h-[44px] w-[44px] rounded-full bg-gray-300' />
      <Text sizes='caption12'>{title}</Text>
    </div>
  );
};

export default ProductIcon;
