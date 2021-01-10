import styled from "styled-components";
import media from "@utils/styles/media";

export const Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  padding: 0 32px;
  height: 100px;
  margin: 0 auto;
  background: black;
  color: white;
  a {
    color: white;
  }
  .right-buttons {
    display: flex;
    align-items: center;
    margin-right: 16px;
    span {
      margin-right: 16px;
    }
  }
  ${media.xxlarge} {
    padding: 0 400px;
  }
  ${media.xlarge} {
    padding: 0 200px;
  }
  ${media.large} {
    padding: 0 20px;
  }
`;