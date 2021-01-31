import React, { memo, useCallback, useContext, useState } from "react";
import { BsArrowReturnRight } from "react-icons/bs";
import { AiOutlineUp, AiOutlineDown } from "react-icons/ai";
import Button from "@common/Atoms/Button";
import ProfileImage from "@common/Atoms/ProfileImage";
import UserName from "@common/Atoms/UserName";
import Textarea from "@common/Atoms/Textarea";
import UpDown from "@common/Molecules/UpDown";
import Comment from "@common/Organisms/Comment";
import LogInCheck from "@common/Organisms/LogInCheck";
import MarkDownInput from "@common/Organisms/MarkDownInput";
import MarkDownToolBar from "@common/Organisms/MarkDownToolBar";
import MarkDownRendering from "@common/Organisms/MarkDownRendering";
import { MarkDownEditorContext } from "@store/MarkDownEditor";
import { clearContext } from "@store/MarkDownEditor/action";
import { TabList, TabMenu, TabPanel } from "@common/Organisms/TabMenu";
import useDecodeToken from "@hooks/useDecodeToken";
import calcDate from "@utils/modules/calcDate";
import { BASIC_MARKDOWN_TOOLBAR } from "@utils/const";
import { patchAnsewrs } from "@apis/answer";
import { postComment } from "@apis/comment";
import { postAnswerAdopt } from "@apis/question";
import { IComment } from "@typings/db";
import * as S from "./style";

export interface AnswerProps {
  author: number;
  author_name: string;
  body: string;
  comments: IComment[];
  created_at: string;
  edited_at: string;
  id: number;
  is_adopted: boolean;
  is_liked: "None" | boolean;
  like_id: "None" | number;
  num_likes: [number, number];
  owner: number;
  question_id: number;
}

const Answer = ({
  author,
  author_name,
  created_at,
  body,
  id,
  is_adopted,
  is_liked,
  like_id,
  num_likes,
  comments,
  owner,
  question_id,
}: AnswerProps) => {
  const [toggleInput, setToggleInput] = useState(false); // 댓글 입력창 토글
  const [toggleComment, setToggleComment] = useState(false); // 대댓글 리스트 토글
  const [toggleModify, setToggleModify] = useState(false); // 답변 수정하기 토글
  const [commentText, setCommentText] = useState(""); // 답변 텍스트
  const [adoptBtnDisabled, setAdoptBtnDisabled] = useState(is_adopted);
  const [copyComments, setComments] = useState(comments); // 댓글 data 복사
  const [renewBody, setRenewBody] = useState(body);
  const { oauth_username, user_id } = useDecodeToken();
  const { dispatch, editorText } = useContext(MarkDownEditorContext);

  // 댓글 텍스트 클릭
  const clickInputText = useCallback(() => {
    setToggleInput((prev) => !prev);
  }, []);

  // 대댓글 텍스트 클릭
  const clickRecommentList = useCallback(() => {
    setToggleComment((prev) => !prev);
  }, []);

  // 댓글 입력
  const changeCommentTextArea = useCallback((text: string) => {
    setCommentText(text);
  }, []);

  // 답변 제출 버튼 클릭
  const submitComment = useCallback(
    async (event) => {
      event.preventDefault();
      if (commentText.trim().length === 0) return;
      try {
        const { data } = await postComment({ body: commentText, answer: id });
        const recreated: IComment = {
          answer: data.answer,
          author: data.author,
          author_name: data.author_name,
          body: data.body,
          created_at: data.created_at,
          edited_at: data.edited_at,
          id: data.id,
          is_liked: "None",
          like_id: "None",
          num_likes: [0, 0],
        };
        setComments((prev) => [...prev, recreated]);
        changeCommentTextArea("");
      } catch (error) {
        throw new Error(error);
      }
    },
    [changeCommentTextArea, commentText, id],
  );

  // 답변 수정하기 클릭
  const clickModifyBtn = useCallback(async () => {
    if (toggleModify) {
      try {
        const { data } = await patchAnsewrs({ body: editorText, id, is_adopted, question: question_id });
        setRenewBody(data.body);
        setToggleModify(false);
        dispatch(clearContext());
      } catch {
        setToggleModify(false);
        dispatch(clearContext());
      }
    } else {
      setToggleModify(true);
    }
  }, [dispatch, editorText, id, is_adopted, question_id, toggleModify]);

  // 취소하기 버튼 클릭
  const clickCancelBtn = useCallback(() => {
    setToggleModify(false);
    dispatch(clearContext());
  }, [dispatch]);

  // 채택하기 버튼 클릭
  const clickAdoptButton = useCallback(async () => {
    setAdoptBtnDisabled(true);
    try {
      await postAnswerAdopt({ answer_id: id, id: question_id });
    } catch {
      setAdoptBtnDisabled(false);
    }
  }, [id, question_id]);

  return (
    <>
      <S.Layout>
        <div className="comment-conatiner">
          <div className="comment-wrapper">
            <S.CommentHeader>
              <ProfileImage radius={48} imageSrc={author_name} />
              <div className="user-name-container">
                <div className="user-name-wrapper">
                  <UserName username={author_name} className="user-name" />
                  <span>마스터</span>
                </div>
                <span>{calcDate({ date: created_at })}</span>
              </div>
              {author === user_id && (
                <div className="modify-btn-wrapper">
                  {toggleModify && (
                    <Button
                      isLinked={false}
                      onClick={clickCancelBtn}
                      className="cancel-btn"
                      buttonColor="#a3a3a3"
                      fontColor="white"
                    >
                      취소하기
                    </Button>
                  )}
                  <Button
                    isLinked={false}
                    onClick={clickModifyBtn}
                    className="modify-btn"
                    buttonColor={toggleModify ? "#266ce6" : "#a3a3a3"}
                    fontColor="white"
                  >
                    수정하기
                  </Button>
                </div>
              )}
              {owner === user_id && author !== user_id && (
                <Button
                  buttonColor="#e9e9e9"
                  className="adopt-btn"
                  disabled={adoptBtnDisabled}
                  fontColor="black"
                  isLinked={false}
                  onClick={clickAdoptButton}
                >
                  채택하기
                </Button>
              )}
            </S.CommentHeader>
            <S.CommentBody>
              {toggleModify ? (
                <TabMenu>
                  <TabList tabButtonList={["질문 수정", "미리 보기"]} />
                  <TabPanel index={0}>
                    <MarkDownToolBar toolBarList={BASIC_MARKDOWN_TOOLBAR} />
                    <MarkDownInput className="modify-input" />
                  </TabPanel>
                  <TabPanel index={1}>
                    <MarkDownRendering className="modify-preview" editorText={editorText} />
                  </TabPanel>
                </TabMenu>
              ) : (
                <MarkDownRendering editorText={renewBody} />
              )}
            </S.CommentBody>
            <S.CommentFooter>
              <div className="like-buttons">
                <UpDown answerId={id} is_liked={is_liked} like_id={like_id} num_likes={num_likes} />
              </div>
              <Button
                isLinked={false}
                onClick={clickInputText}
                fontColor={toggleInput ? "blue" : "gray"}
                className="comment-toggle"
              >
                댓글
              </Button>
              {copyComments?.length ? (
                <Button isLinked={false} onClick={clickRecommentList} fontColor="gray" className="read-more-comments">
                  {copyComments?.length}개의 댓글 {toggleComment ? "보기" : "숨기기"}
                  {toggleComment ? <AiOutlineDown /> : <AiOutlineUp />}
                </Button>
              ) : (
                ""
              )}
            </S.CommentFooter>
          </div>
        </div>
        {toggleInput && (
          <S.CommentForm onSubmit={submitComment}>
            <div className="input-wrapper">
              <BsArrowReturnRight className="return-right-icon" />
              <ProfileImage radius={48} imageSrc={oauth_username} />
              <Textarea placeholder="댓글을 입력하세요" onChange={changeCommentTextArea} textProps={commentText} />
            </div>
            <div className="button-wrapper">
              <LogInCheck onClick={() => {}}>
                <Button isLinked={false} type="submit" buttonColor="black" fontColor="white" onClick={() => {}}>
                  제출하기
                </Button>
              </LogInCheck>
            </div>
          </S.CommentForm>
        )}
        {toggleComment && (
          <ul>
            {copyComments?.map((comment) => (
              <Comment
                key={comment.created_at}
                answer={comment.answer}
                author_name={comment.author_name}
                body={comment.body}
                created_at={comment.created_at}
                edited_at={comment.edited_at}
                id={comment.id}
                is_liked={comment.is_liked}
                like_id={comment.like_id}
                num_likes={comment.num_likes}
              />
            ))}
          </ul>
        )}
      </S.Layout>
    </>
  );
};

export default memo(Answer);
