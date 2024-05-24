import DaumPostcodeEmbed, { Address } from 'react-daum-postcode';
import { UseFormSetValue, FieldValues } from 'react-hook-form';
import Icon from '@/components/Icon';
import FlexBox from '@/components/ui/FlexBox';
import Text from '@/components/ui/Text';

type DaumAddressProps = {
  setVisiblePostDaum: React.Dispatch<React.SetStateAction<boolean>>;
  // setValue: UseFormSetValue<FieldValues>;
};

const DaumAddress = ({ setVisiblePostDaum }: DaumAddressProps) => {
  const handleClosePostDaum = () => {
    setVisiblePostDaum(false);
  };

  const handleComplete = (data: Address) => {
    let fullAddress = data.address;
    let extraAddress = '';

    if (data.addressType === 'R') {
      if (data.bname !== '') {
        extraAddress += data.bname;
      }
      if (data.buildingName !== '') {
        extraAddress += extraAddress !== '' ? `, ${data.buildingName}` : data.buildingName;
      }
      fullAddress += extraAddress !== '' ? ` (${extraAddress})` : '';
    }
    // setValue('address.roadName', fullAddress);
    setVisiblePostDaum(false);
  };
  return (
    <div className='absolute inset-0 z-30 h-screen bg-white '>
      <FlexBox className='p-16 text-center' justifyContent='between'>
        <Icon
          role='button'
          src='/icons/system-icon/x.svg'
          alt='주소검색 창 닫기'
          size='20'
          placeholder='empty'
          onClick={handleClosePostDaum}
        />
        <Text variant='h6' sizes='16' weight='500'>
          주소 검색
        </Text>
        <div className='w-[2.4rem]' aria-hidden></div>
      </FlexBox>
      <DaumPostcodeEmbed
        onComplete={handleComplete}
        autoClose
        animation
        style={{ height: '100%' }}
      />
    </div>
  );
};

export default DaumAddress;
