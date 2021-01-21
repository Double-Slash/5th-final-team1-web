/* eslint-disable no-nested-ternary */
import React, { useCallback, useState } from "react";
import { AiFillLike, AiFillDislike } from "react-icons/ai";
import LogInCheck from "@common/Organisms/LogInCheck";
import { deleteLike, patchUpDown, postLike } from "@apis/like";
import * as S from "./style";

export interface UpDownProps {
  answerId?: number;
  className?: string;
  commentId?: number;
  is_liked: "None" | boolean;
  like_id: "None" | number;
  num_likes: [number, number];
}

interface IClickUpDownButton {
  upDown: string;
  status: "None" | boolean;
}

const UpDown = ({ answerId, className = "", commentId, is_liked, like_id, num_likes }: UpDownProps) => {
  const [renewIsLiked, setRenewIsLiked] = useState(is_liked);
  const [renewLikeId, setRenewLikeId] = useState(like_id);
  const [renewNumLiked, setRenewNumLiked] = useState(num_likes);

  const clickUpDownButton = useCallback(
    async ({ upDown, status }: IClickUpDownButton) => {
      const id = answerId ? { answer: answerId } : { comment: commentId };
      const updown = upDown === "up";
      if (status === "None") {
        const { data } = await postLike({ updown, ...id });
        setRenewLikeId(data.id);
        setRenewIsLiked(upDown === "up");
        setRenewNumLiked(([like, dislike]) => (upDown === "up" ? [like + 1, dislike] : [like, dislike + 1]));
      } else if (status === true) {
        if (upDown === "up") {
          deleteLike({ like_id: renewLikeId as number });
        } else {
          patchUpDown({ like_id: renewLikeId as number, updown, ...id });
        }
        setRenewIsLiked(upDown === "up" ? "None" : false);
        setRenewNumLiked(([like, dislike]) => (upDown === "up" ? [like - 1, dislike] : [like - 1, dislike + 1]));
      } else {
        if (upDown === "down") {
          deleteLike({ like_id: renewLikeId as number });
        } else {
          patchUpDown({ like_id: renewLikeId as number, updown, ...id });
        }
        setRenewIsLiked(upDown === "down" ? "None" : true);
        setRenewNumLiked(([like, dislike]) => (upDown === "down" ? [like, dislike - 1] : [like + 1, dislike - 1]));
      }
    },
    [answerId, commentId, renewLikeId],
  );

  return (
    <>
      <S.Layout is_liked={renewIsLiked} className={`${className} `}>
        <LogInCheck onClick={() => clickUpDownButton({ upDown: "up", status: renewIsLiked })}>
          <AiFillLike className="like" />
          <span>{renewNumLiked[0]}</span>
        </LogInCheck>
        <LogInCheck onClick={() => clickUpDownButton({ upDown: "down", status: renewIsLiked })}>
          <AiFillDislike className="dislike" />
          <span>{renewNumLiked[1]}</span>
        </LogInCheck>
      </S.Layout>
    </>
  );
};

export default UpDown;
