import type { Metadata } from 'next';
import '@/app/globals.css';
import QueryProviders from '@/shared/context/queryProvider';
import AuthProvider from '@/shared/context/authProvider';
import Navbar from '@/components/Navbar';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { SpeedInsights } from '@vercel/speed-insights/next';
import { Analytics } from '@vercel/analytics/react';

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
            <SpeedInsights />
            <Analytics />
          </QueryProviders>
        </AuthProvider>
      </body>
    </html>
  );
};
export default RootLayout;
