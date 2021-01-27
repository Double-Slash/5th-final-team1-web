import styled from "styled-components";

export const Layout = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 40px;
  p {
    margin-right: 16px;
    color: gray;
  }
`;

export const Bar = styled.div`
  position: relative;
  height: 16px;
  width: 50%;
  border-radius: 8px;
  background: #e9e9e9;
`;

export const Gauge = styled.div<{ ratio: number }>`
  position: absolute;
  height: 100%;
  width: ${(props) => `${props.ratio || 0}%`};
  border-radius: 8px;
  background: #276ce6;
`;

export const Button = styled.div<{ ratio: number }>`
  position: absolute;
  top: -4px;
  left: ${(props) => (props.ratio ? `calc(${props.ratio}% - 24px)` : "0%")};
  width: 24px;
  height: 24px;
  border-radius: 50%;
  border: 1px solid #276ce6;
  background: white;
  user-select: none;
  cursor: pointer;
`;

export const Bounty = styled.span`
  margin-left: 8px;
  font-weight: bold;
  color: #276ce6;
`;
