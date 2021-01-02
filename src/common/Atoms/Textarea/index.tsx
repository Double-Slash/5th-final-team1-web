import React, { useCallback, useRef, useState } from "react";
import * as S from "./style";

export interface TextareaProps {
  onChange: (text: string) => void;
  placeholder?: string;
}

const Textarea = ({ onChange, placeholder }: TextareaProps) => {
  const [text, setText] = useState("");
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  const changeTextarea = useCallback(
    (e: React.ChangeEvent<HTMLTextAreaElement>) => {
      if (!textareaRef.current) return;
      textareaRef.current.style.height = "1px";
      textareaRef.current.style.height = `${textareaRef.current.scrollHeight}px`;
      setText(e.target.value);
      onChange(e.target.value);
    },
    [onChange],
  );

  return (
    <>
      <S.Textarea ref={textareaRef} value={text} onChange={changeTextarea} placeholder={placeholder} />
    </>
  );
};

export default Textarea;
