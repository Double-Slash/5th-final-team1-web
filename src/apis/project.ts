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
