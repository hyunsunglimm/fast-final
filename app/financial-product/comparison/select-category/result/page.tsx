import { Metadata } from 'next';
import ComparisonResult from './_components/ComparisonResult';

export const metadata: Metadata = {
  title: 'PORKO 비교 결과',
  description: 'PORKO 비교 결과 페이지'
};

const ComparisonResultPage = () => <ComparisonResult />;

export default ComparisonResultPage;
