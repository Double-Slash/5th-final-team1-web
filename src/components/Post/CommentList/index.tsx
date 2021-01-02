import React from "react";
import Comment from "@common/Organisms/Comment";
import { IComment } from "@typings/db";
import * as S from "./style";

interface CommentListProps {
  postData: IComment[];
}

const CommentList = ({ postData }: CommentListProps) => {
  return (
    <>
      <S.Layout>
        {postData.map((value) => (
          <Comment
            key={value.user.username + Math.floor(Math.random() * 1000)}
            user={value.user}
            content={value.content}
            childComments={value.childComments}
          />
        ))}
      </S.Layout>
    </>
  );
};

export default CommentList;
