import React from "react";
import { mount } from "enzyme";
import { Link, MemoryRouter } from "react-router-dom";
import HashTag, { HashTagProps } from "./index";

const initialProps: HashTagProps = {
  text: "해시태그",
};

const setup = (props: Partial<HashTagProps> = {}) => {
  const wrapper = mount(
    <MemoryRouter>
      <HashTag {...initialProps} {...props} />
    </MemoryRouter>,
  );
  const hashTag = wrapper.find(HashTag);
  const link = hashTag.find(Link);
  return { hashTag, link };
};

describe("<HashTag />", () => {
  it("Link의 pathname은 text가 된다", () => {
    const { link } = setup({ text: "react" });
    expect(link.props().to).toBe("/react");
  });
});
