export const CLICK_TAB_BUTTON = "CLICK_TAB_BUTTON" as const;

export const clickTabButtonAction = (payload: number) => ({
  type: CLICK_TAB_BUTTON,
  payload,
});

export type TabMenuAction = ReturnType<typeof clickTabButtonAction>;
