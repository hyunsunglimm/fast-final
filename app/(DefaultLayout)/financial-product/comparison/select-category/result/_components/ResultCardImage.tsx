import Image from 'next/image';

type ResultCardImageProps = {
  imageUrl: string;
  alt: string;
};

const ResultCardImage = ({ imageUrl, alt }: ResultCardImageProps) => {
  return (
    <div className='relative mx-auto mb-[6rem] flex h-[28.5rem] w-[33.5rem] cursor-grab items-center justify-center'>
      <Image
        src={imageUrl}
        alt={alt}
        width={400}
        height={160}
        className='pointer-events-none absolute z-10 w-[25.2rem] rotate-[75deg]'
        priority
      />
      <Image
        src='/images/financial-product/shadow.png'
        alt='카드 그림자 이미지'
        width={400}
        height={288}
        className='absolute right-[6rem] top-[6rem] w-[23.9rem]'
      />
    </div>
  );
};

export default ResultCardImage;
