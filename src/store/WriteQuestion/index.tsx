import React, { createContext, useMemo, useReducer, Dispatch } from "react";
import produce from "immer";
import WriteQuestion from "@pages/WriteQuestion";
import { WriteAction, ADD_TO_TAG, REMOVE_TO_TAG, CHANGE_DRAG_BAR_GAUGE } from "./action";

interface WriteQuestionState {
  tagList: string[];
  bounty: number;
}

interface Context extends WriteQuestionState {
  dispatch: Dispatch<WriteAction>;
}

const initialState: WriteQuestionState = {
  tagList: [],
  bounty: 10,
};

export const WriteQuestionContext = createContext<Context>({
  bounty: 10,
  dispatch: () => {},
  tagList: [],
});

const reducer = (state: WriteQuestionState = initialState, action: WriteAction) => {
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

const WriteQuestionReducer = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const { bounty, tagList } = state;
  const value = useMemo(() => ({ bounty, dispatch, tagList }), [bounty, tagList]);

  return (
    <>
      <WriteQuestionContext.Provider value={value}>
        <WriteQuestion />
      </WriteQuestionContext.Provider>
    </>
  );
};

export default WriteQuestionReducer;
