import { IsBackHeader } from '@/components/header';

type BucketLadingLayoutProps = {
  children: React.ReactNode;
};

const BucketLadingLayout = ({ children }: BucketLadingLayoutProps) => {
  return (
    <>
      <IsBackHeader href='/' title='이용안내' isClose defaultColor='#fff' />
      {children}
    </>
  );
};
export default BucketLadingLayout;
