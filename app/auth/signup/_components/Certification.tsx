'use client';

import Button from '@/components/ui/Button';
import { ChangeEvent, useEffect, useMemo, useRef, useState } from 'react';

const Certification = () => {
  const inputRef1 = useRef<HTMLInputElement>(null);
  const inputRef2 = useRef<HTMLInputElement>(null);
  const inputRef3 = useRef<HTMLInputElement>(null);
  const inputRef4 = useRef<HTMLInputElement>(null);
  const inputRef5 = useRef<HTMLInputElement>(null);
  const inputRef6 = useRef<HTMLInputElement>(null);

  const btnRef = useRef<HTMLButtonElement>(null);

  const inputRefs = useMemo(
    () => [inputRef1, inputRef2, inputRef3, inputRef4, inputRef5, inputRef6],
    []
  );

  const INITIAL_INFO = [
    { id: 0, value: '', ref: inputRefs[0] },
    { id: 1, value: '', ref: inputRefs[1] },
    { id: 2, value: '', ref: inputRefs[2] },
    { id: 3, value: '', ref: inputRefs[3] },
    { id: 4, value: '', ref: inputRefs[4] },
    { id: 5, value: '', ref: inputRefs[5] }
  ];

  const [inputInfo, setInputInfo] = useState(INITIAL_INFO);

  useEffect(() => {
    inputRefs[0].current?.focus();

    inputInfo.forEach((info, index) => {
      if (info.value.length === 1 && index < inputInfo.length - 1) {
        inputRefs[index + 1].current?.focus();
      }

      if (info.value.length === 1 && index === inputInfo.length - 1) {
        btnRef.current?.focus();
      }
    });
  }, [inputInfo, inputRefs]);

  const handleChange = (e: ChangeEvent<HTMLInputElement>, id: number) => {
    const enteredValue = e.target.value;
    if (!/^\d*$/.test(enteredValue)) return;

    setInputInfo((prev) => {
      const updateValues = [...prev];
      const currentValue = updateValues[id];
      const updateValue = {
        ...currentValue,
        value: enteredValue
      };

      updateValues[id] = updateValue;

      return updateValues;
    });
  };

  const handleSubmit = () => {
    const enteredValue = inputInfo.map((info) => info.value).join('');
  };

  return (
    <div className='w-full'>
      <div className='mb-4 grid grid-cols-6 gap-2'>
        {inputInfo.map(({ id, value, ref }) => {
          return (
            <input
              className='p-2'
              key={id}
              ref={ref}
              value={value}
              onChange={(e) => handleChange(e, id)}
            />
          );
        })}
      </div>
      <Button ref={btnRef} onClick={handleSubmit}>
        다음
      </Button>
    </div>
  );
};

export default Certification;
