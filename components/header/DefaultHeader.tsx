import FlexBox, { flexBoxVariants } from '../ui/FlexBox';
import { ProfileIcon, NotiIcon } from '../icons';
import Text from '../ui/Text';

type DefaultHeaderProps = {
  isHome?: boolean;
  title?: string;
};

export const DefaultHeader = ({ isHome = false, title }: DefaultHeaderProps) => {
  return (
    <header
      className={flexBoxVariants({
        justifyContent: 'between',
        alignItems: 'center',
        className: 'h-[5.6rem] px-20'
      })}
    >
      {isHome ? (
        'logo'
      ) : (
        <Text variant='h2' sizes='20' weight='800'>
          {title}
        </Text>
      )}
      <FlexBox className='gap-x-[1.2rem]'>
        <NotiIcon />
        <ProfileIcon />
      </FlexBox>
    </header>
  );
};
