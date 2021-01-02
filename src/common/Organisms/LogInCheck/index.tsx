import React, { useCallback, useState } from "react";
import { BsX } from "react-icons/bs";
import { AiFillGithub } from "react-icons/ai";
import Button from "@common/Atoms/Button";
import * as S from "./style";

export interface LogInCheckProps {
  onClick: () => void;
  children?: React.ReactNode;
}

const LogInCheck = ({ onClick, children }: LogInCheckProps) => {
  const [openModal, setOpenModal] = useState(false);

  // 로그인 체크 버튼 클릭
  const clickLogInCheck = useCallback(() => {
    if (!window.sessionStorage.getItem("access_token")) {
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

  // 깃허브로 로그인 버튼 클릭
  const clickGithubLogin = useCallback(() => {
    // To Do...서버쪽과 로그인 인증 구현 예정
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
            <Button isLinked={false} onClick={clickGithubLogin} className="github-btn">
              <AiFillGithub />
              <span>깃허브 아이디로 로그인</span>
            </Button>
          </S.Modal>
        </S.ModalBackground>
      )}
    </>
  );
};

export default LogInCheck;
