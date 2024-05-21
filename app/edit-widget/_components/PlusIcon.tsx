import FlexBox from '@/components/ui/FlexBox';

const PlusIcon = () => {
  return (
    <FlexBox
      aria-hidden
      alignItems='center'
      justifyContent='center'
      className='relative aspect-square w-[2.8rem] rounded-full bg-primary'
    >
      <span aria-hidden className='absolute h-[0.3rem] w-[1.6rem] rounded-lg bg-white'></span>
      <span
        aria-hidden
        className='absolute h-[0.3rem] w-[1.6rem] rotate-90 rounded-lg bg-white'
      ></span>
    </FlexBox>
  );
};

export default PlusIcon;
