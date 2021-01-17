import React, { memo, useMemo, useRef } from "react";
import Link from "@common/Atoms/Link";
import ProfileImage from "@common/Atoms/ProfileImage";
import UserName from "@common/Atoms/UserName";
import HashTagGroup from "@common/Molecules/HashTagGroup";
import useSkelecton from "@hooks/useSkeleton";
import calcDate from "@utils/modules/calcDate";
import replaceMarkDownText from "@utils/modules/replaceMarkDownText";
import { IQuestionListItem } from "@typings/db";
import * as S from "./style";

const QuestionCard = ({ id, hashtags, author_name, title, body, created_at }: IQuestionListItem) => {
  const markDownText = useMemo(() => replaceMarkDownText(body), [body]);
  const listItemRef = useRef<HTMLLIElement>(null);
  const [isLoad] = useSkelecton({ skeletonRef: listItemRef, threshold: 0.1 });

  return (
    <>
      <S.QuestionCard ref={listItemRef}>
        <div className="container">
          {isLoad ? (
            <>
              <S.LeftWrapper>
                <HashTagGroup namingList={hashtags} />
                <div className="card-header">
                  <Link to={`post/${id}`}>
                    <h1>{title.length <= 20 ? title : `${title.substring(0, 20).trim()}...`}</h1>
                  </Link>
                  <span>{calcDate({ date: created_at })}</span>
                  {/* <span>{answers.length}개의 답글</span> */}
                </div>
                <Link to={`post/${id}`}>
                  <p>{markDownText.length <= 50 ? markDownText : `${markDownText.substring(0, 50).trim()}...`}</p>
                </Link>
              </S.LeftWrapper>
              <S.RightWrapper>
                <ProfileImage imageSrc={author_name} radius={56} />
                <div>
                  <UserName username={author_name} className="user-name" />
                  <span>플래티넘</span>
                </div>
              </S.RightWrapper>
            </>
          ) : (
            <>
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
            </>
          )}
        </div>
        <div className="divider" />
      </S.QuestionCard>
    </>
  );
};

export default memo(QuestionCard);
