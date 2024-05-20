import Text from '@/components/ui/Text';
import SavingIcon from '@/components/icons/financial-product/SavingIcon';
import SixMonthSavingIcon from '@/components/icons/financial-product/SixMonthSavingIcon';
import Link from 'next/link';
import ConvenienceStoreIcon from '@/components/icons/financial-product/ConvenienceStoreIcon';
import ShoppingIcon from '@/components/icons/financial-product/ShoppingIcon';

const Themes = [
  {
    title: '쇼핑 카드 추천',
    subTitle: '쇼핑 중독자에게 꼭 맞는',
    icon: <ShoppingIcon />,
    color: 'bg-[#FF916C]',
    href: 'shopping-card'
  },
  {
    title: '편의점 카드 추천',
    subTitle: '편의점 단골 손님을 위한',
    icon: <ConvenienceStoreIcon />,
    color: 'bg-[#70D1A6]',
    href: 'convenience-card'
  },
  {
    title: '6개월 적금 추천',
    subTitle: '다가올 여름 여행 경비를 위한',
    icon: <SixMonthSavingIcon />,
    color: 'bg-[#75AEDE]',
    href: 'six-month-savings'
  },
  {
    title: '연말 ・ 연초 적금 상품 추천',
    subTitle: '4%이상 금리를 받고싶은 당신을 위한',
    icon: <SavingIcon />,
    color: 'bg-[#9BA4FF]',
    href: 'savings'
  }
];

const ThemeRecommendationsPage = () => {
  return (
    <section className='px-[2rem]'>
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
                <div className='mx-auto flex h-[5.6rem] w-[5.6rem] items-center justify-center'>
                  {theme.icon}
                </div>
              </Link>
            </li>
          );
        })}
      </ul>
    </section>
  );
};

export default ThemeRecommendationsPage;
