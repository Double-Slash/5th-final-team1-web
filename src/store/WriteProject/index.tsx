import React, { createContext, useMemo, useReducer, Dispatch } from "react";
import produce from "immer";
import WriteProject from "@pages/WriteProject";
import {
  WriteProjectAction,
  ADD_HASH_TAG,
  CHANGE_CONDITION,
  CHANGE_DATE,
  CHANGE_FIELD,
  CHANGE_HEADCOUNT,
  REMOVE_HASH_TAG,
} from "./action";

interface WriteProjectState {
  condition: string;
  date: string;
  field: string;
  hashTagList: string[];
  headcount: string;
}

interface Context extends WriteProjectState {
  dispatch: Dispatch<WriteProjectAction>;
}

const initialState: WriteProjectState = {
  condition: "",
  date: "",
  field: "",
  hashTagList: [],
  headcount: "",
};

export const WriteProjectContext = createContext<Context>({
  condition: "",
  date: "",
  dispatch: () => {},
  field: "",
  hashTagList: [],
  headcount: "",
});

const reducer = (state: WriteProjectState = initialState, action: WriteProjectAction) => {
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

const WriteProjectReducer = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const { condition, date, field, hashTagList, headcount } = state;
  const value = useMemo(() => ({ condition, date, dispatch, field, hashTagList, headcount }), [
    condition,
    date,
    field,
    hashTagList,
    headcount,
  ]);

  return (
    <>
      <WriteProjectContext.Provider value={value}>
        <WriteProject />
      </WriteProjectContext.Provider>
    </>
  );
};

export default WriteProjectReducer;

// export default reducer;
