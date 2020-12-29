import React from "react";
import * as S from "./style";

/**
 * @param text 해시태그의 텍스트
 * @param fontColor 해시태그 텍스트 색상
 * @param tagColor 해시태그 배경화면 색상
 */

export interface HashTagProps {
  text: string;
  fontColor?: string;
  tagColor?: string;
}

const HashTag = ({ text }: HashTagProps) => {
  return (
    <>
      <S.HashTag to={`/${text}`}>{text}</S.HashTag>
    </>
  );
};

export default HashTag;
