export const bucket = {
  title: 'Bucket',
  name: 'bucket',
  type: 'document',
  fields: [
    {
      title: 'Author',
      name: 'author',
      type: 'string'
    },
    {
      title: 'Bucket Name',
      name: 'bucket_name',
      type: 'string'
    },
    {
      title: 'Day Of Week',
      name: 'day_of_week',
      type: 'string'
    },
    {
      title: 'My Saving Product',
      name: 'my_saving_product',
      type: 'array',
      of: [{ type: 'string' }]
    },
    {
      title: 'Saving Book',
      name: 'saving_book',
      type: 'string'
    },
    {
      title: 'Savings Amount',
      name: 'savings_amount',
      type: 'string'
    },
    {
      title: 'Spend Book',
      name: 'spend_book',
      type: 'string'
    },
    {
      title: 'Target Amount',
      name: 'target_amount',
      type: 'string'
    }
  ],
  preview: {
    select: {
      title: 'bucket_name',
      subtitle: 'author'
    }
  }
};
