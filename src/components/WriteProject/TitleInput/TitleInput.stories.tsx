import React from "react";
import { Provider } from "react-redux";
import { Meta } from "@storybook/react/types-6-0";
import { withKnobs } from "@storybook/addon-knobs";
import store from "@store/index";
import TitleInput from "./index";

export default {
  title: "writeProject/TitleInput",
  component: TitleInput,
  decorators: [withKnobs],
} as Meta;

const TitleInputTemplate = () => {
  return (
    <>
      <Provider store={store()}>
        <TitleInput />
      </Provider>
    </>
  );
};
export const DefaultTitleInput = TitleInputTemplate.bind({});
