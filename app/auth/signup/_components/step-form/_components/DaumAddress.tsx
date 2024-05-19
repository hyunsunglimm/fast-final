import DaumPostcodeEmbed, { Address } from 'react-daum-postcode';
import { UseFormSetValue, FieldValues } from 'react-hook-form';

type DaumAddressProps = {
  setVisiblePostDaum: React.Dispatch<React.SetStateAction<boolean>>;
  setValue: UseFormSetValue<FieldValues>;
};

const DaumAddress = ({ setVisiblePostDaum, setValue }: DaumAddressProps) => {
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
    setValue('address.roadName', fullAddress);
    setVisiblePostDaum(false);
  };
  return (
    <div className='absolute inset-0 h-screen bg-white py-4'>
      <button onClick={handleClosePostDaum}>X</button>
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
