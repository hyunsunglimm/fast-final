export const benefit = {
  name: 'benefit',
  title: 'Benefit',
  type: 'object',
  fields: [
    {
      title: 'Category',
      name: 'category',
      type: 'string',
      options: {
        list: [
          { title: 'Shopping', value: 'shopping' },
          { title: 'Cafe', value: 'cafe' },
          { title: 'Convenience Store', value: 'convenience_store' },
          { title: 'Public Transport', value: 'public_transport' },
          { title: 'Mart', value: 'mart' },
          { title: 'Culture', value: 'culture' },
          { title: 'Department Store', value: 'department_store' },
          { title: 'Communication Cost', value: 'communication_cost' },
          { title: 'Oiling', value: 'oiling' },
          { title: 'Travel', value: 'travel' },
          { title: 'Online', value: 'online' },
          { title: 'Subscribe', value: 'subscribe' }
        ]
      }
    },
    {
      title: 'Benefit Details',
      name: 'benefitDetails',
      type: 'array',
      of: [{ type: 'string' }]
    }
  ]
};
