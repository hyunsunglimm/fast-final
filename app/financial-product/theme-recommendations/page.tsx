import Text from '@/components/ui/Text';
import Link from 'next/link';
import { IsBackHeader } from '@/components/header';
import Icon from '@/components/Icon';
import { THEMES } from '@/shared/utils/financial-product/staticData';

const ThemeRecommendationsPage = () => {
  return (
    <>
      <IsBackHeader href='./?tab=신용카드' defaultColor='#fff' />
      <main className='bg-white px-20 pb-[6rem] pt-[1rem]'>
        <Text variant='h1' sizes='24' weight='600' className='mb-40'>
          상황에 맞는 상품을 <br /> 선택해 보세요!
        </Text>
        <ul className='flex flex-col gap-[1.6rem]'>
          {THEMES.map((theme) => {
            return (
              <li key={theme.title}>
                <Link
                  style={{ backgroundColor: theme.color }}
                  href={`/financial-product/theme-recommendations/${theme.href}`}
                  className='flex items-center justify-between rounded-[1.6rem] px-[2.4rem] py-[2.8rem] text-white'
                >
                  <div className='grow'>
                    <Text variant='h2' sizes='18' weight='700'>
                      {theme.title}
                    </Text>
                    <Text sizes='14'>{theme.subTitle}</Text>
                  </div>
                  <Icon src={theme.iconPath} alt={theme.title} size='48' className='rounded-none' />
                </Link>
              </li>
            );
          })}
        </ul>
      </main>
    </>
  );
};

export default ThemeRecommendationsPage;
