import hasAccessToken from "@apis/utils/hasAccessToken";
import { defaultAxios } from "./index";

// 인기 글 GET
export const getBountedQuestions = () => {
  return defaultAxios.get("/questions/viewset/bounted_questions/");
};

// 전체 글 GET
export const getQuestions = (offset?: number, limit?: number) => {
  return hasAccessToken({ url: `/questions/viewset/?offset=${offset}&limit=${limit}` });
};

// 질문 상세글 GET
export const getQuestion = ({ id }: { id: number }) => {
  return hasAccessToken({ url: `/questions/viewset/${id}/` });
};
