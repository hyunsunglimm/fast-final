import { SvgComponentProps } from '@/types/svgComponentProps';

export const SubsServiceIcon = ({ ...props }: SvgComponentProps) => {
  return (
    <svg
      {...props}
      xmlns='http://www.w3.org/2000/svg'
      className='h-[2.4rem] w-[2.4rem]'
      viewBox='0 0 24 24'
      fill='none'
    >
      <g clipPath='url(#clip0_1311_9999)'>
        <path
          d='M0.01 3H23.98V22.1361C23.98 22.9151 23.34 23.5543 22.56 23.5543H1.42C0.64 23.5543 0 22.9151 0 22.1361V3H0.01Z'
          fill='#FFECE6'
        />
        <path
          d='M1.33 0H22.64C23.37 0 23.97 0.599251 23.97 1.32834V3.44569H0V1.32834C0 0.599251 0.6 0 1.33 0Z'
          fill='#FE5B27'
        />
        <path
          d='M19.6176 7H4.38242C3.61893 7 3 7.71079 3 8.58759V17.4124C3 18.2892 3.61893 19 4.38242 19H19.6176C20.3811 19 21 18.2892 21 17.4124V8.58759C21 7.71079 20.3811 7 19.6176 7Z'
          fill='#FE5B27'
        />
        <path
          d='M14.64 12.3674L10.64 10.0603C10.35 9.89048 10 10.1002 10 10.4298V15.054C10 15.3836 10.36 15.5934 10.64 15.4236L14.64 13.1164C14.93 12.9467 14.93 12.5372 14.64 12.3774V12.3674Z'
          fill='#FFECE6'
        />
      </g>
      <defs>
        <clipPath id='clip0_1311_9999'>
          <rect className='h-[2.4rem] w-[2.4rem]' fill='white' />
        </clipPath>
      </defs>
    </svg>
  );
};
