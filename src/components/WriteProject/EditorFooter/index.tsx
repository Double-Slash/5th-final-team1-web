import React, { useCallback, useContext } from "react";
import { useHistory } from "react-router-dom";
import Button from "@common/Atoms/Button";
import { MarkDownEditorContext } from "@store/MarkDownEditor";
import { WriteProjectContext } from "@store/WriteProject";
import { postJobPostings } from "@apis/project";
import * as S from "./style";

const EditorFooter = () => {
  const history = useHistory();
  const { editorText, title } = useContext(MarkDownEditorContext);
  const { condition, date, field, hashTagList, headcount } = useContext(WriteProjectContext);

  const clickSubmitButton = useCallback(async () => {
    try {
      const { data } = await postJobPostings({
        body: editorText,
        crew_count: headcount,
        crew_condition: condition,
        crew_field: field,
        crew_recruit: date,
        hashtags: hashTagList,
        title,
      });
      history.push(`/project/${data.id}`);
    } catch {
      history.push(`/project`);
    }
  }, [condition, date, field, history, hashTagList, headcount, editorText, title]);

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
