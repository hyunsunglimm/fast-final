import { Metadata } from 'next';
import BucketLanding from './_components/BucketLanding';
import { redirect } from 'next/navigation';

export const metadata: Metadata = {
  title: 'PORKO 버킷리스트 이용안내',
  description: 'PORKO 버킷리스트 이용안내 페이지'
};

type BucketLandingPageProps = {
  searchParams: Record<string, string | undefined>;
};

const BucketLandingPage = ({ searchParams }: BucketLandingPageProps) => {
  if (!searchParams.tab) {
    return redirect('/bucket-landing?tab=저축생활+1편');
  }

  return <BucketLanding />;
};

export default BucketLandingPage;
