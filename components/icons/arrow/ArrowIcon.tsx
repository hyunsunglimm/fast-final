import { SvgComponentProps } from '@/types/svgComponentProps';

export const ArrowBackIcon = ({ ...props }: SvgComponentProps) => {
  return (
    <svg
      {...props}
      xmlns='http://www.w3.org/2000/svg'
      viewBox='0 0 25 24'
      fill='none'
      className='h-[2.4rem] w-[2.5rem]'
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

export const ArrowLeftIcon = ({ ...props }: SvgComponentProps) => {
  return (
    <svg
      {...props}
      xmlns='http://www.w3.org/2000/svg'
      className='h-[2.4rem] w-[2.5rem]'
      viewBox='0 0 24 24'
      fill='none'
    >
      <path
        d='M15 18L9 12L15 6'
        stroke='#23282E'
        strokeWidth='2'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
    </svg>
  );
};

export const ArrowRightIcon = (props: SvgComponentProps) => {
  return (
    <svg viewBox='0 0 8 12' xmlns='http://www.w3.org/2000/svg' {...props}>
      <path d='M1 1L6.5 6.5L1 11.5' strokeLinecap='round' />
    </svg>
  );
};

export const ArrowUpFillIcon = ({ ...props }: SvgComponentProps) => {
  return (
    <svg
      {...props}
      xmlns='http://www.w3.org/2000/svg'
      className='h-[1.6rem] w-[1.6rem]'
      viewBox='0 0 16 16'
      fill='none'
    >
      <path
        d='M2.00006 12.6667H14.0001C14.1216 12.6664 14.2406 12.6328 14.3445 12.5698C14.4484 12.5068 14.5331 12.4166 14.5895 12.309C14.646 12.2014 14.672 12.0805 14.6648 11.9592C14.6576 11.8379 14.6175 11.7209 14.5487 11.6207L8.54872 2.95407C8.30006 2.59474 7.70139 2.59474 7.45206 2.95407L1.45206 11.6207C1.38261 11.7207 1.34188 11.8378 1.3343 11.9593C1.32672 12.0808 1.35258 12.202 1.40907 12.3098C1.46555 12.4176 1.55051 12.5079 1.6547 12.5708C1.75889 12.6338 1.87834 12.6669 2.00006 12.6667Z'
        fill='#23282E'
      />
    </svg>
  );
};
