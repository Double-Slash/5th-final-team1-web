import styled from "styled-components";
import media from "@utils/styles/media";

export const Layout = styled.main`
  width: 1728px;
  min-height: 100vh;
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

export const Skeleton = styled.main`
  width: 100%;
  padding-bottom: 24px;
  /* 해시 태그 */
  .hash-tag {
    display: flex;
    padding: 24px 0;
    .tag {
      width: 80px;
      height: 32px;
      background: #e8e8e8;
    }
  }
  /* 제목 */
  .title {
    padding: 24px 0;
    background: #e8e8e8;
  }
  /* 유저 정보 */
  .user-info {
    display: flex;
    padding: 24px 0;
    .thumbnail {
      width: 40px;
      height: 40px;
      margin-right: 8px;
      background: #e8e8e8;
    }
    .user-name {
      width: 64px;
      height: 32px;
      background: #e8e8e8;
      margin-right: 8px;
    }
    .rank {
      width: 64px;
      height: 32px;
      background: #e8e8e8;
    }
  }
  /* 프로젝트 조건 */
  .project-condition {
    display: flex;
    flex-wrap: wrap;
    padding: 24px 0;
    .condition {
      width: 40%;
      height: 40px;
      margin: 8px;
      background: #e8e8e8;
    }
  }
  /* 본문 */
  .content {
    width: 100%;
    height: 200px;
    padding: 24px 0;
    margin-bottom: 16px;
    background: #e8e8e8;
  }
  /* 지원하기 버튼 */
  .button {
    width: 80px;
    height: 32px;
    margin: 0 auto;
    background: #e8e8e8;
  }
`;
