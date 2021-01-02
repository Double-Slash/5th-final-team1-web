import React from "react";
import { Link } from "react-router-dom";
import * as S from "./style";

/**
 * @param onClick 버튼을 클릭했을 때 실행되는 함수
 * @param isLinked 페이지 이동을 위한 버튼인지 체크
 * @param width 버튼 크기의 사이즈
 * @param buttonColor 버튼의 색상
 * @param fontColor 버튼 글자의 색상
 * @param type 버튼의 type
 * @param className 추가적인 버튼 classname
 * @param pathname 페이지 이동 버튼일 때 to property의 pathname
 */

export interface ButtonProps {
  onClick: () => void;
  isLinked: boolean;
  width?: string;
  buttonColor?: string;
  fontColor?: string;
  pathname?: string;
  className?: string;
  type?: "submit" | "button";
  children?: React.ReactNode;
}

const Button = ({
  onClick,
  width,
  buttonColor,
  fontColor,
  isLinked,
  pathname,
  className,
  type,
  children,
}: ButtonProps) => {
  // 링크형 버튼일 경우
  if (isLinked) {
    return (
      <S.Button
        onClick={onClick}
        type={type}
        width={width}
        buttonColor={buttonColor}
        fontColor={fontColor}
        className={className}
      >
        <Link to={`/${pathname}`}>{children}</Link>
      </S.Button>
    );
  }

  // 링크형 버튼이 아닐 경우
  return (
    <>
      <S.Button
        onClick={onClick}
        type={type}
        width={width}
        buttonColor={buttonColor}
        fontColor={fontColor}
        className={className}
      >
        {children}
      </S.Button>
    </>
  );
};

export default Button;
