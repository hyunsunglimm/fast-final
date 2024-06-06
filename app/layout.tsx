import type { Metadata } from 'next';
import './globals.css';
import QueryProviders from '@/shared/context/queryProvider';
import AuthProvider from '@/shared/context/authProvider';
import Navbar from '@/components/Navbar';
import { suit } from './font';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { auth } from '@/auth';
export const metadata: Metadata = {
  // FIXME -> 추후 메타데이터 수정
  title: 'PORKO',
  description: 'MZ특화 금융앱 PORKO !!!'
};

const RootLayout = async ({
  children
}: Readonly<{
  children: React.ReactNode;
}>) => {
  // 임시 로그인 유무 판단
  const session = await auth();

  return (
    <html lang='ko' className='hide-scrollbar bg-gray-200'>
      <body
        className={`${suit.className} relative mx-auto overflow-y-scroll tracking-tight text-black xs:w-[520px]`}
      >
        <AuthProvider>
          <QueryProviders>
            {/* XXX 
              바디 구분 위해 의도적으로 색상 넣어놨습니다.
             */}
            {session && (
              <p className='bg-blue-200 p-2 text-xl text-active'>{JSON.stringify(session.user)}</p>
            )}
            {children}
            <Navbar />
            <ReactQueryDevtools />
          </QueryProviders>
        </AuthProvider>
      </body>
    </html>
  );
};
export default RootLayout;
