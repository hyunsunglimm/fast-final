'use client';
import React, { ChangeEvent, useState } from 'react';
import Input from '@/components/ui/Input';
import Checkbox from '@/components/ui/CheckBox';
import Switch from '@/components/ui/Switch';
import { useForm } from 'react-hook-form';
const BudgetCalendarPage = () => {
  const [isChecked1, setIsChecked1] = useState(false);
  const [isChecked2, setIsChecked2] = useState(false);
  const [isChecked3, setIsChecked3] = useState(false);
  const [input, setInput] = useState('');
  const [errorMessage, setErrorMessage] = useState(false);

  const {
    handleSubmit,
    register,
    formState: { errors, validatingFields }
  } = useForm({ defaultValues: { memberId: '' } });
  // console.log('validatingFields', validatingFields);
  const handleInput = (event: ChangeEvent<HTMLInputElement>) => {
    const newValue = event.target.value;
    setInput(newValue);

    // Validate input length
    const isValidLength = newValue.length >= 4 && newValue.length <= 8;

    setErrorMessage(!isValidLength);
  };
  const handleCheckboxChange1 = (checked: boolean) => {
    setIsChecked1(checked);
  };

  const handleCheckboxChange2 = (checked: boolean) => {
    setIsChecked2(checked);
  };

  const handleToggle3 = () => {
    setIsChecked3(!isChecked3);
  };

  const onSubmit = (data: any) => {
    // console.log(data);
  };
  // console.log('errors.memberId', errors.memberId);
  return (
    <div>
      <p>가계부</p>
      <form className='px-20' onSubmit={handleSubmit(onSubmit)}>
        <Input
          {...register('memberId', {
            required: '패스워드는 필수 입력값입니다.',
            maxLength: {
              value: 8,
              message: '패스워드는 4~8자리 글자 사이로 입력해주세요'
            },
            minLength: {
              value: 4,
              message: '패스워드는 4~8자리 글자 사이로 입력해주세요'
            }
          })}
          id='test'
          placeholder='아이디를 입력해주세요'
          validation={errors.memberId ? 'error' : 'success'}
          // onChange={handleInput}
          // disabled
        />
        <Input
          onChange={handleInput}
          id='memberId'
          placeholder='아이디를 입력해주세요'
          validation={errorMessage ? 'error' : 'success'}
        />
        {errors.memberId && <p>{errors.memberId?.message}</p>}
        <button className='h-10 w-10 bg-white' type='submit'>
          dd
        </button>
      </form>
      {/* <Input placeholder='Enter text...' /> */}
      <Checkbox id='1' checked={isChecked1} onChange={handleCheckboxChange1} onImage='greenImage'>
        <p>체크박스 레이블</p>
      </Checkbox>
      <Checkbox
        id='2'
        checked={isChecked2}
        onChange={handleCheckboxChange2}
        size='md'
        childrenPosition='left'
        offImage='none'
      >
        체크박스 레이블
      </Checkbox>
      <Switch id='switch' checked={isChecked3} onChange={handleToggle3} />
    </div>
  );
};

export default BudgetCalendarPage;
