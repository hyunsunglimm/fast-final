import { Metadata } from 'next';
import SignUpFormProvider from './_components/SignupFormProvider';

export const metadata: Metadata = {
  title: 'PORKO | 회원가입',
  description: 'PORKO 회원가입 페이지'
};

const AuthLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <section className='relative h-full min-h-dvh bg-white pb-80'>
      <SignUpFormProvider>{children}</SignUpFormProvider>
    </section>
  );
};
export default AuthLayout;
