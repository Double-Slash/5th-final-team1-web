import React, { useMemo } from "react";
import Link from "@common/Atoms/Link";
import LikeButton from "@common/Atoms/LikeButton";
import ProfileImage from "@common/Atoms/ProfileImage";
import UserName from "@common/Atoms/UserName";
import HashTagGroup from "@common/Molecules/HashTagGroup";
import calcDate from "@utils/modules/calcDate";
import replaceMarkDownText from "@utils/modules/replaceMarkDownText";
import * as S from "./style";

interface QuestionCardProps {
  author_name: string;
  body: string;
  created_at: string;
  hashtags: string[];
  id: number;
  is_liked: boolean;
  like_id: number;
  title: string;
}

const QuestionCard = ({ author_name, body, created_at, hashtags, id, is_liked, like_id, title }: QuestionCardProps) => {
  const markDownText = useMemo(() => replaceMarkDownText(body), [body]);

  return (
    <>
      <S.QuestionCard>
        <div className="container">
          <S.LeftWrapper>
            <div className="hash-tag-list">
              <HashTagGroup namingList={hashtags} />
              <LikeButton is_liked={is_liked} like_id={like_id} question={id} />
            </div>
            <div className="card-header">
              <Link to={`qna/${id}`}>
                <h1>{title.length <= 20 ? title : `${title.substring(0, 20).trim()}...`}</h1>
              </Link>
              <span>{calcDate({ date: created_at })}</span>
            </div>
            <Link to={`qna/${id}`}>
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
        </div>
        <div className="divider" />
      </S.QuestionCard>
    </>
  );
};

export default QuestionCard;
