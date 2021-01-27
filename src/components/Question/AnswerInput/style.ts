import styled from "styled-components";

export const Layout = styled.section`
  padding: 24px 0;
  margin-bottom: 32px;
  h1 {
    font-size: 1.2rem;
  }
  .login-check {
    float: right;
  }
  .answer-input-wrapper {
    display: none;
    &.active {
      display: flex;
      flex-direction: column;
    }
    .answer-input {
      min-height: 100px;
      background: white;
    }
  }
  .submit-btn {
    padding: 8px 24px;
    margin-top: 16px;
  }
  .preview {
    min-height: 380px;
  }
`;
