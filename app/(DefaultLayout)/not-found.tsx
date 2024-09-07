import NotFound from '@/components/NotFound';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'PORKO | 잘못된 접근입니다.',
  description: 'PORKO Not Found 페이지'
};

const NotFoundPage = () => <NotFound />;

export default NotFoundPage;
