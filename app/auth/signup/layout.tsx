import SignUpFormProvider from './_components/SignupFormProvider';

const AuthLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <section className='relative h-full min-h-dvh bg-white pb-80'>
      <SignUpFormProvider>{children}</SignUpFormProvider>
    </section>
  );
};
export default AuthLayout;
