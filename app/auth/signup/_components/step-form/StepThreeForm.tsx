// import { CardContent } from '@/components/ui/card';
// import Input from '@/components/ui/Input';
// import FlexBox from '@/components/ui/FlexBox';
// import CheckedGender from './_components/CheckedGender';
// import DaumAddress from './_components/DaumAddress';
// import Icon from '@/components/Icon';
// import { useState } from 'react';

// export const StepThreeForm = () => {
//   const [visiblePostDaum, setVisiblePostDaum] = useState(false);
//   return (
//     <>
//       {visiblePostDaum && <DaumAddress setVisiblePostDaum={setVisiblePostDaum} />}
//       <CardContent flexDirection='col' className='mt-32 space-y-12'>
//         <FlexBox className='relative w-full gap-8' flexDirection='row' alignItems='center'>
//           <Input
//             // {...register('address.roadName', { required: true })}
//             placeholder='주소 검색하기'
//             aria-label='주소 검색하기'
//             type='text'
//             id='address.roadName'
//             // defaultValue={addressFieldValues || ''}
//           />
//           <Icon
//             src='/icons/system-icon/search.svg'
//             alt='검색 돋보기 아이콘'
//             className='absolute right-0 cursor-pointer'
//             placeholder='empty'
//             onClick={() => setVisiblePostDaum(true)}
//           />
//         </FlexBox>
//         <FlexBox className='w-full gap-8' flexDirection='col'>
//           <Input
//             // {...register('address.roadName', { required: true })}
//             placeholder='상세주소를 입력해주세요'
//             aria-label='상세주소를 입력해주세요'
//             type='text'
//             id='address.detail'

//             // defaultValue={addressFieldValues || ''}
//           />
//         </FlexBox>
//         <CheckedGender />
//       </CardContent>
//     </>
//   );
// };
