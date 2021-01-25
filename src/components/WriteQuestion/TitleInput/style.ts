import styled from "styled-components";

export const Layout = styled.header`
  width: 100%;
  .tag-list {
    display: flex;
  }
  button {
    color: black;
  }
  textarea {
    padding: 8px 8px 0 8px;
    margin-bottom: 8px;
    border-bottom: 1px solid gray;
  }
`;

export const HashTagList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  padding: 8px 0;
  border-bottom: 1px solid gray;
  input {
    margin-left: 8px;
  }
`;
