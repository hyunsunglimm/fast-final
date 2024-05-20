import { Card } from '@/components/ui/card';

type ListCardProps = {
  isChallenge?: boolean;
  children?: React.ReactNode;
};

export const ListCard = ({ isChallenge = true, children }: ListCardProps) => {
  const bgColor = isChallenge ? 'bg-primary' : 'bg-active';
  return <Card className={`aspect-square ${bgColor} w-full shrink-0 text-white`}>{children}</Card>;
};
