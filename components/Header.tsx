'use client';
import FlexBox from './ui/FlexBox';
import { usePathname } from 'next/navigation';
import { ArrowLeftIcon } from './icons';
import Link from 'next/link';
type HeaderProps = {
  children?: React.ReactNode;
  href?: string;
};
type PathConfig = {
  [key: string]: {
    title: string;
    isBack: boolean;
  };
};
const pathConfig: PathConfig = {
  '/': {
    title: 'Home',
    isBack: false
  },
  '/edit-widget': {
    title: '한 눈에 보기 편집',
    isBack: true
  }
};

const Header = () => {
  const pathname = usePathname();
  // console.log(pathname);
  const currentPageConfig = pathConfig[pathname];
  // console.log(currentPageConfig);
  // console.log(currentPageConfig);
  // const renderHeader = currentPageConfig.isBack ? (
  //   <IsBackHeader>{currentPageConfig.title}</IsBackHeader>
  // ) : (
  //   <DefaultHeader>{currentPageConfig.title}</DefaultHeader>
  // );

  return (
    <FlexBox alignItems='center' className='h-[5.6rem] px-40'>
      Home
    </FlexBox>
  );
};

export default Header;

export const IsBackHeader = ({ children, href }: HeaderProps) => {
  return (
    <>
      <Link href={`${href}`}>
        <ArrowLeftIcon />
      </Link>
      {children}
    </>
  );
};
const DefaultHeader = ({ children }: HeaderProps) => <>{children}</>;
