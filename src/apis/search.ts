import hasAccessToken from "@apis/utils/hasAccessToken";

interface ISearch {
  text: string;
  page: number;
}

// 질문글 검색 GET
export const getQuestionsSearch = ({ text, page = 1 }: ISearch) => {
  const encodeText = encodeURIComponent(text);
  return hasAccessToken({ url: `/search/?q=${encodeText}&page=${page}` });
};

// 프로젝트 검색 GET
export const getJobPostingsSearch = ({ text, page = 1 }: ISearch) => {
  const encodeText = encodeURIComponent(text);
  return hasAccessToken({ url: `/search/jobpostings?q=${encodeText}&page=${page}` });
};
