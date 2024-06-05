'use client';

import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { SignupInputsValues, defaultValues, signupSchema } from '../../schema/signupSchema';
import { Form } from '@/components/ui/form';
import { signup } from '@/service/api/auth';
import { useState } from 'react';

const SignUpFormProvider = ({ children }: { children: React.ReactNode }) => {
  const form = useForm<SignupInputsValues>({
    resolver: zodResolver(signupSchema),
    defaultValues,
    mode: 'all'
  });

  const [error, setError] = useState<string | undefined>('');
  const [success, setSuccess] = useState<string | undefined>('');

  const { handleSubmit } = form;

  const onSubmit = handleSubmit(async (formValues) => {
    setError('');
    setSuccess('');
    const result = await signup(formValues);
    console.log(`error: ${result.error}`, `success: ${result.success}`);
    if (result.success) {
      setSuccess(result.success);
    }
    if (result.error) {
      setSuccess(result.error);
    }

    // sessionStorage.removeItem('signup-storage');
  });

  return (
    <Form {...form}>
      <form onSubmit={onSubmit} className='px-20'>
        {children}
        {success && (
          <p className='mt-20 rounded-xs bg-blue-200 p-2 text-2xl text-active'>{success}</p>
        )}
        {error && <p className='mt-20 rounded-xs bg-red-200 p-2 text-2xl text-warning'>{error}</p>}
      </form>
    </Form>
  );
};
export default SignUpFormProvider;
