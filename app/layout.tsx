import type { Metadata } from 'next';
import './globals.css';
import QueryProviders from '@/context/queryProvider';
import AuthProvider from '@/context/authProvider';
import Navbar from '@/components/Navbar';
import { suit } from './font';

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
    <html lang='ko' className='hide-scrollbar overflow-hidden overflow-y-scroll'>
      <body
        className={`${suit.className} hide-scrollbar relative mx-auto h-dvh overflow-y-scroll bg-gray-200 tracking-tight text-black xs:w-[520px]`}
      >
        <AuthProvider>
          <QueryProviders>
            {/* XXX 
              바디 구분 위해 의도적으로 색상 넣어놨습니다.
             */}
            <>
              {children}
              <Navbar />
            </>
          </QueryProviders>
        </AuthProvider>
      </body>
    </html>
  );
};
export default RootLayout;
