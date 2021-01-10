export const ADD_TO_TAG = "write/ADD_TO_TAG" as const;
export const REMOVE_TO_TAG = "write/REMOVE_TO_TAG" as const;
export const CHANGE_DRAG_BAR_GAUGE = "write/CHANGE_DRAG_BAR_GAUGE" as const;

// 태그 리스트에 태그 추가
export const addToTag = (tag: string) => ({
  type: ADD_TO_TAG,
  payload: tag,
});

// 태그 리스트에 태그 삭제
export const removeToTag = (index: number) => ({
  type: REMOVE_TO_TAG,
  payload: index,
});

// 드래그 바 게이지 변경
export const changeDragBarGauge = (rate: number) => ({
  type: CHANGE_DRAG_BAR_GAUGE,
  payload: rate,
});

export type WriteAction =
  | ReturnType<typeof addToTag>
  | ReturnType<typeof removeToTag>
  | ReturnType<typeof changeDragBarGauge>;
