'use client';

import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { SignupInputsValues, defaultValues, signupSchema } from '../../schema/signupSchema';
import { Form } from '@/components/ui/form';
import { signup } from '@/service/api/auth';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import MessagePopup from '@/components/MessagePopup';

const SignUpFormProvider = ({ children }: { children: React.ReactNode }) => {
  const form = useForm<SignupInputsValues>({
    resolver: zodResolver(signupSchema),
    defaultValues,
    mode: 'all'
  });
  const router = useRouter();

  const [error, setError] = useState<string | undefined>('');

  const { handleSubmit } = form;

  const onSubmit = handleSubmit(async (formValues) => {
    setError('');
    const result = await signup(formValues);

    if (result?.error) {
      setError(result.error);
      setTimeout(() => setError(''), 1000);
      return;
    }
    router.push('/auth/login');
    sessionStorage.removeItem('signup-storage');
  });

  return (
    <Form {...form}>
      <form onSubmit={onSubmit} className='px-20'>
        {children}

        <MessagePopup isView={!!error}>{error}</MessagePopup>
      </form>
    </Form>
  );
};
export default SignUpFormProvider;
