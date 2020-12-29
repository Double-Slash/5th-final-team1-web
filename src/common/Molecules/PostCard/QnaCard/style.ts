import styled from "styled-components";

export const QnaCard = styled.li`
  display: flex;
  padding: 16px 32px;
  justify-content: space-between;
  .left-wrapper {
    width: 80%;
    p {
      color: black;
    }
  }
  .right-wrapper {
    width: 20%;
    text-align: center;
    img {
      margin-bottom: 8px;
    }
    a {
      color: black;
    }
    span {
      margin-left: 0.9em;
      font-size: 0.8rem;
    }
  }
  .card-header {
    display: flex;
    align-items: center;
    margin: 8px 0;
    a {
      margin-right: auto;
      color: black;
    }
    span:last-child {
      margin-left: 8px;
    }
  }
`;
