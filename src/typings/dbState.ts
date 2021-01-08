import { IQuestion, IAnswer, IComment } from "./db";

export const commentInitialState: IComment = {
  id: 1,
  author: "",
  num_likes: 1,
  body: "",
  created_at: "",
  edited_at: "",
  question: 1,
  answer: 1,
};

export const answerInitialState: IAnswer = {
  id: 1,
  body: "",
  created_at: "",
  edited_at: "",
  author: "",
  comments: [commentInitialState],
  num_likes: 1,
};

export const questionInitialState: IQuestion = {
  id: 1,
  hashtags: [],
  answers: [answerInitialState],
  num_likes: "",
  author: "",
  title: "",
  body: "",
  bounty: 1,
  created_at: "",
  edited_at: "",
};

// export const userDummy = {
//   thumbnail: "https://media.vlpt.us/post-images/velopert/c956e9e0-0dcb-11ea-84c7-e7e34cbeb40d/-2019-11-23-5.32.03.png",
//   username: "차민철",
//   rank: "플래티넘",
//   postLikes: [12, 6442, 721, 343],
//   commentLikes: [234, 12, 6, 86],
//   commentDislikes: [42, 12, 85, 4],
// };

// export const commentDummy = {
//   user: userDummy,
//   content: "sdfsdfsdfsdfsfd",
//   childComments: [
//     {
//       user: userDummy,
//       content: "sdfsdfsdfsdfsfd",
//     },
//   ],
// };

// export const postDummy = {
//   title: "게시글 제목 입니다",
//   hashTagList: ["더블슬래시", "1팀", "프론트"],
//   date: "2021.01.01",
//   content:
//     "# 안녕하세요\n**ㄹㄴㅇㄹㄴㅇㄹㅇㄴㄹ**\n```javascript\nimport React from 'react';\nconst Test = () => {\nreturn (\n<div>하하하하하하</div>\n)\n};\n```\n### 여기는 작은 제목입니다.\n_이탤릭으로 써집니다_\n",
//   user: userDummy,
//   commentList: [commentDummy, commentDummy, commentDummy, commentDummy],
// };
