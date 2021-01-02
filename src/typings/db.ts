export interface IPost {
  title: string; // 제목
  hashTagList: string[]; // 해시태그 리스트
  user: IUser; // 유저 정보
  date: string; // 작성일자
  content: string; // 본문
  commentList: IComment[]; // 댓글 리스트
}

export interface IComment {
  user: IUser; // 유저 정보
  content: string; // 댓글 본문
  childComments?: {
    user: IUser;
    content: string;
  }[];
}

export interface IUser {
  thumbnail: string; // 썸네일
  username: string; // 유저 이름
  rank: string; // 계급
  postLikes: number[]; // 게시글 좋아요 누른 리스트
  commentLikes: number[]; // 댓글 좋아요 누른 리스트
  commentDislikes: number[]; // 댓글 싫어요 누른 리스트
}
