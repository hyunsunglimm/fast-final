import { Card, CardHeader, CardContent } from '@/components/ui/card';
import Text from '@/components/ui/Text';

type WidgetItemProps = {
  title: string;
  children: React.ReactNode;
};

const WidgetItem = ({ title, children }: WidgetItemProps) => {
  return (
    <Card className='aspect-square p-[1.2rem]'>
      <CardHeader className='pt-[0.4rem]'>
        <Text weight='500' className='text-gray-500'>
          {title}
        </Text>
      </CardHeader>
      <CardContent>{children}</CardContent>
    </Card>
  );
};

export default WidgetItem;
