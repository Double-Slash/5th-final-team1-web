import React from "react";
import MarkDownRendering from "@common/Organisms/MarkDownRendering";
import * as S from "./style";

export interface PostContentProps {
  body: string;
}

const PostContent = ({ body }: PostContentProps) => {
  return (
    <>
      <S.PostContent>
        <MarkDownRendering markDownText={body} />
      </S.PostContent>
    </>
  );
};

export default PostContent;
