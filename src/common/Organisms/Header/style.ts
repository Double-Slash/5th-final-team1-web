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
  a {
    color: white;
  }
  ${media.xxlarge} {
    padding: 0 48px;
  }
  ${media.xlarge} {
    padding: 0 64px;
  }
`;
