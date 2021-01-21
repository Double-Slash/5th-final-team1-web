import { withTokenAxios } from "./index";

interface IPostComment {
  body: string;
  answer: number;
}

// 답변 POST
export const postComment = ({ body, answer }: IPostComment) => {
  return withTokenAxios.post("/comments/viewset/", { body, answer });
};
