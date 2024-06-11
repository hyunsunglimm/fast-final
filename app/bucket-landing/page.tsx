import { Metadata } from 'next';
import BucketLanding from './_components/BucketLanding';

export const metadata: Metadata = {
  title: 'PORKO 버킷리스트 이용안내',
  description: 'PORKO 버킷리스트 이용안내 페이지'
};

const BucketLandingPage = () => <BucketLanding />;

export default BucketLandingPage;
