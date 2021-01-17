export const ADD_HASH_TAG = "writeProject/ADD_HASH_TAG" as const;
export const CHANGE_CONDITION = "writeProject/CHANGE_CONDITION" as const;
export const CHANGE_DATE = "writeProject/CHANGE_DATE" as const;
export const CHANGE_FIELD = "writeProject/CHANGE_FIELD" as const;
export const CHANGE_HEADCOUNT = "writeProject/CHANGE_HEADCOUNT" as const;
export const REMOVE_HASH_TAG = "writeProject/REMOVE_HASH_TAG" as const;

// 해시태그 추가
export const addHashTag = (hashTag: string) => ({
  type: ADD_HASH_TAG,
  payload: hashTag,
});

// 모집 조건 작성
export const changeCondition = (condition: string) => ({
  type: CHANGE_CONDITION,
  payload: condition,
});

// 모집 기간 작성
export const changeDate = (date: string) => ({
  type: CHANGE_DATE,
  payload: date,
});

// 모집 분야 작성
export const changeField = (field: string) => ({
  type: CHANGE_FIELD,
  payload: field,
});

// 모집 인원 작성
export const changeHeadcount = (headcount: string) => ({
  type: CHANGE_HEADCOUNT,
  payload: headcount,
});

// 해시태그 삭제
export const removeHashTag = (index: number) => ({
  type: REMOVE_HASH_TAG,
  payload: index,
});

export type WriteProjectAction =
  | ReturnType<typeof addHashTag>
  | ReturnType<typeof changeField>
  | ReturnType<typeof changeHeadcount>
  | ReturnType<typeof changeDate>
  | ReturnType<typeof changeCondition>
  | ReturnType<typeof removeHashTag>;
