import produce from "immer";
import {
  WriteProjectAction,
  ADD_HASH_TAG,
  CHANGE_CONDITION,
  CHANGE_DATE,
  CHANGE_FIELD,
  CHANGE_HEADCOUNT,
  REMOVE_HASH_TAG,
} from "./action";

interface WriteState {
  condition: string;
  date: string;
  field: string;
  hashTagList: string[];
  headcount: string;
}

const initialState: WriteState = {
  condition: "",
  date: "",
  field: "",
  hashTagList: [],
  headcount: "",
};

const reducer = (state: WriteState = initialState, action: WriteProjectAction) => {
  return produce(state, (draft) => {
    switch (action.type) {
      // 해시태그 추가
      case ADD_HASH_TAG:
        draft.hashTagList.push(action.payload);
        break;
      // 모집 조건 작성
      case CHANGE_CONDITION:
        draft.condition = action.payload;
        break;
      // 모집 기간 작성
      case CHANGE_DATE:
        draft.date = action.payload;
        break;
      // 모집 분야 작성
      case CHANGE_FIELD:
        draft.field = action.payload;
        break;
      // 모집 인원 작성
      case CHANGE_HEADCOUNT:
        draft.headcount = action.payload;
        break;
      // 태그 삭제
      case REMOVE_HASH_TAG:
        draft.hashTagList = [
          ...draft.hashTagList.slice(0, action.payload),
          ...draft.hashTagList.slice(action.payload + 1, draft.hashTagList.length),
        ];
        break;
      default:
        break;
    }
  });
};

export default reducer;
