import React, { useCallback, useContext, useState } from "react";
import HashTag from "@common/Atoms/HashTag";
import Textarea from "@common/Atoms/Textarea";
import { MarkDownEditorContext } from "@store/MarkDownEditor";
import { changeTitleAction } from "@store/MarkDownEditor/action";
import { WriteQuestionContext } from "@store/WriteQuestion";
import { addToTag, removeToTag } from "@store/WriteQuestion/action";
import * as S from "./style";

const TitleInput = () => {
  const { dispatch: titleDispatch } = useContext(MarkDownEditorContext);
  const { dispatch: hashTagDispatch } = useContext(WriteQuestionContext);
  const [tagList, setTagList] = useState<string[]>([]);
  const [tagValue, setTagValue] = useState("");

  // 제목 변경
  const changeTitle = useCallback(
    (text: string) => {
      titleDispatch(changeTitleAction(text));
    },
    [titleDispatch],
  );

  // 태그 text 변경
  const changeTag = useCallback((event: React.ChangeEvent<HTMLInputElement>) => {
    setTagValue(event.target.value);
  }, []);

  // 엔터 입력 시 태그 추가
  const pressEnterKey = useCallback(
    (event: React.KeyboardEvent<HTMLInputElement>) => {
      if (event.key === "Enter") {
        const trim = tagValue.replace(/(^\s*)|(\s*$)/gi, "");
        if (!trim) return;
        setTagList((prev) => [...prev, trim]);
        setTagValue("");
        hashTagDispatch(addToTag(trim));
      }
    },
    [hashTagDispatch, tagValue],
  );

  // 태그 클릭 시 해당 태그 삭제
  const clickTag = useCallback(
    (clicked: string) => {
      const tagIndex = tagList.findIndex((value) => value === clicked);
      setTagList((prev) => [...prev.slice(0, tagIndex), ...prev.slice(tagIndex + 1, tagList.length)]);
      hashTagDispatch(removeToTag(tagIndex));
    },
    [hashTagDispatch, tagList],
  );

  return (
    <>
      <S.Layout>
        <Textarea onChange={changeTitle} placeholder="제목을 입력하세요" />
        <S.HashTagList className="tag-list">
          {tagList.map((tag) => (
            <HashTag key={tag} isBasicHashTag onClick={() => clickTag(tag)} text={tag} />
          ))}
          <input
            type="text"
            value={tagValue}
            onChange={changeTag}
            onKeyDown={pressEnterKey}
            placeholder="태그를 입력하세요"
          />
        </S.HashTagList>
      </S.Layout>
    </>
  );
};

export default TitleInput;
