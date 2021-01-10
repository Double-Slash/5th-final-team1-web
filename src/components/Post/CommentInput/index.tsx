import React, { useCallback } from "react";
import { useSelector } from "react-redux";
import produce from "immer";
import Button from "@common/Atoms/Button";
import LogInCheck from "@common/Organisms/LogInCheck";
import MarkDownInput from "@common/Organisms/MarkDownInput";
import MarkDownRendering from "@common/Organisms/MarkDownRendering";
import MarkDownToolBar from "@common/Organisms/MarkDownToolBar";
import { TabList, TabMenu, TabPanel } from "@common/Organisms/TabMenu";
import { postAnsewrs } from "@apis/answer";
import { rootState } from "@store/index";
import { IQuestion } from "@typings/db";
import * as S from "./style";

export interface CommentInputProps {
  answers: number;
  questionId: number;
  appendAnswerList: React.Dispatch<React.SetStateAction<IQuestion>>;
}

const CommentInput = ({ answers, questionId, appendAnswerList }: CommentInputProps) => {
  const markDownText = useSelector((state: rootState) => state.markdown.markDownText);

  const clickSubmitButton = useCallback(async () => {
    try {
      const { data } = await postAnsewrs({ body: markDownText, question: questionId });
      appendAnswerList((prev: IQuestion) => {
        return produce(prev, (draft) => {
          draft.answers.push(data);
        });
      });
    } catch (error) {
      throw new Error(error);
    }
  }, [markDownText, questionId, appendAnswerList]);

  return (
    <>
      <S.Layout>
        <h1>{answers}개의 댓글</h1>
        <TabMenu>
          <TabList tabButtonList={["댓글 작성", "미리 보기"]} />
          <TabPanel index={0}>
            <MarkDownToolBar />
            <MarkDownInput />
          </TabPanel>
          <TabPanel index={1}>
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

export default CommentInput;
