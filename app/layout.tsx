import type { Metadata } from 'next';
import './globals.css';
import QueryProviders from '@/context/queryProvider';
import AuthProvider from '@/context/authProvider';
import Navbar from '@/components/Navbar';

export const metadata: Metadata = {
  // FIXME -> 추후 메타데이터 수정
  title: 'PORKO',
  description: 'MZ특화 금융앱 PORKO !!!'
};
const RootLayout = ({
  children
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <html lang='ko'>
      {/* <body className='mx-auto overflow-hidden text-black xs:w-[520px]'> */}
      <body className='mx-auto bg-gray-200 text-black xs:w-[520px]'>
        <AuthProvider>
          <QueryProviders>
            {/* XXX 
              바디 구분 위해 의도적으로 색상 넣어놨습니다.
             hide-scrollbar
             */}
            {/* <main className={'  relative overflow-y-scroll bg-gray-50'}> */}
            {/* <main className={'hide-scrollbar relative h-dvh overflow-y-scroll bg-gray-50'}> */}
            <main className='hide-scrollbar h-dvh overflow-y-scroll bg-gray-50'>
              {children}
              <Navbar />
            </main>
          </QueryProviders>
        </AuthProvider>
      </body>
    </html>
  );
};
export default RootLayout;
