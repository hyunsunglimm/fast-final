type WidgetSectionLayoutProps = {
  children: React.ReactNode;
};

const WidgetSectionLayout = ({ children }: WidgetSectionLayoutProps) => (
  <section className='mb-40 px-20'>{children}</section>
);
export default WidgetSectionLayout;
