import { Card, CardHeader, CardContent } from '@/components/ui/card';
import MenuBarThreeIcon from '@/components/icons/MenuBarThreeIcon';
import MinusIcon from '@/components/icons/MinusIcon';

type IsEditWidgetItemProps = {
  title: string;
  children: React.ReactNode;
};
const IsEditWidgetItem = ({ title, children }: IsEditWidgetItemProps) => {
  return (
    <Card className='relative aspect-square p-[1.2rem]'>
      <div className='absolute -left-[1rem] -top-[1rem]'>
        <MinusIcon />
      </div>
      <CardHeader className='w-full items-end pt-[0.4rem]'>
        <MenuBarThreeIcon />
      </CardHeader>
      <CardContent>{children}</CardContent>
    </Card>
  );
};

export default IsEditWidgetItem;
