import styled from "styled-components";

export const Layout = styled.section`
  padding: 32px 0;
  h1 {
    font-size: 1.4rem;
    margin-bottom: 23px;
  }
`;

export const Activity = styled.article`
  display: flex;
  background: white;
  height: 160px;
  padding: 24px;
`;

export const RankWrapper = styled.div`
  position: relative;
  left: -16px;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 20%;
  span {
    position: absolute;
  }
`;

export const ScoreWrapper = styled.div`
  width: 80%;
`;

export const ScoreBar = styled.div`
  .total-gauge {
    position: relative;
    width: 100%;
    height: 24px;
    margin-bottom: 8px;
    background: #e9e9e9;
    .now-gauge {
      position: absolute;
      top: 0;
      left: 0;
      height: 24px;
      width: 24px;
      background: #266ce6;
    }
  }
  .tier-text {
    display: flex;
    justify-content: space-between;
    color: #266ce6;
    font-weight: bold;
  }
`;

export const HistoryCount = styled.div`
  display: flex;
  justify-content: center;
  div {
    text-align: center;
    margin-right: 40px;
  }
  h2 {
    color: #266ce6;
    margin-bottom: 8px;
    font-size: 1.2rem;
  }
  span {
    color: gray;
  }
`;
