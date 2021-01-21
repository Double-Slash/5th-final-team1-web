import hasAccessToken from "@apis/utils/hasAccessToken";

// 질문글 검색 GET
export const getQuestionsSearch = ({ text }: { text: string }) => {
  return hasAccessToken({ url: `/search/?q=${text}` });
};

// 프로젝트 검색 GET
export const getJobPostingsSearch = ({ text }: { text: string }) => {
  return hasAccessToken({ url: `/search/jobpostings/?q=${text}` });
};
