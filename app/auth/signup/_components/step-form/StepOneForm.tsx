// import { CardContent } from '@/components/ui/card';
// import Input from '@/components/ui/Input';
// import FlexBox from '@/components/ui/FlexBox';
// import Text from '@/components/ui/Text';
// import Button from '@/components/ui/Button';
// import { useFormContext, Controller } from 'react-hook-form';

// export const StepOneForm = () => {
//   // const {
//   //   register,
//   //   control,
//   //   formState: { errors }
//   // } = useFormContext<SignupInputs>();

//   return (
//     <>
//       <CardContent flexDirection='col' className='mt-32 space-y-12'>
//         <FlexBox className='w-full gap-8' flexDirection='col'>
//           <FlexBox className='w-full gap-8'>
//             <Input
//               {...register('email')}
//               placeholder='이메일을 입력해주세요'
//               id='email'
//               validation={errors.email ? 'error' : 'success'}
//             />

//             <Button type='button' size='xs' className='min-w-fit px-12'>
//               중복확인
//             </Button>
//           </FlexBox>
//           {errors.email && <Text sizes='12'>{errors.email.message}</Text>}
//         </FlexBox>
//         <FlexBox className='w-full gap-8' flexDirection='col'>
//           <Controller
//             control={control}
//             name='password'
//             render={({ field }) => {
//               return (
//                 <Input
//                   {...field}
//                   placeholder='비밀번호를 입력해주세요'
//                   id='password'
//                   validation={errors.password ? 'error' : 'success'}
//                 />
//               );
//             }}
//           />
//           {errors.password && <Text sizes='12'>{errors.password.message}</Text>}
//         </FlexBox>
//         <FlexBox className='w-full gap-8' flexDirection='col'>
//           <Controller
//             control={control}
//             name='confirmPassword'
//             render={({ field }) => {
//               return (
//                 <Input
//                   {...field}
//                   placeholder='비밀번호 재확인'
//                   id='confirmPassword'
//                   validation={errors.confirmPassword ? 'error' : 'success'}
//                 />
//               );
//             }}
//           />
//           {errors.confirmPassword && <Text sizes='12'>{errors.confirmPassword.message}</Text>}
//         </FlexBox>
//       </CardContent>
//     </>
//   );
// };
