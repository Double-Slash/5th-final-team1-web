/* eslint-disable @typescript-eslint/no-unused-vars */
import React from "react";
import { MemoryRouter, Link } from "react-router-dom";
import { mount } from "enzyme";
import Button, { ButtonProps } from "./index";

const initialProps: ButtonProps = {
  onClick: () => {},
  isLinked: false,
};

const setup = (props: Partial<ButtonProps> = {}) => {
  let wrapper;
  if (props.isLinked) {
    wrapper = mount(
      <MemoryRouter>
        <Button {...initialProps} {...props} />
      </MemoryRouter>,
    );
  } else {
    wrapper = mount(<Button {...initialProps} {...props} />);
  }
  const button = wrapper.find(Button);
  return { button };
};

describe("<Button {...initialProps} {...props} />", () => {
  it("isLinked가 true인 경우 Link 컴포넌트가 존재한다", () => {
    const { button } = setup({ isLinked: true, pathname: "write" });
    expect(button.contains(<Link to="/write" />)).toEqual(true);
  });

  it("isLinked가 false인 경우 Link 컴포넌트가 존재하지 않는다", () => {
    const { button } = setup({ isLinked: false });
    expect(button.contains(<Link to="/" />)).toEqual(false);
  });

  it("Link의 to는 pathname의 값이 된다", () => {
    const { button } = setup({ isLinked: true, pathname: "write" });
    expect(button.find(Link).props().to).toBe("/write");
  });
});
