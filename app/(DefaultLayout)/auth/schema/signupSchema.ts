import * as z from 'zod';

export const signupSchema = z
  .object({
    email: z.string().email({ message: '이메일 형식으로 입력해주세요.' }),
    checkEmail: z.boolean(),
    password: z
      .string()
      .min(8, { message: '비밀번호는 8자 이상이어야 합니다.' })
      .regex(/^(?=.*[a-z])(?=.*\d)(?=.*[!@#$%^&*]).+$/, {
        message: '비밀번호는 영문, 숫자, 특수문자를 포함해야 합니다.'
      }),
    confirmPassword: z.string(),
    name: z.string().min(1, { message: '이름을 입력해주세요.' }),
    phoneNumber: z
      .string()
      .min(1, { message: '전화번호를 입력해주세요.' })
      .regex(/^[0-9]+$/, { message: '숫자만 입력해주세요.' }),
    address: z.object({
      roadName: z.string().min(1, { message: '주소를 입력해주세요.' }),
      detail: z.string().min(1, { message: '상세 주소를 입력해주세요.' })
    }),
    gender: z.string().min(1, { message: '성별을 선택해주세요.' })
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: '패스워드가 일치하지 않습니다.',
    path: ['confirmPassword']
  });

export type SignupInputsValues = z.infer<typeof signupSchema>;

const getSessionValue = (key: string) => {
  const item = typeof window !== 'undefined' ? sessionStorage.getItem('signup-storage') : null;
  return item ? JSON.parse(item).state[key] : null;
};

export const defaultValues: SignupInputsValues = {
  email: getSessionValue('email') || '',
  checkEmail: getSessionValue('checkEmail') || true,
  password: getSessionValue('password') || '',
  confirmPassword: getSessionValue('confirmPassword') || '',
  name: getSessionValue('name') || '',
  phoneNumber: getSessionValue('phoneNumber') || '',
  address: {
    roadName: getSessionValue('roadName') || '',
    detail: getSessionValue('detail') || ''
  },
  gender: getSessionValue('gender') || ''
};
