import { Card, CardHeader } from '@/components/ui/card';
import Text from '@/components/ui/Text';

type WidgetItemCardProps = {
  title: string;
  subText?: string;
  children: React.ReactNode;
};

export const WidgetItemCard = ({ title, children, subText }: WidgetItemCardProps) => {
  return (
    <Card className='flex h-[17rem] w-[16rem] flex-col justify-between px-16 py-24'>
      <CardHeader>
        <Text weight='500' className='text-gray-500'>
          {title}
        </Text>
        <Text weight='700' sizes='20'>
          {subText}
        </Text>
      </CardHeader>
      {children}
    </Card>
  );
};
