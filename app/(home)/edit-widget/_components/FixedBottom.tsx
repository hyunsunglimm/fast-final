import React from 'react';
import FlexBox from '@/components/ui/FlexBox';
import Button from '@/components/ui/Button';
import { WidgetElementType } from '@/shared/types/response/widgetResponse';
import { useMutation } from '@tanstack/react-query';
import Spinner from '@/components/Spinner';
import { useRouter } from 'next/navigation';
import { putEidtWidgetItem } from '@/service/api/home/action';

type FixedBottomProps = {
  showWidget: WidgetElementType[];
};

const FixedBottom = ({ showWidget }: FixedBottomProps) => {
  const router = useRouter();

  const { mutate, isPending } = useMutation({
    mutationFn: putEidtWidgetItem,
    onSuccess: () => {
      router.push('/');
    }
  });

  const submitEditWidget = () => {
    const putWidgetItem = showWidget.map((item, index) => {
      return {
        widgetId: item.widgetId,
        sequence: index + 1
      };
    });

    mutate({ elements: putWidgetItem });
  };

  return (
    <FlexBox className='fixed bottom-0 w-full border-t border-gray-50 bg-white px-20 pb-32 pt-24 shadow-top-shadow xs:w-[520px]'>
      <Button
        disabled={showWidget.length < 6 || isPending}
        aria-label='위젯 편집 완료'
        size='md'
        onClick={submitEditWidget}
      >
        {isPending ? <Spinner /> : '완료'}
      </Button>
    </FlexBox>
  );
};
export default FixedBottom;
