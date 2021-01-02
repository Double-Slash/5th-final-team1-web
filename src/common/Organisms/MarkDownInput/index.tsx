import React, { useEffect, useRef } from "react";
import { useDispatch } from "react-redux";
import codemirror, { EditorFromTextArea } from "codemirror";
import { changeMarkDownText } from "@store/MarkDown/action";
import * as S from "./style";

import "codemirror/addon/display/placeholder";
import "codemirror/lib/codemirror.css";
import "@utils/styles/atom-one-light.css";

require("codemirror/mode/markdown/markdown");
require("codemirror/mode/javascript/javascript");
require("codemirror/mode/jsx/jsx");

const MarkDownInput = () => {
  const dispatch = useDispatch();
  const codeMirrorRef = useRef<EditorFromTextArea | null>(null);

  useEffect(() => {
    codeMirrorRef.current = codemirror.fromTextArea(document.getElementById("code") as HTMLTextAreaElement, {
      mode: "markdown",
      theme: "one-light",
      placeholder: "내용을 입력하세요",
      viewportMargin: Infinity,
      lineWrapping: true,
    });
    window.codeMirror = codeMirrorRef.current;
  }, []);

  useEffect(() => {
    if (!codeMirrorRef.current) return;
    codeMirrorRef.current.on("change", (instance) => {
      dispatch(changeMarkDownText(instance.getValue()));
    });
  }, [dispatch]);

  return (
    <>
      <S.Layout>
        <textarea id="code" />
      </S.Layout>
    </>
  );
};

export default MarkDownInput;
