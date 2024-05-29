import SignUpFormProvider from './_components/SignupFormProvider';

const AuthLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <section className='relative h-dvh bg-white'>
      <SignUpFormProvider>{children}</SignUpFormProvider>
    </section>
  );
};
export default AuthLayout;
