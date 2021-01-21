import styled from "styled-components";
import media from "@utils/styles/media";

export const Layout = styled.main`
  position: relative;
  height: calc(100vh - 100px);
  overflow: hidden;
  background: black;
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  height: 100%;
  width: 1728px;
  margin-left: auto;
  margin-right: auto;
  ${media.xxlarge} {
    width: 1376px;
  }
  ${media.xlarge} {
    width: 900px;
  }
  ${media.large} {
    width: calc(100% - 2rem);
  }
  img {
    position: absolute;
    width: 100vw;
    height: 100vh;
    object-fit: cover;
    object-position: center;
    flex: 1;
  }
`;

export const MainTitle = styled.section`
  color: white;
  z-index: 1;
  h1 {
    font-size: 2rem;
    margin-bottom: 16px;
  }
  h2 {
    color: #3067cf;
  }
`;

export const MenuButtonList = styled.ul`
  display: flex;
  z-index: 1;
`;

export const MenuButton = styled.li`
  width: 25%;
  padding: 24px 16px;
  .wrapper {
    padding: 16px;
    background: #1a1a1a;
    color: white;
  }
  h3 {
    text-align: center;
    margin-bottom: 16px;
  }
  .content {
    display: flex;
    svg {
      transform: scale(0.75);
      margin-right: 16px;
    }
    p {
      width: 60%;
      font-size: 0.8rem;
    }
  }
  .blue-content {
    height: 12px;
    background: #3067cf;
  }
`;
