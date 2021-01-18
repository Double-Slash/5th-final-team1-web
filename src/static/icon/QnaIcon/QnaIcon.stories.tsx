import React from "react";
import { Meta } from "@storybook/react/types-6-0";
import QnaIcon from "./index";

export default {
  title: "static/QnaIcon",
  component: QnaIcon,
} as Meta;

const QnaIconTemplate = () => {
  return (
    <>
      <QnaIcon />
    </>
  );
};
export const DefaultQnaIcon = QnaIconTemplate.bind({});
