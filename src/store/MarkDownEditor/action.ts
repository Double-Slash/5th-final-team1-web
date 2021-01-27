export const CAHANGE_BODY = "CAHANGE_BODY" as const;
export const CAHANGE_EDITOR_TEXT = "CAHANGE_EDITOR_TEXT" as const;
export const CAHANGE_TITLE = "CAHANGE_TITLE" as const;
export const CLEAR_CONTEXT = "CLEAR_CONTEXT" as const;
export const CLICK_TOOLBAR = "CLICK_TOOLBAR" as const;

// 본문 변경
export const changeBody = (payload: string) => ({
  type: CAHANGE_BODY,
  payload,
});

// 에디터 텍스트 변경
export const changeEditorText = (payload: string) => ({
  type: CAHANGE_EDITOR_TEXT,
  payload,
});

// 제목 변경
export const changeTitleAction = (payload: string) => ({
  type: CAHANGE_TITLE,
  payload,
});

// 컨텍스트 API 지우기
export const clearContext = () => ({
  type: CLEAR_CONTEXT,
});

// 툴바 버튼 클릭
export const clickToolBar = (payload: string) => ({
  type: CLICK_TOOLBAR,
  payload,
});

export type MarkDownEditorAction = ReturnType<
  typeof changeBody | typeof changeEditorText | typeof changeTitleAction | typeof clickToolBar | typeof clearContext
>;
