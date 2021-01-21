import React, { useCallback, useState } from "react";
import { Meta, Story } from "@storybook/react/types-6-0";
import LikeButton, { LikeButtonProps } from "./index";
import * as S from "./style";

export default {
  title: "atoms/LikeButton",
  component: LikeButton,
} as Meta;

const Template: Story<LikeButtonProps> = ({ is_liked }) => {
  const [clicked, setClicked] = useState(is_liked);
  const clickLikeButton = useCallback(() => {
    setClicked((prev) => !prev);
  }, []);

  return (
    <>
      <S.LikeButton onClick={clickLikeButton} is_liked={String(clicked)} />
    </>
  );
};

export const DefaultLikeButton = Template.bind({});
