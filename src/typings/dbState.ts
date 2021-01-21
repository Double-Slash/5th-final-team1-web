import { IAnswer, IComment, IProjectDetail, IQuestion } from "./db";

export const commentInitialState: IComment = {
  id: 1,
  answer: 1,
  author: 1,
  author_name: "",
  body: "",
  created_at: "",
  edited_at: "",
  is_liked: "None",
  like_id: "None",
  num_likes: [0, 0],
};

export const answerInitialState: IAnswer = {
  author: 0,
  author_name: "",
  body: "",
  comments: [commentInitialState],
  created_at: "",
  edited_at: "",
  id: 1,
  is_adopted: false,
  is_liked: "None",
  like_id: "None",
  num_likes: [0, 0],
};

export const questionInitialState: IQuestion = {
  id: 1,
  hashtags: [],
  answers: [answerInitialState],
  num_likes: 1,
  author: 1,
  author_name: "",
  title: "",
  body: "",
  bounty: 1,
  created_at: "",
  edited_at: "",
  is_liked: false,
  like_id: 1,
};

// 프로젝트 상세 initial state
export const projectInitialState: IProjectDetail = {
  author_name: "",
  author: 1,
  body: "",
  crew_field: "",
  crew_count: "",
  crew_recruit: "",
  crew_condition: "",
  created_at: "",
  edited_at: "",
  hashtags: [],
  is_liked: false,
  id: 1,
  like_id: 1,
  title: "",
};
