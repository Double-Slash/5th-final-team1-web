import React, { useCallback, useContext, useEffect, useRef } from "react";
import TabMenuProvider, { TabMenuContext } from "./context";
import { clickTabButtonAction } from "./action";
import * as S from "./style";

interface Children {
  children: React.ReactNode;
}

interface TabListProps {
  tabButtonList: string[];
}

interface TabPanelProps extends Children {
  index: number;
}

// 탭 메뉴
export const TabMenu = ({ children }: Children) => {
  return (
    <>
      <TabMenuProvider>
        <S.TabMenu className="tab-menu">{children}</S.TabMenu>
      </TabMenuProvider>
    </>
  );
};

// 탭 버튼 리스트
export const TabList = ({ tabButtonList }: TabListProps) => {
  const { dispatch } = useContext(TabMenuContext);
  const tabListRef = useRef<HTMLUListElement>(null);

  // 탭 버튼 클릭
  const clickTabButton = useCallback(
    (index: number) => () => {
      if (!tabListRef.current) return;
      tabListRef.current.childNodes.forEach((tab) => {
        const retyped = tab as HTMLLIElement;
        retyped.classList.remove("active");
      });
      tabListRef.current.children[index].classList.add("active");
      dispatch(clickTabButtonAction(index));
    },
    [dispatch],
  );

  return (
    <>
      <S.TabList className="tab-list" ref={tabListRef} buttonCount={tabButtonList.length}>
        {tabButtonList.map((tab, index) => (
          <li role="presentation" key={tab} onClick={clickTabButton(index)} className={index === 0 ? "active" : ""}>
            {tab}
          </li>
        ))}
      </S.TabList>
    </>
  );
};

// panel
export const TabPanel = ({ children, index }: TabPanelProps) => {
  const { tabBtnIndex } = useContext(TabMenuContext);
  const panelRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!panelRef.current) return;
    panelRef.current.classList.remove("active");
    if (index === tabBtnIndex) panelRef.current.classList.add("active");
  }, [index, tabBtnIndex]);

  return (
    <>
      <S.TabPanel ref={panelRef} className={`tab-panel ${index === 0 ? "active" : ""}`}>
        {children}
      </S.TabPanel>
    </>
  );
};
