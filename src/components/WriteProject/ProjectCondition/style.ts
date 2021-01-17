import styled from "styled-components";

export const Layout = styled.article`
  margin-bottom: 8px;
  border-bottom: 1px solid gray;
`;

export const Container = styled.div`
  display: flex;
  height: 40px;
  align-items: center;
  div {
    display: flex;
    width: 50%;
  }
  span {
    margin-right: 8px;
    font-size: 12px;
    font-weight: bold;
  }
  input {
    width: 70%;
    padding: 4px 8px;
  }
  input::placeholder {
    color: gray;
    font-weight: bold;
  }
`;
