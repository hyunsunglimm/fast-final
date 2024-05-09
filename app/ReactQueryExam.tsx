'use client';
// TODO 삭제예정
import { useQuery } from '@tanstack/react-query';
import React from 'react';

const Test = () => {
  const res = useMoviesQuery({ wait: 1 });

  return <div>Test</div>;
};

export default Test;

const useMoviesQuery = ({ wait }: { wait: number }) => {
  return useQuery({
    queryKey: ['test'],
    queryFn: async () => {
      const res = await fetch(`https://jsonplaceholder.typicode.com/todos/${wait}`, {
        cache: 'no-store'
      });
      return await res.json();
    }
  });
};
