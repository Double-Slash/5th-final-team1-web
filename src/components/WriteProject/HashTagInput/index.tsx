import React, { useCallback, useState } from "react";
import { useDispatch } from "react-redux";
import Input from "@common/Atoms/Input";
import HashTag from "@common/Atoms/HashTag";
import useInput from "@hooks/useInput";
import { addHashTag, removeHashTag } from "@store/WriteProject/action";
import * as S from "./style";

const HashTagInput = () => {
  const dispatch = useDispatch();
  const [hashTagText, changeHashTagText, setHashTagText] = useInput("");
  const [hashTagList, setHashTagList] = useState<string[]>([]);

  // 엔터 입력
  const pressEnterKey = useCallback(
    (event: React.KeyboardEvent<HTMLInputElement>) => {
      if (event.key === "Enter") {
        const trim = hashTagText.replace(/(^\s*)|(\s*$)/gi, "");
        if (!trim) return;
        setHashTagList((prev) => [...prev, trim]);
        setHashTagText("");
        dispatch(addHashTag(trim));
      }
    },
    [dispatch, hashTagText, setHashTagText],
  );

  // 해시태그 클릭
  const clickTag = useCallback(
    (clicked: string) => {
      const tagIndex = hashTagList.findIndex((value) => value === clicked);
      setHashTagList((prev) => [...prev.slice(0, tagIndex), ...prev.slice(tagIndex + 1, hashTagList.length)]);
      dispatch(removeHashTag(tagIndex));
    },
    [dispatch, hashTagList],
  );

  return (
    <>
      <S.Layout>
        {hashTagList.map((hashTag) => (
          <HashTag key={hashTag} isBasicHashTag onClick={() => clickTag(hashTag)} text={hashTag} />
        ))}
        <Input
          value={hashTagText}
          onChange={changeHashTagText}
          onKeyDown={pressEnterKey}
          placeholder="태그를 입력하세요"
        />
      </S.Layout>
    </>
  );
};

export default HashTagInput;
