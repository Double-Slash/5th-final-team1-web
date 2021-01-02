import styled from "styled-components";

/**
 * @param buttonColor 버튼의 색상
 * @param fontColor 버튼 글자의 색상
 * @param width 버튼 크기의 사이즈
 */

type ButtonSize = "large" | "medium" | "small" | number;

interface ButtonProps {
  buttonColor?: string;
  fontColor?: string;
  width?: string;
  size?: ButtonSize;
}

export const Button = styled.button<ButtonProps>`
  width: ${(props) => (props.width ? `${props.width}px` : "auto")};
  padding: 16px;
  background: ${(props) => props.buttonColor || "transparent"};
  color: ${(props) => props.fontColor || "white"};
  cursor: pointer;
`;
