import styled from "styled-components";
import media from "@utils/styles/media";

export const Layout = styled.main`
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
`;
