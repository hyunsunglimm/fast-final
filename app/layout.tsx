import type { Metadata } from 'next';
import './globals.css';
import QueryProviders from '@/context/queryProvider';
import AuthProvider from '@/context/authProvider';
import Navbar from '@/components/Navbar';
import localFont from 'next/font/local';
export const metadata: Metadata = {
  // FIXME -> 추후 메타데이터 수정
  title: 'PORKO',
  description: 'MZ특화 금융앱 PORKO !!!'
};
const suit = localFont({
  src: [
    {
      path: '../public/font/SUIT-Regular.woff2',
      weight: '400',
      style: 'normal'
    },
    {
      path: '../public/font/SUIT-Medium.woff2',
      weight: '500',
      style: 'normal'
    },
    {
      path: '../public/font/SUIT-SemiBold.woff2',
      weight: '600',
      style: 'normal'
    },
    {
      path: '../public/font/SUIT-Bold.woff2',
      weight: '700',
      style: 'normal'
    },
    {
      path: '../public/font/SUIT-ExtraBold.woff2',
      weight: '800',
      style: 'normal'
    },
    {
      path: '../public/font/SUIT-Heavy.woff2',
      weight: '900',
      style: 'normal'
    }
  ]
});
const RootLayout = ({
  children
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <html lang='ko'>
      {/* <body className='mx-auto overflow-hidden text-black xs:w-[520px]'> */}
      <body className={`${suit.className} mx-auto bg-gray-200 text-black xs:w-[520px]`}>
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
