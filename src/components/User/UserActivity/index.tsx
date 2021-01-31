import React from "react";
import * as S from "./style";

export interface UsrActivityProps {
  answer_count?: number;
  comment_count?: number;
  jobposting_count?: number;
  question_count?: number;
}

const UsrActivity = ({ answer_count, comment_count, jobposting_count, question_count }: UsrActivityProps) => {
  return (
    <>
      <S.Layout>
        <h1>My Level</h1>
        <S.Activity>
          <S.RankWrapper>
            <svg height="140" width="140">
              <circle cx="70" cy="70" r="60" stroke="black" strokeWidth="3" fill="white" />
            </svg>
            <span className="tier">Bronze</span>
          </S.RankWrapper>
          <S.ScoreWrapper className="score-wrapper">
            <S.ScoreBar>
              <div className="total-gauge">
                <div className="now-gauge" />
              </div>
              <div className="tier-text">
                <span className="now-tier">Bronze</span>
                <span className="next-tier">Gold</span>
              </div>
            </S.ScoreBar>
            <S.HistoryCount>
              <div>
                <h2>{question_count}</h2>
                <span>전체질문</span>
              </div>
              <div>
                <h2>{answer_count}</h2>
                <span>전체답변</span>
              </div>
              <div>
                <h2>{comment_count}</h2>
                <span>전체댓글</span>
              </div>
              <div>
                <h2>{jobposting_count}</h2>
                <span>전체공고</span>
              </div>
            </S.HistoryCount>
          </S.ScoreWrapper>
        </S.Activity>
      </S.Layout>
    </>
  );
};

export default UsrActivity;
