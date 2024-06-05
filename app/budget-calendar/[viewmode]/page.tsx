// import React from 'react';
// import { DefaultHeader } from '@/components/header';
// import Tab from '@/components/ui/Tab';
// import LookAloneContainer from '../_components/look-alone/LookAloneContainer';
// import LookTogetherContainer from '../_components/look-together/LookTogetherContainer';

// type ViewModePageProps = {
//   params: Record<string, string>;
//   searchParams: Record<string, string | undefined>;
// };

// const ViewModePage = ({ params, searchParams }: ViewModePageProps) => {
//   const viewMode = params.viewmode || 'alone';

//   return (
//     <div>
//       <div className='min-h-full bg-white pb-[13.2rem]'>
//         <DefaultHeader title='가계부' />
//         <Tab array={['혼자봐요', '함께봐요']} type='underline' tabKey='viewMode' />
//         {viewMode === 'alone' && <LookAloneContainer />}
//         {viewMode === 'together' && <LookTogetherContainer viewMode={viewMode} />}
//       </div>
//     </div>
//   );
// };

// export default ViewModePage;
