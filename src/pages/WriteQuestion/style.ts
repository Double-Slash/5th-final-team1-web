import styled from "styled-components";

export const Layout = styled.main`
  display: flex;
  width: 100%;
  height: 100vh;
`;

export const Section = styled.section`
  flex: 50%;
  width: 50%;
  height: 100%;
  padding: 32px;
  &.left-section {
    position: absolute;
    top: 0;
    left: 0;
    display: flex;
    flex-direction: column;
    padding: 32px 48px;
    background: white;
  }
  &.right-section {
    position: absolute;
    right: 0;
    top: 0;
    overflow-y: scroll;
  }
`;
