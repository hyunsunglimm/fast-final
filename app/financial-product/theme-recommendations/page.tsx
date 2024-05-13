import Text from '@/components/ui/Text';
import ConvenienceStoreIcon from '@/components/icons/ConvenienceStoreIcon';
import SavingIcon from '@/components/icons/SavingIcon';
import ShoppingIcon from '@/components/icons/ShoppingIcon';
import SixMonthSavingIcon from '@/components/icons/SixMonthSavingIcon';

const Themes = [
  {
    title: '쇼핑 카드 추천',
    subTitle: '쇼핑 중독자에게 꼭 맞는',
    icon: <ShoppingIcon />,
    color: 'bg-[#FF916C]'
  },
  {
    title: '편의점 카드 추천',
    subTitle: '편의점 단골 손님을 위한',
    icon: <ConvenienceStoreIcon />,
    color: 'bg-[#70D1A6]'
  },
  {
    title: '6개월 적금 추천',
    subTitle: '다가올 여름 여행 경비를 위한',
    icon: <SixMonthSavingIcon />,
    color: 'bg-[#75AEDE]'
  },
  {
    title: '연말 ・ 연초 적금 상품 추천',
    subTitle: '4%이상 금리를 받고싶은 당신을 위한',
    icon: <SavingIcon />,
    color: 'bg-[#9BA4FF]'
  }
];

const ThemeRecommendationsPage = () => {
  return (
    <section>
      <Text variant='h1' sizes='title24'>
        상황에 맞는 상품을 <br /> 선택해 보세요!
      </Text>
      <ul className='flex flex-col gap-4'>
        {Themes.map((theme) => {
          return (
            <li
              key={theme.title}
              className={`flex items-center justify-between rounded-[1.6rem] px-[2.4rem] py-[2.8rem] text-white ${theme.color}`}
            >
              <div>
                <Text variant='h2' sizes='title18'>
                  {theme.title}
                </Text>
                <Text sizes='body14'>{theme.subTitle}</Text>
              </div>
              {theme.icon}
            </li>
          );
        })}
      </ul>
    </section>
  );
};

export default ThemeRecommendationsPage;
