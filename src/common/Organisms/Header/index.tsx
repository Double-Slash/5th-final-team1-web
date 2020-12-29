import React from "react";
import { useRouteMatch } from "react-router-dom";
import { BsSearch } from "react-icons/bs";
import LinkGroup from "@common/Molecules/LinkGroup";
import Link from "@common/Atoms/Link";
import Button from "@common/Atoms/Button";
import * as S from "./style";

const Header = () => {
  const match = useRouteMatch("/write");
  const linkNamingList = ["QnA", "Tags", "Project", "Level"];
  return (
    <>
      {!match && (
        <S.Header>
          <div className="logo" />
          <nav>
            <LinkGroup linkNamingList={linkNamingList} />
          </nav>
          <div className="right-buttons">
            {/* TO DO...LOG IN 버튼은 서버와 협의 필요 */}
            <Link to="LOG IN">LOG IN</Link>
            <Button onClick={() => {}} isLinked>
              <BsSearch />
            </Button>
          </div>
        </S.Header>
      )}
    </>
  );
};

export default Header;
