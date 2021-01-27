import React, { useCallback, useContext, useState } from "react";
import Button from "@common/Atoms/Button";
import MarkDownInput from "@common/Organisms/MarkDownInput";
import MarkDownToolBar from "@common/Organisms/MarkDownToolBar";
import MarkDownRendering from "@common/Organisms/MarkDownRendering";
import { TabList, TabMenu, TabPanel } from "@common/Organisms/TabMenu";
import useDecodeToken from "@hooks/useDecodeToken";
import { patchQuestion } from "@apis/question";
import { MarkDownEditorContext } from "@store/MarkDownEditor";
import { clearContext } from "@store/MarkDownEditor/action";
import { BASIC_MARKDOWN_TOOLBAR } from "@utils/const";
import * as S from "./style";

export interface PostContentProps {
  author_id: number;
  body: string;
  questionId: number;
  title: string;
}

const PostContent = ({ author_id, body, questionId, title }: PostContentProps) => {
  const [toggle, setToggle] = useState(false);
  const [renewBody, setRenewBody] = useState(body);
  const { user_id: token_id } = useDecodeToken();
  const { dispatch, editorText } = useContext(MarkDownEditorContext);

  const clickModifyButton = useCallback(async () => {
    try {
      if (toggle) {
        const { data } = await patchQuestion({ body: editorText as string, id: questionId, title });
        setRenewBody(data.body);
        setToggle(false);
      } else {
        setToggle(true);
      }
      dispatch(clearContext());
    } catch (error) {
      setToggle(false);
      dispatch(clearContext());
    }
  }, [dispatch, editorText, questionId, title, toggle]);

  const clickCancelButton = useCallback(() => {
    setToggle((prev) => !prev);
    dispatch(clearContext());
  }, [dispatch]);

  return (
    <>
      <S.PostContent>
        {toggle ? (
          <TabMenu>
            <TabList tabButtonList={["질문 수정", "미리 보기"]} />
            <TabPanel index={0}>
              <MarkDownToolBar toolBarList={BASIC_MARKDOWN_TOOLBAR} />
              <MarkDownInput className="markdown-input" initialText={renewBody} />
            </TabPanel>
            <TabPanel index={1} className="preview">
              <MarkDownRendering editorText={editorText} />
            </TabPanel>
          </TabMenu>
        ) : (
          <MarkDownRendering className="post-content" editorText={renewBody} />
        )}
        {author_id === token_id && (
          <div className="button-wrapper">
            {toggle && (
              <Button
                onClick={clickCancelButton}
                isLinked={false}
                className="cancel-btn"
                buttonColor="#a3a3a3"
                fontColor="white"
              >
                취소하기
              </Button>
            )}
            <Button
              onClick={clickModifyButton}
              isLinked={false}
              className="modify-btn"
              buttonColor={toggle ? "#266ce6" : "#a3a3a3"}
              fontColor="white"
            >
              수정하기
            </Button>
          </div>
        )}
      </S.PostContent>
    </>
  );
};

export default PostContent;
