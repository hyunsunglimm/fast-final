import Text from '@/components/ui/Text';
import Card from '@/components/ui/card/Card';
import ProductIcon from './ProductIcon';

type ProductInfoProps = {
  productInfo: {
    title: string;
    products: { title: string }[];
  };
};

const ProductCard = ({ productInfo: { title, products } }: ProductInfoProps) => {
  return (
    <Card className='px-[20px] py-[16px]'>
      <Text variant='h2' sizes='body16'>
        {title}
      </Text>
      <div className='mt-[20px] grid grid-cols-3 px-[24px]'>
        {products.map((product) => (
          <ProductIcon key={product.title} title={product.title} />
        ))}
      </div>
    </Card>
  );
};

export default ProductCard;
