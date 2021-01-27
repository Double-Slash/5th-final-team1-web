import React, { useCallback, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Button from "@common/Atoms/Button";
import MarkDownInput from "@common/Organisms/MarkDownInput";
import MarkDownRendering from "@common/Organisms/MarkDownRendering";
import MarkDownToolBar from "@common/Organisms/MarkDownToolBar";
import { TabList, TabMenu, TabPanel } from "@common/Organisms/TabMenu";
import useDecodeToken from "@hooks/useDecodeToken";
import { patchQuestion } from "@apis/question";
import { rootState, reduxClear } from "@store/index";
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
  const markDownText = useSelector<rootState>((state) => state.markdown.markDownText);
  const disptach = useDispatch();

  const clickModifyButton = useCallback(async () => {
    try {
      if (toggle) {
        const { data } = await patchQuestion({ body: markDownText as string, id: questionId, title });
        setRenewBody(data.body);
        setToggle(false);
        disptach(reduxClear());
      } else {
        setToggle(true);
      }
    } catch (error) {
      setToggle(false);
      disptach(reduxClear());
    }
  }, [disptach, markDownText, questionId, title, toggle]);

  const clickCancelButton = useCallback(() => {
    setToggle((prev) => !prev);
    disptach(reduxClear());
  }, [disptach]);

  return (
    <>
      <S.PostContent>
        {toggle ? (
          <TabMenu>
            <TabList tabButtonList={["질문 수정", "미리 보기"]} />
            <TabPanel index={0}>
              <MarkDownToolBar />
              <MarkDownInput className="markdown-input" initialText={renewBody} />
            </TabPanel>
            <TabPanel index={1} className="preview">
              <MarkDownRendering markDownText={markDownText as string} />
            </TabPanel>
          </TabMenu>
        ) : (
          <MarkDownRendering className="post-content" markDownText={renewBody} />
        )}
        {author_id === token_id && (
          <div className="button-wrapper">
            {toggle && (
              <Button
                onClick={clickCancelButton}
                isLinked={false}
                className="cancel-btn"
                buttonColor="#266ce6"
                fontColor="white"
              >
                취소하기
              </Button>
            )}
            <Button
              onClick={clickModifyButton}
              isLinked={false}
              className="modify-btn"
              buttonColor="#a3a3a3"
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
