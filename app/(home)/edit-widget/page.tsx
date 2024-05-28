import { IsBackHeader } from '@/components/header';
import TopContents from './_components/TopContents';
import DragContainer from './_components/DragContainer';

const EditWidgetPage = () => {
  return (
    <>
      <IsBackHeader href='/' title='한 눈에 보기 편집' defaultColor='#fff' />
      <section className='px-20'>
        <TopContents />
      </section>
      <DragContainer />
    </>
  );
};
export default EditWidgetPage;
