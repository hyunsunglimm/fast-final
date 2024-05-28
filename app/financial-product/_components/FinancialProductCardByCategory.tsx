import Text from '@/components/ui/Text';
import { Card } from '@/components/ui/card/Card';
import Icon from '@/components/Icon';

type ProductInfoProps = {
  productInfo: {
    title: string;
    products: { title: string; iconPath: string }[];
  };
};

const FinancialProductCardByCategory = ({ productInfo: { title, products } }: ProductInfoProps) => {
  return (
    <Card className='p-24'>
      <Text variant='h2' sizes='16' weight='500'>
        {title}
      </Text>
      <ul className='mt-16 grid grid-cols-3'>
        {products.map(({ title, iconPath }) => {
          return (
            <li key={title} className='flex flex-col items-center gap-[0.8rem]'>
              <Icon src={iconPath} alt={title} size='56' />
              <Text sizes='12'>{title}</Text>
            </li>
          );
        })}
      </ul>
    </Card>
  );
};

export default FinancialProductCardByCategory;
