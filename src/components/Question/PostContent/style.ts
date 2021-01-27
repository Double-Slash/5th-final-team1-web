import styled from "styled-components";

export const PostContent = styled.section`
  padding: 24px 0;
  margin-bottom: 32px;
  border-bottom: 1px solid #bababa;
  h1 {
    font-size: 1.2rem;
  }
  .markdown-input {
    min-height: 180px;
    background: white;
    .CodeMirror-wrap {
      height: 100%;
    }
  }
  .post-content,
  .tab-panel {
    min-height: 200px;
  }
  .button-wrapper {
    display: flex;
    justify-content: flex-end;
    width: 100%;
  }
  .modify-btn,
  .cancel-btn {
    padding: 8px 16px;
    margin-top: 16px;
  }
  .cancel-btn {
    margin-right: 8px;
  }
`;
