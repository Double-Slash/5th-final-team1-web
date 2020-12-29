import React from "react";
import { MemoryRouter } from "react-router-dom";
import { Meta, Story } from "@storybook/react/types-6-0";
import QnaCard, { QnaCardProps, dummyData } from "./index";

export default {
  title: "molecules/QnaCard",
  component: QnaCard,
} as Meta;

const Template: Story<QnaCardProps> = (args) => (
  <>
    <MemoryRouter>
      <QnaCard {...args}>LOG IN</QnaCard>
    </MemoryRouter>
  </>
);

export const DefaultQnaCard = Template.bind({});
DefaultQnaCard.args = {
  cardData: dummyData,
};
