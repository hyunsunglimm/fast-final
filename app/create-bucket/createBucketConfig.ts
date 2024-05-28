export type CreateBucketStep = {
  title: string;
  stepText: string;
  imgSrc: string;
};
export type CreateBucketConfigType = { [key: number]: CreateBucketStep };

export const createBucketConfig: CreateBucketConfigType = {
  1: {
    title: '당신의 버킷리스트는 무엇인가요?',
    stepText: '목표설정',
    imgSrc: '/images/create-bucket/flow-1.png'
  },
  2: {
    title: '출금통장과 저축통장을 선택해주세요',
    stepText: '통장설정',
    imgSrc: '/images/create-bucket/flow-2.png'
  },
  3: {
    title: '매주 저축할 금액과 날짜를 선택해주세요',
    stepText: '규칙설정',
    imgSrc: '/images/create-bucket/flow-3.png'
  },
  4: {
    title: '단순 저축으로만 달성하기 힘들다면 <br/> 이용중인 상품도 포함시켜보세요',
    stepText: '상품연결',
    imgSrc: '/images/create-bucket/flow-4.png'
  }
};

export const getStepConfig = (step: string | undefined): CreateBucketStep => {
  const stepIndex = Number(step);
  return (
    createBucketConfig[stepIndex] || {
      title: '유효하지 않은 단계입니다.',
      stepText: '에러',
      imgSrc: ''
    }
  );
};
