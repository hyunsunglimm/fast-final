import React from 'react';
import Link from 'next/link';
const Navbar = () => {
  return (
    <ul className='flex w-full justify-between gap-x-2 px-4 text-body16'>
      <li>
        <Link href='/'>홈</Link>
      </li>
      <li>
        <Link href='/asset-management'>자산 관리</Link>
      </li>
      <li>
        <Link href='/budget-calendar'>가계부</Link>
      </li>
      <li>
        <Link href='/financial-product'>금융 상품</Link>
      </li>
    </ul>
  );
};
export default Navbar;
