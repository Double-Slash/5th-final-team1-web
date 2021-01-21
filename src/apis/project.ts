import hasAccessToken from "@apis/utils/hasAccessToken";
import { withTokenAxios } from "./index";

interface IPostJobPostings {
  body: string;
  crew_count: string;
  crew_condition: string;
  crew_field: string;
  crew_recruit: string;
  hashtags: string[];
  title: string;
}

// 프로젝트 모집 글 POST
export const postJobPostings = ({
  body,
  crew_count,
  crew_condition,
  crew_field,
  crew_recruit,
  hashtags,
  title,
}: IPostJobPostings) => {
  return withTokenAxios.post("/jobpostings/viewset/", {
    body,
    crew_count,
    crew_condition,
    crew_field,
    crew_recruit,
    hashtags,
    title,
  });
};

// 프로젝트 상세 페이지 불러오기 GET
export const getProjectDetail = ({ id }: { id: string }) => {
  return hasAccessToken({ url: `/jobpostings/viewset/${id}/` });
};

// 전체 프로젝트 리스트 불러오기 GET
export const getProjectList = (offset?: number, limit?: number) => {
  return hasAccessToken({ url: `/jobpostings/viewset/?offset=${offset}&limit=${limit}` });
};
