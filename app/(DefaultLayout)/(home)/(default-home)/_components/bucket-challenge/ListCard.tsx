import { Card } from '@/components/ui/card';
import { MouseEvent } from 'react';

type ListCardProps = {
  bgColor: 'bucket' | 'challenge';
  children?: React.ReactNode;
  onClick?: (e: MouseEvent<HTMLDivElement>) => void;
};

export const ListCard = ({ bgColor, children, onClick }: ListCardProps) => {
  const bgColorClass = bgColor === 'bucket' ? 'bg-active' : 'bg-challenge';
  return (
    <Card onClick={onClick} className={`aspect-square ${bgColorClass} w-full shrink-0 text-white`}>
      {children}
    </Card>
  );
};
