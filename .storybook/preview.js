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
  backgrounds: {
    default: "white",
    values: [
      { name: "white", value: "rgb(246,246,246)" },
      { name: "black", value: "#000000" },
    ],
  },
};
