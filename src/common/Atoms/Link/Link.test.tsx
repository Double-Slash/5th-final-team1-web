import React from "react";
import { MemoryRouter, Link as ReactLink } from "react-router-dom";
import { JSDOM } from "jsdom";
import { mount } from "enzyme";
import Link, { LinkProps } from "./index";

describe("<Link />", () => {
  const initialProps: LinkProps = {
    name: "name",
  };

  const setup = (props: Partial<LinkProps> = {}) => {
    const utils = mount(
      <MemoryRouter>
        <Link {...initialProps} {...props} />
      </MemoryRouter>,
    );
    const wrapper = utils.find(Link);
    const link = utils.find(ReactLink);
    return { link, wrapper };
  };

  it("props는 name을 받는다", () => {
    const { wrapper } = setup();
    expect(wrapper.props().name).toBe("name");
  });

  it("전달받은 name을 link 내부에 출력시킨다", () => {
    const { link } = setup({ name: "Profile" });
    expect(link.text()).toBe("Profile");
  });

  it("Link의 to는 name의 lowerCase가 된다", () => {
    const { link } = setup({ name: "Project" });
    expect(link.props().to).toBe("project");
  });

  it("Link를 클릭할 경우, 해당 페이지로 이동한다", () => {
    const dom = new JSDOM();
    const { link } = setup({ name: "QnA" });
    dom.reconfigure({ url: "https://www.blahblah.com/qna" });
    link.simulate("click");
    expect(dom.window.location.pathname).toBe("/qna");
  });
});
