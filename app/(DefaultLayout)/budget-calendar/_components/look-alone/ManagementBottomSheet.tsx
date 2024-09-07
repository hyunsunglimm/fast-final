import { useQuery } from '@tanstack/react-query';
import BottomSheet from '@/components/BottomSheet';
import Text from '@/components/ui/Text';
import FlexBox from '@/components/ui/FlexBox';
import Icon from '@/components/Icon';
import BottomSheetTitle from '../common/BottomSheetTitle';
import { getBudgetManagement } from '@/service/api/calendar';
import { formatNumber } from '@/shared/utils/formatNumber';
import { BudgetManagement } from '@/shared/types/response/targetBudget';

type ManagementBottomSheetProps = {
  showPopup: boolean;
  setShowPopup: React.Dispatch<React.SetStateAction<boolean>>;
  setModifyPopup: React.Dispatch<React.SetStateAction<boolean>>;
};

const ManagementBottomSheet = ({
  showPopup,
  setShowPopup,
  setModifyPopup
}: ManagementBottomSheetProps) => {
  const handleButtonClick = async () => {
    setShowPopup(false);
    setModifyPopup(true);
  };

  const { data } = useQuery<BudgetManagement>({
    queryKey: ['budgetManagement'],
    queryFn: getBudgetManagement
  });

  return (
    <BottomSheet
      title='목표 관리'
      buttonLabel='목표 수정하기'
      isOpen={showPopup}
      onClose={() => setShowPopup(false)}
      onClick={handleButtonClick}
    >
      <BottomSheetTitle
        title={`목표 예산까지 && ${formatNumber(data?.goalCost ?? 0)}원 남았어요`}
        description={`하루에 ${formatNumber(data?.dailyCost ?? 0)}원씩 써야 해요`}
      />
      <FlexBox className='mt-48 gap-16 text-center' justifyContent='around'>
        <div>
          <Icon
            src='/icons/weather/weather-5.svg'
            alt='눈비'
            size='44'
            className='m-auto mb-8 block'
          />
          <Text variant='p' className='mb-8'>
            예산 초과한 날
          </Text>
          <Text variant='h4' sizes='18' weight='700'>
            {data?.overSpend}일
          </Text>
        </div>
        <div>
          <Icon
            src='/icons/weather/weather-1.svg'
            alt='눈비'
            size='44'
            className='m-auto mb-8 block'
          />
          <Text variant='p' className='mb-8'>
            무지출한 날
          </Text>
          <Text variant='h4' sizes='18' weight='700'>
            {data?.zeroSpend}일
          </Text>
        </div>
      </FlexBox>
    </BottomSheet>
  );
};

export default ManagementBottomSheet;
