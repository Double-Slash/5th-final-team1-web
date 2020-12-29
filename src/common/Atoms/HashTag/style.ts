import styled from "styled-components";
import { Link } from "react-router-dom";

export const HashTag = styled(Link)`
  display: inline-flex;
  height: 32px;
  padding: 4px 16px;
  border: 1px solid #a3a3a4;
  border-radius: 1em;
  font-weight: bold;
  font-size: 1rem;
  color: #266ce6;
  &::before {
    content: "#";
    margin-right: 2px;
  }
`;
