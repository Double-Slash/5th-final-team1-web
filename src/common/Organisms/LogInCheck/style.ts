import styled from "styled-components";

export const LogInCheckBtn = styled.div`
  display: inline-block;
  cursor: pointer;
`;

export const ModalBackground = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;
  background: rgba(0, 0, 0, 0.1);
`;

export const Modal = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 48px 32px;
  background: white;
  .close-btn {
    position: absolute;
    top: 8px;
    right: 8px;
    padding: 0;
    color: black;
    font-size: 1.1rem;
    font-weight: bold;
  }
  h1 {
    font-size: 1.5rem;
    margin-bottom: 8px;
  }
  p {
    font-size: 0.8rem;
    font-weight: bold;
  }
`;

export const GithubLoginBtn = styled.a`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  padding: 16px;
  background: rgb(36, 36, 36);
  margin-top: 16px;
  color: white;
  span {
    margin-left: 8px;
  }
`;
