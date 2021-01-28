import React from "react";
import { Link } from "react-router-dom";
import * as S from "./style";

/**
 * @param buttonColor 버튼의 색상
 * @param className 추가적인 버튼 classname
 * @param disabled 버튼 비활성화 여부
 * @param fontColor 버튼 글자의 색상
 * @param isLinked 페이지 이동을 위한 버튼인지 체크
 * @param onClick 버튼을 클릭했을 때 실행되는 함수
 * @param pathname 페이지 이동 버튼일 때 to property의 pathname
 * @param type 버튼의 type
 * @param width 버튼 크기의 사이즈
 */

export interface ButtonProps {
  buttonColor?: string;
  children?: React.ReactNode;
  className?: string;
  disabled?: boolean;
  fontColor?: string;
  isLinked: boolean;
  onClick?: () => void;
  pathname?: string;
  type?: "submit" | "button";
  width?: string;
}

const Button = ({
  buttonColor,
  children,
  className,
  disabled,
  fontColor,
  isLinked,
  onClick,
  pathname,
  type,
  width,
}: ButtonProps) => {
  // 링크형 버튼일 경우
  if (isLinked) {
    return (
      <S.Button
        buttonColor={buttonColor}
        className={className}
        disabled={disabled}
        fontColor={fontColor}
        onClick={onClick}
        type={type}
        width={width}
      >
        <Link to={`/${pathname}`}>{children}</Link>
      </S.Button>
    );
  }

  // 링크형 버튼이 아닐 경우
  return (
    <>
      <S.Button
        buttonColor={buttonColor}
        className={className}
        disabled={disabled}
        fontColor={fontColor}
        onClick={onClick}
        type={type}
        width={width}
      >
        {children}
      </S.Button>
    </>
  );
};

export default Button;
