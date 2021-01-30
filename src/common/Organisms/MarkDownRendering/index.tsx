import React from "react";
import remark from "remark";
import breaks from "remark-breaks";
import gfm from "remark-gfm";
import htmlPlugin from "remark-html";
import reactParser from "html-react-parser";
import prismPlugin from "@utils/modules/prism-plugin";
import * as S from "./style";

interface MarkDownRenderingProps {
  className?: string;
  editorText: string;
}

const MarkDownRendering = ({ className, editorText }: MarkDownRenderingProps) => {
  const html_text = remark().use(prismPlugin).use(breaks).use(gfm).use(htmlPlugin).processSync(editorText);

  return (
    <>
      <S.MarkdownWrapper className={`${className || ""} atom-one-dark`}>
        {reactParser(html_text.contents as string)}
      </S.MarkdownWrapper>
    </>
  );
};

export default MarkDownRendering;
