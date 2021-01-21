import React, { memo, useCallback, useState } from "react";
import LogInCheck from "@common/Organisms/LogInCheck";
import { deleteLike, postLike } from "@apis/like";
import * as S from "./style";

export interface LikeButtonProps {
  className?: string;
  is_liked: boolean;
  jobposting?: number;
  like_id: number;
  question?: number;
}

const LikeButton = ({ className = "", is_liked, jobposting, like_id, question }: LikeButtonProps) => {
  const [clicked, setClicked] = useState(is_liked);
  const [renewId, setRenewId] = useState(like_id);

  const clickLikeButton = useCallback(async () => {
    const id = jobposting ? { jobposting } : { question };
    if (clicked) {
      await deleteLike({ like_id: renewId });
    } else {
      const { data } = await postLike({ updown: true, ...id });
      setRenewId(data.id);
    }
    setClicked((prev) => !prev);
  }, [clicked, jobposting, question, renewId]);

  return (
    <>
      <LogInCheck onClick={clickLikeButton}>
        <S.LikeButton className={`${className} like`} is_liked={String(clicked)} />
      </LogInCheck>
    </>
  );
};

export default memo(LikeButton);
