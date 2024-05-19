import FlexBox from './FlexBox';
import Text from './Text';

type TabProps = {
  array: string[];
  type: 'box' | 'underline';
  selectedTab: string;
  setSelectedTab: (value: string) => void;
};

const Tab = ({ array, type, selectedTab, setSelectedTab }: TabProps) => {
  return (
    <FlexBox
      className={`${type === 'box' ? 'gap-[1.2rem]' : '-mb-px w-full border-b border-gray-200 px-[2rem]'}`}
    >
      {array.map((label) => {
        return (
          <div
            key={label}
            className={getStyle(type, label === selectedTab)}
            onClick={() => setSelectedTab(label)}
          >
            <Text weight='500'>{label}</Text>
          </div>
        );
      })}
    </FlexBox>
  );
};

const getStyle = (type: 'box' | 'underline', isSelcted: boolean) => {
  let className = 'inline-block';

  if (type === 'box') {
    className += ' rounded-[4.3rem] px-[1.4rem] py-[0.7rem]';
    if (isSelcted) {
      className += ' bg-black text-white';
    } else {
      className += ' border border-gray-400';
    }
  }

  if (type === 'underline') {
    className += ' w-full text-center px-[1rem] py-[1.2rem] -mb-px';
    if (isSelcted) {
      className += ' border-b-2 border-black';
    } else {
      className += ' text-gray-400';
    }
  }

  return className;
};

export default Tab;
