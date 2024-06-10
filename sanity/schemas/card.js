export const card = {
  title: 'Card',
  name: 'card',
  type: 'document',
  fields: [
    {
      title: 'Company',
      name: 'company',
      type: 'string'
    },
    {
      title: 'Name',
      name: 'name',
      type: 'string'
    },
    {
      title: 'Description',
      name: 'description',
      type: 'text'
    },
    {
      title: 'Image Horizontal',
      name: 'image_horizontal',
      type: 'image'
    },
    {
      title: 'Image Vertical',
      name: 'image_vertical',
      type: 'image'
    },
    {
      title: 'Type',
      name: 'type',
      type: 'string',
      options: {
        list: [
          { title: 'Credit', value: 'credit' },
          { title: 'Check', value: 'check' }
        ]
      }
    },
    {
      title: 'Benefits',
      name: 'benefits',
      type: 'array',
      of: [{ type: 'benefit' }]
    },
    {
      title: 'Previous Month Performance',
      name: 'prev_month_performance',
      type: 'number'
    },
    {
      title: 'Annual Fee',
      name: 'annual_fee',
      type: 'number'
    },
    {
      title: 'Discount Limit',
      name: 'discount_limit',
      type: 'number'
    }
  ],
  preview: {
    select: {
      card_name: 'name',
      company: 'company',
      max_benefit: 'discount_limit',
      media: 'card_image'
    },
    prepare: (selection) => {
      const { card_name: cardName, company, max_benefit: maxBenefit, media } = selection;
      return {
        title: `${cardName} by (${company})`,
        subtitle: `최대 혜택 월 ${maxBenefit.toLocaleString()}원`,
        media
      };
    }
  }
};
