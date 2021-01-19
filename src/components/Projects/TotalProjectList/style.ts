import styled from "styled-components";

export const Layout = styled.ul`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  margin-left: -8px;
  li {
    width: 33%;
    padding: 8px;
  }
`;

export const SkeletonItem = styled.div`
  width: 33%;
  height: 180px;
  padding: 8px;
  .container {
    width: 100%;
    height: 100%;
    padding: 16px;
    background: #e8e8e8;
    .title {
      width: 50%;
      height: 24px;
      margin-bottom: 8px;
      background: #cfcfcf;
    }
    .field {
      width: 30%;
      height: 16px;
      margin-bottom: 8px;
      background: #cfcfcf;
    }
    .hash-tags {
      display: flex;
      margin-bottom: 8px;
      .hash-tag {
        width: 30px;
        height: 16px;
        margin-right: 4px;
        background: #cfcfcf;
      }
    }
    .footer {
      display: flex;
      .image {
        width: 32px;
        height: 32px;
        margin-right: 8px;
        background: #cfcfcf;
      }
      .username {
        width: 32px;
        height: 16px;
        background: #cfcfcf;
      }
    }
  }
`;
