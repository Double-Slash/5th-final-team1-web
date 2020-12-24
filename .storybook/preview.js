import React from "react";
import StyleReset from "../src/utils/styles/reset";

export const decorators = [
  (Story) => (
    <>
      <StyleReset />
      <Story />
    </>
  ),
];

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
};
