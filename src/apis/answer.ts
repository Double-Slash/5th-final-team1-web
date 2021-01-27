import { withTokenAxios } from "./index";

interface IPatchAnswers {
  body: string;
  id: number;
  is_adopted: boolean;
  question: number;
}

// 답변 POST
export const postAnsewrs = ({ body, question }: { body: string; question: number }) => {
  return withTokenAxios.post("/answers/viewset/", { body, question });
};

// 답변 PATCH
export const patchAnsewrs = ({ body, id, is_adopted, question }: IPatchAnswers) => {
  return withTokenAxios.patch(`/answers/viewset/${id}/`, { body, is_adopted, question });
};
