export interface IQuestion {
  id: number;
  hashtags: string[];
  answers: IAnswer[];
  num_likes: string;
  author: string;
  title: string;
  body: string;
  bounty: number;
  created_at: string;
  edited_at: string;
}

export interface IAnswer {
  id: number;
  body: string;
  created_at: string;
  edited_at: string;
  author: string;
  comments: IComment[];
  num_likes: number;
}

export interface IComment {
  id: number;
  author: string;
  num_likes: number;
  body: string;
  created_at: string;
  edited_at: string;
  question: number;
  answer: number;
}
