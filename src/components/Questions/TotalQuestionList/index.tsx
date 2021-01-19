import React from "react";
import QuestionCard from "@common/Molecules/PostCard/QuestionCard";
import useSkeleton from "@hooks/useSkeleton";
import { IQuestionListItem } from "@typings/db";
import * as S from "./style";

export interface TotalQuestionListProps {
  listData: IQuestionListItem[];
}

const TotalQuestionList = ({ listData }: TotalQuestionListProps) => {
  const [isLoad, skeletonRef] = useSkeleton({ threshold: 0 });

  return (
    <>
      <S.Layout ref={skeletonRef}>
        {isLoad ? (
          listData.map((item) => {
            const { author_name, body, created_at, hashtags, id, title } = item;
            return (
              <QuestionCard
                key={id}
                author_name={author_name}
                body={body}
                created_at={created_at}
                hashtags={hashtags}
                id={id}
                title={title}
              />
            );
          })
        ) : (
          <>
            {Array(10)
              .fill(0)
              .map(() => (
                <div key={Math.random() * 10} className="skeleton-wrapper">
                  <S.LeftSkeleton>
                    <div className="hashtags">
                      <div className="tag" />
                      <div className="tag" />
                      <div className="tag" />
                    </div>
                    <div className="title" />
                    <div className="content" />
                  </S.LeftSkeleton>
                  <S.RightSkeleton>
                    <div className="info" />
                  </S.RightSkeleton>
                </div>
              ))}
          </>
        )}
      </S.Layout>
    </>
  );
};

export default TotalQuestionList;
