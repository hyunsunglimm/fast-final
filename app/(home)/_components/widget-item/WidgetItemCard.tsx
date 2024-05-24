import { Card, CardHeader, CardContent } from '@/components/ui/card';
import Text from '@/components/ui/Text';

type WidgetItemCardProps = {
  title: string;
  children: React.ReactNode;
};

export const WidgetItemCard = ({ title, children }: WidgetItemCardProps) => {
  return (
    <Card className='aspect-square p-[1.2rem]'>
      <CardHeader className='pt-[0.4rem]'>
        <Text weight='500' className='text-gray-500'>
          {title}
        </Text>
        {children}
      </CardHeader>
    </Card>
  );
};
