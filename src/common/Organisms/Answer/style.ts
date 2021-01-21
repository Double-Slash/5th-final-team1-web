import styled from "styled-components";

export const Layout = styled.li`
  padding: 8px 0;
  margin: 16px 0;
  border-bottom: 1px solid gray;
  .comment-conatiner {
    display: flex;
    width: 100%;
    .return-right-icon {
      font-size: 1.2rem;
      margin-right: 16px;
    }
    .comment-wrapper {
      width: 100%;
    }
  }
`;

export const CommentHeader = styled.div`
  display: flex;
  .user-name-wrapper {
    display: flex;
    align-items: flex-end;
    height: fit-content;
    margin-right: 8px;
  }
  img {
    margin-right: 16px;
  }
  h1 {
    font-size: 1.2rem;
  }
  span {
    color: gray;
  }
  .user-name {
    margin-right: 8px;
    color: black;
    font-weight: bold;
    font-size: 1.2rem;
  }
  .adopt-btn {
    margin-left: auto;
    padding: 8px 24px;
    height: fit-content;
  }
`;

export const CommentBody = styled.div`
  margin: 8px 0;
  margin-left: 64px;
`;

export const CommentFooter = styled.div`
  display: flex;
  margin: 8px 0;
  svg {
    color: gray;
    cursor: pointer;
  }
  button {
    padding: 0;
  }
  .like-buttons {
  }
  .comment-toggle {
    margin-left: 40px;
    font-weight: bold;
  }
  .read-more-comments {
    display: flex;
    margin-left: auto;
    align-items: center;
    svg {
      margin-left: 4px;
    }
  }
`;

export const CommentForm = styled.form`
  margin: 8px 0;
  img {
    margin-right: 8px;
  }
  textarea {
    padding-bottom: 4px;
    border-bottom: 1px solid gray;
  }
  button {
    padding: 8px 16px;
  }
  .input-wrapper {
    display: flex;
  }
  .button-wrapper {
    display: flex;
    justify-content: flex-end;
    margin-top: 16px;
  }
  .return-right-icon {
    font-size: 24px;
    margin-right: 8px;
    color: gray;
  }
`;
