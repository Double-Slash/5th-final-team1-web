import React from "react";
import Link from "@common/Atoms/Link";
import ProfileImage from "@common/Atoms/ProfileImage";
import HashTagGroup from "@common/Molecules/HashTagGroup";
import * as S from "./style";

interface DummyUserInfo {
  thumbnail: string;
}

interface DummyData {
  tagList: string[];
  title: string;
  payload: string;
  date: string;
  commentCount: number;
  author: string;
  rank: string;
  userInfo: DummyUserInfo;
}

export interface QnaCardProps {
  cardData: DummyData;
}

export const dummyData: DummyData = {
  tagList: ["python", "java", "자바", "c언어"],
  title: "더미 데이터의 제목입니다",
  payload: "더미 데이터의 본문입니다",
  date: "2020.12.31",
  commentCount: 4,
  author: "차민철",
  rank: "플래티넘",
  userInfo: {
    thumbnail: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTXGvgwboHDVP36TV1e8y57sy7PfnWwvtOIMA&usqp=CAU",
  },
};

const QnaCard = ({ cardData = dummyData }: QnaCardProps) => {
  const {
    tagList,
    title,
    payload,
    date,
    commentCount,
    author,
    rank,
    userInfo: { thumbnail },
  } = cardData;

  return (
    <>
      <S.QnaCard>
        <div className="left-wrapper">
          <HashTagGroup namingList={tagList} />
          <div className="card-header">
            <Link to={title}>
              <h1>{title.length <= 10 ? title : `${title.substring(0, 10).trim()}...`}</h1>
            </Link>
            <span>{date}</span>
            <span>{commentCount}개의 답글</span>
          </div>
          <Link to={title}>
            <p>{payload.length <= 50 ? payload : `${payload.substring(0, 50).trim()}...`}</p>
          </Link>
        </div>
        <div className="right-wrapper">
          <ProfileImage imageSrc={thumbnail} radius={64} />
          <div>
            <strong>{author}님</strong>
            <span>{rank}</span>
          </div>
        </div>
      </S.QnaCard>
    </>
  );
};

export default QnaCard;
