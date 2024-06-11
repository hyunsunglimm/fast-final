'use client';

import FlexBox from './FlexBox';
import Text from './Text';
import Link from 'next/link';
import { useCallback } from 'react';
import { useQueryString } from '@/shared/hooks/useQueryString';

type TabProps = {
  pageParams?: string;
  array: string[];
  type: 'box' | 'underline';
  tabKey: string;
  onTabChange?: (newViewMode: string) => void;
};

const Tab = ({ pageParams, array, type, tabKey, onTabChange }: TabProps) => {
  const { searchParams, pathname, queryValue } = useQueryString();

  const selectedTab = queryValue(tabKey) || pageParams;

  const createQueryString = useCallback(
    (name: string, value: string) => {
      const params = new URLSearchParams(searchParams.toString());
      params.set(name, value);

      return params.toString();
    },
    [searchParams]
  );

  return (
    <FlexBox
      className={`${type === 'box' ? 'gap-[0.8rem]' : 'w-full border-b border-gray-200 px-20'}`}
    >
      {array.map((label) => {
        return (
          <Link
            scroll={false}
            href={pathname + '?' + createQueryString(tabKey, label)}
            key={label}
            className={getStyle(type, label === selectedTab)}
            onClick={() => {
              if (onTabChange) {
                onTabChange(label);
              }
            }}
          >
            <Text weight={type === 'box' ? '500' : '700'}>{label}</Text>
          </Link>
        );
      })}
    </FlexBox>
  );
};

const getStyle = (type: 'box' | 'underline', isSelcted: boolean) => {
  let className = '';

  if (type === 'box') {
    className += ' rounded-[4.3rem] px-[1.4rem] py-[0.7rem]';
    if (isSelcted) {
      className += ' bg-black text-white';
    } else {
      className += ' h-[3.4rem] border border-gray-400 text-gray-400';
    }
  }

  if (type === 'underline') {
    className += ' w-full text-center px-[1rem] py-[1.2rem] -mb-px';
    if (isSelcted) {
      className += ' h-[4.4rem] border-b-2 border-black';
    } else {
      className += ' text-gray-400';
    }
  }

  return className;
};

export default Tab;
