import React from "react";
import HashTag from "@common/Atoms/HashTag";
import * as S from "./style";

/**
 * @param namingList 각 HashTag의 name이 될 리스트
 */
export interface HashTagGroupProps {
  namingList: string[];
}

const HashTagGroup = ({ namingList }: HashTagGroupProps) => {
  return (
    <>
      <S.Layout>
        {namingList.map((value) => (
          <HashTag key={value} text={value} />
        ))}
      </S.Layout>
    </>
  );
};

export default HashTagGroup;
