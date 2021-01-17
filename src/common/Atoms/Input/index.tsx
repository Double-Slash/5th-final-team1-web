import React from "react";
import * as S from "./style";

type InputType = "text" | "email" | "password";

export interface InputProps {
  disabled?: boolean; // input 비활성화
  maxLength?: number; // value 최대 길이
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onKeyDown?: (event: React.KeyboardEvent<HTMLInputElement>) => void;
  placeholder?: string;
  type?: InputType;
  value: string;
}

const Input: React.FC<InputProps> = ({
  disabled = false,
  maxLength,
  onChange,
  onKeyDown,
  placeholder,
  type,
  value,
}) => {
  return (
    <>
      <S.Input
        disabled={disabled}
        maxLength={maxLength}
        onChange={onChange}
        onKeyDown={onKeyDown}
        placeholder={placeholder}
        type={type}
        value={value}
      />
    </>
  );
};

export default Input;
