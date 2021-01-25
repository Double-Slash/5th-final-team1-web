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

export const SearchWrapper = styled.div`
  display: flex;
  background: white;
  padding: 16px;
  margin: 32px 0;
  svg {
    margin-right: 8px;
  }
  width: 100%;
`;
