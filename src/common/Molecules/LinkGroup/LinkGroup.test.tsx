import React from "react";
import { MemoryRouter } from "react-router-dom";
import { mount } from "enzyme";
import LinkGroup, { LinkGroupProps } from "./index";

const initialProps: LinkGroupProps = {
  linkNamingList: [""],
};

const setup = (props: Partial<LinkGroupProps> = {}) => {
  const wrapper = mount(
    <MemoryRouter>
      <LinkGroup {...initialProps} {...props} />
    </MemoryRouter>,
  );
  const nav = wrapper.find("nav");
  return { nav };
};

describe("<LinkGroup />", () => {
  it("linkNamingList의 길이만큼 Link를 출력시킨다", () => {
    const linkNamingList = ["QnA", "Tags", "Project", "Level"];
    const { nav } = setup({ linkNamingList });
    expect(nav.children()).toHaveLength(linkNamingList.length);
  });
});
