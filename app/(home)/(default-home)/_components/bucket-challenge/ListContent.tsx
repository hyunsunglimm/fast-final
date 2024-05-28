import { CardContent } from '@/components/ui/card';
import { TextBubble } from './TextBubble';
import FlexBox from '@/components/ui/FlexBox';

type ListContentProps = {
  textColor: 'bucket' | 'challenge';
  children: React.ReactNode;
};

export const ListContent = ({ textColor, children }: ListContentProps) => {
  return (
    <CardContent
      flexDirection='row'
      alignItems='end'
      justifyContent='between'
      className='relative mb-24 px-24'
    >
      <FlexBox flexDirection='col' className='shrink-0 gap-y-16'>
        <TextBubble textColor={textColor} amounts={15000} date='5월2일' />
        <TextBubble textColor={textColor} amounts={15000} date='5월2일' />
      </FlexBox>
      {children}
    </CardContent>
  );
};
