import { CardContent } from '@/components/ui/card';
import { TextBubble } from './TextBubble';
import FlexBox from '@/components/ui/FlexBox';
import Image from 'next/image';

type ListContentProps = {
  altText: string;
  imagePath: string;
  isChallenge?: boolean;
};

export const ListContent = ({ altText, imagePath, isChallenge = true }: ListContentProps) => {
  return (
    <CardContent
      flexDirection='col'
      alignItems='start'
      justifyContent='between'
      className='relative pl-[1.6rem] pr-0'
    >
      <FlexBox
        justifyContent='between'
        alignItems='end'
        className='min-h-fit w-full gap-x-[2.1rem] px-0'
      >
        <FlexBox flexDirection='col' className='mb-[1rem] h-full w-[14.9rem] shrink-0 gap-y-[2rem]'>
          <TextBubble isChallenge={isChallenge} amounts={15000} date='5월2일' className='ml-auto' />
          <TextBubble isChallenge={isChallenge} amounts={15000} date='5월2일' />
        </FlexBox>
        <div className='relative h-[19.4rem] w-[20.2rem] overflow-hidden'>
          <Image
            src={imagePath}
            fill
            alt={altText}
            title={`${altText} 이미지`}
            sizes='auto'
            priority
            className='object-cover'
          />
        </div>
      </FlexBox>
    </CardContent>
  );
};
