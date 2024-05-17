import { SvgComponentProps } from '@/types/svgComponentProps';

const PlusIcon = ({ ...props }: SvgComponentProps) => {
  return (
    <svg
      {...props}
      xmlns='http://www.w3.org/2000/svg'
      width='16'
      height='16'
      viewBox='0 0 16 16'
      fill='none'
    >
      <g clipPath='url(#clip0_1532_13669)'>
        <path
          d='M14.306 6.32368H9.54546V1.56316C9.54546 0.710526 8.85861 0 7.9823 0C7.10598 0 6.41914 0.686842 6.41914 1.56316V6.32368H1.6823C0.829667 6.32368 0.119141 7.01053 0.119141 7.88684C0.119141 8.76316 0.805983 9.45 1.6823 9.45H6.44283V14.2105C6.44283 15.0632 7.12967 15.7737 8.00598 15.7737C8.8823 15.7737 9.56914 15.0868 9.56914 14.2105V9.45H14.3297C15.1823 9.45 15.8928 8.76316 15.8928 7.88684C15.8928 7.01053 15.206 6.32368 14.3297 6.32368H14.306Z'
          fill='white'
        />
      </g>
      <defs>
        <clipPath id='clip0_1532_13669'>
          <rect width='15.75' height='15.75' fill='white' transform='translate(0.119141)' />
        </clipPath>
      </defs>
    </svg>
  );
};

export default PlusIcon;
