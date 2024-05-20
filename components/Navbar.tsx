'use client';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import {
  HomeIcon,
  AssetManagementIcon,
  BudgetCalendarIcon,
  FinancialProductIcon,
  NavAllIcon
} from './icons';

const NAV_DATA = [
  { title: '홈', path: '/', icon: <HomeIcon /> },
  { title: '자산', path: '/asset-management', icon: <AssetManagementIcon /> },
  { title: '가계부', path: '/budget-calendar', icon: <BudgetCalendarIcon /> },
  { title: '상품 탐색', path: '/financial-product', icon: <FinancialProductIcon /> },
  { title: '전체', path: '#', icon: <NavAllIcon /> }
];

const Navbar = () => {
  const pathname = usePathname();
  return (
    <ul className='fixed bottom-0 flex h-[7.2rem] w-full items-center justify-between rounded-t-md border-t border-gray-100 bg-white px-20 text-10  xs:w-[520px]'>
      {NAV_DATA.map((nav) => {
        const activeClass = nav.path === pathname ? 'text-primary' : 'text-gray-500';
        const Icon = () => nav.icon;
        return (
          <li key={nav.title} className='aspect-square w-[4.8rem] cursor-pointer'>
            <Link
              href={nav.path}
              className={`${activeClass} flex flex-col items-center justify-center gap-y-[0.4rem]`}
            >
              <Icon />
              {nav.title}
            </Link>
          </li>
        );
      })}
    </ul>
  );
};
export default Navbar;
