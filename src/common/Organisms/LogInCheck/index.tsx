import React, { useCallback, useState } from "react";
import { BsX } from "react-icons/bs";
import { AiFillGithub } from "react-icons/ai";
import Button from "@common/Atoms/Button";
import { getAccessToken } from "@utils/modules/token";
import * as S from "./style";

export interface LogInCheckProps {
  onClick: () => void;
  children?: React.ReactNode;
}

const LogInCheck = ({ onClick, children }: LogInCheckProps) => {
  const [openModal, setOpenModal] = useState(false);

  // 로그인 체크 버튼 클릭
  const clickLogInCheck = useCallback(() => {
    if (!getAccessToken({ key: "access" })) {
      setOpenModal(true);
      document.body.style.overflow = "hidden";
      return;
    }
    onClick();
  }, [onClick]);

  // 모달 창 닫기 버튼
  const clickCloseBtn = useCallback(() => {
    setOpenModal(false);
    document.body.style.overflow = "scroll";
  }, []);

  return (
    <>
      <S.LogInCheckBtn role="presentation" className="login-check" onClick={clickLogInCheck}>
        {children}
      </S.LogInCheckBtn>
      {openModal && (
        <S.ModalBackground>
          <S.Modal>
            <Button isLinked={false} onClick={clickCloseBtn} className="close-btn">
              <BsX />
            </Button>
            <h1>로그인이 필요한 서비스입니다.</h1>
            <p>계정과 비밀번호 입력 없이</p>
            <p>깃허브로 로그인 해보세요</p>
            <S.GithubLoginBtn
              href="https://github.com/login/oauth/authorize?client_id=6c8de3c4a5decadc66a3&redirect_url=http%3A%2F%2F54.180.86.254%2Faccounts%2Fgithub%2Flogin%2Fcallback%2F&state=oYkKDYBt&scope=user%3Aemail"
              rel="noopener noreferrer"
              aria-hidden="true"
            >
              <AiFillGithub />
              <span>깃허브 아이디로 로그인</span>
            </S.GithubLoginBtn>
          </S.Modal>
        </S.ModalBackground>
      )}
    </>
  );
};

export default LogInCheck;
