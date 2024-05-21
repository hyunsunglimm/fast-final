import { Card, CardHeader, CardContent } from '@/components/ui/card';
import MenuBarThreeIcon from './MenuBarThreeIcon';
import MinusIcon from './MinusIcon';
import Text from '@/components/ui/Text';
import { MouseEvent } from 'react';

type IsEditWidgetItemProps = {
  title: string;
  id: string;
  onClick: (e: MouseEvent<HTMLButtonElement>) => void;
};
const IsEditWidgetItem = ({ title, id, onClick }: IsEditWidgetItemProps) => {
  return (
    <Card className='relative aspect-square border border-gray-100 p-[1.2rem]'>
      <button
        id={id}
        onClick={onClick}
        aria-label={`${title} 위젯 숨기기`}
        className='absolute -left-[1rem] -top-[1rem] cursor-pointer'
      >
        <MinusIcon />
      </button>

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
