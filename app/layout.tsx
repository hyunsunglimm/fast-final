import type { Metadata } from 'next';
import './globals.css';
import QueryProviders from '@/shared/context/queryProvider';
import AuthProvider from '@/shared/context/authProvider';
import Navbar from '@/components/Navbar';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { SpeedInsights } from '@vercel/speed-insights/next';
export const metadata: Metadata = {
  title: 'PORKO',
  description: 'MZ특화 금융앱 PORKO !!!'
};

const RootLayout = async ({
  children
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <html lang='ko' className='hide-scrollbar bg-gray-200'>
      <body className='relative mx-auto overflow-y-scroll font-suit tracking-tight text-black xs:w-[520px]'>
        <AuthProvider>
          <QueryProviders>
            {children}
            <Navbar />
            <ReactQueryDevtools />
          </QueryProviders>
        </AuthProvider>
      </body>
      <SpeedInsights />
    </html>
  );
};
export default RootLayout;
