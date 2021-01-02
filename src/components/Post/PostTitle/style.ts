import styled from "styled-components";

export const PostTitle = styled.section`
  padding: 24px 0;
  border-bottom: 1px solid #bababa;
  h1 {
    margin: 16px 0;
  }
  .user-info {
    display: flex;
    align-items: center;
    img,
    h2 {
      margin-right: 8px;
    }
    h2 {
      font-size: 1.1rem;
    }
    h3 {
      font-size: 1rem;
      color: gray;
    }
    span {
      margin-left: auto;
      color: gray;
    }
  }
`;
