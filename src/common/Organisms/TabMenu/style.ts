import styled from "styled-components";

// 탭 메뉴
export const TabMenu = styled.div`
  position: relative;
`;

// 탭 버튼 리스트
export const TabList = styled.ul<{ buttonCount: number }>`
  display: flex;
  width: 100%;
  height: 64px;
  li {
    display: inline-flex;
    justify-content: center;
    align-items: center;
    width: ${(props) => `${100 / props.buttonCount}%`};
    height: 100%;
    cursor: pointer;
  }
  li.active {
    font-weight: bold;
    border-bottom: 1px solid gray;
  }
`;

// panel
export const TabPanel = styled.div`
  display: none;
  width: 100%;
  &.active {
    display: block;
  }
`;
