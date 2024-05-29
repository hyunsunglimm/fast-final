import Text from '@/components/ui/Text';
import Link from 'next/link';
import { IsBackHeader } from '@/components/header';
import Icon from '@/components/Icon';

const Themes = [
  {
    title: '쇼핑 카드 추천',
    subTitle: '쇼핑 중독자에게 꼭 맞는',
    iconPath: '/icons/financial-product/shopping.svg',
    color: 'bg-[#FF7D51]',
    href: 'shopping-card'
  },
  {
    title: '편의점 카드 추천',
    subTitle: '편의점 단골 손님을 위한',
    iconPath: '/icons/financial-product/convenience-store-card-recommendation.svg',
    color: 'bg-[#4CC590]',
    href: 'convenience-card'
  },
  {
    title: '6개월 적금 추천',
    subTitle: '다가올 여름 여행 경비를 위한',
    iconPath: '/icons/financial-product/six-month-savings-recommendation.svg',
    color: 'bg-[#65A4DA]',
    href: 'six-month-savings'
  },
  {
    title: '연말 ・ 연초 적금 상품 추천',
    subTitle: '4%이상 금리를 받고싶은 당신을 위한',
    iconPath: '/icons/financial-product/savings-recommendation.svg',
    color: 'bg-[#8F98FF]',
    href: 'savings'
  }
];

const ThemeRecommendationsPage = () => {
  return (
    <>
      <IsBackHeader href='./?tab=신용카드' defaultColor='#fff' />
      <main className='bg-white px-20 pb-[6rem]'>
        <Text variant='h1' sizes='24' weight='600' className='mb-40'>
          상황에 맞는 상품을 <br /> 선택해 보세요!
        </Text>
        <ul className='flex flex-col gap-[1.6rem]'>
          {Themes.map((theme) => {
            return (
              <li key={theme.title}>
                <Link
                  href={`/financial-product/theme-recommendations/${theme.href}`}
                  className={`flex items-center justify-between rounded-[1.6rem] px-[2.4rem] py-[2.8rem] text-white ${theme.color}`}
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
