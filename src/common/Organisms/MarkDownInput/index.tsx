import React, { useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import codemirror, { EditorFromTextArea } from "codemirror";
import { rootState } from "@store/index";
import { changeMarkDownText } from "@store/MarkDown/action";
import * as S from "./style";

import "codemirror/addon/display/placeholder";
import "codemirror/lib/codemirror.css";
import "@utils/styles/atom-one-light.css";

require("codemirror/mode/markdown/markdown");
require("codemirror/mode/javascript/javascript");
require("codemirror/mode/python/python");
require("codemirror/mode/django/django");
require("codemirror/mode/jsx/jsx");

interface MarkDownInputProps {
  className?: string;
  initialText?: string;
}

const MarkDownInput = ({ className, initialText }: MarkDownInputProps) => {
  const dispatch = useDispatch();
  const markDownText = useSelector<rootState>((state) => state.markdown.markDownText);
  const codeMirrorRef = useRef<EditorFromTextArea | null>(null);

  // codemirro initialize
  useEffect(() => {
    codeMirrorRef.current = codemirror.fromTextArea(document.getElementById("code") as HTMLTextAreaElement, {
      mode: "markdown",
      theme: "one-light",
      placeholder: "내용을 입력하세요",
      viewportMargin: Infinity,
      lineWrapping: true,
    });
    codeMirrorRef.current.setValue("test texttttt");
    window.codeMirror = codeMirrorRef.current;
  }, []);

  // dispatch change event
  useEffect(() => {
    if (!codeMirrorRef.current) return;
    codeMirrorRef.current.on("change", (instance) => {
      dispatch(changeMarkDownText(instance.getValue()));
    });
  }, [dispatch]);

  // codemirror clear
  useEffect(() => {
    if (markDownText || !codeMirrorRef.current) return;
    codeMirrorRef.current.setValue(initialText || "");
  }, [initialText, markDownText]);

  return (
    <>
      <S.Layout className={className}>
        <textarea id="code" />
      </S.Layout>
    </>
  );
};

export default MarkDownInput;
