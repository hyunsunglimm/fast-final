export const card = {
  title: 'Card',
  name: 'card',
  type: 'document',
  fields: [
    {
      title: 'Company',
      name: 'company',
      type: 'string',
      options: {
        list: [
          { title: 'KB국민카드', value: 'KB국민카드' },
          { title: 'BC카드', value: 'BC카드' },
          { title: 'IBK기업은행', value: 'IBK기업은행' },
          { title: '신한카드', value: '신한카드' },
          { title: 'NH농협카드', value: 'NH농협카드' },
          { title: '현대카드', value: '현대카드' },
          { title: '우리카드', value: '우리카드' },
          { title: '삼성카드', value: '삼성카드' },
          { title: '하나카드', value: '하나카드' },
          { title: '롯데카드', value: '롯데카드' }
        ]
      }
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
      media: 'image_horizontal'
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
