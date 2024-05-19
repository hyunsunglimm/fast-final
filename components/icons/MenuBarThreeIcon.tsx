import FlexBox from '../ui/FlexBox';

const MenuBarThreeIcon = () => {
  return (
    <FlexBox
      flexDirection='col'
      alignItems='center'
      justifyContent='between'
      className='w-[1.8rem] cursor-grab gap-y-[0.4rem]'
    >
      <span className='block h-[2px] w-full shrink-0 rounded-lg bg-gray-500'></span>
      <span className='block h-[2px] w-full shrink-0 rounded-lg bg-gray-500'></span>
      <span className='block h-[2px] w-full shrink-0 rounded-lg bg-gray-500'></span>
    </FlexBox>
  );
};
export default MenuBarThreeIcon;
