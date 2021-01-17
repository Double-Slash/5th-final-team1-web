import React from "react";
import Link from "@common/Atoms/Link";
import * as S from "./style";

export interface LinkGroupProps {
  linkNamingList: string[];
}

const LinkGroup = ({ linkNamingList }: LinkGroupProps) => {
  return (
    <>
      <S.Nav>
        {linkNamingList.map((value) => (
          <Link key={value} to={value.toLowerCase()}>
            {value}
          </Link>
        ))}
      </S.Nav>
    </>
  );
};

export default LinkGroup;
