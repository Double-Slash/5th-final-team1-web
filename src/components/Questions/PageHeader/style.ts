import styled from "styled-components";
import media from "@utils/styles/media";

export const Layout = styled.section`
  height: 160px;
  background: black;
`;

export const Wrapper = styled.div`
  display: flex;
  height: 100%;
  padding: 0 32px 20px 32px;
  ${media.xxlarge} {
    padding: 0 400px 20px 400px;
  }
  ${media.xlarge} {
    padding: 0 200px 20px 200px;
  }
  ${media.large} {
    padding: 0 20px 20px 20px;
  }
  h1 {
    width: 40%;
    font-size: 1.5rem;
    color: white;
  }
  div {
    width: 60%;
    height: 100%;
  }
  a {
    position: absolute;
    bottom: 16px;
    right: 0;
    padding: 8px 16px;
    background: #1a1a1d;
  }
  .wrapper {
    position: relative;
  }
`;
