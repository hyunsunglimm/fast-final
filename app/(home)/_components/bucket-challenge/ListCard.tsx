import { Card } from '@/components/ui/card';

type ListCardProps = {
  bgColor: 'bucket' | 'challenge';
  children?: React.ReactNode;
};

export const ListCard = ({ bgColor, children }: ListCardProps) => {
  const bgColorClass = bgColor === 'bucket' ? 'bg-bucket' : 'bg-challenge';
  return (
    <Card className={`aspect-square ${bgColorClass} w-full shrink-0 text-white`}>{children}</Card>
  );
};
