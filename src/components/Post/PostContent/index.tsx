import React from "react";
import MarkDownRendering from "@common/Organisms/MarkDownRendering";
import { IPost } from "@typings/db";
import { postDummy } from "@typings/db.dummy";
import * as S from "./style";

export interface PostContentProps {
  postData: IPost;
}

const PostContent = ({ postData = postDummy }: PostContentProps) => {
  const { content } = postData;

  return (
    <>
      <S.PostContent>
        <MarkDownRendering markDownText={content} />
      </S.PostContent>
    </>
  );
};

export default PostContent;
