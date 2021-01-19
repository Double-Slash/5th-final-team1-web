import styled from "styled-components";

export const Layout = styled.li`
  .container {
    padding: 24px 16px;
    background: white;
    .title-wrapper {
      h1 {
        font-size: 1.4rem;
      }
      h2 {
        margin-bottom: 8px;
      }
      a {
        color: black;
      }
    }
    .hash-tag-group {
      margin-bottom: 8px;
      a {
        padding: 0 16px;
        align-items: center;
        height: 24px;
        margin-right: 8px;
      }
    }
  }
`;

export const CardFooter = styled.div`
  display: flex;
  .user-wrapper {
    display: flex;
    align-items: center;
    width: 100%;
    img {
      margin-right: 8px;
    }
    span {
      font-size: 0.8rem;
      font-weight: bold;
    }
    h4 {
      margin-top: 4px;
      font-size: 0.7rem;
      color: gray;
      font-weight: 400;
    }
    p {
      margin-left: auto;
      margin-top: auto;
      font-size: 0.8rem;
      color: gray;
    }
  }
`;
