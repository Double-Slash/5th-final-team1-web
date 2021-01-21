// 질문글 상세 data
export interface IQuestion {
  answers: IAnswer[];
  author: number;
  author_name: string;
  body: string;
  bounty: number;
  created_at: string;
  edited_at: string;
  hashtags: string[];
  id: number;
  is_liked: boolean;
  like_id: number;
  num_likes: number;
  title: string;
}

// 질문글 list item data
export interface IQuestionListItem {
  author: number;
  author_name: string;
  body: string;
  bounty: number;
  created_at: string;
  edited_at: string;
  hashtags: string[];
  id: number;
  is_liked: boolean;
  like_id: number;
  title: string;
}

// 질문글 list data
export interface IQuestionList {
  limit: number;
  offset: number;
  overall_count: number;
  questions: IQuestionListItem[];
}

// 답변 data
export interface IAnswer {
  author: number;
  author_name: string;
  body: string;
  comments: IComment[];
  created_at: string;
  edited_at: string;
  id: number;
  is_adopted: boolean;
  is_liked: "None" | boolean;
  like_id: "None" | number;
  num_likes: [number, number];
}

// 댓글 data
export interface IComment {
  answer: number;
  author: number;
  author_name: string;
  body: string;
  created_at: string;
  edited_at: string;
  id: number;
  is_liked: "None" | boolean;
  like_id: "None" | number;
  num_likes: [number, number];
}

// 프로젝트 상세 data
export interface IProjectDetail {
  author_name: string;
  author: number;
  body: string;
  crew_field: string;
  crew_count: string;
  crew_recruit: string;
  crew_condition: string;
  created_at: string;
  edited_at: string;
  hashtags: string[];
  id: number;
  is_liked: boolean;
  like_id: number;
  title: string;
}

// 질문글 list data
export interface IProjectDetailList {
  limit: number;
  offset: number;
  overall_count: number;
  jobpostings: IProjectDetail[];
}
