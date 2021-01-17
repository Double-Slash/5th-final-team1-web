import React from "react";
import { Provider } from "react-redux";
import { Meta } from "@storybook/react/types-6-0";
import { withKnobs } from "@storybook/addon-knobs";
import store from "@store/index";
import HashTagInput from "./index";

export default {
  title: "writeProject/HashTagInput",
  component: HashTagInput,
  decorators: [withKnobs],
} as Meta;

const HashTagInputTemplate = () => {
  return (
    <>
      <Provider store={store()}>
        <HashTagInput />
      </Provider>
    </>
  );
};
export const DefaultHashTagInput = HashTagInputTemplate.bind({});
