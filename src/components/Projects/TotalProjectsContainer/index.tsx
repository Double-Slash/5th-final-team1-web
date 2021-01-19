import React, { useLayoutEffect, useRef, useState } from "react";
import TotalProjectList from "@components/Projects/TotalProjectList";
import { getProjectList } from "@apis/project";
import useInfiniteScroll from "@hooks/useInfiniteScroll";
import { IProjectDetail, IProjectDetailList } from "@typings/db";
import * as S from "./style";

const TotalProjectsContainer = () => {
  const loadingRef = useRef<HTMLDivElement>(null);
  const [reulstData, setResultData] = useState<IProjectDetail[][] | undefined>(undefined);
  const [data] = useInfiniteScroll<IProjectDetailList>({
    api: getProjectList,
    listName: "jobpostings",
    limit: 12,
    loadingRef,
  });

  useLayoutEffect(() => {
    if (!data) return;
    setResultData((prev) => {
      if (!prev) {
        return [[...data.jobpostings]];
      }
      return [...prev, [...data.jobpostings]];
    });
  }, [data]);

  return (
    <>
      <S.Layout>
        <h1 className="list-title">전체</h1>
        <article>
          {reulstData?.map((listData) => (
            <TotalProjectList key={Math.random() * 10} listData={listData} />
          ))}
        </article>
        <div ref={loadingRef} />
      </S.Layout>
    </>
  );
};

export default TotalProjectsContainer;
