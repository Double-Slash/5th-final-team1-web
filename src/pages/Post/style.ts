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

export const Skeleton = styled.main`
  width: 100%;
  min-height: 600px;
  margin-top: 32px;
  /* 해시태그 리스트 */
  .hashtags {
    display: flex;
    width: 100%;
    height: 24px;
    margin-bottom: 24px;
    .tag {
      width: 72px;
      height: 100%;
      margin-left: 16px;
      background: #e8e8e8;
    }
  }

  /* 제목 */
  .title {
    width: 100%;
    height: 40px;
    margin-bottom: 24px;
    background: #e8e8e8;
  }

  /* 썸네일, 이름 */
  .user-info {
    width: 100%;
    height: 32px;
    margin-bottom: 24px;
    background: #e8e8e8;
  }

  /* 본문 */
  .content {
    width: 100%;
    height: 240px;
    margin-bottom: 24px;
    background: #e8e8e8;
  }

  /* 댓글 입력 */
  .comment-input {
    width: 100%;
    height: 160px;
    margin-bottom: 24px;
    background: #e8e8e8;
  }

  /* 댓글 리스트 */
  .answer-list {
    width: 100%;
    .answer {
      height: 40px;
      margin-bottom: 16px;
      background: #e8e8e8;
    }
  }
`;
