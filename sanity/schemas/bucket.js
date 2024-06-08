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
      title: 'BucketName',
      name: 'bucket_name',
      type: 'string'
    },
    {
      title: 'DayOfWeek',
      name: 'day_of_week',
      type: 'string'
    },
    {
      title: 'MySavingProduct',
      name: 'my_saving_product',
      type: 'array',
      of: [{ type: 'string' }]
    },
    {
      title: 'SavingBook',
      name: 'saving_book',
      type: 'string'
    },
    {
      title: 'SavingsAmount',
      name: 'savings_amount',
      type: 'string'
    },
    {
      title: 'SpendBook',
      name: 'spend_book',
      type: 'string'
    },
    {
      title: 'TargetAmount',
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
