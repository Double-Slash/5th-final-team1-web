import React from "react";
import { MemoryRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { Meta } from "@storybook/react/types-6-0";
import store from "@store/index";
import Post from "./index";

export default {
  title: "page/Post",
  component: Post,
} as Meta;

const PostTemplate = () => {
  return (
    <>
      <Provider store={store()}>
        <MemoryRouter>
          <Post />
        </MemoryRouter>
      </Provider>
    </>
  );
};
export const DefaultPost = PostTemplate.bind({});
