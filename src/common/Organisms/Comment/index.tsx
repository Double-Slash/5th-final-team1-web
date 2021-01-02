import React, { useCallback, useState } from "react";
import { BsArrowReturnRight } from "react-icons/bs";
import { AiFillLike, AiFillDislike, AiOutlineUp, AiOutlineDown } from "react-icons/ai";
import Button from "@common/Atoms/Button";
import ProfileImage from "@common/Atoms/ProfileImage";
import Textarea from "@common/Atoms/Textarea";
import MarkDownRendering from "@common/Organisms/MarkDownRendering";
import { IComment } from "@typings/db";
import * as S from "./style";

const Comment = ({ user, content, childComments }: IComment) => {
  const [toggleInput, setToggleInput] = useState(false); // 댓글 입력창 토글
  const [toggleRecomment, setToggleRecomment] = useState(false); // 대댓글 리스트 토글

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

  // 좋아요 버튼 클릭
  const clickDislikeButton = useCallback(() => {}, []);

  // 댓글 입력
  const changeCommentTextArea = useCallback((text: string) => {
    // ToDo...
  }, []);

  // 채택하기 버튼 클릭
  const clickChooseBtn = useCallback(() => {
    // To Do...서버 부분과 통신
  }, []);

  return (
    <>
      <S.Layout>
        <div className="comment-conatiner">
          {!childComments?.length && <BsArrowReturnRight className="return-right-icon" />}
          <div className="comment-wrapper">
            <S.CommentHeader>
              <ProfileImage
                radius={48}
                imageSrc="https://media.vlpt.us/post-images/velopert/12bb2c00-0dcb-11ea-93f8-4bb68097367b/image.png"
              />
              <div className="user-name">
                <h1>차민철님</h1>
                <span>마스터</span>
              </div>
              <span>2021.01.01</span>
              <Button isLinked={false} onClick={clickChooseBtn} />
            </S.CommentHeader>
            <S.CommentBody isChild={!!childComments?.length}>
              <MarkDownRendering markDownText="ㄴㅇㄴㅇㄹㄴㄹㄴㅇ" />
            </S.CommentBody>
            <S.CommentFooter>
              <div className="like-buttons">
                <div className="like">
                  <AiFillLike onClick={clickLikeButton} />
                  <span>3</span>
                </div>
                <div className="dislike">
                  <AiFillDislike onClick={clickDislikeButton} />
                  <span>3</span>
                </div>
              </div>
              {childComments?.length && (
                <>
                  <Button
                    isLinked={false}
                    onClick={clickInputText}
                    fontColor={toggleInput ? "blue" : "gray"}
                    className="comment-toggle"
                  >
                    댓글
                  </Button>
                  <Button isLinked={false} onClick={clickRecommentList} fontColor="gray" className="read-more-comments">
                    {toggleRecomment ? (
                      <>
                        2개의 댓글 보기
                        <AiOutlineDown />
                      </>
                    ) : (
                      <>
                        2개의 댓글 숨기기
                        <AiOutlineUp />
                      </>
                    )}
                  </Button>
                </>
              )}
            </S.CommentFooter>
          </div>
        </div>
        {toggleInput && (
          <S.ReCommentInput>
            <ProfileImage
              radius={48}
              imageSrc="https://media.vlpt.us/post-images/velopert/12bb2c00-0dcb-11ea-93f8-4bb68097367b/image.png"
            />
            <Textarea placeholder="댓글을 입력하세요" onChange={changeCommentTextArea} />
          </S.ReCommentInput>
        )}
        {toggleRecomment && (
          <ul>
            {childComments?.map((recomment) => {
              return <Comment key={recomment.content} user={recomment.user} content={recomment.content} />;
            })}
          </ul>
        )}
      </S.Layout>
    </>
  );
};

export default Comment;
