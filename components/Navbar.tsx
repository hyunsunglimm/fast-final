'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { match } from 'path-to-regexp';
import { publicRoutes } from '@/routes';
import Text from './ui/Text';
import {
  AssetManagementIcon,
  BudgetCalendarIcon,
  FinancialProductIcon,
  HomeIcon,
  NavAllIcon
} from './icons/bottom-nav/BottomNavIcon';

export const NAV_DATA = [
  { title: '홈', path: '/', icon: <HomeIcon /> },
  { title: '자산', path: '/asset-management', icon: <AssetManagementIcon /> },
  { title: '가계부', path: '/budget-calendar', icon: <BudgetCalendarIcon /> },
  { title: '상품 탐색', path: '/financial-product?tab=신용카드', icon: <FinancialProductIcon /> },
  { title: '전체', path: '#', icon: <NavAllIcon /> }
];

const Navbar = () => {
  const pathname = usePathname();

  return (
    <>
      {isMatchPath(pathname) ? (
        <nav className='fixed bottom-0 h-[7.2rem] w-full rounded-t-md border-t border-gray-100 bg-white px-20 xs:w-[520px]'>
          <ul className='mt-10 flex items-center justify-between'>
            {NAV_DATA.map((nav) => {
              const isActive =
                nav.path === '/'
                  ? pathname === nav.path
                  : pathname.startsWith(nav.path.split('?')[0]);
              const activeClass = isActive ? 'text-primary' : 'text-gray-500';
              const textClass = isActive ? 'text-primary' : 'text-gray-500';

              return (
                <li key={nav.title}>
                  <Link
                    aria-label={`${nav.title}로 이동`}
                    href={nav.path}
                    className={`${activeClass} flex aspect-square w-[4.8rem] cursor-pointer flex-col items-center justify-center gap-y-[0.4rem] rounded-full active:bg-slate-100 active:opacity-80`}
                  >
                    {nav.icon}
                    <Text sizes='10' className={`${textClass}`}>
                      {nav.title}
                    </Text>
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>
      ) : null}
    </>
  );
};
export default Navbar;
const isMatchPath = (path: string) => publicRoutes.some((nav) => Boolean(match(nav)(path)));
