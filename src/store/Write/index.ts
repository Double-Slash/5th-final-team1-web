import produce from "immer";
import { WriteAction, ADD_TO_TAG, REMOVE_TO_TAG, CHANGE_DRAG_BAR_GAUGE } from "./action";

interface WriteState {
  tagList: string[];
  bounty: number;
}

const initialState: WriteState = {
  tagList: [],
  bounty: 10,
};

const reducer = (state: WriteState = initialState, action: WriteAction) => {
  return produce(state, (draft) => {
    switch (action.type) {
      // 태그 추가
      case ADD_TO_TAG:
        draft.tagList.push(action.payload);
        break;
      // 태그 삭제
      case REMOVE_TO_TAG:
        draft.tagList = [
          ...draft.tagList.slice(0, action.payload),
          ...draft.tagList.slice(action.payload + 1, draft.tagList.length),
        ];
        break;
      // 채택 점수 변경
      case CHANGE_DRAG_BAR_GAUGE:
        draft.bounty = action.payload;
        break;
      default:
        break;
    }
  });
};

export default reducer;
