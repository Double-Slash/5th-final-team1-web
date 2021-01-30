import styled from "styled-components";
import media from "@utils/styles/media";

export const Layout = styled.section`
  height: 120px;
  background: black;
`;

export const Wrapper = styled.div`
  display: flex;
  height: 100%;
  padding: 20px 32px 20px 32px;
  ${media.xxlarge} {
    padding: 20px 400px 20px 400px;
  }
  ${media.xlarge} {
    padding: 20px 200px 20px 200px;
  }
  ${media.large} {
    padding: 20px 20px 20px 20px;
  }
  img {
    margin-right: 16px;
  }
`;

export const UserNameWrapper = styled.div`
  .text-wrapper {
    color: white;
    display: flex;
    align-items: center;
    height: fit-content;
    margin-bottom: 8px;
    svg {
      margin-right: 8px;
    }
  }
`;
