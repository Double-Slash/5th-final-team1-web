import React, { useCallback } from "react";
import { useSelector } from "react-redux";
import Button from "@common/Atoms/Button";
import LogInCheck from "@common/Organisms/LogInCheck";
import MarkDownInput from "@common/Organisms/MarkDownInput";
import MarkDownRendering from "@common/Organisms/MarkDownRendering";
import MarkDownToolBar from "@common/Organisms/MarkDownToolBar";
import { TabList, TabMenu, TabPanel } from "@common/Organisms/TabMenu";
import { rootState } from "@store/index";
import { IPost } from "@typings/db";
import { postDummy } from "@typings/db.dummy";
import * as S from "./style";

export interface CommentInputProps {
  postData: IPost;
}

const CommentInput = ({ postData = postDummy }: CommentInputProps) => {
  const markDownText = useSelector((state: rootState) => state.markdown.markDownText);

  // To Do...버튼 클릭 시 서버로 전송하기
  const clickSubmitButton = useCallback(() => {
    //
  }, []);

  return (
    <>
      <S.Layout>
        <h1>{postData.commentList.length}개의 댓글</h1>
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
