import { withTokenAxios } from "./index";

interface IPostQuestion {
  title: string;
  body: string;
  bounty: number;
  hashtags: string[];
}

// 작성 글 보내기
export const postQuestion = ({ title, body, bounty, hashtags }: IPostQuestion) => {
  return withTokenAxios.post("/questions/viewset/", {
    title,
    body,
    bounty,
    hashtags,
  });
};
