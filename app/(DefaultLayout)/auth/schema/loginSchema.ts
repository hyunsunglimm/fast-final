import * as z from 'zod';

export const loginSchema = z.object({
  email: z.string().email({ message: '이메일 형식으로 입력해주세요.' }),
  password: z.string().min(1, {
    message: '비밀번호를 입력해주세요.'
  })
});

export type LoginInputsValues = z.infer<typeof loginSchema>;

export const defaultValues: LoginInputsValues = {
  email: '',
  password: ''
};
