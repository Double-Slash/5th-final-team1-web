import React, { useCallback, useContext } from "react";
import produce from "immer";
import Button from "@common/Atoms/Button";
import { MarkDownEditorContext } from "@store/MarkDownEditor";
import { clearContext } from "@store/MarkDownEditor/action";
import LogInCheck from "@common/Organisms/LogInCheck";
import MarkDownInput from "@common/Organisms/MarkDownInput";
import MarkDownToolBar from "@common/Organisms/MarkDownToolBar";
import MarkDownRendering from "@common/Organisms/MarkDownRendering";
import { TabList, TabMenu, TabPanel } from "@common/Organisms/TabMenu";
import { postAnsewrs } from "@apis/answer";
import useDecodeToken from "@hooks/useDecodeToken";
import { IAnswer, IQuestion } from "@typings/db";
import { BASIC_MARKDOWN_TOOLBAR } from "@utils/const";
import * as S from "./style";

export interface AnswerInputProps {
  answers: number;
  questionId: number;
  appendAnswerList: React.Dispatch<React.SetStateAction<IQuestion>>;
}

const AnswerInput = ({ answers, questionId, appendAnswerList }: AnswerInputProps) => {
  const { dispatch, editorText } = useContext(MarkDownEditorContext);
  const { user_id } = useDecodeToken();

  const clickSubmitButton = useCallback(async () => {
    try {
      const { data } = await postAnsewrs({ body: editorText, question: questionId });
      const recreated: IAnswer = {
        author: user_id,
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
      appendAnswerList((prev) => {
        return produce(prev, (draft) => {
          draft.answers.push(recreated);
        });
      });
      dispatch(clearContext());
    } catch (error) {
      dispatch(clearContext());
    }
  }, [appendAnswerList, dispatch, editorText, questionId, user_id]);

  return (
    <>
      <S.Layout>
        <h1>{answers}개의 답변</h1>
        <TabMenu>
          <TabList tabButtonList={["답변 작성", "미리 보기"]} />
          <TabPanel index={0} className="answer-input-wrapper">
            <MarkDownToolBar toolBarList={BASIC_MARKDOWN_TOOLBAR} />
            <MarkDownInput className="answer-input" />
          </TabPanel>
          <TabPanel index={1} className="preview">
            <MarkDownRendering editorText={editorText} />
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
