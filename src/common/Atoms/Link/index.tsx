import React from "react";
import * as S from "./style";

export interface LinkProps {
  to: string;
  children?: React.ReactNode;
}

const Link = ({ children, to }: LinkProps) => {
  return (
    <>
      <S.Link to={`/${to}`}>{children}</S.Link>
    </>
  );
};

export default Link;
