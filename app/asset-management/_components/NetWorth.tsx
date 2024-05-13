'use client';
import React, { useState, useRef, MouseEvent } from 'react';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import Text from '@/components/ui/Text';

const ItemList = [1, 2, 3, 4, 5];

const NetWorth = () => {
  const [scrollLeft, setScrollLeft] = useState<number>(0);
  const [isDragging, setIsDragging] = useState<boolean>(false);
  const [startX, setStartX] = useState<number>(0);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleDragStart = (e: MouseEvent<HTMLDivElement>) => {
    e.preventDefault();
    if (!containerRef.current) return;
    setIsDragging(true);
    setStartX(e.pageX - containerRef.current.offsetLeft);
    setScrollLeft(containerRef.current.scrollLeft);
  };

  const handleDragMove = (e: MouseEvent<HTMLDivElement>) => {
    if (!isDragging || !containerRef.current) return;
    const x = e.pageX - containerRef.current.offsetLeft;
    const walk = x - startX;

    containerRef.current.scrollLeft = scrollLeft - walk;
  };

  const handleDragEnd = () => {
    setIsDragging(false);
  };
  const handleItemClick = (e: MouseEvent<HTMLDivElement>) => {
    e.stopPropagation();
  };
  const mouseCursorClass = isDragging ? 'cursor-grab' : 'cursor-default';
  return (
    <div className=''>
      <div className='flex flex-col '>
        <Text>순자산</Text>
        <Text>3,123,567원</Text>
      </div>

      <div
        className={`${mouseCursorClass} relative flex w-full gap-[1.6rem] overflow-x-auto pb-[4rem] pt-[2rem]`}
        onMouseDown={handleDragStart}
        onMouseMove={handleDragMove}
        onMouseUp={handleDragEnd}
        onMouseLeave={handleDragEnd}
        ref={containerRef}
      >
        <div className='w-[0.2rem] shrink-0'></div>
        {ItemList.map((item) => {
          return (
            <Card
              key={item}
              className='aspect-square w-[24rem] shrink-0 cursor-pointer first:pl-8 last:pr-8'
              onClick={handleItemClick}
            >
              <CardHeader>
                <Text></Text>
              </CardHeader>
              <CardContent></CardContent>
            </Card>
          );
        })}
        <div className='w-[0.2rem] shrink-0'></div>
      </div>
    </div>
  );
};
export default NetWorth;
