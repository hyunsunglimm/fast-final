import Image from 'next/image';
import React from 'react';

const Icon = ({ image }: { image: string }) => {
  return (
    <div className='relative h-[3.7rem] w-[5rem]'>
      <Image src={`/images/icons/${image}.png`} alt={image} fill sizes='auto' />
    </div>
  );
};

export default Icon;
