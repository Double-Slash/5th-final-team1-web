import { IQuestion, IAnswer, IComment } from "./db";

export const commentInitialState: IComment = {
  id: 1,
  author: 1,
  author_name: "",
  num_likes: 1,
  body: "",
  created_at: "",
  edited_at: "",
  question: 1,
  answer: 1,
};

export const answerInitialState: IAnswer = {
  author: 0,
  author_name: "",
  body: "",
  comments: [commentInitialState],
  created_at: "",
  edited_at: "",
  id: 1,
  num_likes: 1,
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
};
