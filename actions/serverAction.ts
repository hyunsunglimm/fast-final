'use server';
export const getWidgetItem = async () => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/widget`);
  return await res.json();
};
