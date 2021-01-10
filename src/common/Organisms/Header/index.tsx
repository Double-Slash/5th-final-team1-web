/* eslint-disable jsx-a11y/anchor-has-content */
import React, { useLayoutEffect, useState } from "react";
import { useRouteMatch } from "react-router-dom";
import { BsSearch, BsInboxFill } from "react-icons/bs";
import LinkGroup from "@common/Molecules/LinkGroup";
import Button from "@common/Atoms/Button";
import { getAccessToken } from "@utils/modules/token";
import * as S from "./style";

const Header = () => {
  const match = useRouteMatch("/write");
  const [isToken, setIsToken] = useState(false);
  const linkNamingList = ["QnA", "Tags", "Project", "Level"];

  useLayoutEffect(() => {
    const result = getAccessToken({ key: "access" });
    setIsToken(!!result);
  }, []);

  return (
    <>
      {!match && (
        <S.Header>
          <div className="logo" />
          <nav>
            <LinkGroup linkNamingList={linkNamingList} />
          </nav>
          <div className="right-buttons">
            {isToken ? (
              <>
                <span>차민철님</span>
                <BsInboxFill />
              </>
            ) : (
              <a
                href="https://github.com/login/oauth/authorize?client_id=6c8de3c4a5decadc66a3&redirect_url=http%3A%2F%2F54.180.86.254%2Faccounts%2Fgithub%2Flogin%2Fcallback%2F&state=oYkKDYBt&scope=user%3Aemail"
                rel="noopener noreferrer"
                aria-hidden="true"
              >
                Log In
              </a>
            )}
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
