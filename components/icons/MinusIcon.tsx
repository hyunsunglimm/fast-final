import FlexBox from '../ui/FlexBox';

const MinusIcon = () => {
  return (
    <FlexBox
      alignItems='center'
      justifyContent='center'
      className='relative aspect-square w-[2.8rem] rounded-full bg-primary'
    >
      <span className='h-[0.3rem] w-[1.6rem] rounded-lg bg-white'></span>{' '}
    </FlexBox>
  );
};
export default MinusIcon;
