import React, { useCallback, useState } from "react";
import { BsArrowReturnRight } from "react-icons/bs";
import { AiFillLike, AiOutlineUp, AiOutlineDown } from "react-icons/ai";
import Button from "@common/Atoms/Button";
// import ProfileImage from "@common/Atoms/ProfileImage";
import Textarea from "@common/Atoms/Textarea";
import MarkDownRendering from "@common/Organisms/MarkDownRendering";
import calcDate from "@utils/modules/calcDate";
import { postComment } from "@apis/comment";
import { IComment } from "@typings/db";
import * as S from "./style";

export interface CommentProps {
  questionId?: number;
  answerId?: number;
  author: string;
  created_at: string;
  body: string;
  num_likes: number;
  comments?: IComment[];
}

const Comment = ({ questionId, answerId, author, created_at, body, num_likes, comments }: CommentProps) => {
  const [toggleInput, setToggleInput] = useState(false); // 댓글 입력창 토글
  const [toggleRecomment, setToggleRecomment] = useState(false); // 대댓글 리스트 토글
  const [commentText, setCommentText] = useState(""); // 답변 텍스트

  // 댓글 텍스트 클릭
  const clickInputText = useCallback(() => {
    setToggleInput((prev) => !prev);
  }, []);

  // 대댓글 텍스트 클릭
  const clickRecommentList = useCallback(() => {
    setToggleRecomment((prev) => !prev);
  }, []);

  // 좋아요 버튼 클릭
  const clickLikeButton = useCallback(() => {}, []);

  // 싫어요 버튼 클릭
  // const clickDislikeButton = useCallback(() => {}, []);

  // 댓글 입력
  const changeCommentTextArea = useCallback((text: string) => {
    setCommentText(text);
  }, []);

  // 답변 제출 버튼 클릭
  const submitComment = useCallback(
    async (event) => {
      event.preventDefault();
      try {
        const questionType = questionId as number;
        const answerType = answerId as number;
        const { data } = await postComment({ body: commentText, question: questionType, answer: answerType });
      } catch (error) {
        throw new Error(error);
      }
    },
    [commentText, questionId, answerId],
  );

  return (
    <>
      <S.Layout>
        <div className="comment-conatiner">
          {!answerId && <BsArrowReturnRight className="return-right-icon" />}
          <div className="comment-wrapper">
            <S.CommentHeader>
              {/* <ProfileImage
                radius={48}
                imageSrc="https://media.vlpt.us/post-images/velopert/12bb2c00-0dcb-11ea-93f8-4bb68097367b/image.png"
              /> */}
              <div className="user-name">
                <h1>{author}님</h1>
                {/* <span>마스터</span> */}
              </div>
              <span>{calcDate({ date: created_at })}</span>
            </S.CommentHeader>
            <S.CommentBody isChild={answerId}>
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
              {answerId && (
                <>
                  <Button
                    isLinked={false}
                    onClick={clickInputText}
                    fontColor={toggleInput ? "blue" : "gray"}
                    className="comment-toggle"
                  >
                    댓글
                  </Button>
                  {comments?.length ? (
                    <Button
                      isLinked={false}
                      onClick={clickRecommentList}
                      fontColor="gray"
                      className="read-more-comments"
                    >
                      {comments?.length}개의 댓글 {toggleRecomment ? "보기" : "숨기기"}
                      {toggleRecomment ? <AiOutlineDown /> : <AiOutlineUp />}
                    </Button>
                  ) : (
                    ""
                  )}
                </>
              )}
            </S.CommentFooter>
          </div>
        </div>
        {toggleInput && (
          <S.CommentForm onSubmit={submitComment}>
            {/* <ProfileImage
              radius={48}
              imageSrc="https://media.vlpt.us/post-images/velopert/12bb2c00-0dcb-11ea-93f8-4bb68097367b/image.png"
            /> */}
            <Textarea placeholder="댓글을 입력하세요" onChange={changeCommentTextArea} />
            <Button isLinked={false} type="submit" buttonColor="blakc" fontColor="white" onClick={() => {}}>
              제출하기
            </Button>
          </S.CommentForm>
        )}
        {toggleRecomment && (
          <ul>
            {comments?.map((comment) => (
              <Comment
                key={comment.created_at}
                author={comment.author}
                created_at={comment.created_at}
                body={comment.body}
                num_likes={comment.num_likes}
              />
            ))}
          </ul>
        )}
      </S.Layout>
    </>
  );
};

export default Comment;
