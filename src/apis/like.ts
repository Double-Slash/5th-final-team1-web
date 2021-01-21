/* eslint-disable consistent-return */
import { withTokenAxios } from "./index";

interface PostId {
  answer?: number;
  comment?: number;
  jobposting?: number;
  question?: number;
}

interface IPostLike extends PostId {
  updown: boolean | "None";
}

interface IPatchUpDown {
  answer?: number;
  comment?: number;
  like_id: "None" | number;
  updown: "None" | boolean;
}

const instance = ({ answer, comment, jobposting, question }: PostId) => {
  if (answer) {
    return { answer };
  }
  if (comment) {
    return { comment };
  }
  if (jobposting) {
    return { jobposting };
  }
  if (question) {
    return { question };
  }
};

// 좋아요 누르기 POST
export const postLike = ({ updown, answer, comment, jobposting, question }: IPostLike) => {
  return withTokenAxios.post("/likes/viewset/", {
    updown,
    ...instance({ answer, comment, jobposting, question }),
  });
};

// 질문글, 프로젝트글 좋아요 취소 DELETE
export const deleteLike = ({ like_id }: { like_id: number }) => {
  return withTokenAxios.delete(`/likes/viewset/${like_id}/`);
};

// 답변, 댓글 좋아->싫어 / 싫어->좋아로 변경 PATCH
export const patchUpDown = ({ answer, comment, like_id, updown }: IPatchUpDown) => {
  return withTokenAxios.patch(`/likes/viewset/${like_id}/`, {
    updown,
    ...instance({ answer, comment }),
  });
};
