import { ShareDataType } from '@/shared/types/budgetCalendarType';

export const initialTogetherData: ShareDataType = {
  totalCount: 53,
  daily: [
    {
      date: '2024-06-01',
      weatherId: 1,
      reactions: [
        { stickerOrEmoticonID: '😆', memberIds: [1, 2, 4] },
        { stickerOrEmoticonID: '🤘', memberIds: [2, 4] },
        { stickerOrEmoticonID: '😍', memberIds: [4] }
      ]
    },
    {
      date: '2024-06-02',
      weatherId: 3,
      reactions: [
        { stickerOrEmoticonID: '🥲', memberIds: [1, 2, 3, 4] },
        { stickerOrEmoticonID: '😆', memberIds: [2, 3] },
        { stickerOrEmoticonID: '🫰', memberIds: [4] }
      ]
    },
    {
      date: '2024-06-03',
      weatherId: 4,
      reactions: [
        { stickerOrEmoticonID: '😇', memberIds: [1, 2] },
        { stickerOrEmoticonID: '😆', memberIds: [2] },
        { stickerOrEmoticonID: '💙', memberIds: [2, 3, 4] }
      ]
    },
    {
      date: '2024-06-04',
      weatherId: 5,
      reactions: [
        { stickerOrEmoticonID: '😆', memberIds: [3] },
        { stickerOrEmoticonID: '😏', memberIds: [3, 4] },
        { stickerOrEmoticonID: '🥰', memberIds: [3, 4, 5] }
      ]
    }
    // 나머지 데이터도 추가해주세요
  ]
};
