import { SvgComponentProps } from '@/types/svgComponentProps';

const ArrowRightIcon = (props: SvgComponentProps) => {
  const { stroke = 'black', fill = 'none' } = props;
  return (
    <svg viewBox='0 0 8 12' fill={fill} xmlns='http://www.w3.org/2000/svg' {...props}>
      <path d='M1 1L6.5 6.5L1 11.5' stroke={stroke} strokeLinecap='round' />
    </svg>
  );
};

export default ArrowRightIcon;
