import React, { useCallback } from "react";
import { BsArrowReturnRight } from "react-icons/bs";
import { AiFillLike } from "react-icons/ai";
import ProfileImage from "@common/Atoms/ProfileImage";
import UserName from "@common/Atoms/UserName";
import MarkDownRendering from "@common/Organisms/MarkDownRendering";
import * as S from "./style";

export interface CommentProps {
  answer: number;
  author: number;
  author_name: string;
  num_likes: number;
  body: string;
  created_at: string;
  edited_at: string;
  id: number;
  question: number;
}

const Comment = ({ author, author_name, body, num_likes }: CommentProps) => {
  // 좋아요 버튼 클릭
  const clickLikeButton = useCallback(() => {}, []);

  // 싫어요 버튼 클릭
  // const clickDislikeButton = useCallback(() => {}, []);

  return (
    <>
      <S.Layout>
        <div className="comment-conatiner">
          <BsArrowReturnRight className="return-right-icon" />
          <div className="comment-wrapper">
            <S.CommentHeader>
              <ProfileImage radius={40} imageSrc={author_name} />
              <UserName username={author_name} className="user-name" />
            </S.CommentHeader>
            <S.CommentBody>
              <MarkDownRendering markDownText={body} />
            </S.CommentBody>
            <S.CommentFooter>
              <div className="like-buttons">
                <div className="like">
                  <AiFillLike onClick={clickLikeButton} />
                  <span>{num_likes}</span>
                </div>
                {/* <div className="dislike">
                  <AiFillDislike onClick={clickDislikeButton} />
                  <span>3</span>
                </div> */}
              </div>
            </S.CommentFooter>
          </div>
        </div>
      </S.Layout>
    </>
  );
};

export default Comment;
