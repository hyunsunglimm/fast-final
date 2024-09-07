import { ShareDataItem } from '@/shared/types/budgetCalendarType';

export const initialTogetherData: ShareDataItem[] = [
  {
    date: '2024-06-01',
    reactions: [
      { stickerOrEmoticonID: '😆', memberIds: Array.from({ length: 9999 }, (_, i) => i + 1) },
      { stickerOrEmoticonID: '🤘', memberIds: Array.from({ length: 999 }, (_, i) => i + 1) },
      { stickerOrEmoticonID: '😍', memberIds: [4] }
    ]
  },
  {
    date: '2024-06-02',
    reactions: [
      { stickerOrEmoticonID: '🥲', memberIds: [1, 2, 3, 4] },
      { stickerOrEmoticonID: '😆', memberIds: [2, 3] },
      { stickerOrEmoticonID: '🫰', memberIds: [4] }
    ]
  },
  {
    date: '2024-06-03',
    reactions: [
      { stickerOrEmoticonID: '😇', memberIds: [1, 2] },
      { stickerOrEmoticonID: '😆', memberIds: [2] },
      { stickerOrEmoticonID: '💙', memberIds: [2, 3, 4] }
    ]
  },
  {
    date: '2024-06-04',
    reactions: [
      { stickerOrEmoticonID: '😆', memberIds: [3] },
      { stickerOrEmoticonID: '😏', memberIds: [3, 4] },
      { stickerOrEmoticonID: '🥰', memberIds: [3, 4, 5] }
    ]
  },
  {
    date: '2024-06-09',
    reactions: [
      { stickerOrEmoticonID: '😆', memberIds: [3] },
      { stickerOrEmoticonID: '😏', memberIds: [3, 4] },
      { stickerOrEmoticonID: '🥰', memberIds: [3, 4, 5] }
    ]
  },
  {
    date: '2024-06-11',
    reactions: [
      { stickerOrEmoticonID: '😆', memberIds: [3] },
      { stickerOrEmoticonID: '😏', memberIds: [3, 4] },
      { stickerOrEmoticonID: '🥰', memberIds: [3, 4, 5] }
    ]
  }
  // 나머지 데이터도 추가해주세요
];
