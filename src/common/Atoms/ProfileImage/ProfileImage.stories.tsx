import React from "react";
import { MemoryRouter } from "react-router-dom";
import { Meta, Story } from "@storybook/react/types-6-0";
import ProfileImage, { ProfileImageProps } from "./index";

export default {
  title: "atoms/ProfileImage",
  component: ProfileImage,
} as Meta;

const Template: Story<ProfileImageProps> = (args) => (
  <>
    <MemoryRouter>
      <ProfileImage {...args} />
    </MemoryRouter>
  </>
);

export const DefaultProfileImage = Template.bind({});
DefaultProfileImage.args = {
  imageSrc: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTXGvgwboHDVP36TV1e8y57sy7PfnWwvtOIMA&usqp=CAU",
};
