import { withTokenAxios } from "./index";

// 답변 POST
export const postAnsewrs = ({ body, question }: { body: string; question: number }) => {
  return withTokenAxios.post("/answers/", { body, question });
};
