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
            <Link name="LOG IN" />
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
