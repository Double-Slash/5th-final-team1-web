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
  .user-name {
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
`;

export const CommentBody = styled.div<{ isChild: number | undefined }>`
  margin: 8px 0;
  margin-left: ${(props) => (props.isChild ? "0px" : "64px")};
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
    display: flex;
    .like,
    .dislike {
      width: 48px;
      svg {
        margin-right: 4px;
      }
    }
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
  display: flex;
  margin: 8px 0;
  img {
    margin-right: 8px;
  }
  textarea {
    border-bottom: 1px solid gray;
  }
`;
