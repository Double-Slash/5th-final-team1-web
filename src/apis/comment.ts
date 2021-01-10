import { withTokenAxios } from "./index";

interface IPostComment {
  body: string;
  question: number;
  answer: number;
}

// 답변 POST
export const postComment = ({ body, question, answer }: IPostComment) => {
  return withTokenAxios.post("/comments/viewset/", { body, question, answer });
};
