/* eslint-disable react-hooks/exhaustive-deps */
import React, { useCallback, useEffect, useState } from "react";
import debounce from "lodash.debounce";
import { BsSearch } from "react-icons/bs";
import ProjectPanel from "@components/Search/ProjectPanel";
import QuestionPanel from "@components/Search/QuestionPanel";
import Input from "@common/Atoms/Input";
import { TabMenu, TabList, TabPanel } from "@common/Organisms/TabMenu";
import useInput from "@hooks/useInput";
import { getJobPostingsSearch, getQuestionsSearch } from "@apis/search";
import { IProjectSearch, IQuestionSearch } from "@typings/db";
import * as S from "./style";

const Search = () => {
  const [searchText, changeSearchText] = useInput(""); // input 입력 시 텍스트
  const [deboncedText, setDebouncedText] = useState(""); // debounce가 걸린 텍스트
  const [projectList, setProjectList] = useState<IProjectSearch[]>(); // 프로젝트 검색 리스트
  const [questionList, setQuestionList] = useState<IQuestionSearch[]>(); // 질문글 검색 리스트
  const [questionLastId, setQuestionLastId] = useState(0); // 질문글 마지막 게시글 id
  const [jobpostingLastId, setJobpostingLastId] = useState(0); // 프로젝트 마지막 게시글 id

  const delayed = useCallback(
    debounce(async () => {
      if (!searchText) return;
      const {
        data: { jobpostings },
      } = await getJobPostingsSearch({ text: searchText, page: 1 });
      const {
        data: { questions },
      } = await getQuestionsSearch({ text: searchText, page: 1 });
      setProjectList(jobpostings);
      setQuestionList(questions);
      setDebouncedText(searchText);
      setQuestionLastId(questions[questions.length - 1].id);
      setJobpostingLastId(jobpostings[jobpostings.length - 1].id);
    }, 500),
    [searchText],
  );

  useEffect(() => {
    delayed();
    return delayed.cancel;
  }, [searchText, delayed]);

  return (
    <>
      <S.Layout>
        <S.SearchWrapper>
          <BsSearch />
          <Input onChange={changeSearchText} placeholder="검색어를 입력하세요" value={searchText} />
        </S.SearchWrapper>
        <TabMenu>
          <TabList tabButtonList={["Q&A", "Project"]} />
          <TabPanel index={0}>
            <QuestionPanel lastId={questionLastId} searchList={questionList} searchText={deboncedText} />
          </TabPanel>
          <TabPanel index={1}>
            <ProjectPanel lastId={jobpostingLastId} searchList={projectList} searchText={deboncedText} />
          </TabPanel>
        </TabMenu>
      </S.Layout>
    </>
  );
};

export default Search;
