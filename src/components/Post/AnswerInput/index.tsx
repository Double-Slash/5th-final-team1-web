import React, { useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import produce from "immer";
import Button from "@common/Atoms/Button";
import LogInCheck from "@common/Organisms/LogInCheck";
import MarkDownInput from "@common/Organisms/MarkDownInput";
import MarkDownRendering from "@common/Organisms/MarkDownRendering";
import MarkDownToolBar from "@common/Organisms/MarkDownToolBar";
import { TabList, TabMenu, TabPanel } from "@common/Organisms/TabMenu";
import { postAnsewrs } from "@apis/answer";
import { reduxClear, rootState } from "@store/index";
import { IAnswer, IQuestion } from "@typings/db";
import * as S from "./style";

export interface AnswerInputProps {
  answers: number;
  author: number;
  questionId: number;
  appendAnswerList: React.Dispatch<React.SetStateAction<IQuestion>>;
}

const AnswerInput = ({ answers, author, questionId, appendAnswerList }: AnswerInputProps) => {
  const dispatch = useDispatch();
  const markDownText = useSelector((state: rootState) => state.markdown.markDownText);

  const clickSubmitButton = useCallback(async () => {
    try {
      const { data } = await postAnsewrs({ body: markDownText, question: questionId });
      const recreated: IAnswer = {
        author,
        author_name: data.author_name,
        body: data.body,
        comments: [],
        created_at: data.created_at,
        edited_at: data.edited_at,
        id: data.id,
        is_adopted: false,
        is_liked: "None",
        like_id: "None",
        num_likes: [0, 0],
      };
      appendAnswerList((prev: IQuestion) => {
        return produce(prev, (draft) => {
          draft.answers.push(recreated);
        });
      });
      dispatch(reduxClear());
    } catch (error) {
      throw new Error(error);
    }
  }, [appendAnswerList, author, dispatch, markDownText, questionId]);

  return (
    <>
      <S.Layout>
        <h1>{answers}개의 답변</h1>
        <TabMenu>
          <TabList tabButtonList={["답변 작성", "미리 보기"]} />
          <TabPanel index={0} className="answer-input-wrapper">
            <MarkDownToolBar />
            <MarkDownInput className="answer-input" />
          </TabPanel>
          <TabPanel index={1} className="preview">
            <MarkDownRendering markDownText={markDownText} />
          </TabPanel>
        </TabMenu>
        <LogInCheck onClick={clickSubmitButton}>
          <Button
            isLinked={false}
            onClick={() => {}}
            type="submit"
            className="submit-btn"
            fontColor="white"
            buttonColor="black"
          >
            작성하기
          </Button>
        </LogInCheck>
      </S.Layout>
    </>
  );
};

export default AnswerInput;
