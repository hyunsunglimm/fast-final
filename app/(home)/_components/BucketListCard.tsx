import { Card } from '@/components/ui/card';

type BucketListCardProps = {
  isChallenge?: boolean;
  children?: React.ReactNode;
};

const BucketListCard = ({ isChallenge = true, children }: BucketListCardProps) => {
  const bgColor = isChallenge ? 'bg-primary' : 'bg-active';
  return <Card className={`aspect-square ${bgColor} text-white`}>{children}</Card>;
};

export default BucketListCard;
