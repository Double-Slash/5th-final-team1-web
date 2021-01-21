import React, { useCallback, useState } from "react";
import Button from "@common/Atoms/Button";
import MarkDownInput from "@common/Organisms/MarkDownInput";
import MarkDownRendering from "@common/Organisms/MarkDownRendering";
import MarkDownToolBar from "@common/Organisms/MarkDownToolBar";
import { TabList, TabMenu, TabPanel } from "@common/Organisms/TabMenu";
import useDecodeToken from "@hooks/useDecodeToken";
import * as S from "./style";

export interface PostContentProps {
  author_id: number;
  body: string;
}

const PostContent = ({ body, author_id }: PostContentProps) => {
  const [toggle, setToggle] = useState(true);
  const { user_id: token_id } = useDecodeToken();

  const clickModifyButton = useCallback(() => {
    setToggle((prev) => !prev);
  }, []);

  return (
    <>
      <S.PostContent>
        {toggle ? (
          <MarkDownRendering className="post-content" markDownText={body} />
        ) : (
          <TabMenu>
            <TabList tabButtonList={["질문 수정", "미리 보기"]} />
            <TabPanel index={0}>
              <MarkDownToolBar />
              <MarkDownInput />
            </TabPanel>
            <TabPanel index={1} className="preview">
              <MarkDownRendering markDownText={body} />
            </TabPanel>
          </TabMenu>
        )}
        {author_id === token_id && (
          <div className="button-wrapper">
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
