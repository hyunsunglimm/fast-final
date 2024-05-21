'use client';
import React, { ChangeEvent, useState } from 'react';
import Input from '@/components/ui/Input';
import Checkbox from '@/components/ui/CheckBox';
import Switch from '@/components/ui/Switch';
import { useForm } from 'react-hook-form';
import VisibleIcon from '@/components/icons/signup/VisibleIcon';
import InvisibleIcon from '@/components/icons/signup/InvisibleIcon';
import FlexBox from '@/components/ui/FlexBox';
import DeleteIcon from '@/components/icons/DeleteIcon';
const BudgetCalendarPage = () => {
  const [isChecked1, setIsChecked1] = useState(false);
  const [isChecked2, setIsChecked2] = useState(false);
  const [isChecked3, setIsChecked3] = useState(false);
  const [input, setInput] = useState('');
  const [isView, setIsView] = useState(false);
  const [errorMessage, setErrorMessage] = useState(false);
  const [deleteText, setDeleteText] = useState(false);

  const {
    watch,
    getValues,
    handleSubmit,
    register,
    setValue,
    formState: { errors }
  } = useForm({ defaultValues: { memberId: '', name: '' }, mode: 'onChange' });

  // console.log();
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
        <div className='space-y-20'>
          <div>
            <Input
              {...register('memberId', {
                required: '아이디는 필수 입력값입니다.',
                maxLength: {
                  value: 8,
                  message: '아이디는 4~8자리 글자 사이로 입력해주세요'
                },
                minLength: {
                  value: 4,
                  message: '아이디는 4~8자리 글자 사이로 입력해주세요'
                }
              })}
              id='memberId'
              placeholder='아이디를 입력해주세요'
              validation={errors.memberId ? 'error' : 'success'}
              icon={
                watch('memberId') ? (
                  <DeleteIcon key='item' onClick={() => setValue('memberId', '')} />
                ) : null
              }
            />
            {errors.memberId && <p>{errors.memberId?.message}</p>}
          </div>
          <Input
            {...register('name', {
              required: '이름은 필수 입력값입니다.',
              maxLength: {
                value: 8,
                message: '이름는 4~8자리 글자 사이로 입력해주세요'
              },
              minLength: {
                value: 4,
                message: '이름는 4~8자리 글자 사이로 입력해주세요'
              }
            })}
            id='name'
            placeholder='아이디를 입력해주세요'
            validation={errors.name ? 'error' : 'success'}
            trailingText='원'
          />
          <Input
            onChange={handleInput}
            type={isView ? 'text' : 'password'}
            id='password'
            placeholder='패스를 입력해주세요'
            validation={errorMessage ? 'error' : 'success'}
            value={input}
            trailingText='원'
            icon={[
              input ? <DeleteIcon key='item' onClick={() => setInput('')} /> : null,
              isView ? (
                <VisibleIcon onClick={() => setIsView((prev) => !prev)} />
              ) : (
                <InvisibleIcon onClick={() => setIsView((prev) => !prev)} />
              )
            ]}
          />
        </div>
        {/* <button type='button' onClick={() => setIsView((prev) => !prev)}>
          {isView ? <VisibleIcon /> : <InvisibleIcon />}
        </button> */}
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
