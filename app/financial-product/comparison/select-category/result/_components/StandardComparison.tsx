import FlexBox from '@/components/ui/FlexBox';
import Text from '@/components/ui/Text';
import ResultCard from './ResultCard';
import { CardResponseType } from '@/shared/types/response/card';

type StandardComparisonProps = {
  difference: string;
  standard: string;
  id: number;
  comporisonResult: CardResponseType[];
  content: React.ReactNode;
};

const StandardComparison = ({
  difference,
  standard,
  id,
  comporisonResult,
  content
}: StandardComparisonProps) => {
  return (
    <section className='mt-12 bg-white px-20 py-40'>
      <Text variant='p' weight='500' className='mb-[0.8rem] text-gray-700'>
        {standard}
      </Text>
      <Text sizes='20' weight='700'>
        {id === 0 ? '카드A' : '카드B'}를 사용하면
        <br />{' '}
        <Text sizes='20' weight='700' className={id === 0 ? 'text-active' : 'text-warning'}>
          {difference}
        </Text>
        {id === 0 ? '을 더 아낄 수 있어요' : '만큼 혜택이 더 적어요'}
      </Text>

      {content}

      <Text sizes='16' weight='500'>
        혜택 비교
      </Text>
      <FlexBox flexDirection='col' className='mt-12 gap-12'>
        {comporisonResult.map((cardInfo, index) => {
          return (
            <ResultCard key={cardInfo.id} cardInfo={cardInfo} index={index} standard={standard} />
          );
        })}
      </FlexBox>
    </section>
  );
};

export default StandardComparison;
