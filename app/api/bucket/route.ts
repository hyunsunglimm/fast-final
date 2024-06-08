import { auth } from '@/auth';
import { client } from '@/sanity/lib/client';
import { getRecentBuckets } from '@/service/api/create-bucket';
import { NextRequest, NextResponse } from 'next/server';

export const GET = async () => {
  const recentBucket = await getRecentBuckets();
  return NextResponse.json(recentBucket);
};

export const POST = async (req: NextRequest) => {
  const session = await auth();
  if (!session) {
    return new Response('Authentication Error', { status: 401 });
  }
  const request = await req.json();

  return client
    .create({
      _type: 'bucket',
      author: session.user?.email,
      bucket_name: request['bucket-name'],
      target_amount: request['target-amount'],
      spend_book: request['spend-book'],
      saving_book: request['saving-book'],
      day_of_week: request['day-of-week'],
      savings_amount: request['savings-amount'],
      my_saving_product: request['my-saving-product']
    })
    .then(() => new Response('success', { status: 200 }));
};
