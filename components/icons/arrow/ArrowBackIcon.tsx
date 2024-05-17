import { SvgComponentProps } from '@/types/svgComponentProps';

export const ArrowBackIcon = ({ ...props }: SvgComponentProps) => {
  return (
    <svg
      {...props}
      xmlns='http://www.w3.org/2000/svg'
      width='25'
      height='24'
      viewBox='0 0 25 24'
      fill='none'
    >
      <path
        d='M20.4984 12L4.49841 12M4.49841 12L10.4984 18M4.49841 12L10.4984 6'
        stroke='#23282E'
        strokeWidth='1.2'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
    </svg>
  );
};
