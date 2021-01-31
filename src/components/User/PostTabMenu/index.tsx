import React from "react";
import { TabMenu, TabList, TabPanel } from "@common/Organisms/TabMenu";
import { IQuestionListItem, IAnswerListItem, IProjectListItem } from "@typings/db";
import QuestionList from "../QuestionList";
import JobPostingList from "../JobPostingList";
import * as S from "./style";

export interface PostTabMenuProps {
  my_answers?: IAnswerListItem[];
  my_projects?: IProjectListItem[];
  my_questions?: IQuestionListItem[];
}

const PostTabMenu = ({ my_answers, my_projects, my_questions }: PostTabMenuProps) => {
  return (
    <>
      <S.Layout>
        <TabMenu>
          <TabList tabButtonList={["My Question", "My Answer", "My Project"]} />
          <TabPanel index={0}>
            <QuestionList my_questions={my_questions} />
          </TabPanel>
          <TabPanel index={1}>
            <div>1</div>
          </TabPanel>
          <TabPanel index={2}>
            <JobPostingList my_Projects={my_projects} />
          </TabPanel>
        </TabMenu>
      </S.Layout>
    </>
  );
};

export default PostTabMenu;
