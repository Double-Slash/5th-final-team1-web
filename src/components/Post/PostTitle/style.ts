import styled from "styled-components";

export const PostTitle = styled.section`
  padding: 24px 0;
  border-bottom: 1px solid #bababa;
  h1 {
    font-size: 1.6rem;
    margin: 16px 0;
  }
  .hash-tag-list {
    display: flex;
    align-items: center;
    .login-check {
      margin-left: auto;
      font-size: 24px;
    }
  }
  .user-info {
    display: flex;
    align-items: center;
    img,
    .user-name {
      margin-right: 8px;
    }
    .user-name {
      font-size: 1.2rem;
      font-weight: bold;
    }
    h3 {
      font-size: 1rem;
      color: gray;
    }
    .created-at {
      margin-left: auto;
      color: gray;
    }
  }
`;
