import { useState } from 'react';
import BottomSheet from '@/components/BottomSheet';
import { useQuery } from '@tanstack/react-query';
import { getSpendingDetail } from '@/service/api/calendar';
import MyWalletSkeleton from '@/app/(home)/(default-home)/_components/MyWalletSkeleton';
import ChangeCategoryList from './ChangeCategoryList';
import ExpenseDetails from './ExpenseDetails';

type ExpenseDetailBottomSheetProps = {
  historyId: string;
  openDetailBottomSheet: boolean;
  setOpenDetailBottomSheet: React.Dispatch<React.SetStateAction<boolean>>;
};

const ExpenseDetailBottomSheet = ({
  historyId,
  openDetailBottomSheet,
  setOpenDetailBottomSheet
}: ExpenseDetailBottomSheetProps) => {
  const [isChangingCategory, setIsChangingCategory] = useState(false);

  const {
    data: expenseDetailData,
    isFetching,
    isLoading
  } = useQuery({
    queryKey: ['expensDetail', historyId],
    queryFn: () => getSpendingDetail(historyId),
    enabled: openDetailBottomSheet
  });

  const renderContent = () => {
    if (isLoading) {
      return <MyWalletSkeleton />;
    }
    if (isFetching) {
      return <MyWalletSkeleton />;
    }

    if (isChangingCategory) {
      return <ChangeCategoryList expenseDetailData={expenseDetailData} />;
    }
    return (
      <ExpenseDetails
        expenseDetailData={expenseDetailData}
        setIsChangingCategory={setIsChangingCategory}
      />
    );
  };

  const handleCloseBottomSheet = () => {
    setOpenDetailBottomSheet(false);
    setIsChangingCategory(false);
  };

  return (
    <BottomSheet
      isBack={isChangingCategory}
      title={isChangingCategory ? '카테고리 변경' : '상세 내역'}
      buttonLabel='변경하기'
      isOpen={openDetailBottomSheet}
      onClose={handleCloseBottomSheet}
      onClick={handleCloseBottomSheet}
      isBackHandler={() => setIsChangingCategory(false)}
    >
      {renderContent()}
    </BottomSheet>
  );
};

export default ExpenseDetailBottomSheet;
