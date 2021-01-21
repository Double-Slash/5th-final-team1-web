import styled from "styled-components";
import { BsHeartFill } from "react-icons/bs";

interface LikeButtonProps {
  is_liked: string;
}

export const LikeButton = styled(BsHeartFill)<LikeButtonProps>`
  font-size: 20px;
  color: ${(props) => (props.is_liked === "true" ? "#266ce6" : "#a3a3a3")};
  cursor: pointer;
`;
