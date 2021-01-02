import React from "react";
import CommentInput from "@components/Post/CommentInput";
import CommentList from "@components/Post/CommentList";
import PostContent from "@components/Post/PostContent";
import PostTitle from "@components/Post/PostTitle";
import { postDummy, commentDummy } from "@typings/db.dummy";
import * as S from "./style";

const Index = () => {
  // 서버 통신까지 임시로 더미 데이터 사용
  return (
    <>
      <S.Layout>
        <PostTitle postData={postDummy} />
        <PostContent postData={postDummy} />
        <CommentInput postData={postDummy} />
        <CommentList postData={[commentDummy]} />
      </S.Layout>
    </>
  );
};

export default Index;
