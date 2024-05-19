'use server';
export const getWidgetItem = async () => {
  const res = await fetch('http://localhost:3000/api/widget');
  return await res.json();
};
