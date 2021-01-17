import React from "react";
import * as S from "./style";

/**
 * @param fontColor 해시태그 텍스트 색상
 * @param isBasicHashTag 기본적인 해시태그인지. false면 hash tag link
 * @param tagColor 해시태그 배경화면 색상
 * @param text 해시태그의 텍스트
 */

export interface HashTagProps {
  fontColor?: string;
  isBasicHashTag?: boolean;
  onClick?: () => void;
  tagColor?: string;
  text: string;
}

const HashTag = ({ isBasicHashTag, onClick, text }: HashTagProps) => {
  if (isBasicHashTag) return <S.HashTag onClick={onClick}>{text}</S.HashTag>;
  return (
    <>
      <S.HashTagLink to={`/${text}`}>{text}</S.HashTagLink>
    </>
  );
};

export default HashTag;
