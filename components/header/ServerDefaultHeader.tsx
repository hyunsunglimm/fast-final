import { auth } from '@/auth';
import { DefaultHeader } from './DefaultHeader';
import { HTMLAttributes } from 'react';

type ServerDefaultHeaderProps = {
  isHome?: boolean;
  title?: string;
  defaultColor?: string;
  isFixed?: boolean;
} & HTMLAttributes<HTMLElement>;

const ServerDefaultHeader = async ({
  isHome,
  title,
  defaultColor,
  isFixed
}: ServerDefaultHeaderProps) => {
  const session = await auth();

  return (
    <DefaultHeader
      isHome={isHome}
      title={title}
      defaultColor={defaultColor}
      isFixed={isFixed}
      userData={session?.user}
    />
  );
};

export default ServerDefaultHeader;
