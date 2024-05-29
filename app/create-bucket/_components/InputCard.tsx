import React from 'react';
import { Card } from '@/components/ui/card';

type InputCardProps = {
  children: React.ReactNode;
};
const InputCard = ({ children }: InputCardProps) => {
  return <Card className={'relative flex h-[7.6rem] items-center px-20 py-16'}>{children}</Card>;
};
export default InputCard;
