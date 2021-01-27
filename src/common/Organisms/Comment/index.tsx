import React from "react";
import { BsArrowReturnRight } from "react-icons/bs";
import ProfileImage from "@common/Atoms/ProfileImage";
import UserName from "@common/Atoms/UserName";
import UpDown from "@common/Molecules/UpDown";
import MarkDownRendering from "@common/Organisms/MarkDownRendering";
import * as S from "./style";

export interface CommentProps {
  answer: number;
  author_name: string;
  body: string;
  created_at: string;
  edited_at: string;
  id: number;
  is_liked: "None" | boolean;
  like_id: "None" | number;
  num_likes: [number, number];
}

const Comment = ({ author_name, body, id, is_liked, like_id, num_likes }: CommentProps) => {
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
              <MarkDownRendering editorText={body} />
            </S.CommentBody>
            <S.CommentFooter>
              <div className="like-buttons">
                <UpDown commentId={id} is_liked={is_liked} like_id={like_id} num_likes={num_likes} />
              </div>
            </S.CommentFooter>
          </div>
        </div>
      </S.Layout>
    </>
  );
};

export default Comment;
