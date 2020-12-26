import React from "react";
import * as S from "./style";

export interface LinkProps {
  name: string;
}

const Link = ({ name }: LinkProps) => {
  return (
    <>
      <S.Link to={`/${name.toLocaleLowerCase()}`}>{name}</S.Link>
    </>
  );
};

export default Link;
