import { Card, CardHeader, CardContent } from '@/components/ui/card';
import MenuBarThreeIcon from '@/components/icons/MenuBarThreeIcon';
import MinusIcon from '@/components/icons/MinusIcon';
import Text from '@/components/ui/Text';

type IsEditWidgetItemProps = {
  title: string;
};
const IsEditWidgetItem = ({ title }: IsEditWidgetItemProps) => {
  return (
    <Card className='relative aspect-square border border-gray-100 p-[1.2rem]'>
      <div className='absolute -left-[1rem] -top-[1rem] cursor-pointer'>
        <MinusIcon />
      </div>
      <CardHeader className='w-full items-end pt-[0.4rem]'>
        <MenuBarThreeIcon />
      </CardHeader>
      <CardContent alignItems='center' justifyContent='center' className='pt-[4.6rem]'>
        <Text sizes='16' className='text-gray-500'>
          {title}
        </Text>
      </CardContent>
    </Card>
  );
};

export default IsEditWidgetItem;
