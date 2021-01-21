import styled from "styled-components";
import { Link } from "react-router-dom";

export const HashTag = styled.div`
  display: inline-flex;
  align-items: flex-end;
  height: 24px;
  padding: 4px 16px;
  border: 1px solid #a3a3a4;
  border-radius: 1em;
  font-weight: bold;
  font-size: 0.75rem;
  color: #266ce6;
  cursor: pointer;
  &::before {
    content: "#";
    margin-right: 2px;
  }
`;

export const HashTagLink = styled(Link)`
  display: inline-flex;
  align-items: flex-end;
  height: 24px;
  padding: 4px 16px;
  border: 1px solid #a3a3a4;
  border-radius: 1em;
  font-weight: bold;
  font-size: 0.75rem;
  color: #266ce6;
  &::before {
    content: "#";
    margin-right: 2px;
  }
`;
