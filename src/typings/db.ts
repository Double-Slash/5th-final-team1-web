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
  num_likes: number;
  title: string;
}

// 질문글 list item data
export interface IQuestionListItem {
  id: number;
  hashtags: string[];
  author_name: string;
  title: string;
  body: string;
  bounty: number;
  created_at: string;
  edited_at: string;
  author: number;
}

// 질문글 list data
export interface IQuestionList {
  limit: number;
  offset: number;
  overall_count: number;
  questions: IQuestionListItem[];
}

export interface IAnswer {
  author: number;
  author_name: string;
  body: string;
  comments: IComment[];
  created_at: string;
  edited_at: string;
  id: number;
  num_likes: number;
}

export interface IComment {
  answer: number;
  author: number;
  author_name: string;
  body: string;
  created_at: string;
  edited_at: string;
  id: number;
  num_likes: number;
  question: number;
}
