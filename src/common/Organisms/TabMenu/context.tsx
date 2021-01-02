import React, { createContext, useMemo, useReducer, Dispatch } from "react";
import { CLICK_TAB_BUTTON, TabMenuAction } from "./action";

interface ReducerState {
  tabBtnIndex: number;
}

interface Context extends ReducerState {
  dispatch: Dispatch<TabMenuAction>;
}

export const TabMenuContext = createContext<Context>({
  tabBtnIndex: 0,
  dispatch: () => {},
});

const initialValue: ReducerState = {
  tabBtnIndex: 0,
};

const reducer = (state = initialValue, action: TabMenuAction): ReducerState => {
  switch (action.type) {
    case CLICK_TAB_BUTTON:
      return { ...state, tabBtnIndex: action.payload };
    default:
      return state;
  }
};

const TabMenuProvider = ({ children }: { children: React.ReactNode }) => {
  const [state, dispatch] = useReducer(reducer, initialValue);
  const { tabBtnIndex } = state;
  const value = useMemo(() => ({ dispatch, tabBtnIndex }), [tabBtnIndex]);

  return (
    <>
      <TabMenuContext.Provider value={value}>{children}</TabMenuContext.Provider>
    </>
  );
};

export default TabMenuProvider;
