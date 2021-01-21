import styled from "styled-components";

export const Layout = styled.ul`
  width: 100%;
  .skeleton-wrapper {
    display: flex;
    width: 100%;
    padding: 16px;
    margin-bottom: 16px;
    background: #e8e8e8;
  }
`;

export const LeftSkeleton = styled.div`
  width: 70%;
  height: 100%;
  .hashtags {
    display: flex;
    margin-bottom: 8px;
    .tag {
      width: 72px;
      height: 24px;
      margin-right: 16px;
      background: #cfcfcf;
    }
  }
  .title {
    width: 160px;
    height: 24px;
    margin-bottom: 8px;
    background: #cfcfcf;
  }
  .content {
    width: 240px;
    height: 16px;
    background: #cfcfcf;
  }
`;

export const RightSkeleton = styled.div`
  display: flex;
  justify-content: flex-end;
  width: 30%;
  height: 120px;
  padding: 16px;
  .info {
    width: 50%;
    height: 100%;
    background: #cfcfcf;
  }
`;
