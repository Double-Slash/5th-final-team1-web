import styled from "styled-components";

export const QuestionCard = styled.li`
  padding: 24px 56px;
  background: white;
  .container {
    display: flex;
    justify-content: space-between;
    width: 100%;
  }
  .divider {
    margin-top: 24px;
    border: 0.1px solid #edecec;
  }
`;

export const LeftWrapper = styled.div`
  width: 75%;
  p {
    color: gray;
  }
  .hash-tag-list {
    display: flex;
    align-items: center;
    .login-check {
      margin-left: auto;
      font-size: 20px;
    }
  }
  .card-header {
    display: flex;
    align-items: center;
    margin: 8px 0;
    h1 {
      font-size: 1.6rem;
    }
    a {
      margin-right: auto;
      color: black;
    }
    span:last-child {
      margin-left: 8px;
    }
  }
`;

export const RightWrapper = styled.div`
  width: 25%;
  text-align: center;
  img {
    margin-bottom: 8px;
    border: 0.5px solid gray;
  }
  a {
    color: gray;
  }
  span {
    margin-left: 0.2em;
    font-size: 0.8rem;
    font-weight: bold;
    color: gray;
  }
  .user-name {
    font-size: 1.05rem;
    font-weight: bold;
    color: black;
  }
`;
