import { Card } from '@/components/ui/card';

type BucketListCardProps = {
  isChallenge?: boolean;
  children?: React.ReactNode;
};

const BucketListCard = ({ isChallenge = true, children }: BucketListCardProps) => {
  const bgColor = isChallenge ? 'bg-[#FF8B4A]' : 'bg-[#4AA8FF]';
  return <Card className={`aspect-square ${bgColor} text-white`}>{children}</Card>;
};

export default BucketListCard;
