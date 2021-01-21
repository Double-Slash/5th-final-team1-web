import styled from "styled-components";

export const Layout = styled.section`
  article {
    border-bottom: 1px solid gray;
    padding: 24px 0;
  }
  /* 해시태그 리스트 */
  .hash-tag-wrapper {
    display: flex;
    align-items: center;
    margin-bottom: 16px;
    .hashtags {
      margin-bottom: 16px;
      a {
        height: 24px;
        font-size: 0.8rem;
        align-items: center;
      }
    }
    .login-check {
      margin-left: auto;
    }
  }
  /* title */
  h1 {
    font-size: 1.5rem;
  }
  /* 썸네일, 유저 이름, 생성일 wrapper */
  .user-info {
    display: flex;
    align-items: center;
    img {
      margin-right: 16px;
    }
    .user-name {
      font-weight: bold;
      margin-right: 8px;
    }
    .date {
      margin-left: auto;
    }
  }
`;

export const ProjectCondition = styled.article`
  display: flex;
  flex-wrap: wrap;
  div {
    display: flex;
    width: 50%;
    span {
      color: gray;
      font-weight: bold;
      margin-right: 16px;
    }
    p {
      font-weight: bold;
    }
  }
`;
