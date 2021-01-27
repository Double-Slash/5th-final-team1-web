import hasAccessToken from "@apis/utils/hasAccessToken";
import { defaultAxios, withTokenAxios } from "./index";

interface IPatchQuestion {
  body: string;
  id: number;
  title: string;
}

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

// 질문 수정 PATCH
export const patchQuestion = ({ body, id, title }: IPatchQuestion) => {
  return withTokenAxios.patch(`/questions/viewset/${id}/`, { body, title });
};
