import FlexBox from '@/components/ui/FlexBox';
import Text from '@/components/ui/Text';

type BenefitCircleProps = {
  title: string;
  rate: number;
  color: 'blue' | 'red';
  positionClass: string;
};

const BenefitCircle = ({ title, rate, color, positionClass }: BenefitCircleProps) => {
  const size = rate * 0.18;

  // const randomTop = Math.random() * (24.5 - size);
  // const randomLeft = Math.random() * (33.5 - size);

  const inlineStyle = {
    width: `${size}rem`,
    height: `${size}rem`
  };

  const colorClass =
    color === 'blue' ? 'from-[#5A7EFF] to-[#829DFF]' : 'from-[#FF5C46] to-[#FF8575]';

  return (
    <FlexBox
      style={inlineStyle}
      flexDirection='col'
      alignItems='center'
      justifyContent='center'
      className={`absolute rounded-full bg-gradient-to-t text-white ${colorClass} ${positionClass}`}
    >
      <Text sizes='12' weight='500'>
        {title}
      </Text>
      <Text sizes='18' weight='800'>
        {rate}{' '}
        <Text sizes='10' weight='500'>
          %
        </Text>
      </Text>
    </FlexBox>
  );
};

export default BenefitCircle;
