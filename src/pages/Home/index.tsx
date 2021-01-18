import React from "react";
import Link from "@common/Atoms/Link";
import homeBackground from "@static/img/homeBackground.png";
import LevelIcon from "@static/icon/LevelIcon";
import ProjectIcon from "@static/icon/ProjectIcon";
import QnaIcon from "@static/icon/QnaIcon";
import TagIcon from "@static/icon/TagIcon";
import * as S from "./style";

const Home = () => {
  const menuButtonList = [
    {
      title: "QnA",
      to: "qna",
      icon: QnaIcon,
    },
    {
      title: "Tags",
      to: "tags",
      icon: TagIcon,
    },
    {
      title: "Project",
      to: "project",
      icon: ProjectIcon,
    },
    {
      title: "Level",
      to: "level",
      icon: LevelIcon,
    },
  ];

  return (
    <>
      <S.Layout>
        <S.Container>
          <img src={homeBackground} alt="홈 페이지 백그라운드" />
          <S.MainTitle>
            <h1>
              Answer a Query,
              <br />
              To help Developer
            </h1>
            <h2>개발자 질문에 답 해주는 플랫폼, 쿼리</h2>
          </S.MainTitle>
          <S.MenuButtonList>
            {menuButtonList.map((button) => (
              <S.MenuButton key={button.title}>
                <Link to={button.to}>
                  <div className="wrapper">
                    <h3>{button.title}</h3>
                    <div className="content">
                      {button.icon()}
                      <p>개발과 관련된 궁금증을 해결하고, 자신에 방법을 공유하세요</p>
                    </div>
                  </div>
                  <div className="blue-content" />
                </Link>
              </S.MenuButton>
            ))}
          </S.MenuButtonList>
        </S.Container>
      </S.Layout>
    </>
  );
};

export default Home;
