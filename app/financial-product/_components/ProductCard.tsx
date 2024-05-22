import Text from '@/components/ui/Text';
import { Card } from '@/components/ui/card/Card';
import ProductIcon from './ProductIcon';

type ProductInfoProps = {
  productInfo: {
    title: string;
    products: { title: string; iconPath: string }[];
  };
};

const ProductCard = ({ productInfo: { title, products } }: ProductInfoProps) => {
  return (
    <Card className='p-24'>
      <Text variant='h2' sizes='16' weight='500'>
        {title}
      </Text>
      <div className='mt-16 grid grid-cols-3'>
        {products.map(({ title, iconPath }) => (
          <ProductIcon key={title} title={title} iconPath={iconPath} />
        ))}
      </div>
    </Card>
  );
};

export default ProductCard;
