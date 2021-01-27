import React, { createContext, useMemo, useReducer, Dispatch } from "react";
import produce from "immer";
import {
  CAHANGE_BODY,
  CAHANGE_EDITOR_TEXT,
  CAHANGE_TITLE,
  CLICK_TOOLBAR,
  CLEAR_CONTEXT,
  MarkDownEditorAction,
} from "./action";

interface ReducerState {
  body: string; // 본문
  editorText: string; // 에디터 텍스트
  title: string; // 질문글, 프로젝트 제목
  toolBarButton: string; // 툴바 버튼
}

interface Context extends ReducerState {
  dispatch: Dispatch<MarkDownEditorAction>;
}

export const MarkDownEditorContext = createContext<Context>({
  body: "",
  dispatch: () => {},
  editorText: "",
  title: "",
  toolBarButton: "",
});

const initialState: ReducerState = {
  body: "",
  editorText: "",
  title: "",
  toolBarButton: "",
};

const reducer = (state: ReducerState = initialState, action: MarkDownEditorAction) => {
  if (action.type === CLEAR_CONTEXT) {
    state = initialState;
  }
  return produce(state, (draft) => {
    switch (action.type) {
      // 본문 변경
      case CAHANGE_BODY:
        draft.body = action.payload;
        break;
      // 에디터 텍스트 변경
      case CAHANGE_EDITOR_TEXT:
        draft.editorText = action.payload;
        break;
      // 제목 변경
      case CAHANGE_TITLE:
        draft.title = action.payload;
        break;
      // 툴바 버튼 클릭
      case CLICK_TOOLBAR:
        draft.toolBarButton = action.payload;
        break;
      default:
        break;
    }
  });
};

const TestMarkDownEditor = ({ children }: { children: React.ReactNode }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const { body, editorText, title, toolBarButton } = state;
  const value = useMemo(() => ({ dispatch, body, editorText, title, toolBarButton }), [
    body,
    editorText,
    title,
    toolBarButton,
  ]);

  return (
    <>
      <MarkDownEditorContext.Provider value={value}>{children}</MarkDownEditorContext.Provider>
    </>
  );
};

export default TestMarkDownEditor;
