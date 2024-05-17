import FlexBox from '../ui/FlexBox';

const PlusIcon = () => {
  return (
    <FlexBox
      alignItems='center'
      justifyContent='center'
      className='relative aspect-square w-[2.8rem] rounded-full bg-primary'
    >
      <span className='absolute h-[0.3rem] w-[1.6rem] rounded-lg bg-white'></span>
      <span className='absolute h-[0.3rem] w-[1.6rem] rotate-90 rounded-lg bg-white'></span>
    </FlexBox>
  );
};

export default PlusIcon;
