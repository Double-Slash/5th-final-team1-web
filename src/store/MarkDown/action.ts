export const CHANGE_MARK_DOWN_TEXT = "markdown/CHANGE_MARKDOWN_TEXT" as const;
export const CHANGE_MARK_DOWN_TITLE = "markdown/CHANGE_MARK_DOWN_TITLE" as const;

export const changeMarkDownText = (text: string) => ({
  type: CHANGE_MARK_DOWN_TEXT,
  payload: text,
});

export const changeMarkDownTitle = (text: string) => ({
  type: CHANGE_MARK_DOWN_TITLE,
  payload: text,
});

export type MarkDownAction = ReturnType<typeof changeMarkDownText> | ReturnType<typeof changeMarkDownTitle>;
