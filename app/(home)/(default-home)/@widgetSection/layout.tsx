import React from 'react';

type WidgetSectionLayoutProps = {
  children: React.ReactNode;
  widgetBudget: React.ReactNode;
};

const WidgetSectionLayout = ({ children, widgetBudget }: WidgetSectionLayoutProps) => {
  return (
    <section className='mb-40 px-20'>
      {children}
      {/* {widgetBudget} */}
    </section>
  );
};
export default WidgetSectionLayout;
