/* eslint-disable jsx-a11y/anchor-has-content */
import React, { useLayoutEffect, useState } from "react";
import { useRouteMatch } from "react-router-dom";
import { BsSearch, BsInboxFill } from "react-icons/bs";
import Link from "@common/Atoms/Link";
import LinkGroup from "@common/Molecules/LinkGroup";
import { getAccessToken } from "@utils/modules/token";
import Logo from "@static/img/logo.png";
import * as S from "./style";

const Header = () => {
  const match = useRouteMatch("/write");
  const [isToken, setIsToken] = useState("");
  const linkNamingList = ["QnA", "Tags", "Project", "Level"];
  const result = getAccessToken({ key: "access" });

  useLayoutEffect(() => {
    setIsToken(result || "");
  }, [result]);

  return (
    <>
      {!match && (
        <S.Header>
          <S.Logo>
            <Link to="">
              <img src={Logo} alt="logo" />
            </Link>
          </S.Logo>
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
            <Link to="search">
              <BsSearch className="search" />
            </Link>
          </div>
        </S.Header>
      )}
    </>
  );
};

export default Header;
