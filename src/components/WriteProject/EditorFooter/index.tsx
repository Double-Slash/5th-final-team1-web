import React, { useCallback } from "react";
import { useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { postJobPostings } from "@apis/project";
import { rootState, reduxClear } from "@store/index";
import Button from "@common/Atoms/Button";
import * as S from "./style";

const EditorFooter = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const condition = useSelector<rootState>((state) => state.writeProject.condition) as string;
  const date = useSelector<rootState>((state) => state.writeProject.date) as string;
  const field = useSelector<rootState>((state) => state.writeProject.field) as string;
  const hashTagList = useSelector<rootState>((state) => state.writeProject.hashTagList) as string[];
  const headcount = useSelector<rootState>((state) => state.writeProject.headcount) as string;
  const markDownText = useSelector<rootState>((state) => state.markdown.markDownText) as string;
  const title = useSelector<rootState>((state) => state.markdown.title) as string;

  const clickSubmitButton = useCallback(async () => {
    const { data } = await postJobPostings({
      body: markDownText,
      crew_count: headcount,
      crew_condition: condition,
      crew_field: field,
      crew_recruit: date,
      hashtags: hashTagList,
      title,
    });
    dispatch(reduxClear());
    history.push(`/project/${data.id}`);
  }, [condition, date, dispatch, field, history, hashTagList, headcount, markDownText, title]);

  return (
    <>
      <S.Layout>
        <Button isLinked={false} onClick={clickSubmitButton} buttonColor="black" fontColor="white">
          작성하기
        </Button>
      </S.Layout>
    </>
  );
};

export default EditorFooter;
