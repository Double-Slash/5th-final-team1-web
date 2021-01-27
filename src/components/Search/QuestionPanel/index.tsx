import React from "react";
import QuestionCard from "@common/Molecules/PostCard/QuestionCard";
import usePaginationScroll from "@hooks/usePaginationScroll";
import { IQuestionSearch } from "@typings/db";
import { getQuestionsSearch } from "@apis/search";

export interface QuestionPanelProps {
  lastId: number;
  searchList: IQuestionSearch[] | undefined;
  searchText: string;
}

const QuestionPanel = ({ lastId, searchList, searchText }: QuestionPanelProps) => {
  const [resultData, loadingRef] = usePaginationScroll<IQuestionSearch, HTMLDivElement>({
    api: getQuestionsSearch,
    dataTable: "questions",
    lastId,
    searchList,
    searchText,
  });

  return (
    <>
      <section>
        {resultData?.map((value: IQuestionSearch) => {
          const { author_name, body, created_at, hashtags, id, is_liked, like_id, title } = value;
          return (
            <QuestionCard
              key={title}
              author_name={author_name}
              body={body}
              created_at={created_at}
              hashtags={hashtags}
              id={id}
              is_liked={is_liked}
              like_id={like_id}
              title={title}
            />
          );
        })}
        <div ref={loadingRef} />
      </section>
    </>
  );
};

export default QuestionPanel;
