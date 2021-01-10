import React, { useCallback, useState } from "react";
import { useDispatch } from "react-redux";
import { changeMarkDownTitle } from "@store/MarkDown/action";
import { addToTag, removeToTag } from "@store/Write/action";
import Button from "@common/Atoms/Button";
import Textarea from "@common/Atoms/Textarea";
import * as S from "./style";

const TitleInput = () => {
  const dispatch = useDispatch();
  const [tagList, setTagList] = useState<string[]>([]);
  const [tagValue, setTagValue] = useState("");

  // 제목 변경
  const changeTitle = useCallback(
    (text: string) => {
      dispatch(changeMarkDownTitle(text));
    },
    [dispatch],
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
        dispatch(addToTag(trim));
      }
    },
    [dispatch, tagValue],
  );

  // 태그 클릭 시 해당 태그 삭제
  const clickTag = useCallback(
    (clicked: string) => {
      const tagIndex = tagList.findIndex((value) => value === clicked);
      setTagList((prev) => [...prev.slice(0, tagIndex), ...prev.slice(tagIndex + 1, tagList.length)]);
      dispatch(removeToTag(tagIndex));
    },
    [dispatch, tagList],
  );

  return (
    <>
      <S.Layout>
        <Textarea onChange={changeTitle} placeholder="제목을 입력하세요" />
        <input
          type="text"
          value={tagValue}
          onChange={changeTag}
          onKeyDown={pressEnterKey}
          placeholder="태그를 입력하세요"
        />
        <div className="tag-list">
          {tagList.map((tag) => (
            <Button key={tag} isLinked={false} onClick={() => clickTag(tag)}>
              {tag}
            </Button>
          ))}
        </div>
      </S.Layout>
    </>
  );
};

export default TitleInput;
