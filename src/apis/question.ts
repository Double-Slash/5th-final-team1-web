import { defaultAxios } from "./index";

// 인기 글 GET
export const getBountedQuestions = () => {
  return defaultAxios.get("/questions/viewset/bounted_questions/");
};

// 전체 글 GET
export const getQuestions = () => {
  return defaultAxios.get("/questions/viewset/");
};

// 질문 상세글 GET
export const getQuestion = ({ id }: { id: number }) => {
  return defaultAxios.get(`/questions/viewset/${id}/`);
};
